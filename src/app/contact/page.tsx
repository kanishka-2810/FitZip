"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/footer";

const TOPICS = [
  "Order / Download Issue",
  "Refund Request",
  "Program Question",
  "Business / Collaboration",
  "General Question",
];

const INFO_CARDS = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Email Us",
    value: "erooney729@gmail.com",
    href: "mailto:erooney729@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
    label: "YouTube",
    value: "@fitzip · 230K + Subscribers",
    href: "https://www.youtube.com/@fitzip",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    label: "Response Time",
    value: "Within 2 business days",
    href: null,
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "Based In",
    value: "United States",
    href: null,
  },
];

const TICKER_WORDS = [
  "GET IN TOUCH",
  "WE REPLY FAST",
  "NO SPAM",
  "REAL SUPPORT",
  "ORDER ISSUES",
  "REFUNDS",
  "COLLABS",
  "QUESTIONS",
  "GET IN TOUCH",
  "WE REPLY FAST",
  "NO SPAM",
  "REAL SUPPORT",
  "ORDER ISSUES",
  "REFUNDS",
  "COLLABS",
  "QUESTIONS",
];

type FormState = "idle" | "loading" | "success" | "error";

function TopicDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full px-4 py-3 border-[3px] text-sm text-left outline-none transition-colors duration-150 bg-white flex items-center justify-between gap-2 ${
          open ? "border-[#CC0000]" : "border-black"
        }`}
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        <span className={value ? "text-black" : "text-black/25"}>
          {value || "Select a topic..."}
        </span>
        <div
          className={`shrink-0 w-6 h-6 border-2 border-black flex items-center justify-center transition-colors duration-150 ${open ? "bg-[#CC0000] border-[#CC0000]" : "bg-black"}`}
        >
          <svg
            className={`w-3 h-3 text-white transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 top-full z-50 bg-white border-[3px] border-black border-t-0"
          style={{ boxShadow: "5px 5px 0px #000000" }}
        >
          {TOPICS.map((t, i) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                onChange(t);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm font-black uppercase tracking-wide transition-colors duration-100 flex items-center gap-3
                ${value === t ? "bg-[#CC0000] text-white" : "text-black hover:bg-black hover:text-white"}
                ${i !== TOPICS.length - 1 ? "border-b-2 border-black/10" : ""}
              `}
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {value === t && (
                <svg
                  className="w-3 h-3 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
              {t}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.topic) return;
    setFormState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", topic: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setErrorMsg(
        "Something went wrong. Please email us directly at erooney729@gmail.com.",
      );
      setFormState("error");
    }
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="w-full bg-[#CC0000]">
        <div className="relative w-full flex items-center justify-center px-6 py-12 md:py-20 overflow-hidden">
          <p
            className="absolute inset-0 flex items-center justify-center text-white/[0.07] font-black uppercase select-none pointer-events-none leading-none"
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(72px, 16vw, 200px)",
              fontWeight: 900,
              whiteSpace: "nowrap",
            }}
          >
            CONTACT
          </p>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span
              className="inline-block bg-black text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-1.5 mb-5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ✦ Get In Touch ✦
            </span>
            <h1
              className="text-4xl md:text-7xl font-black uppercase text-white leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              WE&apos;D LOVE TO
              <br />
              <span className="bg-black text-white px-2 inline-block">
                HEAR FROM YOU
              </span>
            </h1>
            <p
              className="text-white/60 text-sm md:text-base mt-5 max-w-md mx-auto"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Order issue, program question, or just want to say hi — drop us a
              message and we&apos;ll get back to you within 2 business days.
            </p>
          </div>
        </div>

        {/* Ticker */}
        <div className="bg-black border-t-4 border-black overflow-hidden py-2.5 md:py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {TICKER_WORDS.map((word, i) => (
              <span
                key={i}
                className="text-white font-black uppercase text-[10px] md:text-sm tracking-widest mx-5 md:mx-8"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {word}
                <span className="mx-5 md:mx-8 text-[#CC0000]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="w-full bg-white border-b-4 border-black py-14 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-16 items-start">
          {/* ── LEFT: Info cards ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <p
                className="text-[#CC0000] text-xs font-black uppercase tracking-widest mb-2"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Contact Info
              </p>
              <h2
                className="text-2xl md:text-3xl font-black uppercase text-black leading-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Reach Us
                <br />
                <span className="bg-[#CC0000] text-white px-1.5">Directly</span>
              </h2>
            </div>

            {INFO_CARDS.map((card) => (
              <div
                key={card.label}
                className="flex items-start gap-4 p-4 md:p-5 border-[3px] border-black rounded-xl bg-white"
                style={{ boxShadow: "5px 5px 0px #000000" }}
              >
                <div className="shrink-0 w-10 h-10 bg-[#CC0000] border-2 border-black flex items-center justify-center text-white">
                  {card.icon}
                </div>
                <div>
                  <p
                    className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-0.5"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {card.label}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={
                        card.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        card.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm font-black text-black hover:text-[#CC0000] transition-colors duration-150 underline underline-offset-2"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p
                      className="text-sm font-black text-black"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {card.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Quick topics note */}
            <div className="p-4 md:p-5 border-[3px] border-black rounded-xl bg-[#f5f5f5]">
              <p
                className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-3"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Common Topics
              </p>
              <div className="flex flex-wrap gap-2">
                {TOPICS.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-black uppercase tracking-wider bg-white border-2 border-black px-2.5 py-1 text-black/60"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter nudge */}
            <div
              className="p-5 border-[3px] border-black rounded-xl bg-white"
              style={{ boxShadow: "5px 5px 0px #CC0000" }}
            >
              <p
                className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-1"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Free Weekly Tips
              </p>
              <p
                className="text-sm font-black uppercase text-black mb-3 leading-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Join 230K+ people who train smarter.
              </p>
              <Link
                href="https://fitzip-newsletter-069955.beehiiv.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#CC0000] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 border-2 border-black transition-colors duration-150 hover:bg-black"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Subscribe Free →
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="lg:col-span-3">
            <div
              className="border-[3px] border-black rounded-2xl bg-white p-6 md:p-10"
              style={{ boxShadow: "8px 8px 0px #000000" }}
            >
              <p
                className="text-[10px] font-black uppercase tracking-widest text-[#CC0000] mb-1"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Send A Message
              </p>
              <h3
                className="text-2xl md:text-3xl font-black uppercase text-black mb-8 leading-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Fill Out The Form
              </h3>

              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <div className="w-14 h-14 bg-[#CC0000] border-[3px] border-black flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4
                    className="text-xl font-black uppercase text-black"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Message Sent!
                  </h4>
                  <p
                    className="text-black/50 text-sm max-w-xs"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    We&apos;ll get back to you at your email within 2 business
                    days.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-2 text-[10px] font-black uppercase tracking-widest text-[#CC0000] underline underline-offset-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-[10px] font-black uppercase tracking-widest text-black/50"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Full Name <span className="text-[#CC0000]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 border-[3px] border-black rounded-none text-sm text-black placeholder:text-black/25 outline-none focus:border-[#CC0000] transition-colors duration-150 bg-white"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-[10px] font-black uppercase tracking-widest text-black/50"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Email Address <span className="text-[#CC0000]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 border-[3px] border-black rounded-none text-sm text-black placeholder:text-black/25 outline-none focus:border-[#CC0000] transition-colors duration-150 bg-white"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      />
                    </div>
                  </div>

                  {/* Topic */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[10px] font-black uppercase tracking-widest text-black/50"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Topic <span className="text-[#CC0000]">*</span>
                    </label>
                    <TopicDropdown
                      value={form.topic}
                      onChange={(v) =>
                        setForm((prev) => ({ ...prev, topic: v }))
                      }
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[10px] font-black uppercase tracking-widest text-black/50"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Message <span className="text-[#CC0000]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us how we can help..."
                      className="w-full px-4 py-3 border-[3px] border-black rounded-none text-sm text-black placeholder:text-black/25 outline-none focus:border-[#CC0000] transition-colors duration-150 bg-white resize-none"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    />
                  </div>

                  {/* Error */}
                  {formState === "error" && (
                    <p
                      className="text-[#CC0000] text-xs font-black uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      ✕ {errorMsg}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full bg-[#CC0000] text-white font-black uppercase tracking-widest text-sm py-4 border-[3px] border-black transition-all duration-200 hover:bg-black disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      boxShadow: "5px 5px 0px #000000",
                    }}
                  >
                    {formState === "loading" ? "Sending..." : "Send Message →"}
                  </button>

                  <p
                    className="text-black/30 text-[10px] uppercase tracking-widest text-center"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    We reply within 2 business days. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
