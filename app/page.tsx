import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import type { HeroSlide } from "@/sanity.types";

export const metadata: Metadata = {
  title: "BEES | Black Economic Empowerment Society",
  description: "Building wealth, fostering community, and creating opportunities for Black students at UVA.",
};

// Fallback images if no Sanity slides exist yet
const FALLBACK_SLIDES = [
  { url: "/hero/beesimg_petersburgteens.png", alt: "BEES students" },
  { url: "/hero/beesimg_petersburgteens2.png", alt: "BEES students" },
];

async function getHeroSlides() {
  const query = `*[_type == "heroSlide"] | order(order asc) { _id, image, alt, order }`;
  return await client.fetch(query, {}, {
    next: { tags: ["heroSlide"] },
  });
}

export default async function Home() {
  // ERROR HANDLING: if Sanity is down, fall back to local images instead of crashing
  let sanitySlides: HeroSlide[] = [];
  try {
    sanitySlides = await getHeroSlides();
  } catch (error) {
    console.error("Failed to load hero slides:", error);
  }

  const slides = sanitySlides.length > 0
    ? sanitySlides.map((slide) => ({
        url: urlFor(slide.image!).width(1920).quality(80).url(),
        alt: slide.alt ?? "BEES students",
      }))
    : FALLBACK_SLIDES;

  return (
    <main className="hero-page relative -mt-8 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center p-10 pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 w-[100dvw] -translate-x-1/2 overflow-hidden"
      >
        <div
          className="hero-slideshow"
          style={{ "--hero-duration": `${slides.length * 5}s` } as CSSProperties}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.url}
              className="hero-slide"
              style={{
                backgroundImage: `url('${slide.url}')`,
                animationDelay: `${index * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/30 via-black/10 to-green-900/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/circular_bees_logo.png"
          alt="BEES Logo"
          width={192}
          height={192}
          priority
          className="mb-8 object-contain"
        />

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white text-center leading-tight break-words px-4 mb-8">
          Black Economic Empowerment Society
        </h1>

        <p className="text-lg text-white/85 text-center max-w-md mx-auto mt-4 mb-8">
          Building wealth, fostering community, and creating opportunities for the future leaders of tomorrow.
        </p>

        <div className="flex gap-4">
          <Link href="/mission" className="px-6 py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition">
            Our Mission
          </Link>
          <Link href="/events" className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-green-400 transition">
            Upcoming Events
          </Link>
        </div>
      </div>
    </main>
  );
}