"use client";

import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useState } from "react";

interface PayPalButtonProps {
  amount: string;
  currency: string;
  description?: string;
  clientName?: string;
  clientEmail?: string;
  onSuccess?: (details: any) => void;
  onError?: (error: any) => void;
}

function ButtonWrapper({
  amount,
  currency,
  description,
  clientName,
  clientEmail,
  onSuccess,
  onError,
}: PayPalButtonProps) {
  const [{ isPending }] = usePayPalScriptReducer();
  const [message, setMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  return (
    <div className="w-full">
      {/* Loading skeleton */}
      {isPending && (
        <div className="w-full h-14 rounded-full bg-slate-100 animate-pulse" />
      )}

      <PayPalButtons
        style={{
          layout: "vertical",
          color: "gold",
          shape: "pill",
          label: "pay",
          height: 50,
        }}
        disabled={false}
        forceReRender={[amount, currency]}
        createOrder={async () => {
          setMessage(null);
          setStatus("idle");
          try {
            const res = await fetch("/api/paypal/create-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                amount,
                currency,
                description: description || "Payment",
                client_name: clientName || "Guest",
                client_email: clientEmail || "guest@example.com",
              }),
            });

            const data = await res.json();

            if (!res.ok || !data.paypal_order_id) {
              throw new Error(data.error || "Failed to create PayPal order");
            }

            return data.paypal_order_id;
          } catch (err: any) {
            setMessage(err.message || "Could not initiate payment.");
            setStatus("error");
            throw err;
          }
        }}
        onApprove={async (data) => {
          try {
            const res = await fetch("/api/paypal/capture-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderID: data.orderID }),
            });

            const captureData = await res.json();

            if (!res.ok) {
              throw new Error(captureData.error || "Capture failed");
            }

            setStatus("success");
            setMessage(
              `✅ Payment successful! Transaction ID: ${captureData.captureId}`
            );
            onSuccess?.(captureData);
          } catch (err: any) {
            setMessage(err.message || "Payment capture failed.");
            setStatus("error");
            onError?.(err);
          }
        }}
        onError={(err) => {
          setMessage("Payment was cancelled or an error occurred.");
          setStatus("error");
          onError?.(err);
        }}
        onCancel={() => {
          setMessage("Payment was cancelled.");
          setStatus("idle");
        }}
      />

      {/* Status message */}
      {message && (
        <p
          className={`mt-3 text-sm text-center font-medium ${
            status === "success"
              ? "text-green-600"
              : status === "error"
              ? "text-red-500"
              : "text-slate-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default function PayPalButton(props: PayPalButtonProps) {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  if (!clientId) {
    return (
      <p className="text-red-500 text-sm text-center">
        PayPal Client ID is not configured.
      </p>
    );
  }

  return (
    <PayPalScriptProvider
      options={{
        clientId,
        currency: props.currency || "USD",
        intent: "capture",
      }}
    >
      <ButtonWrapper {...props} />
    </PayPalScriptProvider>
  );
}
