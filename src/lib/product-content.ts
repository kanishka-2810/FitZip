// All marketing copy keyed by product slug.
// DB stores: name, price, image, fileUrl, slug, category, upsellProducts, upsellDiscount
// This file stores: everything else (UI-only, never in DB)

export interface ProductContent {
  subtitle: string;
  tag: string;
  tagColor: string;
  originalPrice: number;
  headline: string;
  bullets: string[];
  whatYouGet: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
  reviews: { name: string; text: string; stars: number }[];
  // For the products listing page
  rating: number;
  reviewCount: number;
  features: string[];
}

export const PRODUCT_CONTENT: Record<string, ProductContent> = {
  "reset-your-body": {
    subtitle: "Workout Program",
    tag: "BEST SELLER",
    tagColor: "bg-black text-white",
    originalPrice: 47,
    rating: 4.8,
    reviewCount: 124,
    features: ["30-Day Plan", "No Equipment", "Joint-Friendly", "PDF Instant Download"],
    headline:
      "Weakness and daily aches aren't \"just aging.\" They're often the result of under-trained stabilizers and ignored mobility. This guide helps you fix what hurts now while building a body designed to feel strong and capable for the long run.",
    bullets: [
      "💪 Move heavy stuff without that \"one wrong move\" fear.",
      "🌅 Wake up feeling loose, solid, and ready to go.",
      "🔋 Work out better and recover faster because your body finally feels supported.",
      "🎯 Keep up with your kids or grandkids for years — not minutes.",
      "⛰️ Walk farther, climb stairs easier, and move smoother.",
    ],
    whatYouGet: [
      {
        title: "The 4-Week Foundation Plan (Your Reset Phase)",
        description:
          "A step-by-step weekly plan that rebuilds your base: mobility + stability + control. You'll know exactly what to do each day, even if you're busy.",
      },
      {
        title: "Pain-Specific Quick Fix Routines (Your \"When This Hurts\" Toolkit)",
        description:
          "Short routines for common problem areas like low back, hips, shoulders, knees, neck, and more — so you're not guessing or Googling random drills.",
      },
      {
        title: "Ongoing Routines (Your Keep-It-For-Life Plan)",
        description:
          "Simple maintenance options you can repeat after the 4 weeks so your results don't disappear the moment life gets chaotic.",
      },
      {
        title: "Printable Charts + Step-by-Step Visuals",
        description:
          "Clear instructions, quick references, and visuals that make it easy to execute — follow along without overthinking.",
      },
    ],
    faqs: [
      { q: "How long are the workouts?", a: "Sessions are 10–20 minutes. The goal is consistency and quality — not crushing yourself." },
      { q: "Do I need equipment?", a: "95% is bodyweight. Minimal equipment is helpful (like a band or pull-up bar), but the plan doesn't depend on a full gym." },
      { q: "Is this for beginners?", a: "Yes. This is built for regular people — especially if you feel stiff, weak, or \"off\" and want a clear plan." },
      { q: "What if I already lift or work out?", a: "Even better. This improves your foundation so lifting feels smoother, safer, and more effective." },
      { q: "How fast will I feel a difference?", a: "Many people notice changes in the first 1–2 weeks. Bigger changes come from finishing the full 4 weeks and then maintaining." },
      { q: "What if I'm dealing with real pain or an injury?", a: "This is not medical advice. If you have a serious injury, talk to a qualified professional first." },
    ],
    reviews: [
      { name: "Zachary G.", stars: 5, text: "Thanks for the great videos, ebooks, and well-spaced emails. You're not spamming — you're actually delivering value every time. I genuinely appreciate what you're doing." },
      { name: "Michael R.", stars: 5, text: "The ebook presents each exercise in a way that's really straightforward to follow. The body diagrams with highlighted focus areas are well done. Low impact but genuinely effective for getting mobility back." },
      { name: "David K.", stars: 5, text: "Notifications are always on for this channel. The content keeps getting better and the ebook took everything to the next level for me. Trying to hit 10,000 steps a day now because of the advice here." },
      { name: "Ryan T.", stars: 5, text: "Bought the program Friday night, read the whole PDF by Saturday morning. Clean layout, no filler, every exercise has a real reason behind it. Best money I've spent on fitness in years." },
      { name: "Sandra M.", stars: 5, text: "Three weeks in and my lower back pain is basically gone. Was skeptical about bodyweight-only but the progression is smart — it actually builds on itself week by week. Didn't expect this." },
      { name: "Pete H.", stars: 5, text: "Wasn't sure what to expect but gave it a shot. Two months in and my knees don't ache after workouts anymore. Simple movements, clear instructions. Worth it." },
    ],
  },

  "reset-your-plate": {
    subtitle: "Nutrition Guide",
    tag: "NEW",
    tagColor: "bg-[#CC0000] text-white",
    originalPrice: 39.99,
    rating: 4.7,
    reviewCount: 89,
    features: ["Meal Plans Included", "Shopping Lists", "Macro Tracking", "PDF Instant Download"],
    headline:
      "You don't need to count every calorie or give up the food you love. You just need a simple system that works with your life — not against it. Reset Your Plate gives you exactly that.",
    bullets: [
      "🥗 Eat real food and still hit your goals — no starving required.",
      "⚡ Fuel your workouts and recover faster with the right meals.",
      "📋 Know exactly what to buy and what to cook every week.",
      "🔥 Lose fat while keeping your muscle — the sustainable way.",
      "🧠 Finally understand what your body actually needs to thrive.",
    ],
    whatYouGet: [
      {
        title: "The Deep Green Nutrition System",
        description:
          "A complete framework to build your meals around whole, nutrient-dense foods that support fat loss and muscle building — without obsessing over macros.",
      },
      {
        title: "Done-For-You Meal Plans",
        description:
          "Weekly meal plans that take the guesswork out. Know exactly what to eat for breakfast, lunch, dinner, and snacks — every single day.",
      },
      {
        title: "Shopping Lists Included",
        description:
          "Print-ready grocery lists for each week so you spend less time thinking and more time cooking simple, effective meals.",
      },
      {
        title: "Macro Tracking Guide",
        description:
          "A simple approach to tracking protein, carbs, and fats — so you can stay on track without becoming a calorie-counting robot.",
      },
    ],
    faqs: [
      { q: "Do I need to count calories?", a: "No. The system is built around food quality and portion awareness — not obsessive tracking." },
      { q: "Is this for weight loss or muscle gain?", a: "Both. The framework is flexible enough to support fat loss, muscle building, or maintenance — depending on your goal." },
      { q: "How complex are the recipes?", a: "Very simple. These are real meals for real people with real schedules. Most take under 20 minutes." },
      { q: "Do I need to buy expensive supplements?", a: "No. This guide is built around whole foods. Supplements are optional and not required to see results." },
      { q: "Can I combine this with the Workout Program?", a: "Absolutely — it's designed to pair with Reset Your Body. Nutrition + movement = the complete system." },
    ],
    reviews: [
      { name: "Emma L.", stars: 5, text: "Lost 8 lbs in the first month without feeling deprived once. This guide is incredible." },
      { name: "Carlos M.", stars: 5, text: "The shopping lists alone are worth it. No more wasted groceries or guessing." },
      { name: "Priya S.", stars: 5, text: "Simple, clean, effective. Finally a nutrition guide that doesn't make me feel overwhelmed." },
      { name: "Tom H.", stars: 5, text: "Combined this with the workout program and the results have been crazy." },
      { name: "Jessica F.", stars: 5, text: "I've tried every diet. This is the first thing that actually stuck." },
      { name: "Ryan B.", stars: 5, text: "Meal plans are so easy to follow. My whole family is eating better now." },
    ],
  },
};
