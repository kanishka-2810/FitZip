"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

const TICKER_WORDS = [
  "230K SUBSCRIBERS", "3+ YEARS FULL TIME", "159 VIDEOS", "22M+ VIEWS",
  "NO GYM NEEDED", "BODYWEIGHT ONLY", "JOINT FRIENDLY", "REAL RESULTS",
  "230K SUBSCRIBERS", "3+ YEARS FULL TIME", "159 VIDEOS", "22M+ VIEWS",
  "NO GYM NEEDED", "BODYWEIGHT ONLY", "JOINT FRIENDLY", "REAL RESULTS",
];

const BELIEFS = [
  {
    number: "01",
    title: "Fitness Should Be Accessible",
    body: "You don't need a gym membership, expensive equipment, or a personal trainer to build real strength, mobility & stability. A floor and the will to move is all you need.",
  },
  {
    number: "02",
    title: "Joint Health Comes First",
    body: "Soreness isn't a badge of honor. FitZip builds every program around protecting your joints so you can train for life — not just for the next 30 days.",
  },
  {
    number: "03",
    title: "No Fluff. No BS.",
    body: "Every video is built around real movement science you can apply the same day. No filler, no fluff — just the knowledge that actually works.",
  },
  {
    number: "04",
    title: "Consistency Beats Intensity",
    body: "One heavy week doesn't change a body. Showing up every week for three years does. FitZip lives this — and the channel is proof of it.",
  },
];

