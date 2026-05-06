"use client";

import { FormEvent, useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendState, setSendState] = useState<"idle" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);
    setSendState("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error();

      setSendState("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setSendState("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-stockholm.png')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl tracking-widest font-light">
            WORC STOCKHOLM
          </h1>

          <p className="mt-4 text-sm md:text-base tracking-[0.3em] text-gray-400">
            THE OPERATIONAL CORE
          </p>

          <div className="mt-12 text-xl md:text-2xl font-light max-w-xl">
            Structure creates clarity.
          </div>

          <a
            href="#contact"
            className="mt-16 border border-white px-6 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
          >
            CONTACT
          </a>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="relative min-h-screen flex items-center justify-center px-6 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: "url('/images/section-2-structure.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-2xl text-2xl md:text-3xl font-light">
          Complexity is not the problem.
          <br />
          Lack of structure is.
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="relative min-h-screen flex items-center justify-center px-6 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: "url('/images/section-door.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-2xl text-2xl md:text-3xl font-light">
          Systems turn chaos into structure.
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="relative min-h-screen flex items-center justify-center px-6 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: "url('/images/section-3-landscape.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-2xl text-2xl md:text-3xl font-light">
          Built for operational reality.
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center px-6 bg-black"
      >
        <h2 className="text-3xl md:text-4xl font-light tracking-widest">
          CONTACT
        </h2>

        <form
          className="mt-12 w-full max-w-md flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent border border-gray-600 p-3"
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border border-gray-600 p-3"
          />

          <textarea
            placeholder="Message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-transparent border border-gray-600 p-3"
          />

          <button
            type="submit"
            disabled={isSending}
            className="border border-white py-3 hover:bg-white hover:text-black transition"
          >
            {isSending ? "SENDING..." : "SEND"}
          </button>

          {sendState === "sent" && (
            <p className="text-green-400 text-center">Sent</p>
          )}
          {sendState === "error" && (
            <p className="text-red-400 text-center">Error</p>
          )}
        </form>
      </section>
    </main>
  );
}