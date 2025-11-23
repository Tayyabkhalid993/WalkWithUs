"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    null | "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      // TODO: wire to API or external service
      await new Promise((r) => setTimeout(r, 600));
      setStatus("sent");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form className="mt-4 flex max-w-md gap-2" onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-md border px-3 py-2 text-sm text-gray-700 focus:ring-1 focus:ring-primary"
      />
      <button
        type="submit"
        className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white hover:opacity-90"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Subscribe"}
      </button>
    </form>
  );
}
