export default function PaymentCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] p-6">
      <div className="w-full max-w-md bg-[#1a1a2e] rounded-3xl p-10 text-center shadow-2xl border border-[#c9a84c]/20">
        <div className="text-6xl mb-4">↩️</div>
        <h1 className="text-2xl font-bold text-white mb-3">Payment Cancelled</h1>
        <p className="text-gray-400">
          You cancelled the payment. No charge was made. Please contact us if
          you need a new payment link.
        </p>
      </div>
    </div>
  );
}
