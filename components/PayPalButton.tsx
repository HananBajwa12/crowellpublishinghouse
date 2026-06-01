// PayPalButton.tsx
"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export interface PayPalButtonProps {
  amount: string;
  currency?: string;
  description?: string;
  onSuccess?: (details: any) => void;
  onError?: (error: any) => void;
}

/**
 * Renders a PayPal checkout that shows only the credit‑card form.
 * It forces the CARD funding source and disables the standard PayPal button
 * so users are not presented with a login / signup screen.
 */
export default function PayPalButton({
  amount,
  currency = "USD",
  description,
  onSuccess,
  onError,
}: PayPalButtonProps) {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  if (!clientId) {
    return <p className="text-red-500">PayPal client ID missing.</p>;
  }

  const getFundingSource = () =>
    typeof window !== "undefined" && (window as any).paypal
      ? (window as any).paypal.FUNDING.CARD
      : undefined;

  return (
    <PayPalScriptProvider
      options={{
        "client-id": clientId,
        currency,
        intent: "capture",
        // Hide the PayPal account button – we only want the card form
        "disable-funding": "paypal",
        commit: "true",
      }}
    >
      <PayPalButtons
        fundingSource={getFundingSource()}
        style={{
          layout: "vertical",
          color: "gold",
          shape: "pill",
          label: "pay",
          height: 48,
        }}
        createOrder={async () => {
          const res = await fetch("/api/paypal/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount, currency, description }),
          });
          const data = await res.json();
          if (!res.ok || !data.paypal_order_id) {
            throw new Error(data.error || "Failed to create order");
          }
          return data.paypal_order_id;
        }}
        onApprove={async (data) => {
          const res = await fetch("/api/paypal/capture-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderID: data.orderID }),
          });
          const capture = await res.json();
          if (!res.ok) {
            throw new Error(capture.error || "Capture failed");
          }
          onSuccess?.(capture);
        }}
        onError={(err) => {
          console.error(err);
          onError?.(err);
        }}
      />
    </PayPalScriptProvider>
  );
}


import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export interface PayPalButtonProps {
  amount: string;
  currency?: string;
  description?: string;
  /** Called when the payment is captured successfully */
  onSuccess?: (details: any) => void;
  /** Called when an error occurs during the flow */
  onError?: (error: any) => void;
}

/**
 * Renders a PayPal checkout that shows only the credit‑card form.
 * It forces the CARD funding source and disables the standard PayPal button
 * so users are not presented with a login / signup screen.
 */
export default function PayPalButton({
  amount,
  currency = "USD",
  description,
  onSuccess,
  onError,
}: PayPalButtonProps) {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  if (!clientId) {
    return <p className="text-red-500">PayPal client ID missing.</p>;
  }

  // Helper to safely obtain the CARD funding source on the client side
  const getFundingSource = () =>
    typeof window !== "undefined" && (window as any).paypal
      ? (window as any).paypal.FUNDING.CARD
      : undefined;

  return (
    <PayPalScriptProvider
      options={{
        "client-id": clientId,
        currency,
        intent: "capture",
        // Hide the PayPal account button – we only want the card form
        "disable-funding": "paypal",
        commit: "true",
      }}
    >
      <PayPalButtons
        fundingSource={getFundingSource()}
        style={{ layout: "vertical", color: "gold", shape: "pill", label: "pay", height: 48 }}
        createOrder={async () => {
          const res = await fetch("/api/paypal/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount, currency, description }),
          });
          const data = await res.json();
          if (!res.ok || !data.paypal_order_id) {
            throw new Error(data.error || "Failed to create order");
          }
          return data.paypal_order_id;
        }}
        onApprove={async (data) => {
          const res = await fetch("/api/paypal/capture-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderID: data.orderID }),
          });
          const capture = await res.json();
          if (!res.ok) {
            throw new Error(capture.error || "Capture failed");
          }
          onSuccess?.(capture);
        }}
        onError={(err) => {
          console.error(err);
          onError?.(err);
        }}
      />
    </PayPalScriptProvider>
  );
}
