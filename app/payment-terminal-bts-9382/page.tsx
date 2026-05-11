export default function PaymentTerminal() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 rounded-[32px] overflow-hidden shadow-2xl bg-white">
        {/* Left Side */}
        <div className="relative bg-gradient-to-br from-[#2563EB] via-[#4F46E5] to-[#7C3AED] p-10 text-white flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Secure Payment Portal
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Create Beautiful
              <span className="block text-cyan-300">Payment Links</span>
            </h1>

            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              Send professional PayPal payment links to your clients in seconds with a modern and secure payment experience.
            </p>
          </div>

          <div className="mt-16 space-y-5">
            <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-xl">
                ⚡
              </div>
              <div>
                <h3 className="font-semibold text-lg">Instant Link Generation</h3>
                <p className="text-white/70 text-sm">Create and share links instantly.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-xl">
                🔒
              </div>
              <div>
                <h3 className="font-semibold text-lg">Secure Transactions</h3>
                <p className="text-white/70 text-sm">Powered with trusted PayPal security.</p>
              </div>
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* Right Side Form */}
        <div className="p-8 md:p-12 bg-[#F8FAFC]">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                Payment Terminal
              </h2>
              <p className="text-slate-500 mt-2">
                Fill in the details to generate your payment link.
              </p>
            </div>

            <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-2xl shadow-lg">
              💳
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Client Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Client Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Currency
                </label>
                <select className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>INR</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Description
              </label>
              <textarea
                rows={5}
                placeholder="Write payment details here..."
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              ></textarea>
            </div>

            {/* Summary Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500">Service Fee</span>
                <span className="font-semibold text-slate-800">$2.50</span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500">Estimated Delivery</span>
                <span className="font-semibold text-green-600">Instant</span>
              </div>

              <div className="border-t pt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-slate-800">
                  Total Amount
                </span>
                <span className="text-2xl font-bold text-blue-600">$0.00</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:scale-[1.01] hover:shadow-xl transition-all duration-300"
            >
              Create Payment Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
