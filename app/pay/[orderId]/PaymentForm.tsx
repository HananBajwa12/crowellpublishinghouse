"use client";

import { useState, useEffect, useRef } from "react";

interface Props {
  orderId: string;
  amount: string | number;
  currency: string;
  description: string;
  clientName: string;
}

const FIELD_STYLE = {
  input: {
    "font-size": "15px",
    color: "#f5f0e8",
    "font-family": "ui-sans-serif, system-ui, sans-serif",
  },
  ".valid": { color: "#10b981" },
  ".invalid": { color: "#ef4444" },
  "::placeholder": { color: "#4b5563" },
};

export default function PaymentForm({
  orderId,
  amount,
  currency,
  description,
  clientName,
}: Props) {
  const [cardholderName, setCardholderName] = useState("");
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [eligible, setEligible] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const cardFieldsRef = useRef<any>(null);
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  // Load PayPal SDK script once
  useEffect(() => {
    if (!clientId) {
      setEligible(false);
      return;
    }
    if (document.getElementById("paypal-sdk")) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.id = "paypal-sdk";
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&components=card-fields&intent=capture&currency=${currency}`;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => setEligible(false);
    document.head.appendChild(script);
  }, [clientId, currency]);

  // Once script is ready, mount card fields
  useEffect(() => {
    if (!scriptLoaded) return;

    const paypal = (window as any).paypal;
    if (!paypal?.CardFields) {
      setEligible(false);
      return;
    }

    // Clear any stale iframes (React strict-mode double-fire)
    ["card-number", "expiry-date", "cvv"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = "";
    });

    const cardFields = paypal.CardFields({
      createOrder: async () => orderId,
      onApprove: async (data: any) => {
        try {
          const res = await fetch("/api/paypal/capture-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderID: data.orderID || orderId }),
          });
          const result = await res.json();
          if (!res.ok) throw new Error(result.error || "Capture failed");
          setSuccess(true);
        } catch (err: any) {
          setErrorMsg(err.message || "Payment failed. Please try again.");
          setLoading(false);
        }
      },
      onError: (err: any) => {
        setErrorMsg(
          typeof err === "string"
            ? err
            : err?.message || "Payment failed. Please try again."
        );
        setLoading(false);
      },
      style: FIELD_STYLE,
    });

    if (!cardFields.isEligible()) {
      setEligible(false);
      return;
    }

    cardFields.NumberField({ placeholder: "1234 5678 9012 3456" }).render("#card-number");
    cardFields.ExpiryField({ placeholder: "MM / YY" }).render("#expiry-date");
    cardFields.CVVField({ placeholder: "CVV" }).render("#cvv");

    cardFieldsRef.current = cardFields;
    setEligible(true);

    return () => {
      if (typeof cardFields.teardown === "function") cardFields.teardown();
      cardFieldsRef.current = null;
    };
  }, [scriptLoaded, orderId]);

  const handlePay = async () => {
    if (!cardFieldsRef.current) return;
    setLoading(true);
    setErrorMsg("");
    try {
      await cardFieldsRef.current.submit({ cardholderName });
    } catch (err: any) {
      setLoading(false);
      setErrorMsg(err.message || "Payment failed. Please try again.");
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] p-6">
        <div className="w-full max-w-md bg-[#1a1a2e] rounded-3xl p-10 text-center shadow-2xl border border-[#c9a84c]/20">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-white mb-3">Payment Successful!</h1>
          <p className="text-gray-400 mb-6">
            Thank you, {clientName}. Your payment of{" "}
            <span className="text-[#c9a84c] font-semibold">
              {currency} {Number(amount).toFixed(2)}
            </span>{" "}
            has been processed.
          </p>
          <p className="text-sm text-gray-500">You may close this window.</p>
        </div>
      </div>
    );
  }

  const fieldClass =
    "h-12 bg-[#0a0a0f] border border-[#c9a84c]/30 rounded-xl px-4 flex items-center";

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-2">
            Crowell Publishing House
          </p>
          <h1 className="text-3xl font-bold text-white">Secure Payment</h1>
        </div>

        <div className="bg-[#1a1a2e] rounded-2xl p-5 mb-6 border border-[#c9a84c]/20">
          {description && (
            <p className="text-gray-400 text-sm mb-3">{description}</p>
          )}
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">Total Due</span>
            <span className="text-2xl font-bold text-[#c9a84c]">
              {currency} {Number(amount).toFixed(2)}
            </span>
          </div>
        </div>

        <div className="bg-[#1a1a2e] rounded-3xl p-8 shadow-2xl border border-[#c9a84c]/20">
          {eligible === false ? (
            <div className="text-center py-6">
              <p className="text-red-400 mb-2">
                Card payments are not available at this time.
              </p>
              <p className="text-gray-500 text-sm">
                Please contact us for assistance.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {eligible === null && (
                <div className="flex items-center justify-center py-4 gap-3">
                  <div className="w-5 h-5 border-2 border-[#c9a84c] border-t-transparent rounded-full animate-spin" />
                  <p className="text-gray-500 text-sm">Loading payment form...</p>
                </div>
              )}

              <div className={eligible === null ? "opacity-0 pointer-events-none" : ""}>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                    placeholder="Name as on card"
                    className="w-full h-12 bg-[#0a0a0f] border border-[#c9a84c]/30 rounded-xl px-4 text-[#f5f0e8] placeholder-gray-600 outline-none focus:border-[#c9a84c]/60 transition-all text-[15px]"
                  />
                </div>

                <div className="mt-5">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Card Number
                  </label>
                  <div id="card-number" className={fieldClass} />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Expiry Date
                    </label>
                    <div id="expiry-date" className={fieldClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      CVV
                    </label>
                    <div id="cvv" className={fieldClass} />
                  </div>
                </div>

                {errorMsg && (
                  <p className="mt-4 text-red-400 text-sm bg-red-400/10 rounded-xl px-4 py-3">
                    {errorMsg}
                  </p>
                )}

                <button
                  onClick={handlePay}
                  disabled={loading || eligible !== true}
                  className="mt-5 w-full py-4 rounded-2xl font-semibold text-lg bg-gradient-to-r from-[#c9a84c] to-[#b8972a] text-[#0a0a0f] hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
                >
                  {loading
                    ? "Processing..."
                    : `Pay ${currency} ${Number(amount).toFixed(2)} Now`}
                </button>
              </div>
            </div>
          )}

          <div className="flex items-center justify-center gap-2 mt-5 text-gray-600 text-xs">
            <span>🔒</span>
            <span>Secured by PayPal · Card info is never stored on our servers</span>
          </div>
        </div>
      </div>
    </div>
  );
}
