import type { CSSProperties } from "react";

const HERO_SLIDES = [
  "/hero/beesimg_petersburgteens.png",
  "/hero/beesimg_petersburgteens2.png",
] as const;

export default function Home() {
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
            { "--hero-duration": `${HERO_SLIDES.length * 5}s` } as CSSProperties
          }
        >
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide}
              className="hero-slide"
              style={{
                backgroundImage: `url('${slide}')`,
                animationDelay: `${index * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/30 via-black/10 to-green-900/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center">

      
      {/* THE LOGO 
         The <Image /> component instead of <img> because it automatically optimizes the file size for us.
         
         object-contain: Ensures the logo doesn't get stretched if the width/height change.
      */}
      <img 
        src="/circular_bees_logo.png" 
        alt="BEES Logo" 
        className="w-48 h-48 mb-8 object-contain" 
      />

      {/* HEADLINE
         font-extrabold: Makes the text very thick (good for headers).
         text-green-800: Uses the dark green from your brand palette.
      */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white text-center leading-tight break-words px-4 mb-8">
      Black Economic Empowerment Society
      </h1>
      
      {/* SUBTITLE
         max-w-2xl: Restricts the width so the text doesn't stretch across the entire 
         screen on wide monitors (which makes it hard to read).
      */}
      <p className="text-lg text-white/85 text-center max-w-md mx-auto mt-4 mb-8">
      Building wealth, fostering community, and creating opportunities for the future leaders of tomorrow.
      </p>
      
      {/* CALL TO ACTION (CTA) BUTTONS 
         flex gap-4: Puts the buttons side-by-side with space in between.
      */}
      <div className="flex gap-4">
        
        {/* PRIMARY BUTTON (Filled)
           Standard 'a' tags cause a full page refresh (screen flash).
        */}
        <a href="/mission" className="px-6 py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition">
          Our Mission
        </a>

        {/* SECONDARY BUTTON (Outlined)
           border-2: Adds the outline.
           hover:bg-green-100: Adds a light tint when you hover, instead of a solid color change.
        */}
        <a href="/events" className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-green-400 transition">
          Upcoming Events
        </a>
      </div>
      </div>
    </main>
  );
}