"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    null | "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      // Placeholder: implement real submit to API route or external service
      await new Promise((r) => setTimeout(r, 600));
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form
      className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
      onSubmit={handleSubmit}
    >
      <input
        className="col-span-1 rounded-md border px-3 py-2"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="col-span-1 rounded-md border px-3 py-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className="col-span-1 sm:col-span-2 rounded-md border px-3 py-2"
        rows={6}
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="col-span-1 sm:col-span-2 inline-flex justify-center rounded-md bg-primary px-4 py-2 text-white"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "sent" && (
        <p className="col-span-1 sm:col-span-2 text-sm text-green-600">
          Message sent — thanks!
        </p>
      )}
      {status === "error" && (
        <p className="col-span-1 sm:col-span-2 text-sm text-red-600">
          Error sending message. Please try again later.
        </p>
      )}
    </form>
  );
}
