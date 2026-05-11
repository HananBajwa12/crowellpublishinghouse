import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { orderID } = body;

    if (!orderID) {
      return NextResponse.json(
        { error: "Missing orderID" },
        { status: 400 }
      );
    }

    const paypalBaseUrl = process.env.PAYPAL_BASE_URL!;
    const paypalClientId = process.env.PAYPAL_CLIENT_ID!;
    const paypalClientSecret = process.env.PAYPAL_CLIENT_SECRET!;

    if (!paypalBaseUrl || !paypalClientId || !paypalClientSecret) {
      return NextResponse.json(
        { error: "Missing PayPal environment variables" },
        { status: 500 }
      );
    }

    // Get access token using Basic Auth (secret never leaves server)
    const auth = Buffer.from(
      `${paypalClientId}:${paypalClientSecret}`
    ).toString("base64");

    const tokenResponse = await fetch(`${paypalBaseUrl}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
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

    // Capture the order server-side
    const captureResponse = await fetch(
      `${paypalBaseUrl}/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    const captureData = await captureResponse.json();

    if (!captureResponse.ok) {
      return NextResponse.json(
        { error: "PayPal capture error", details: captureData },
        { status: 500 }
      );
    }

    const captureStatus = captureData.status;
    const captureId =
      captureData.purchase_units?.[0]?.payments?.captures?.[0]?.id;

    // Update Supabase record with captured status
    if (captureStatus === "COMPLETED") {
      await supabaseAdmin
        .from("payment_links")
        .update({ status: "paid", capture_id: captureId })
        .eq("paypal_order_id", orderID);
    }

    return NextResponse.json({
      success: true,
      status: captureStatus,
      captureId,
      details: captureData,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
