export default function MissionPage() {
  return (
    <div className="p-10 max-w-7xl mx-auto">
      {/* ═══════════════════════════════════════════════
          SECTION 1 — OUR MISSION
      ═══════════════════════════════════════════════ */}
      <section className="text-center mb-20">
        <h1 className="text-4xl font-bold mb-6 text-green-800">Our Mission</h1>

        <p className="text-xl leading-relaxed text-gray-800 mb-10 max-w-3xl mx-auto">
          &ldquo;To increase financial literacy, emphasize the importance of asset
          ownership, and empower Black students to start their own businesses.
          Expanding knowledge and access to financial capital will be a
          meaningful step in addressing historical inequities facing the Black
          community and lead to economic empowerment.&rdquo;
        </p>

        <div className="p-8 bg-green-50 rounded-xl border border-green-200 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Core Values</h2>
          <ul className="list-none space-y-3 text-lg text-gray-700">
            <li>🌱 <strong>Economic Literacy</strong> — Building financial freedom.</li>
            <li>🤝 <strong>Community Support</strong> — Lifting as we climb.</li>
            <li>🚀 <strong>Professional Growth</strong> — Preparing for the future.</li>
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2 — OUR STORY
      ═══════════════════════════════════════════════ */}
      <section className="text-center">
        <h2 id="our-story" className="text-4xl font-bold text-green-800 mb-6 scroll-mt-20">Our Story</h2>
        <p className="text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto mb-6">
          The Black Economic Empowerment Society (BEES) was founded by{" "}
          <strong className="text-green-800">Syrell Grier</strong> with a bold
          vision: to equip Black students with the financial knowledge,
          professional skills, and entrepreneurial mindset needed to build
          generational wealth and uplift their communities.
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
          Since its founding{" "}
          <span className="italic text-gray-400">[founding year — placeholder]</span>,
          BEES has grown into a vibrant community of students passionate about
          economic justice, career readiness, and collective empowerment.
        </p>

        <div className="mt-10 p-8 bg-green-50 rounded-xl border border-green-200 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-green-700 mb-4">Key Milestones</h3>
          <ul className="space-y-3 text-gray-700 text-left">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-lg">🐝</span>
              <span>
                <strong>Founded</strong> by Syrell Grier at the University of Virginia
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-lg">📌</span>
              <span className="italic text-gray-400">
                [Additional milestones — placeholder. Add key events, growth
                moments, partnerships, or achievements here.]
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
