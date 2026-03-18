import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top section: Branding left, Link columns right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-green-300 mb-4 text-sm uppercase tracking-wider">
              About
            </h3>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/mission">Mission</FooterLink>
              <FooterLink href="/mission#our-story">Our Story</FooterLink>
              <FooterLink href="/exec">Exec Board</FooterLink>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-bold text-green-300 mb-4 text-sm uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/events">Events</FooterLink>
              <FooterLink href="/impact">Impact</FooterLink>
              <FooterLink href="/learn-more">Learn More</FooterLink>
            </ul>
          </div>

          {/* Join & Connect combined */}
          <div>
            <h3 className="font-bold text-green-300 mb-4 text-sm uppercase tracking-wider">
              Join &amp; Connect
            </h3>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/get-involved">Get Involved</FooterLink>
              <FooterLink href="/get-involved#committees">Committees</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <li>
                <a
                  href="mailto:beesatuva@gmail.com"
                  className="text-green-100 hover:text-white hover:underline transition"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>

          {/* Branding / About blurb — right side, takes 2 columns */}
          <div className="lg:col-span-2 lg:text-right">
            <h2 className="text-2xl font-bold text-white mb-3">BEES 🐝</h2>
            <p className="text-green-200 text-sm leading-relaxed mb-4">
              The Black Economic Empowerment Society is dedicated to increasing
              financial literacy, promoting asset ownership, and empowering Black
              students to build generational wealth.
            </p>
            <p className="text-green-400 text-sm">
              University of Virginia &middot; Charlottesville, VA
            </p>
          </div>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://www.instagram.com/bees_at_uva/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 hover:text-white transition"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@bees_at_uva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 hover:text-white transition"
            aria-label="TikTok"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
              <path d="M448 209.9a210.1 210.1 0 01-122.8-39.3v178.8A162.6 162.6 0 11185 188.3v89.9a74.6 74.6 0 1052.2 71.2V0h88a121 121 0 00122.8 109.9v100z" />
            </svg>
          </a>
          <a
            href="mailto:beesatuva@gmail.com"
            className="text-green-300 hover:text-white transition"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-green-800 pt-6 text-center text-sm text-green-400">
          <p>
            &copy; {new Date().getFullYear()} Black Economic Empowerment Society
            (BEES) &middot; University of Virginia
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-green-100 hover:text-white hover:underline transition"
      >
        {children}
      </Link>
    </li>
  );
}