const STATS = [
  ["230K+", "YouTube Subscribers"],
  ["160+", "Videos Published"],
  ["22M+", "Total Views"],
  ["3 Yrs+", "Full-Time Creator"],
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="w-full bg-[#CC0000]">
        <div className="relative w-full flex items-center justify-center px-6 py-12 md:py-24 overflow-hidden">
          {/* Ghost watermark */}
          <p
            className="absolute inset-0 flex items-center justify-center text-white/[0.07] font-black uppercase select-none pointer-events-none leading-none text-center"
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(48px, 13vw, 180px)",
              fontWeight: 900,
              whiteSpace: "nowrap",
            }}
          >
            FITZIP
          </p>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <span
              className="inline-block bg-black text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-1.5 mb-5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ✦ Who We Are ✦
            </span>
            <h1
              className="text-4xl md:text-7xl lg:text-8xl font-black uppercase text-white leading-tight tracking-tight mb-0"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              GET TO KNOW
              <br />
              <span className="bg-black text-white px-2 inline-block">FITZIP</span>
            </h1>
            <p
              className="text-white/60 text-sm md:text-base mt-6 max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Full-time fitness brand. Functional fitness coaching. The brand that made 230,000 people look and feel the way they wanted without needing a bunch of equipments.
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

      {/* ── MEET ERIC ── */}
      <section className="w-full bg-white border-b-4 border-black py-14 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* Image */}
          <div
            className="relative w-full max-w-120 mx-auto md:mx-0 aspect-square border-[3px] border-black rounded-2xl overflow-hidden"
            style={{ boxShadow: "8px 8px 0px #000000" }}
          >
            <Image
              src="/logo/fitzip-logo.png"
              alt="FitZip — Fitness Brand"
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 480px"
              className="object-cover"
              priority
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-6">
            <div>
              <p
                className="text-[#CC0000] text-xs font-black uppercase tracking-widest mb-2"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Our Story
              </p>
              <h2
                className="text-3xl md:text-5xl font-black uppercase leading-tight text-black"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                From Passion To
                <br />
                <span className="bg-[#CC0000] text-white px-2 inline-block">Full-Time.</span>
              </h2>
            </div>

            <p
              className="text-black/70 text-sm md:text-base leading-relaxed border-l-4 border-[#CC0000] pl-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              FitZip is a bodyweight fitness brand based in the United States. We launched our YouTube channel in December 2022 and never looked back.
            </p>

            <p
              className="text-black/60 text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              In just three years, FitZip built one of the fastest-growing bodyweight fitness channels on YouTube — growing to over 230,000 subscribers and 22 million views without ever stepping foot in a commercial gym on camera.
            </p>

            <p
              className="text-black/60 text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Our approach is simple: movement science that respects your joints, programs anyone can follow at home, and content that cuts straight to what works. No fluff. Just results.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {["Functional Fitness", "Movement Science", "Joint Health", "Full-Time Creator", "US-Based"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-black uppercase tracking-wider bg-black/5 border border-black/15 px-3 py-1 text-black/50"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="w-full bg-black border-b-4 border-black py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-10 md:gap-20">
          {STATS.map(([stat, label]) => (
            <div key={stat} className="text-center">
              <p
                className="text-[#CC0000] text-3xl md:text-4xl font-black"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {stat}
              </p>
              <p
                className="text-white text-[10px] uppercase tracking-widest mt-1"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT HE BELIEVES IN ── */}
      <section className="w-full bg-[#f5f5f5] border-b-4 border-black py-14 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span
              className="inline-block bg-black text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ✦ Our Philosophy ✦
            </span>
            <h2
              className="text-3xl md:text-5xl font-black uppercase text-black leading-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              What FitZip
              <br />
              <span className="bg-[#CC0000] text-white px-2 inline-block">Believes In</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            {BELIEFS.map((belief) => (
              <div
                key={belief.number}
                className="flex gap-5 p-6 md:p-8 border-[3px] border-black rounded-2xl bg-white"
                style={{ boxShadow: "6px 6px 0px #000000" }}
              >
                <div className="shrink-0 w-10 h-10 bg-[#CC0000] border-2 border-black flex items-center justify-center text-white font-black text-sm">
                  {belief.number}
                </div>
                <div>
                  <p
                    className="font-black uppercase text-base md:text-lg text-black mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {belief.title}
                  </p>
                  <p
                    className="text-sm text-black/60 leading-relaxed"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {belief.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUTUBE CHANNEL ── */}
      <section className="w-full bg-white border-b-4 border-black py-14 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span
              className="inline-block bg-black text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ✦ Free Content ✦
            </span>
            <h2
              className="text-3xl md:text-5xl font-black uppercase text-black leading-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              230K+ People Can&apos;t
              <br />
              <span className="bg-[#CC0000] text-white px-2 inline-block">Be Wrong.</span>
            </h2>
            <p
              className="text-black/50 text-sm md:text-base mt-4 max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Every week FitZip drops a new video packed with real movement science — completely free. No gym required, no equipment needed.
            </p>
          </div>

          {/* Channel card */}
          <div
            className="flex flex-col md:flex-row items-center gap-8 bg-black border-[3px] border-black rounded-2xl p-8 md:p-10"
            style={{ boxShadow: "8px 8px 0px #CC0000" }}
          >
            {/* Channel avatar */}
            <div className="shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-full border-[3px] border-white overflow-hidden relative">
              <Image
                src="/logo/fitzip-logo.png"
                alt="FitZip YouTube Channel"
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <p
                className="text-[#CC0000] text-[10px] font-black uppercase tracking-widest mb-1"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                YouTube Channel
              </p>
              <h3
                className="text-2xl md:text-3xl font-black uppercase text-white leading-tight mb-1"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                FitZip
              </h3>
              <p
                className="text-white/70 text-xs uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                @fitzip · 230K+ subscribers · 160+ videos
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {["New videos every week", "Science-backed content", "100% free"].map((pill) => (
                  <span
                    key={pill}
                    className="text-[10px] font-black uppercase tracking-wider border border-white/50 text-white px-3 py-1"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    ✓ {pill}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://www.youtube.com/@fitzip"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-block bg-[#CC0000] text-white font-black uppercase tracking-widest text-sm px-7 py-3.5 border-[3px] border-white transition-all duration-200 hover:bg-white hover:text-black"
              style={{ fontFamily: "var(--font-montserrat)", boxShadow: "5px 5px 0px #ffffff33" }}
            >
              Visit Channel →
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-[#CC0000] border-b-4 border-black py-14 md:py-20 px-4 text-center">
        <p
          className="text-white/60 text-xs font-black uppercase tracking-widest mb-3"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Ready to start?
        </p>
        <h2
          className="text-3xl md:text-6xl font-black uppercase text-white leading-tight tracking-tight max-w-3xl mx-auto mb-8"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Train With FitZip.
          <br />
          No Gym Needed.
        </h2>
        <Link
          href="/products"
          className="inline-block px-8 py-3.5 md:px-12 md:py-5 rounded-full bg-white text-black font-black uppercase tracking-widest text-sm md:text-lg border-[3px] border-black transition-all duration-200"
          style={{
            fontFamily: "var(--font-montserrat)",
            boxShadow: "5px 5px 0px #000000",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "5px 5px 0px #000000";
          }}
        >
          Shop Programs
        </Link>
      </section>

      <Footer />
    </>
  );
}
