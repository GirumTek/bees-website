export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-10">
      
      {/* THE LOGO */}
  
      <img 
        src="/bees-logo.jpg" 
        alt="BEES Logo" 
        className="w-48 h-48 mb-8 object-contain" 
      />

      {/* The Big Headline */}
      <h1 className="text-6xl font-extrabold text-green-800 mb-6">
        Black Economic Empowerment Society
      </h1>
      
      {/* The Subtitle */}
      <p className="text-xl text-gray-700 max-w-2xl mb-8">
        Building wealth, fostering community, and creating opportunities for the future leaders of tomorrow.
      </p>
      
      {/* The Buttons */}
      <div className="flex gap-4">
        <a href="/mission" className="px-6 py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition">
          Our Mission
        </a>
        <a href="/events" className="px-6 py-3 border-2 border-green-700 text-green-700 font-bold rounded-lg hover:bg-green-100 transition">
          Upcoming Events
        </a>
      </div>
    </main>
  );
}