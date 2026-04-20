import Hero from "@/components/hero";
import ProductsSection from "@/components/products-section";
import YoutubeSection from "@/components/youtube-section";
import TestimonialsSection from "@/components/testimonials-section";
import OurStorySection from "@/components/our-story-section";
import BlogsSection from "@/components/blogs-section";
import NewsletterSection from "@/components/newsletter-section"; 
import Footer from "@/components/footer";
import dbConnect from "@/lib/db";
import Product from "@/model/Product";

export default async function Home() {
  await dbConnect();
  const raw = await Product.find({}).lean();
  const dbProducts: { slug: string; name: string; price: number; image: string }[] =
    JSON.parse(JSON.stringify(raw)).map((p: { slug: string; name: string; price: number; image: string }) => ({
      slug: p.slug,
      name: p.name,
      price: p.price,
      image: p.image,
    }));

  return (
    <>
      <Hero />
      <ProductsSection dbProducts={dbProducts} />
      <TestimonialsSection />
      <NewsletterSection />
      <YoutubeSection />
      <OurStorySection />
      <BlogsSection />
      <Footer />
    </>
  );
}
