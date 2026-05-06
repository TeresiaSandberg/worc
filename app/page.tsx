"use client";

import { CSSProperties, FormEvent, useState } from "react";

const pageStyle: CSSProperties = {
  margin: 0,
  minHeight: "100vh",
  background: "#000",
  color: "#fff",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const sectionStyle: CSSProperties = {
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "24px",
  overflow: "hidden",
};

const backgroundStyle = (
  imageUrl: string,
  grayscale = false
): CSSProperties => ({
  position: "absolute",
  inset: 0,
  backgroundImage: `url('${imageUrl}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: grayscale ? "grayscale(1)" : "none",
});

const overlayStyle = (opacity: number): CSSProperties => ({
  position: "absolute",
  inset: 0,
  background: `rgba(0, 0, 0, ${opacity})`,
});

const contentStyle: CSSProperties = {
  position: "relative",
  zIndex: 10,
  maxWidth: "760px",
};

const heroTitleStyle: CSSProperties = {
  fontSize: "clamp(2.4rem, 6vw, 5rem)",
  fontWeight: 300,
  letterSpacing: "0.18em",
  margin: 0,
};

const subtitleStyle: CSSProperties = {
  marginTop: "18px",
  fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
  letterSpacing: "0.32em",
  color: "#cfcfcf",
};

const statementStyle: CSSProperties = {
  fontSize: "clamp(1.7rem, 3vw, 3rem)",
  fontWeight: 300,
  lineHeight: 1.35,
};

const buttonLinkStyle: CSSProperties = {
  display: "inline-block",
  marginTop: "64px",
  padding: "14px 28px",
  border: "1px solid #fff",
  color: "#fff",
  textDecoration: "none",
  letterSpacing: "0.22em",
  fontSize: "0.8rem",
};

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "14px",
  background: "transparent",
  border: "1px solid #666",
  color: "#fff",
  fontSize: "1rem",
  outline: "none",
};

const submitStyle: CSSProperties = {
  width: "100%",
  padding: "14px",
  background: "transparent",
  border: "1px solid #fff",
  color: "#fff",
  letterSpacing: "0.18em",
  cursor: "pointer",
};

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
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

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
    <main style={pageStyle}>
      <section style={sectionStyle}>
        <div style={backgroundStyle("/images/hero-stockholm.png")} />
        <div style={overlayStyle(0.6)} />

        <div style={contentStyle}>
          <h1 style={heroTitleStyle}>WORC STOCKHOLM</h1>

          <p style={subtitleStyle}>THE OPERATIONAL CORE</p>

          <div style={{ ...statementStyle, marginTop: "52px" }}>
            Structure creates clarity.
          </div>

          <a href="#contact" style={buttonLinkStyle}>
            CONTACT
          </a>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={backgroundStyle("/images/section-2-structure.jpg", true)} />
        <div style={overlayStyle(0.6)} />

        <div style={{ ...contentStyle, ...statementStyle }}>
          Complexity is not the problem.
          <br />
          Lack of structure is.
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={backgroundStyle("/images/section-door.jpg", true)} />
        <div style={overlayStyle(0.7)} />

        <div style={{ ...contentStyle, ...statementStyle }}>
          Systems turn chaos into structure.
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={backgroundStyle("/images/section-3-landscape.png", true)} />
        <div style={overlayStyle(0.55)} />

        <div style={{ ...contentStyle, ...statementStyle }}>
          Built for operational reality.
        </div>
      </section>

      <section id="contact" style={{ ...sectionStyle, background: "#000" }}>
        <div style={{ ...contentStyle, width: "100%", maxWidth: "520px" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              letterSpacing: "0.22em",
              margin: 0
            }}
          >
            CONTACT
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{
              marginTop: "48px",
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}
          >
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />

            <textarea
              placeholder="Message"
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ ...inputStyle, resize: "vertical" }}
            />

            <button
              type="submit"
              disabled={isSending}
              style={{
                ...submitStyle,
                opacity: isSending ? 0.5 : 1
              }}
            >
              {isSending ? "SENDING..." : "SEND"}
            </button>

            {sendState === "sent" && (
              <p style={{ color: "#4ade80", textAlign: "center" }}>Sent</p>
            )}

            {sendState === "error" && (
              <p style={{ color: "#f87171", textAlign: "center" }}>
                Error. Please try again.
              </p>
            )}
          </form>

          <p
            style={{
              marginTop: "32px",
              color: "#777",
              fontSize: "0.9rem",
              lineHeight: 1.6
            }}
          >
            We are currently building the next generation operational platform
            for workforce, payroll and HR.
          </p>
        </div>
      </section>
    </main>
  );
}