import type { CSSProperties } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Fallback images if no Sanity slides exist yet
const FALLBACK_SLIDES = [
  { url: "/hero/beesimg_petersburgteens.png", alt: "BEES students" },
  { url: "/hero/beesimg_petersburgteens2.png", alt: "BEES students" },
];

interface HeroSlide {
  _id: string;
  image: any;
  alt: string;
  order: number;
}

async function getHeroSlides() {
  const query = `*[_type == "heroSlide"] | order(order asc) { _id, image, alt, order }`;
  return await client.fetch(query, {}, {
    next: {
      tags: ["heroSlide"],
    },
  });
}

export default async function Home() {
  const sanitySlides: HeroSlide[] = await getHeroSlides();

  // Use Sanity slides if available, otherwise fall back to local images
  const slides = sanitySlides.length > 0
    ? sanitySlides.map((slide) => ({
        url: urlFor(slide.image).width(1920).quality(80).url(),
        alt: slide.alt,
      }))
    : FALLBACK_SLIDES;

  return (
    /* MAIN CONTAINER
       min-h-[calc(100vh-4rem)]: Ensures the hero section takes up the full height minus the navbar (4rem = 64px).
       flex flex-col items-center justify-center: This is the "Flexbox Trick" to perfectly center content vertically and horizontally.
       pt-16: Adds top padding to account for the sticky navbar.
    */
    <main className="hero-page relative -mt-8 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center p-10 pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 w-[100dvw] -translate-x-1/2 overflow-hidden"
      >
        <div
          className="hero-slideshow"
          style={
            { "--hero-duration": `${slides.length * 5}s` } as CSSProperties
          }
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

      {/* THE LOGO */}
      <img 
        src="/circular_bees_logo.png" 
        alt="BEES Logo" 
        className="w-48 h-48 mb-8 object-contain" 
      />

      {/* HEADLINE */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white text-center leading-tight break-words px-4 mb-8">
      Black Economic Empowerment Society
      </h1>
      
      {/* SUBTITLE */}
      <p className="text-lg text-white/85 text-center max-w-md mx-auto mt-4 mb-8">
      Building wealth, fostering community, and creating opportunities for the future leaders of tomorrow.
      </p>
      
      {/* CALL TO ACTION (CTA) BUTTONS */}
      <div className="flex gap-4">
        <a href="/mission" className="px-6 py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition">
          Our Mission
        </a>
        <a href="/events" className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-green-400 transition">
          Upcoming Events
        </a>
      </div>
      </div>
    </main>
  );
}
