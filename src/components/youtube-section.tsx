"use client";

import Image from "next/image";
import Link from "next/link";

const VIDEOS = [
  {
    videoId: "cI4AW9Jis40",
    title: "5 Exercises That Fix 95% Of Your Problems",
    views: "3.7M views",
  },
  {
    videoId: "Ujv88lNIxP0",
    title: "How Farmers Walks Completely Change The Human Body",
    views: "1.7M views",
  },
  {
    videoId: "-xPSRN1DOSw",
    title: "Do the Horse Stance EVERY MORNING and THIS Will Happen",
    views: "1.3M views",
  },
  {
    videoId: "n7PWyZl9q-w",
    title: "How Kettlebell Swings Completely Change Your Body",
    views: "1M views",
  },
  {
    videoId: "0sSn9ZEHkxk",
    title: "DO THESE 4 Stretches And See What Happens To Your Body",
    views: "945K views",
  },
];

// Doubled for seamless loop — same technique as hero ticker
const DOUBLED = [...VIDEOS, ...VIDEOS];

function PlayIcon() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
        <svg
          className="w-5 h-5 md:w-7 md:h-7 text-black ml-1"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}

export default function YoutubeSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      {/* Heading */}
      <div className="px-4 md:px-8 mb-10 md:mb-14 text-center">
        <h2
          className="text-3xl md:text-5xl font-black uppercase text-black tracking-tight"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Watch &amp; Learn
        </h2>
        <p
          className="text-black/50 text-sm md:text-base mt-2"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          228K subscribers · Free videos every week
        </p>
      </div>

      {/* Clip container */}
      <div className="overflow-hidden pb-3">
        {/* Scrolling strip — same pattern as hero ticker */}
        <div className="flex video-scroll-strip animate-video-scroll">
          {DOUBLED.map((video, i) => (
            <Link
              key={i}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative shrink-0 rounded-2xl overflow-hidden border-[3px] border-black mx-2.5 md:mx-4"
              style={{
                boxShadow: "6px 6px 0px #000000",
                width: "78vw",
              }}
              aria-label={video.title}
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-video bg-black">
                <Image
                  src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <PlayIcon />
                {/* YouTube badge */}
                <div className="absolute top-2 left-2 bg-[#CC0000] rounded px-1.5 py-0.5 flex items-center gap-1">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                  </svg>
                  <span
                    className="text-white text-[9px] font-black uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    YouTube
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="bg-white px-3 py-3 md:px-5 md:py-4 border-t-2 border-black">
                <p
                  className="text-black font-black text-xs md:text-base leading-snug line-clamp-2 uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {video.title}
                </p>
                <p
                  className="text-black/50 text-[11px] md:text-sm mt-1.5 font-medium"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {video.views}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Subscribe Button */}
      <div className="flex justify-center mt-10 md:mt-14 px-4">
        <Link
          href="https://www.youtube.com/@fitzip"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2.5 md:px-10 md:py-4 rounded-full bg-[#CC0000] text-white font-black uppercase tracking-widest text-sm md:text-lg transition-all duration-200 border-[3px] border-black"
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
          Subscribe on YouTube
        </Link>
      </div>
    </section>
  );
}
