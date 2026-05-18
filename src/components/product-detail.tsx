"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { useCartStore } from "@/store/cart";

export interface ProductData {
  _id: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  image: string;
  tag: string;
  tagColor: string;
  headline: string;
  bullets: string[];
  whatYouGet: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
  reviews: { name: string; text: string; stars: number }[];
  recommended: {
    slug: string;
    name: string;
    subtitle: string;
    price: number;
    originalPrice: number;
    image: string;
  };
  upsellOffer?: {
    productId: string;
    slug: string;
    name: string;
    subtitle: string;
    price: number;
    originalPrice: number;
    image: string;
  };
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="w-4 h-4" fill={s <= count ? "#CC0000" : "#e5e7eb"} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-2 border-black/10 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span
          className="font-black uppercase text-sm md:text-base text-black"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {q}
        </span>
        <span className={`shrink-0 w-6 h-6 flex items-center justify-center border-2 border-black rounded-full transition-transform duration-200 ${open ? "rotate-45 bg-black text-white" : "bg-white"}`}>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && (
        <p
          className="pb-4 text-sm text-black/60 leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

export default function ProductDetail({ product }: { product: ProductData }) {
  const { addItem } = useCartStore();
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  // Gallery images per product slug
  const GALLERY_IMAGES: Record<string, string[]> = {
    "reset-your-body": [
      product.image,
      "/reset-your-body-pics/part1.png",
      "/reset-your-body-pics/part2.png",
      "/reset-your-body-pics/part3.png",
      "/reset-your-body-pics/charts.png",
    ],
  };

  const galleryImages = GALLERY_IMAGES[product.slug] ?? [product.image];
  // Pad to 5 slots with nulls
  const thumbnails: (string | null)[] = [
    ...galleryImages,
    ...Array(Math.max(0, 5 - galleryImages.length)).fill(null),
  ];
  const [activeImage, setActiveImage] = useState<string>(product.image);

  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 0.9;
    const step = () => {
      if (!pausedRef.current && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    let startX = 0;
    let startY = 0;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const dx = Math.abs(e.touches[0].clientX - startX);
      const dy = Math.abs(e.touches[0].clientY - startY);
      if (dx > dy) pausedRef.current = true;
    };

    const onTouchEnd = () => { pausedRef.current = false; };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const handleAddToCart = () => {
    addItem({
      productId: product._id,
      slug: product.slug,
      name: product.name,
      subtitle: product.subtitle,
      price: product.price,
      image: product.image,
      upsellOffer: product.upsellOffer,
    });
  };

  return (
    <>
      {/* ── HERO: Image + Buy Box ── */}
      <section className="w-full bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

          {/* Left — Image Gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div
              className="relative w-full aspect-3/4 bg-[#f5f5f5] border-[3px] border-black rounded-2xl overflow-hidden"
              style={{ boxShadow: "8px 8px 0px #000000" }}
            >
              <Image
                src={activeImage}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-opacity duration-200"
                priority
              />
              <span
                className={`absolute top-4 left-4 ${product.tagColor} text-[10px] font-black uppercase tracking-widest px-3 py-1.5 border-2 border-black`}
                style={{ fontFamily: "var(--font-montserrat)", boxShadow: "3px 3px 0px #000000" }}
              >
                {product.tag}
              </span>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-2">
              {thumbnails.map((src, i) => (
                <button
                  key={i}
                  onClick={() => src && setActiveImage(src)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-[3px] transition-all duration-150 bg-[#f5f5f5]
                    ${src && activeImage === src ? "border-black" : "border-black/20"}
                    ${src ? "cursor-pointer hover:border-black/60" : "cursor-default"}`}
                >
                  {src ? (
                    <Image
                      src={src}
                      alt={`${product.name} view ${i + 1}`}
                      fill
                      sizes="20vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#ebebeb]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right — Buy box */}
          <div className="flex flex-col gap-5">
            <div>
              <p
                className="text-[#CC0000] text-xs font-black uppercase tracking-widest mb-1"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {product.subtitle}
              </p>
              <h1
                className="text-3xl md:text-5xl font-black uppercase leading-tight text-black"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {product.name}
              </h1>
            </div>

            {/* Stars row */}
            <div className="flex items-center gap-2">
              <Stars count={5} />
              <span
                className="text-xs text-black/50"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                ({product.reviews.length * 12}+ reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span
                className="text-4xl md:text-5xl font-black text-black"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                ${product.price}
              </span>
              <span
                className="text-xl text-black/30 line-through"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                ${product.originalPrice}
              </span>
              <span
                className="bg-[#CC0000] text-white text-xs font-black px-2.5 py-1 uppercase tracking-wide border-2 border-black"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {discount}% OFF
              </span>
            </div>

            {/* Headline */}
            <p
              className="text-black/70 text-sm md:text-base leading-relaxed border-l-4 border-[#CC0000] pl-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {product.headline}
            </p>

            {/* Bullets */}
            <ul className="flex flex-col gap-2">
              {product.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-black/80"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  <span className="shrink-0 mt-0.5">{b.split(" ")[0]}</span>
                  <span>{b.split(" ").slice(1).join(" ")}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#CC0000] text-white font-black uppercase tracking-widest text-sm md:text-base py-4 border-[3px] border-black transition-all duration-200 hover:bg-black mt-2"
              style={{ fontFamily: "var(--font-montserrat)", boxShadow: "5px 5px 0px #000000" }}
            >
              Add To Cart →
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 pt-1">
              {["Instant Download", "PDF Format", "No Gym Needed"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <span className="text-[#CC0000] text-lg">✓</span>
                  <span
                    className="text-[13px] text-black/50 font-black uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS GRID ── */}
      <section className="w-full bg-black border-y-4 border-black py-12 md:py-16 px-4 md:px-8">
        <p
          className="text-center text-white text-[10px] font-black uppercase tracking-widest mb-2"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          ✦ What People Are Saying ✦
        </p>
        <h2
          className="text-center text-white text-2xl md:text-4xl font-black uppercase mb-10"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Real Results,{" "}
          <span className="text-[#CC0000]">Real People</span>
        </h2>
        {/* Mobile: auto-scroll + touch drag */}
        <div
          ref={scrollRef}
          className="flex sm:hidden overflow-x-auto gap-4 pb-2 scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {[...product.reviews, ...product.reviews].map((r, i) => (
            <div
              key={i}
              className="flex flex-col bg-white border-[3px] border-white/20 rounded-2xl p-5 shrink-0 w-[80vw]"
              style={{ boxShadow: "4px 4px 0px #CC0000" }}
            >
              <Stars count={r.stars} />
              <p className="text-sm text-black/70 mt-3 leading-relaxed flex-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mt-4 pt-3 border-t border-black/10" style={{ fontFamily: "var(--font-montserrat)" }}>
                — {r.name}
              </p>
            </div>
          ))}
        </div>

        {/* Tablet + Desktop: grid */}
        <div className="hidden sm:grid max-w-6xl mx-auto grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {product.reviews.map((r, i) => (
            <div
              key={i}
              className="flex flex-col bg-white border-[3px] border-white/20 rounded-2xl p-5 md:p-6"
              style={{ boxShadow: "4px 4px 0px #CC0000" }}
            >
              <Stars count={r.stars} />
              <p className="text-sm text-black/70 mt-3 leading-relaxed flex-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mt-4 pt-3 border-t border-black/10" style={{ fontFamily: "var(--font-montserrat)" }}>
                — {r.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="w-full bg-white border-b-4 border-black py-14 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-black uppercase text-center mb-2"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            What&apos;s{" "}
            <span className="bg-[#CC0000] text-white px-2">Inside</span>
          </h2>
          <p
            className="text-center text-black/50 text-medium mb-12 font-semibold"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Everything included in your download
          </p>

          <div className="flex flex-col gap-4">
            {product.whatYouGet.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 md:p-6 border-[3px] border-black rounded-xl bg-white"
                style={{ boxShadow: "5px 5px 0px #000000" }}
              >
                <div className="shrink-0 w-8 h-8 bg-[#CC0000] border-2 border-black flex items-center justify-center text-white font-black text-sm">
                  {i + 1}
                </div>
                <div>
                  <p
                    className="font-black uppercase text-sm md:text-base text-black mb-1"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-xs md:text-sm text-black/60 leading-relaxed"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <button
              onClick={handleAddToCart}
              className="bg-[#CC0000] text-white font-black uppercase tracking-widest text-sm px-10 py-4 border-[3px] border-black transition-all duration-200 hover:bg-black"
              style={{ fontFamily: "var(--font-montserrat)", boxShadow: "5px 5px 0px #000000" }}
            >
              Add To Cart — ${product.price} →
            </button>
            <p
              className="text-black/50 text-[13px] uppercase tracking-widest mt-3 font-semibold"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              * Digital product delivered via email. No physical item.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="w-full bg-[#f5f5f5] border-b-4 border-black py-14 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-black uppercase text-center mb-10"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            FAQ
          </h2>
          <div className="bg-white border-[3px] border-black rounded-xl px-6 py-2" style={{ boxShadow: "5px 5px 0px #000000" }}>
            {product.faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── RECOMMENDED ── */}
      <section className="w-full bg-white border-b-4 border-black py-14 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-black uppercase text-center mb-2"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Pair It With
          </h2>
          <p
            className="text-center text-black/40 text-sm mb-10"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            When it arrives — pair this workout with our nutrition guide for the complete system
          </p>

          <Link
            href={`/products/${product.recommended.slug}`}
            className="group flex flex-col md:flex-row bg-white border-[3px] border-black rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{ boxShadow: "8px 8px 0px #000000" }}
          >
            <div className="relative w-full aspect-4/3 md:w-72 md:aspect-auto md:self-stretch bg-[#f5f5f5] shrink-0">
              <Image
                src={product.recommended.image}
                alt={product.recommended.name}
                fill
                sizes="(max-width: 768px) 100vw, 288px"
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center gap-3">
              <p
                className="text-[#CC0000] text-xs font-black uppercase tracking-widest"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {product.recommended.subtitle}
              </p>
              <h3
                className="text-2xl md:text-3xl font-black uppercase text-black"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {product.recommended.name}
              </h3>
              <span
                className="self-start bg-black text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 border-2 border-black mb-1"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                ✦ Coming Soon
              </span>
              <span
                className="self-start bg-[#CC0000] text-white text-xs font-black uppercase tracking-widest px-5 py-2.5 border-2 border-black transition-all duration-200 group-hover:bg-black"
                style={{ fontFamily: "var(--font-montserrat)", boxShadow: "3px 3px 0px #000000" }}
              >
                View Program →
              </span>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
