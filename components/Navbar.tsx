"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close mobile menu on route change (e.g. browser back button)
  useEffect(() => {
    setIsOpen(false);
    setWhoWeAreOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setWhoWeAreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-green-700 text-white shadow-md w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* 1. LOGO — navigates home */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/circular_bees_logo.png"
                alt="BEES Logo"
                width={44}
                height={44}
                className="rounded-full hover:opacity-80 transition"
              />
            </Link>
          </div>

          {/* 2. DESKTOP MENU */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">

              {/* WHO WE ARE DROPDOWN — opens on hover on desktop */}
              <div
                className="relative group"
                ref={dropdownRef}
                onMouseEnter={() => setWhoWeAreOpen(true)}
                onMouseLeave={() => setWhoWeAreOpen(false)}
              >
                <button
                  onClick={() => setWhoWeAreOpen(!whoWeAreOpen)}
                  className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 hover:text-white transition"
                >
                  Who We Are
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${whoWeAreOpen ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {whoWeAreOpen && (
                  <div className="absolute left-0 top-full w-44 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
                    <DropdownLink href="/mission" onClick={() => setWhoWeAreOpen(false)}>
                      🎯 Mission
                    </DropdownLink>
                    <DropdownLink href="/exec" onClick={() => setWhoWeAreOpen(false)}>
                      👥 Exec Board
                    </DropdownLink>
                    <DropdownLink href="/learn-more" onClick={() => setWhoWeAreOpen(false)}>
                      📖 Learn More
                    </DropdownLink>
                  </div>
                )}
              </div>

              <NavLink href="/impact">Impact</NavLink>
              <NavLink href="/get-involved">Get Involved</NavLink>
              <NavLink href="/events">Events</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>

          {/* 3. MOBILE MENU BUTTON */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-green-200 hover:text-white hover:bg-green-600 focus:outline-none transition"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-green-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">

            {/* WHO WE ARE section (expanded inline on mobile) */}
            <div className="px-3 py-2 text-green-300 text-xs font-bold uppercase tracking-widest">
              Who We Are
            </div>
            <MobileNavLink href="/mission" onClick={() => setIsOpen(false)} indent>🎯 Mission</MobileNavLink>
            <MobileNavLink href="/exec" onClick={() => setIsOpen(false)} indent>👥 Exec Board</MobileNavLink>
            <MobileNavLink href="/learn-more" onClick={() => setIsOpen(false)} indent>📖 Learn More</MobileNavLink>

            <MobileNavLink href="/impact" onClick={() => setIsOpen(false)}>Impact</MobileNavLink>
            <MobileNavLink href="/get-involved" onClick={() => setIsOpen(false)}>Get Involved</MobileNavLink>
            <MobileNavLink href="/events" onClick={() => setIsOpen(false)}>Events</MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 hover:text-white transition"
    >
      {children}
    </Link>
  );
}

function DropdownLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-3 text-sm text-gray-800 font-medium hover:bg-green-50 hover:text-green-700 transition border-b border-gray-100 last:border-0"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
  indent = false,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  indent?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-3 py-4 rounded-md text-base font-medium text-white hover:bg-green-600 transition border-b border-green-700 last:border-0 ${
        indent ? "pl-8 text-green-200 text-sm" : ""
      }`}
    >
      {children}
    </Link>
  );
}