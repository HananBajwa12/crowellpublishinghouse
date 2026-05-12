"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function PaymentTerminal() {
  const [form, setForm] = useState({
    client_name: "",
    client_email: "",
    amount: "",
    currency: "USD",
    description: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<{
    paypal_order_id: string;
    payment_link: string;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResult(null);
    setErrorMsg("");
    setCopied(false);

    try {
      const res = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to create payment link");
      }

      setResult(data);
      setStatus("success");
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong.");
      setStatus("error");
    }
  };

  const handleReset = () => {
    setForm({
      client_name: "",
      client_email: "",
      amount: "",
      currency: "USD",
      description: "",
    });
    setStatus("idle");
    setResult(null);
    setErrorMsg("");
    setCopied(false);
  };

  const totalAmount =
    form.amount ? `${form.currency} ${Number(form.amount).toFixed(2)}` : "—";

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 rounded-[32px] overflow-hidden shadow-2xl bg-white">
        {/* ── Left Branding Side ── */}
        <div className="relative bg-gradient-to-br from-[#2563EB] via-[#4F46E5] to-[#7C3AED] p-10 text-white flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Admin Payment Terminal
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Generate Secure
              <span className="block text-cyan-300">Payment Links</span>
            </h1>

            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              Fill in the client's details, generate a PayPal payment link, and
              send it directly to their inbox — all in one step.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="mt-16 space-y-5">
            {[
              { icon: "⚡", title: "Instant Link Generation", desc: "PayPal order created in seconds." },
              { icon: "📋", title: "One-Click Copy", desc: "Copy & share the payment link instantly." },
              { icon: "🔒", title: "Secure & Server-Side", desc: "Credentials never exposed to browser." },
            ].map((f) => (
              <div
                key={f.title}
                className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-xl shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{f.title}</h3>
                  <p className="text-white/70 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
        </div>

        {/* ── Right Form Side ── */}
        <div className="p-8 md:p-12 bg-[#F8FAFC]">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                Payment Terminal
              </h2>
              <p className="text-slate-500 mt-2">
                Admin only — generate & send payment links.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-2xl shadow-lg">
              💳
            </div>
          </div>

          {/* ── Success State ── */}
          {status === "success" && result ? (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h3 className="font-bold text-green-700 text-lg">
                      Payment Link Created!
                    </h3>
                    <p className="text-green-600 text-sm">
                      Order ID: <code className="font-mono">{result.paypal_order_id}</code>
                    </p>
                  </div>
                </div>

                {/* Link display */}
                <div className="bg-white border border-green-100 rounded-2xl p-4 mb-4">
                  <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider mb-2">
                    Payment Link — Send this to your client
                  </p>
                  <p className="text-sm text-blue-600 break-all font-mono">
                    {result.payment_link}
                  </p>
                </div>

                {/* Copy button */}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(result.payment_link);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 3000);
                  }}
                  className={`w-full font-semibold py-3 rounded-2xl transition-all ${
                    copied
                      ? "bg-green-500 text-white border border-green-500"
                      : "border border-green-300 text-green-700 hover:bg-green-100"
                  }`}
                >
                  {copied ? "✅ Copied!" : "📋 Copy Link"}
                </button>
              </div>

              {/* New payment button */}
              <button
                onClick={handleReset}
                className="w-full border border-slate-300 text-slate-600 py-3 rounded-2xl font-semibold hover:bg-slate-100 transition-all"
              >
                + New Payment Link
              </button>
            </div>
          ) : (
            /* ── Form State ── */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Client Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="client_name"
                    type="text"
                    required
                    value={form.client_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Client Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="client_email"
                    type="email"
                    required
                    value={form.client_email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Amount <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
                      $
                    </span>
                    <input
                      name="amount"
                      type="number"
                      required
                      min="1"
                      step="0.01"
                      value={form.amount}
                      onChange={handleChange}
                      placeholder="0.00"
                      className="w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Currency
                  </label>
                  <select
                    name="currency"
                    value={form.currency}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option value="USD">USD – US Dollar</option>
                    <option value="EUR">EUR – Euro</option>
                    <option value="GBP">GBP – British Pound</option>
                    <option value="CAD">CAD – Canadian Dollar</option>
                    <option value="AUD">AUD – Australian Dollar</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Description / Service
                </label>
                <textarea
                  name="description"
                  rows={4}
                  value={form.description}
                  onChange={handleChange}
                  placeholder="e.g. Book editing and proofreading service..."
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                />
              </div>

              {/* Summary Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-500 text-sm">Client</span>
                  <span className="font-semibold text-slate-800 text-sm">
                    {form.client_name || "—"}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-500 text-sm">Email</span>
                  <span className="font-semibold text-slate-800 text-sm">
                    {form.client_email || "—"}
                  </span>
                </div>
                <div className="border-t pt-3 flex items-center justify-between">
                  <span className="text-lg font-semibold text-slate-800">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    {totalAmount}
                  </span>
                </div>
              </div>

              {/* Error */}
              {status === "error" && (
                <p className="text-red-500 text-sm text-center bg-red-50 py-3 rounded-2xl border border-red-100">
                  ❌ {errorMsg}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:scale-[1.01] hover:shadow-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading"
                  ? "⏳ Creating Link..."
                  : "⚡ Create Payment Link"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
