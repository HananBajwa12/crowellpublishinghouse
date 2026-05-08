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

    const paypalBaseUrl = process.env.PAYPAL_BASE_URL!;
    const paypalClientId = process.env.PAYPAL_CLIENT_ID!;
    const paypalClientSecret = process.env.PAYPAL_CLIENT_SECRET!;

    const auth = Buffer.from(
      `${paypalClientId}:${paypalClientSecret}`
    ).toString("base64");

    const tokenResponse = await fetch(`${paypalBaseUrl}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
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
        purchase_units: [
          {
            amount: {
              currency_code: currency,
              value: Number(amount).toFixed(2),
            },
            description: description || "Payment",
          },
        ],
      }),
    });

    const orderData = await orderResponse.json();

    if (!orderResponse.ok) {
      return NextResponse.json(
        { error: "PayPal order error", details: orderData },
        { status: 500 }
      );
    }

    const approvalLink = orderData.links?.find(
      (link: any) => link.rel === "approve"
    )?.href;

    if (!approvalLink) {
      return NextResponse.json(
        { error: "PayPal approval link not found" },
        { status: 500 }
      );
    }

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
      payment_link: approvalLink,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}