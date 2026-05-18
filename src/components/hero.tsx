"use client";

import Link from "next/link";

const TICKER_WORDS = [
  "GET FIT",
  "NO GYM NEEDED",
  "ISOMETRIC HOLDS",
  "BUILD MUSCLE",
  "STAY STRONG",
  "BODYWEIGHT TRAINING",
  "230K SUBSCRIBERS",
  "JOINT HEALTH",
  "GET FIT",
  "NO GYM NEEDED",
  "ISOMETRIC HOLDS",
  "BUILD MUSCLE",
  "STAY STRONG",
  "BODYWEIGHT TRAINING",
  "230K SUBSCRIBERS",
  "JOINT HEALTH",
];

export default function Hero() {
  return (
    <section className="w-full bg-white">
      {/* Hero Content */}
      <div className="relative w-full flex items-center justify-center px-6 py-10 md:py-20 overflow-hidden">
        <div className="text-center max-w-5xl mx-auto">
          <h1
            className="text-3xl md:text-[clamp(2rem,5.5vw,6rem)] font-black uppercase leading-tight tracking-tight text-black mb-8 md:whitespace-nowrap"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            GET FIT. FEEL STRONG.
            <br />
            <span className="bg-[#CC0000] text-white px-2 py-0 leading-none inline-block">
              NO GYM NEEDED
            </span>
          </h1>

          <Link
            href="/products"
            className="inline-block px-6 py-2.5 md:px-10 md:py-4 rounded-full bg-[#CC0000] text-white font-black uppercase tracking-widest text-sm md:text-lg transition-all duration-200 border-black border-3"
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
            Shop Now
          </Link>
        </div>
      </div>

      {/* Ticker Banner */}
      <div className="bg-black border-t-4 border-black overflow-hidden py-2.5 md:py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {TICKER_WORDS.map((word, i) => (
            <span
              key={i}
              className="text-white font-black uppercase text-[10px] md:text-sm tracking-widest mx-5 md:mx-8"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              {word}
              <span className="mx-5 md:mx-8 text-[#CC0000]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
