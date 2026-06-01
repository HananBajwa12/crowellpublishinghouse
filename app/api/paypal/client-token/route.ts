import { NextResponse } from "next/server";

export async function GET() {
  try {
    const paypalMode = process.env.PAYPAL_MODE || "sandbox";
    const paypalBaseUrl =
      paypalMode === "live"
        ? process.env.PAYPAL_LIVE_BASE_URL!
        : process.env.PAYPAL_SANDBOX_BASE_URL!;
    const paypalClientId = process.env.PAYPAL_CLIENT_ID!;
    const paypalClientSecret = process.env.PAYPAL_CLIENT_SECRET!;

    const auth = Buffer.from(`${paypalClientId}:${paypalClientSecret}`).toString("base64");

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
      return NextResponse.json({ error: "PayPal token error", details: tokenData }, { status: 500 });
    }

    const clientTokenResponse = await fetch(`${paypalBaseUrl}/v1/identity/generate-token`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        "Content-Type": "application/json",
        "Accept-Language": "en_US",
      },
    });

    const clientTokenData = await clientTokenResponse.json();
    if (!clientTokenResponse.ok) {
      return NextResponse.json({ error: "Client token error", details: clientTokenData }, { status: 500 });
    }

    return NextResponse.json({ client_token: clientTokenData.client_token });
  } catch (error: any) {
    return NextResponse.json({ error: "Server error", details: error.message }, { status: 500 });
  }
}
