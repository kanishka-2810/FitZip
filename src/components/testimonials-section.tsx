"use client";

import { useState } from "react";

const YOUTUBE_REVIEWS = [
  {
    name: "Justin B.",
    handle: "@justinbrink7425",
    rating: 5,
    text: "I'm not gonna lie — these workouts are HIGHLY underrated. I've been lifting for years and this still helped me. Don't sleep on this channel.",
    tag: "230K Community",
  },
  {
    name: "Barbara B.",
    handle: "@barbarabellay466",
    rating: 5,
    text: "Been adding these to my weekly routine and I'm already seeing results. Endurance is up, getting stronger, and I'm finally on track to hit my goal weight.",
    tag: "230K Community",
  },
  {
    name: "Hippy2021",
    handle: "@Hippy2021",
    rating: 5,
    text: "I'm 71. No shoulder pain, no back pain. Walk hours daily, hanging bars, swimming every day. Daily stretching did all of this. This channel is a reminder of what most people ignore.",
    tag: "230K Community",
  },
  {
    name: "Chuck F.",
    handle: "@chuckf4333",
    rating: 5,
    text: "Well produced, no unnecessary fluff. I'm already recommending this to my patients who sit at a computer all day. 45 years of chiropractic practice — this is exactly what people need.",
    tag: "230K Community",
  },
  {
    name: "Vital After 50",
    handle: "@VitalAfter50",
    rating: 5,
    text: "Amazing how one simple movement can improve grip strength, posture, core stability, and even mental resilience. The tips on avoiding mistakes and progression are super helpful. Adding this to my routine.",
    tag: "230K Community",
  },
  {
    name: "Jemez F.",
    handle: "@jemezfun9767",
    rating: 5,
    text: "37 years sitting at a desk. Started walking 2 miles a day, squats, lunges, and daily stretches after finding this channel. I'm 59 and finally feel like I'm in control of my body again.",
    tag: "230K Community",
  },
];

const PRODUCT_REVIEWS = [
  {
    name: "Zachary G.",
    handle: "@zacharyg",
    rating: 5,
    text: "Thanks for the great videos, ebooks, and well-spaced emails. You're not spamming — you're actually delivering value every time. I genuinely appreciate what you're doing.",
    tag: "Workout Program",
  },
  {
    name: "Michael R.",
    handle: "@michaelr_fit",
    rating: 5,
    text: "The ebook presents each exercise in a way that's really straightforward to follow. The body diagrams with highlighted focus areas are well done — honestly reminds me there's still a fit guy underneath what I see in the mirror. Low impact but genuinely effective for getting mobility back.",
    tag: "Workout Program",
  },
  {
    name: "David K.",
    handle: "@davidk_trains",
    rating: 5,
    text: "Notifications are always on for this channel. The content keeps getting better and the ebook took everything to the next level for me. Trying to hit 10,000 steps a day now because of the advice here.",
    tag: "Workout Program",
  },
  {
    name: "Ryan T.",
    handle: "@ryant_moves",
    rating: 5,
    text: "Bought the program Friday night, read the whole PDF by Saturday morning. Clean layout, no filler, every exercise has a real reason behind it. Best money I've spent on fitness in years.",
    tag: "Workout Program",
  },
  {
    name: "Sandra M.",
    handle: "@sandramoves",
    rating: 5,
    text: "Three weeks in and my lower back pain is basically gone. Was skeptical about bodyweight-only but the progression is smart — it actually builds on itself week by week. Didn't expect this.",
    tag: "Workout Program",
  },
  {
    name: "Pete H.",
    handle: "@peteh_strong",
    rating: 5,
    text: "I've bought programs from big-name trainers that were overpriced and hollow. This is the opposite. No gym, no equipment, and I'm seeing more progress than I did in 6 months at the gym.",
    tag: "Workout Program",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className="w-3 h-3 md:w-4 md:h-4"
          fill={s <= rating ? "#CC0000" : "#e5e7eb"}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState<"youtube" | "products">("youtube");

  const reviews = active === "youtube" ? YOUTUBE_REVIEWS : PRODUCT_REVIEWS;

  return (
    <section className="w-full bg-white pt-16 pb-16 md:pt-24 md:pb-24">
      {/* Heading */}
      <div className="text-center px-4 mb-10 md:mb-14">
        <h2
          className="text-3xl md:text-5xl font-black uppercase text-black tracking-tight"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          What People Say
        </h2>
        <p
          className="text-black/50 text-sm md:text-base mt-2"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Real results. Real people.
        </p>

        {/* Toggle */}
        <div
          className="inline-flex mt-8 border-[3px] border-black rounded-full overflow-hidden"
          style={{ boxShadow: "4px 4px 0px #000000" }}
        >
          <button
            onClick={() => setActive("youtube")}
            className="px-4 py-2 md:px-8 md:py-3 text-[10px] md:text-sm font-black uppercase tracking-wider md:tracking-widest transition-colors duration-150 whitespace-nowrap"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              background: active === "youtube" ? "#0A0A0A" : "#ffffff",
              color: active === "youtube" ? "#ffffff" : "#0A0A0A",
            }}
          >
            ⭐ YouTube Reviews
          </button>
          <button
            onClick={() => setActive("products")}
            className="px-4 py-2 md:px-8 md:py-3 text-[10px] md:text-sm font-black uppercase tracking-wider md:tracking-widest transition-colors duration-150 border-l-[3px] border-black whitespace-nowrap"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              background: active === "products" ? "#0A0A0A" : "#ffffff",
              color: active === "products" ? "#ffffff" : "#0A0A0A",
            }}
          >
            ⭐ Product Reviews
          </button>
        </div>
      </div>

      {/* Cards grid — 2 cols on mobile, 3 on desktop */}
      <div className="px-3 md:px-8 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {reviews.map((r, i) => (
          <div
            key={`${active}-${i}`}
            className="flex flex-col bg-white border-[3px] border-black rounded-xl md:rounded-2xl p-3 md:p-6"
            style={{ boxShadow: "4px 4px 0px #000000" }}
          >
            {/* Stars + tag */}
            <div className="flex flex-wrap items-start justify-between gap-1.5 mb-2 md:mb-3">
              <Stars rating={r.rating} />
              <span
                className="text-[8px] md:text-xs font-black uppercase tracking-wider text-white bg-black rounded-full px-2 py-0.5 md:px-2.5 md:py-1 leading-tight"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {r.tag}
              </span>
            </div>

            {/* Review text */}
            <p
              className="text-black/80 text-[11px] md:text-base leading-snug md:leading-relaxed flex-1 line-clamp-4 md:line-clamp-none"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              &ldquo;{r.text}&rdquo;
            </p>

            {/* Reviewer */}
            <div className="mt-3 pt-3 border-t-2 border-black/10 flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-black flex items-center justify-center shrink-0">
                <span
                  className="text-white text-[10px] md:text-xs font-black"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {r.name[0]}
                </span>
              </div>
              <div>
                <p
                  className="text-black font-black text-[11px] md:text-sm leading-tight"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {r.name}
                </p>
                <p
                  className="text-black/40 text-[10px] md:text-xs"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {r.handle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
