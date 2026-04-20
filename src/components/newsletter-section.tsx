"use client";

import Link from "next/link";

export default function NewsletterSection() {
  return (
    <section
      className="w-full py-10 md:py-16 px-4 md:px-8 border-t-4 border-black"
      style={{
        background:
          "radial-gradient(ellipse at center, #3a3a3a 0%, #1f1f1f 50%, #0a0a0a 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <span
          className="inline-block text-[#CC0000] text-xs md:text-sm font-black uppercase tracking-widest mb-4"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Free Weekly Newsletter
        </span>

        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight mb-4"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Join the Movement.
          <br />
          <span className="text-[#CC0000]">Train Smarter.</span>
        </h2>

        {/* Subtext */}
        <p
          className="text-white/50 text-sm md:text-base mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Get free fitness tips and strategies — straight to your inbox. No spam. Unsubscribe anytime.
        </p>

        {/* CTA Button */}
        <Link
          href="https://fitzip-newsletter-069955.beehiiv.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-7 py-3.5 md:py-4 rounded-full bg-[#CC0000] text-white font-black uppercase tracking-widest text-sm md:text-base border-[3px] border-black transition-all duration-200 whitespace-nowrap"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            boxShadow: "5px 5px 0px #000000",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "5px 5px 0px #000000";
          }}
        >
          Subscribe Free
          <svg
            className="inline-block ml-2 w-4 h-4 -rotate-45"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>

        {/* Social proof */}
        <p
          className="text-white/30 text-xs md:text-sm mt-6"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Join 228K+ readers training smarter every week
        </p>
      </div>
    </section>
  );
}
