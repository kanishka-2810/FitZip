"use client";

import Link from "next/link";

const BLOGS = [
  {
    title: "The Real Goal of Fitness After 35",
    date: "Mar 15, 2026",
    readTime: "2 min read",
    slug: "the-real-goal-of-fitness-after-35",
    image: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/069955a0-7b25-41cc-b6d1-b5e9af4e1b52/FitZip_Logo_Shield_Red.png",
  },
  {
    title: "The Two Things Your Body Craves Most",
    date: "Mar 3, 2026",
    readTime: "2 min read",
    slug: "the-two-things-your-body-craves-most",
    image: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/069955a0-7b25-41cc-b6d1-b5e9af4e1b52/FitZip_Logo_Shield_Red.png",
  },
  {
    title: "Try This — It Reveals Your Real Age",
    date: "Feb 24, 2026",
    readTime: "2 min read",
    slug: "try-this-it-reveals-your-real-age",
    image: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/069955a0-7b25-41cc-b6d1-b5e9af4e1b52/FitZip_Logo_Shield_Red.png",
  },
];

export default function BlogsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8 border-t-4 border-black">
      {/* Heading */}
      <h2
        className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-center text-black tracking-tight mb-10 md:mb-14"
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        Read. Grow. Train.
      </h2>

      {/* Cards — 1 col mobile, 3 col desktop */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {BLOGS.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="group flex flex-col bg-white border-[3px] border-black rounded-2xl overflow-hidden transition-transform duration-200 hover:-translate-y-1"
            style={{ boxShadow: "6px 6px 0px #000000" }}
          >
            {/* Image */}
            <div
              className="relative w-full bg-[#CC0000] overflow-hidden flex items-center justify-center"
              style={{ aspectRatio: "16/10" }}
            >
              <p
                className="text-white font-black uppercase select-none leading-none text-[56px] md:text-[clamp(36px,9vw,80px)]"
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontWeight: 900,
                }}
              >
                FITZIP
              </p>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-5 py-5 md:px-6 md:py-6 border-t-[3px] border-black">
              {/* Date + read time */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-[11px] md:text-xs font-black uppercase tracking-widest text-black/40"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {blog.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-black/30" />
                <span
                  className="text-[11px] md:text-xs font-black uppercase tracking-widest text-black/40"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {blog.readTime}
                </span>
              </div>

              {/* Title */}
              <p
                className="text-black font-black uppercase text-base md:text-xl leading-tight tracking-tight flex-1"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                {blog.title}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-1.5">
                <span
                  className="text-xs md:text-sm font-black uppercase tracking-widest text-[#CC0000]"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Read More button */}
      <div className="flex justify-center mt-10 md:mt-14">
        <Link
          href="/blogs"
          className="inline-block px-6 py-2.5 md:px-10 md:py-4 rounded-full bg-[#CC0000] text-white font-black uppercase tracking-widest text-sm md:text-lg transition-all duration-200 border-[3px] border-black"
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
          Read More
        </Link>
      </div>
    </section>
  );
}
