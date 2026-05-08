"use client";

import { useState } from "react";

export default function PaymentTerminalPage() {
  const [form, setForm] = useState({
    client_name: "",
    client_email: "",
    amount: "",
    currency: "USD",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [paymentLink, setPaymentLink] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const createPaymentLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setPaymentLink("");

    try {
      const res = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        console.log(data);
        return;
      }

      setPaymentLink(data.payment_link);
    } catch (err) {
      setError("Failed to create payment link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: "600px", margin: "50px auto", padding: "20px" }}>
      <h1>Payment Terminal</h1>
      <p>Create PayPal payment links for clients.</p>

      <form onSubmit={createPaymentLink}>
        <div style={{ marginBottom: "15px" }}>
          <label>Client Name</label>
          <input
            name="client_name"
            value={form.client_name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Client Email</label>
          <input
            type="email"
            name="client_email"
            value={form.client_email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            required
            min="1"
            step="0.01"
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Currency</label>
          <select
            name="currency"
            value={form.currency}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px" }}
          >
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px 20px",
            cursor: "pointer",
          }}
        >
          {loading ? "Creating..." : "Create Payment Link"}
        </button>
      </form>

      {error && (
        <p style={{ color: "red", marginTop: "20px" }}>
          {error}
        </p>
      )}

      {paymentLink && (
        <div style={{ marginTop: "25px" }}>
          <h3>Payment Link Created:</h3>
          <input
            value={paymentLink}
            readOnly
            style={{ width: "100%", padding: "10px" }}
          />
          <br />
          <br />
          <a href={paymentLink} target="_blank">
            Open Payment Link
          </a>
        </div>
      )}
    </main>
  );
}