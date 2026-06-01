import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      client_name,
      client_email,
      amount,
      currency,
      description,
    } = body;

    if (!client_name || !client_email || !amount || !currency) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const paypalMode = process.env.PAYPAL_MODE || "sandbox";
    const paypalBaseUrl = paypalMode === "live"
      ? (process.env.PAYPAL_LIVE_BASE_URL || "https://api-m.paypal.com")
      : (process.env.PAYPAL_SANDBOX_BASE_URL || "https://api-m.sandbox.paypal.com");
    const paypalClientId = process.env.PAYPAL_CLIENT_ID!;
    const paypalClientSecret = process.env.PAYPAL_CLIENT_SECRET!;

    if (!paypalClientId || !paypalClientSecret) {
      return NextResponse.json(
        { error: "Missing PayPal credentials in environment variables" },
        { status: 500 }
      );
    }

    // Request OAuth token
    const tokenResponse = await fetch(`${paypalBaseUrl}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${paypalClientId}:${paypalClientSecret}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error("PayPal Token Error Details:", tokenData);
      console.error("Status:", tokenResponse.status, tokenResponse.statusText);
      return NextResponse.json(
        { error: "PayPal token error", details: tokenData },
        { status: 500 }
      );
    }

    const accessToken = tokenData.access_token;

    const orderResponse = await fetch(`${paypalBaseUrl}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        payment_source: {
          paypal: {
            experience_context: {
              landing_page: "GUEST_CHECKOUT",
              user_action: "PAY_NOW",
              shipping_preference: "NO_SHIPPING",
              payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED",
            },
          },
        },
        purchase_units: [
          {
            reference_id: `ORDER_${Date.now()}`,
            description: (description || "Payment").substring(0, 127),
            custom_id: (description || "Payment").substring(0, 127),
            amount: {
              currency_code: currency,
              value: Number(amount).toFixed(2),
              breakdown: {
                item_total: {
                  currency_code: currency,
                  value: Number(amount).toFixed(2),
                },
              },
            },
            items: [
              {
                name: (description || "Publishing Service").substring(0, 127),
                quantity: "1",
                unit_amount: {
                  currency_code: currency,
                  value: Number(amount).toFixed(2),
                },
              },
            ],
          },
        ],
      }),
    });

    const orderData = await orderResponse.json();

    if (!orderResponse.ok) {
      console.error(`PayPal Order Error [Status ${orderResponse.status}]:`, JSON.stringify(orderData, null, 2));
      return NextResponse.json(
        { error: `PayPal order error (${orderResponse.status})`, details: orderData },
        { status: 500 }
      );
    }

    const approvalLink = orderData.links?.find(
      (link: any) => link.rel === "approve" || link.rel === "payer-action"
    )?.href;

    if (!approvalLink) {
      return NextResponse.json(
        { error: "PayPal approval link not found", details: orderData },
        { status: 500 }
      );
    }

    const origin = req.headers.get("origin") || `https://${req.headers.get("host")}`;
    const paymentLink = `${origin}/pay/${orderData.id}`;

    const { error: dbError } = await supabaseAdmin
      .from("payment_links")
      .insert({
        client_name,
        client_email,
        amount,
        currency,
        description,
        paypal_order_id: orderData.id,
        payment_link: approvalLink,
        status: "created",
      });

    if (dbError) {
      return NextResponse.json(
        { error: "Supabase insert error", details: dbError },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      paypal_order_id: orderData.id,
      payment_link: paymentLink,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}