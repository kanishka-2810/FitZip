"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const SLIDES = [
  {
    id: 1,
    label: "PROGRAM 01",
    headline: "RESET YOUR\nBODY",
    productName: "Reset Your Body",
    tag: "BUILD STRENGTH",
    cta: "Get the Program",
    href: "/products/reset-your-body",
    accent: "#CC0000",
    comingSoon: false,
  },
  {
    id: 2,
    label: "PROGRAM 02",
    headline: "COMING\nSOON",
    productName: "FitZip Nutrition Guide",
    tag: "EAT SMARTER",
    cta: "Notify Me",
    href: "https://fitzip-newsletter-069955.beehiiv.com/subscribe",
    accent: "#CC0000",
    comingSoon: true,
  },
];

// Doubled for marquee loop
const TICKER = [
  "TRAIN ANYWHERE",
  "230K SUBSCRIBERS",
  "PROVEN RESULTS",
  "NO GYM NEEDED",
  "BUILD REAL STRENGTH",
  "JOINT HEALTH FOCUS",
  "FEEL STRONGER",
  "TRAIN ANYWHERE",
  "230K SUBSCRIBERS",
  "PROVEN RESULTS",
  "NO GYM NEEDED",
  "BUILD REAL STRENGTH",
  "JOINT HEALTH FOCUS",
  "FEEL STRONGER",
];

const TICKER_ICONS = [
  { icon: "✓", label: "TRAIN ANYWHERE" },
  { icon: "♥", label: "230K SUBSCRIBERS" },
  { icon: "★", label: "PROVEN RESULTS" },
  { icon: "⬤", label: "NO GYM NEEDED" },
];

// Double for seamless loop
const TICKER_DOUBLED = [
  ...TICKER_ICONS,
  ...TICKER_ICONS,
  ...TICKER_ICONS,
  ...TICKER_ICONS,
];

export default function OurStorySection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % SLIDES.length),
    [],
  );

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [isPaused, next]);

  const slide = SLIDES[current];

  return (
    <>
      {/* ── Red banner ── */}
      <section
        className="w-full py-14 md:py-20 px-4 border-t-4 border-black text-center"
        style={{
          background:
            "radial-gradient(ellipse at center, #ff1a1a 0%, #CC0000 40%, #6b0000 100%)",
        }}
      >
        <h2
          className="text-3xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-tight tracking-tight max-w-4xl mx-auto"
          style={{
            fontFamily: "var(--font-poppins), sans-serif",
            textShadow: "0 4px 24px rgba(0,0,0,0.5)",
          }}
        >
          We Make Fitness Easy,
          <br />
          Not Complicated.
        </h2>
        <div className="mt-8">
          <Link
            href="/about"
            className="inline-block px-7 py-3 md:px-10 md:py-4 rounded-full bg-white text-black font-black uppercase tracking-widest text-sm md:text-base border-[3px] border-black transition-all duration-200"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              boxShadow: "5px 5px 0px #000000",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "5px 5px 0px #000000";
            }}
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* ── Carousel ── */}
      <section className="w-full bg-[#0a0a0a] relative overflow-hidden border-t-4 border-black">
        {/* Slide background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden md:translate-y-8 lg:translate-y-0">
          <p
            className="font-black uppercase leading-none text-center whitespace-pre-line text-[clamp(90px,22vw,220px)] md:text-[clamp(80px,17vw,220px)]"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              lineHeight: 0.85,
              letterSpacing: "-0.03em",
              color: "rgba(255,255,255,0.06)",
            }}
          >
            {slide.headline}
          </p>
        </div>

        {/* Spacer for height */}
        <div className="w-full" style={{ height: "480px" }} />

        {/* Slide character */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
          <Image
            src={
              slide.id === 1
                ? "/muscle-character/gemini-muscle-person.png"
                : "/muscle-character/food-muscle-character.png"
            }
            alt={slide.id === 1 ? "Workout character" : "Nutrition character"}
            width={340}
            height={420}
            className="object-contain object-bottom h-[78%] md:h-[105%] w-auto"
          />
        </div>

        {/* Slide label */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8">
          <span
            className="text-white/70 text-xs md:text-sm font-black uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {slide.label}
          </span>
        </div>

        {/* Slide indicator dots */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2.5 h-2.5 rounded-full border-2 border-white transition-all duration-200"
              style={{ background: i === current ? "#CC0000" : "transparent" }}
            />
          ))}
        </div>

        {/* Product card — top-right on mobile, bottom-right on tablet+ */}
        <div className="absolute top-10 right-3 md:top-auto md:bottom-10 md:right-10">
          <div
            className="bg-white border-[3px] border-black rounded-xl md:rounded-2xl px-3 py-2.5 md:px-4 md:py-3 lg:px-7 lg:py-5
                       min-w-36 max-w-44 md:min-w-48 md:max-w-56 lg:min-w-70 lg:max-w-80"
            style={{ boxShadow: "4px 4px 0px #CC0000" }}
          >
            <p
              className="text-[8px] font-black uppercase tracking-widest text-[#CC0000] mb-0.5 whitespace-nowrap"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              {slide.tag}
            </p>
            <p
              className="text-black font-black uppercase text-[11px] md:text-sm lg:text-lg leading-tight mb-1 md:mb-1.5 lg:mb-2"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              {slide.productName}
            </p>
            {slide.comingSoon && (
              <p
                className="text-[9px] font-black uppercase tracking-widest text-black/40 mb-2 md:mb-2"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                ✦ Coming Soon
              </p>
            )}
            <Link
              href={slide.href}
              target={slide.comingSoon ? "_blank" : undefined}
              rel={slide.comingSoon ? "noopener noreferrer" : undefined}
              className="block text-center px-2 py-1.5 md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-full bg-black text-white font-black uppercase tracking-widest text-[8px] md:text-[9px] lg:text-sm border-2 border-black transition-all duration-200"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                boxShadow: "3px 3px 0px #CC0000",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "3px 3px 0px #CC0000";
              }}
            >
              {slide.cta}
            </Link>
          </div>
        </div>

        {/* Nav buttons — bottom left */}
        <div className="absolute bottom-6 left-4 md:bottom-10 md:left-10 flex items-center gap-2 md:gap-3">
          <button
            onClick={prev}
            className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border-[3px] border-black flex items-center justify-center text-black transition-all duration-200 hover:bg-[#CC0000] hover:text-white"
            style={{ boxShadow: "3px 3px 0px #000000" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "3px 3px 0px #000000";
            }}
            aria-label="Previous"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => setIsPaused((p) => !p)}
            className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#CC0000] border-[3px] border-black flex items-center justify-center text-white transition-all duration-200 hover:bg-black"
            style={{ boxShadow: "3px 3px 0px #000000" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "3px 3px 0px #000000";
            }}
            aria-label={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? (
              <svg
                className="w-4 h-4 ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            )}
          </button>
          <button
            onClick={next}
            className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border-[3px] border-black flex items-center justify-center text-black transition-all duration-200 hover:bg-[#CC0000] hover:text-white"
            style={{ boxShadow: "3px 3px 0px #000000" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "3px 3px 0px #000000";
            }}
            aria-label="Next"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* ── Ticker bar ── */}
      <div className="bg-black border-t-4 border-[#CC0000] overflow-hidden py-3 md:py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {TICKER_DOUBLED.map((item, i) => (
            <span
              key={i}
              className="text-white font-black uppercase text-[10px] md:text-sm tracking-widest mx-6 md:mx-10 flex items-center gap-2"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              <span className="text-[#CC0000]">{item.icon}</span>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
