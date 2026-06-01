import { supabaseAdmin } from "@/lib/supabaseAdmin";

export default async function PayPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;

  const { data: order, error } = await supabaseAdmin
    .from("payment_links")
    .select("client_name, amount, currency, description, status, payment_link")
    .eq("paypal_order_id", orderId)
    .single();

  if (error || !order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] p-6">
        <div className="text-center">
          <div className="text-5xl mb-4">🔗</div>
          <h1 className="text-2xl font-bold text-white mb-2">Payment Link Not Found</h1>
          <p className="text-gray-400">This payment link is invalid or has expired.</p>
        </div>
      </div>
    );
  }

  if (order.status === "paid") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] p-6">
        <div className="w-full max-w-md bg-[#1a1a2e] rounded-3xl p-10 text-center shadow-2xl border border-[#c9a84c]/20">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-white mb-2">Already Paid</h1>
          <p className="text-gray-400">This payment has already been processed. Thank you!</p>
        </div>
      </div>
    );
  }

  const paypalUrl = order.payment_link || `https://www.paypal.com/checkoutnow?token=${orderId}`;

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-6">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-2">
            Crowell Publishing House
          </p>
          <h1 className="text-3xl font-bold text-white">Secure Payment</h1>
        </div>

        {/* Order Card */}
        <div className="bg-[#1a1a2e] rounded-3xl p-8 shadow-2xl border border-[#c9a84c]/20 space-y-6">

          {/* Service Description */}
          <div className="border-b border-white/10 pb-5">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-2">
              Service
            </p>
            <p className="text-white text-lg font-medium leading-snug">
              {order.description || "Publishing Service"}
            </p>
          </div>

          {/* Client + Amount */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Client</span>
              <span className="text-white font-medium text-sm">{order.client_name}</span>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-gray-400 text-sm">Total Due</span>
              <span className="text-2xl font-bold text-[#c9a84c]">
                {order.currency} {Number(order.amount).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Pay Button */}
          <a
            href={paypalUrl}
            className="block w-full py-4 rounded-2xl font-semibold text-lg text-center bg-gradient-to-r from-[#c9a84c] to-[#b8972a] text-[#0a0a0f] hover:opacity-90 transition-all shadow-lg"
          >
            Pay {order.currency} {Number(order.amount).toFixed(2)} Now
          </a>

          {/* Security note */}
          <div className="flex items-center justify-center gap-2 text-gray-600 text-xs">
            <span>🔒</span>
            <span>Secured by PayPal · Safe & encrypted</span>
          </div>
        </div>

      </div>
    </div>
  );
}
