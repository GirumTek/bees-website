export default function MissionPage() {
  return (
    /* FIXED: Changed from max-w-4xl to max-w-7xl to ensure consistency with the Navbar and other pages on large monitors */
    <div className="p-10 max-w-7xl mx-auto text-center">
      {/* Main Title */}
      <h1 className="text-4xl font-bold mb-6 text-green-800">Our Mission</h1>
      
      {/* The Mission Statement */}
      <p className="text-xl leading-relaxed text-gray-800 mb-10">
        "To increase financial literacy,emphasize the importance of asset ownership, and empower Black students to start their own
         businesses. Expanding knowledge and access to financial capital will be a meaningful step in 
         addressing historical inequities facing the Black community and lead to economic empowerment."
      </p>

      {/* A Box for Core Values */}
      <div className="p-8 bg-green-50 rounded-xl border border-green-200">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Core Values</h2>
        <ul className="list-none space-y-3 text-lg text-gray-700">
          <li>🌱 <strong>Economic Literacy</strong> - Building financial freedom.</li>
          <li>🤝 <strong>Community Support</strong> - Lifting as we climb.</li>
          <li>🚀 <strong>Professional Growth</strong> - Preparing for the future.</li>
        </ul>
      </div>
    </div>
  );
}