import { supabaseAdmin } from "@/lib/supabaseAdmin";
import PaymentForm from "./PaymentForm";

export default async function PayPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;

  const { data: order, error } = await supabaseAdmin
    .from("payment_links")
    .select("client_name, amount, currency, description, status")
    .eq("paypal_order_id", orderId)
    .single();

  if (error || !order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] p-6">
        <div className="text-center">
          <div className="text-5xl mb-4">🔗</div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Payment Link Not Found
          </h1>
          <p className="text-gray-400">
            This payment link is invalid or has expired.
          </p>
        </div>
      </div>
    );
  }

  if (order.status === "paid") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] p-6">
        <div className="text-center">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Already Paid
          </h1>
          <p className="text-gray-400">
            This payment has already been processed. Thank you!
          </p>
        </div>
      </div>
    );
  }

  return (
    <PaymentForm
      orderId={orderId}
      amount={order.amount}
      currency={order.currency}
      description={order.description}
      clientName={order.client_name}
    />
  );
}
