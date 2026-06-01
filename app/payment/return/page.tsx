import { supabaseAdmin } from "@/lib/supabaseAdmin";

async function captureOrder(orderID: string) {
  const paypalMode = process.env.PAYPAL_MODE || "sandbox";
  const paypalBaseUrl =
    paypalMode === "live"
      ? process.env.PAYPAL_LIVE_BASE_URL!
      : process.env.PAYPAL_SANDBOX_BASE_URL!;
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID!}:${process.env.PAYPAL_CLIENT_SECRET!}`
  ).toString("base64");

  const tokenRes = await fetch(`${paypalBaseUrl}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  const { access_token } = await tokenRes.json();

  const captureRes = await fetch(
    `${paypalBaseUrl}/v2/checkout/orders/${orderID}/capture`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return { ok: captureRes.ok, data: await captureRes.json() };
}

export default async function PaymentReturn({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token: orderID } = await searchParams;

  if (!orderID) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] p-6">
        <div className="text-center">
          <div className="text-5xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-white mb-2">Invalid Payment Link</h1>
          <p className="text-gray-400">No order ID found. Please contact support.</p>
        </div>
      </div>
    );
  }

  const { ok, data } = await captureOrder(orderID);

  if (ok && data.status === "COMPLETED") {
    const captureId = data.purchase_units?.[0]?.payments?.captures?.[0]?.id;
    const amount = data.purchase_units?.[0]?.payments?.captures?.[0]?.amount;

    await supabaseAdmin
      .from("payment_links")
      .update({ status: "paid", capture_id: captureId })
      .eq("paypal_order_id", orderID);

    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] p-6">
        <div className="w-full max-w-md bg-[#1a1a2e] rounded-3xl p-10 text-center shadow-2xl border border-[#c9a84c]/20">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-white mb-3">Payment Successful!</h1>
          {amount && (
            <p className="text-[#c9a84c] text-xl font-semibold mb-3">
              {amount.currency_code} {Number(amount.value).toFixed(2)}
            </p>
          )}
          <p className="text-gray-400 mb-6">
            Thank you for your payment. Your order has been confirmed.
          </p>
          <p className="text-xs text-gray-600 font-mono">Order: {orderID}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] p-6">
      <div className="w-full max-w-md bg-[#1a1a2e] rounded-3xl p-10 text-center shadow-2xl border border-red-500/20">
        <div className="text-6xl mb-4">❌</div>
        <h1 className="text-2xl font-bold text-white mb-2">Payment Failed</h1>
        <p className="text-gray-400 mb-4">
          We could not process your payment. Please try again or contact support.
        </p>
        <p className="text-xs text-gray-600">
          Status: {data?.status || "Unknown"}
        </p>
      </div>
    </div>
  );
}
