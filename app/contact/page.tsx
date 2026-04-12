import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | BEES",
  description: "Get in touch with the Black Economic Empowerment Society at UVA — partnerships, questions, or just to say hello.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-6 flex flex-col items-center w-full max-w-7xl mx-auto">

      {/* Header */}
      <h1 className="text-4xl font-bold text-green-800 mb-6">Contact Us</h1>
      <p className="mb-10 text-lg text-gray-600 max-w-2xl text-center">
        Interested in partnering with BEES, joining the team, or just have a question? We&apos;d love to hear from you.
      </p>

      {/* Contact Card */}
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl border-t-8 border-green-600">

        {/* Email Section */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">📧 Email Us</h2>
          <p className="text-gray-600 mb-3">For general inquiries and partnerships:</p>
          <a
            href="mailto:beesatuva@gmail.com"
            className="inline-block bg-green-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-800 transition"
          >
            Email the Board
          </a>
        </div>

        <hr className="border-gray-200 my-6" />

        {/* GroupMe Section */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">💬 Join Our GroupMe</h2>
          <p className="text-gray-600 mb-3">Stay in the loop with announcements and updates:</p>
          <a
            href="https://groupme.com/join_group/102765922/7wCXKXgM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Join the GroupMe
          </a>
        </div>

        <hr className="border-gray-200 my-6" />

        {/* Social Media Section */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">📱 Follow Us</h2>
          <p className="text-gray-600 mb-6">Keep up with our latest events:</p>

          <div className="flex justify-center gap-10">
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/bees_at_uva/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-900 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            {/* TikTok Icon */}
            <a
              href="https://www.tiktok.com/@bees_at_uva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-900 transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 448 512">
                <path d="M448 209.9a210.1 210.1 0 01-122.8-39.3v178.8A162.6 162.6 0 11185 188.3v89.9a74.6 74.6 0 1052.2 71.2V0h88a121 121 0 00122.8 109.9v100z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}