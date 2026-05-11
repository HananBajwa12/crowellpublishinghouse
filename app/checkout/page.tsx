import PayPalButton from "@/components/PayPalButton";

export const metadata = {
  title: "Checkout | Crowell Publishing House",
  description: "Securely complete your payment via PayPal.",
};

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-8 text-white text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur mb-4">
              <span className="text-3xl">💳</span>
            </div>
            <h1 className="text-2xl font-bold">Secure Checkout</h1>
            <p className="text-white/80 text-sm mt-1">
              Powered by PayPal — your payment is encrypted and safe
            </p>
          </div>

          {/* Body */}
          <div className="px-8 py-8 space-y-6">
            {/* Order Summary */}
            <div className="bg-slate-50 rounded-2xl p-5 space-y-3">
              <p className="text-xs uppercase font-semibold text-slate-400 tracking-widest">
                Order Summary
              </p>
              <div className="flex justify-between text-slate-700">
                <span>Publishing Service</span>
                <span className="font-semibold">$99.00</span>
              </div>
              <div className="flex justify-between text-slate-500 text-sm">
                <span>Processing Fee</span>
                <span>$0.00</span>
              </div>
              <div className="border-t border-slate-200 pt-3 flex justify-between font-bold text-slate-800 text-lg">
                <span>Total</span>
                <span className="text-blue-600">$99.00</span>
              </div>
            </div>

            {/* PayPal Button */}
            <PayPalButton
              amount="99.00"
              currency="USD"
              description="Publishing Service"
              clientName="Guest Client"
              clientEmail="client@example.com"
              onSuccess={(details) => {
                console.log("Payment completed:", details);
              }}
              onError={(err) => {
                console.error("Payment error:", err);
              }}
            />

            {/* Security note */}
            <p className="text-xs text-center text-slate-400">
              🔒 256-bit SSL encrypted. We never store your card details.
            </p>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-slate-500 text-xs mt-6">
          © {new Date().getFullYear()} Crowell Publishing House
        </p>
      </div>
    </div>
  );
}
