import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn More | BEES",
  description: "Everything you need to know about BEES — who we are, why we exist, and how you can be part of it.",
};

export default function LearnMorePage() {
  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-4">
          Learn More
        </h1>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
          Everything you need to know about BEES — who we are, why we exist, and how you can be part of it.
        </p>

        {/* ═══════════════════════════════════════════════
            WHY BEES? — Core value proposition
        ═══════════════════════════════════════════════ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
            Why BEES?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                🌟 Why Should I Join?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Members gain access to financial literacy workshops, networking
                events with industry professionals, mentorship opportunities,
                and hands-on experience in leadership and entrepreneurship.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                🤝 Who Is BEES For?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Any Black student who wants to take control of their economic
                future — no prior experience in finance or business required.
                Just bring your curiosity and drive.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                💡 How Are We Different?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Unlike traditional Commerce or Economics clubs, BEES centers the
                Black experience with practical, culturally relevant programming
                focused on real-world financial literacy and entrepreneurship.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                🚀 Skills &amp; Leadership
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Develop real skills — event planning, public speaking, project
                management, financial analysis, and community organizing — that
                transfer directly to internships and careers.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            EXPLORE MORE — Quick links to key pages
        ═══════════════════════════════════════════════ */}
        <section>
          <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
            Explore More
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PageLink
              href="/mission"
              emoji="🎯"
              title="Our Mission & Story"
              description="Learn about our mission, core values, and how BEES was founded."
            />
            <PageLink
              href="/get-involved"
              emoji="🐝"
              title="Get Involved"
              description="Explore membership options, the application process, and our committees."
            />
            <PageLink
              href="/events"
              emoji="📅"
              title="Events"
              description="See what's coming up and browse our past events and photo gallery."
            />
            <PageLink
              href="/exec"
              emoji="👥"
              title="Exec Board"
              description="Meet the leadership team driving BEES forward."
            />
            <PageLink
              href="/impact"
              emoji="📊"
              title="Impact"
              description="See the difference BEES is making on campus and beyond."
            />
            <PageLink
              href="/contact"
              emoji="✉️"
              title="Contact"
              description="Get in touch with us — questions, partnerships, or just to say hello."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function PageLink({
  href,
  emoji,
  title,
  description,
}: {
  href: string;
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="block p-6 bg-green-50 rounded-2xl border-2 border-green-200 hover:border-green-500 hover:shadow-lg transition group"
    >
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="text-xl font-bold text-green-800 mb-2 group-hover:text-green-600 transition">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </Link>
  );
}