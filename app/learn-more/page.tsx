export default function LearnMorePage() {
  return (
    <div className="bg-white min-h-screen p-10">
      <div className="max-w-7xl mx-auto">

        {/* ═══════════════════════════════════════════════
            SECTION 1 — OUR STORY / ABOUT US
        ═══════════════════════════════════════════════ */}
        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold text-green-800 mb-6">Our Story</h1>
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

          {/* Milestones placeholder */}
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

        {/* ═══════════════════════════════════════════════
            SECTION 2 — WHY BEES?
        ═══════════════════════════════════════════════ */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
            Why BEES?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Why Should I Join? */}
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                🌟 Why Should I Join?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                BEES offers a launchpad for your future. Members gain access 
                to financial literacy workshops, networking events with industry professionals, 
                mentorship opportunities, and hands-on experience in leadership and
                entrepreneurship. Whether you&apos;re looking to start a business,
                land your dream career, or simply learn how to manage your
                finances, BEES gives you the tools and community to make it
                happen.
              </p>
            </div>

            {/* Who Is BEES For? */}
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                🤝 Who Is BEES For?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                BEES is for any Black student who wants to take control of their
                economic future. Whether you&apos;re studying business, engineering,
                the arts, or anything in between, BEES welcomes anyone interested in financial
                empowerment, career development, and community building. No prior experience in finance or business is required.
                Just bring your curiosity and drive.
              </p>
            </div>

            {/* How Are We Different? */}
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                💡 How Are We Different?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Unlike traditional Commerce or Economics clubs, BEES centers the
                Black experience. We don&apos;t just talk about markets and
                portfolios, we address the systemic barriers that have
                historically excluded Black communities from wealth-building. Our
                programming is designed to be practical, culturally relevant, and
                community-driven. We focus on real-world financial literacy, asset
                ownership, and entrepreneurship through a lens of equity and
                empowerment.
              </p>
            </div>

            {/* How Can BEES Be Useful? */}
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                🚀 Skills &amp; Leadership
              </h3>
              <p className="text-gray-700 leading-relaxed">
                BEES members develop real leadership skills: event planning,
                public speaking, project management, financial analysis, and
                community organizing. These skills transfer directly to other
                clubs, internships, and careers. BEES also collaborates with other
                organizations on campus, making it a valuable partner for joint
                events, panels, and initiatives focused on economic justice and
                professional development.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SECTION 3 — GET INVOLVED
        ═══════════════════════════════════════════════ */}
        <section>
          <h2 className="text-4xl font-bold text-center text-green-800 mb-4">
            Get Involved
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            There are two ways to be part of BEES, find the path that fits you best.
          </p>

          {/* Membership Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* General Membership */}
            <div className="p-8 bg-green-50 rounded-2xl border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🌿</span>
                <h3 className="text-2xl font-bold text-green-800">
                  General Membership
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Open to all students — no application required. As a general
                member, you can:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  Attend all BEES events, workshops, and panels
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  Participate in networking opportunities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  Access financial literacy resources and materials
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  Connect with a community of like-minded peers
                </li>
              </ul>
            </div>

            {/* Active Membership */}
            <div className="p-8 bg-green-50 rounded-2xl border-2 border-green-600">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🐝</span>
                <h3 className="text-2xl font-bold text-green-800">
                  Active Membership
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                For students ready to take on a bigger role. Active members
                apply and are selected to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  Join and contribute to a specific committee
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  Help organize events and initiatives
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  Take on leadership and project responsibilities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  Build deeper professional and personal skills
                </li>
              </ul>
            </div>
          </div>

          {/* Application Process */}
          <div className="text-center mb-16 p-8 bg-gray-50 rounded-2xl border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              📝 How to Apply
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Interested in becoming an active member? Applications open at the
              beginning of each semester. Fill out our interest form to stay
              updated on application timelines and requirements.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition"
            >
              Apply / Interest Form
            </a>
            <p className="text-sm text-gray-400 mt-3 italic">
              [Placeholder — replace &quot;#&quot; with your actual application or interest form link]
            </p>
          </div>

          {/* Committee Descriptions */}
          <h3 className="text-3xl font-bold text-center text-green-800 mb-8">
            Our Committees
          </h3>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
            Active members join one of our committees to drive BEES&apos;s mission forward.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Events Committee */}
            <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-green-300 transition">
              <div className="text-3xl mb-3">📅</div>
              <h4 className="text-xl font-bold text-green-800 mb-2">
                Events Committee
              </h4>
              <p className="text-gray-600">
                Plans and executes BEES&apos;s signature events: from workshops and
                panels to socials and networking nights. This committee brings
                our programming to life and creates memorable experiences for
                the community.
              </p>
            </div>

            {/* Finance / Financial Literacy Committee */}
            <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-green-300 transition">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="text-xl font-bold text-green-800 mb-2">
                Finance / Financial Literacy Committee
              </h4>
              <p className="text-gray-600">
                Develops educational content around budgeting, investing, credit,
                and wealth-building. This committee ensures our members leave
                BEES with practical financial skills they can use for life.
              </p>
            </div>

            {/* Marketing & Outreach Committee */}
            <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-green-300 transition">
              <div className="text-3xl mb-3">📣</div>
              <h4 className="text-xl font-bold text-green-800 mb-2">
                Marketing &amp; Outreach Committee
              </h4>
              <p className="text-gray-600">
                Manages BEES&apos;s brand, social media presence, and campus
                visibility. This committee crafts our messaging, designs
                promotional materials, and ensures our events reach the widest
                audience possible.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
