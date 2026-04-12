import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved | BEES",
  description: "Join the Black Economic Empowerment Society at UVA — explore membership options, the application process, and our committees.",
};

export default function GetInvolvedPage() {
  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-4">
          Get Involved
        </h1>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          There are two ways to be part of BEES — find the path that fits you best.
        </p>

        {/* ═══════════════════════════════════════════════
            MEMBERSHIP TIERS
        ═══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* General Membership */}
          <div className="p-8 bg-green-50 rounded-2xl border-2 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🌿</span>
              <h2 className="text-2xl font-bold text-green-800">General Membership</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Open to all students — no application required. As a general member, you can:
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
              <h2 className="text-2xl font-bold text-green-800">Active Membership</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              For students ready to take on a bigger role. Active members apply and are selected to:
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

        {/* ═══════════════════════════════════════════════
            APPLICATION PROCESS
        ═══════════════════════════════════════════════ */}
        <div className="text-center mb-20 p-8 bg-gray-50 rounded-2xl border border-gray-200 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-green-800 mb-4">📝 How to Apply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Interested in becoming an active member? Applications open at the beginning of each
            semester. Fill out our interest form to stay updated on application timelines and
            requirements.
          </p>
          {/* TODO: Replace href="#" with link */}
          <a
            href="#"
            className="inline-block px-8 py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition"
          >
            Apply / Interest Form
          </a>
        </div>

        {/* ═══════════════════════════════════════════════
            OUR COMMITTEES
        ═══════════════════════════════════════════════ */}
        <section>
          <h2 id="committees" className="text-3xl font-bold text-center text-green-800 mb-4 scroll-mt-20">
            Our Committees
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
            Active members join one of our committees to drive BEES&apos;s mission forward.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-green-300 transition">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Events Committee</h3>
              <p className="text-gray-600">
                Plans and executes BEES&apos;s signature events: from workshops and panels to
                socials and networking nights. This committee brings our programming to life.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-green-300 transition">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Finance Committee
              </h3>
              <p className="text-gray-600">
                Develops educational content around budgeting, investing, credit, and
                wealth-building. Ensures members leave BEES with practical financial skills.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-green-300 transition">
              <div className="text-3xl mb-3">📣</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Marketing &amp; Outreach Committee
              </h3>
              <p className="text-gray-600">
                Manages BEES&apos;s brand, social media presence, and campus visibility. Crafts
                messaging and ensures our events reach the widest audience possible.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}