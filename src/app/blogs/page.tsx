"use client";

import Link from "next/link";
import Footer from "@/components/footer";

const BEEHIIV_BASE = "https://fitzip-newsletter-069955.beehiiv.com";

const TICKER_WORDS = [
  "READ. GROW. TRAIN.",
  "WEEKLY TIPS",
  "MOVEMENT SCIENCE",
  "JOINT HEALTH",
  "NO FLUFF",
  "FREE KNOWLEDGE",
  "READ. GROW. TRAIN.",
  "WEEKLY TIPS",
  "MOVEMENT SCIENCE",
  "JOINT HEALTH",
  "NO FLUFF",
  "FREE KNOWLEDGE",
];

const BLOGS = [
  {
    title: "The Real Goal of Fitness After 35",
    date: "Mar 15, 2026",
    readTime: "2 min read",
    slug: "the-real-goal-of-fitness-after-35",
    tag: "Mindset",
  },
  {
    title: "The Two Things Your Body Craves Most",
    date: "Mar 3, 2026",
    readTime: "2 min read",
    slug: "the-two-things-your-body-craves-most",
    tag: "Recovery",
  },
  {
    title: "Try This — It Reveals Your Real Age",
    date: "Feb 24, 2026",
    readTime: "2 min read",
    slug: "try-this-it-reveals-your-real-age",
    tag: "Mobility",
  },
  {
    title: "This Underrated Push-Up Variation Builds Way More Strength",
    date: "Feb 10, 2026",
    readTime: "2 min read",
    slug: "this-underrated-push-up-variation-builds-way-more-strength",
    tag: "Strength",
  },
  {
    title: "Are You Doing Kettlebell Swings Correctly?",
    date: "Feb 2, 2026",
    readTime: "2 min read",
    slug: "are-you-doing-kettlebell-swings-correctly",
    tag: "Form",
  },
  {
    title: "Why You Should Train Barefoot (at least sometimes)",
    date: "Jan 26, 2026",
    readTime: "2 min read",
    slug: "why-you-should-train-barefoot-at-least-sometimes",
    tag: "Tips",
  },
];


export default function BlogsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="w-full bg-black">
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
            NEWSELETTER
          </p>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <span
              className="inline-block bg-[#CC0000] text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-1.5 mb-5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ✦ Weekly Newsletter ✦
            </span>
            <h1
              className="text-4xl md:text-7xl lg:text-8xl font-black uppercase text-white leading-tight tracking-tight mb-0"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              READ.
              <br />
              <span className="bg-[#CC0000] text-white px-2 inline-block">
                GROW. TRAIN.
              </span>
            </h1>
            <p
              className="text-white/50 text-sm md:text-base mt-6 max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Free weekly fitness insights from FitZip — no fluff, no
              filler. Just the science that actually works.
            </p>
          </div>
        </div>

        {/* Ticker */}
        <div className="bg-[#CC0000] border-t-4 border-black overflow-hidden py-2.5 md:py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {TICKER_WORDS.map((word, i) => (
              <span
                key={i}
                className="text-white font-black uppercase text-[10px] md:text-sm tracking-widest mx-5 md:mx-8"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {word}
                <span className="mx-5 md:mx-8 text-black/30">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG GRID ── */}
      <section className="w-full bg-white border-b-4 border-black py-14 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section label */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <span
                className="inline-block bg-black text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 mb-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                ✦ Latest Issues ✦
              </span>
              <h2
                className="text-3xl md:text-5xl font-black uppercase text-black leading-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                6 Articles
                <br />
                <span className="bg-[#CC0000] text-white px-2 inline-block">
                  Worth Your Time
                </span>
              </h2>
            </div>
            <Link
              href={BEEHIIV_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-black uppercase tracking-widest text-xs md:text-sm border-[3px] border-black transition-all duration-200"
              style={{
                fontFamily: "var(--font-montserrat)",
                boxShadow: "5px 5px 0px #CC0000",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "5px 5px 0px #CC0000";
              }}
            >
              See All Articles
              <svg
                className="w-4 h-4 -rotate-45"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {BLOGS.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group flex flex-col bg-white border-[3px] border-black rounded-2xl overflow-hidden transition-transform duration-200 hover:-translate-y-1"
                style={{ boxShadow: "6px 6px 0px #000000" }}
              >
                {/* Image block */}
                <div
                  className="relative w-full bg-[#CC0000] overflow-hidden flex items-center justify-center"
                  style={{ aspectRatio: "16/10" }}
                >
                  <p
                    className="text-white font-black uppercase select-none leading-none"
                    style={{
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontSize: "clamp(36px, 9vw, 80px)",
                      fontWeight: 900,
                    }}
                  >
                    FITZIP
                  </p>
                  {/* Tag badge */}
                  <span
                    className="absolute top-3 left-3 bg-black text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {blog.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-5 py-5 md:px-6 md:py-6 border-t-[3px] border-black">
                  {/* Meta */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-[11px] font-black uppercase tracking-widest text-black/40"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {blog.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-black/25" />
                    <span
                      className="text-[11px] font-black uppercase tracking-widest text-black/40"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <p
                    className="text-black font-black uppercase text-base md:text-lg leading-tight tracking-tight flex-1"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {blog.title}
                  </p>

                  {/* Read link */}
                  <div className="mt-4 flex items-center gap-1.5">
                    <span
                      className="text-xs font-black uppercase tracking-widest text-[#CC0000]"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Read Article
                    </span>
                    <svg
                      className="w-4 h-4 text-[#CC0000] transition-transform duration-200 group-hover:translate-x-1"
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
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* See More CTA */}
          <div className="flex justify-center mt-12 md:mt-16">
            <Link
              href={BEEHIIV_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 md:px-12 md:py-5 rounded-full bg-[#CC0000] text-white font-black uppercase tracking-widest text-sm md:text-lg border-[3px] border-black transition-all duration-200"
              style={{
                fontFamily: "var(--font-montserrat)",
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
              See All Articles
              <svg
                className="w-5 h-5 -rotate-45 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER CTA ── */}
      <section className="w-full bg-[#f5f5f5] border-b-4 border-black py-14 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block bg-black text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 mb-5"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            ✦ It&apos;s Free ✦
          </span>
          <h2
            className="text-3xl md:text-6xl font-black uppercase text-black leading-tight tracking-tight mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Get These
            <br />
            <span className="bg-[#CC0000] text-white px-2 inline-block">
              In Your Inbox.
            </span>
          </h2>
          <p
            className="text-black/50 text-sm md:text-base mb-8 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Join thousands getting free weekly fitness tips and movement science,
            every week.
          </p>
          <Link
            href="https://fitzip-newsletter-069955.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 md:px-12 md:py-5 rounded-full bg-black text-white font-black uppercase tracking-widest text-sm md:text-lg border-[3px] border-black transition-all duration-200"
            style={{
              fontFamily: "var(--font-montserrat)",
              boxShadow: "5px 5px 0px #CC0000",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "5px 5px 0px #CC0000";
            }}
          >
            Subscribe Free
            <svg
              className="w-4 h-4 -rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
