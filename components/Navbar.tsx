"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

          {/* 1. LOGO */}
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
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setWhoWeAreOpen(!whoWeAreOpen)}
                  aria-expanded={whoWeAreOpen}
                  aria-haspopup="true"
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
                  <div className="absolute left-0 mt-1 w-44 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
                    <DropdownLink href="/mission" onClick={() => setWhoWeAreOpen(false)}>🎯 Mission</DropdownLink>
                    <DropdownLink href="/exec" onClick={() => setWhoWeAreOpen(false)}>👥 Exec Board</DropdownLink>
                    <DropdownLink href="/learn-more" onClick={() => setWhoWeAreOpen(false)}>📖 Learn More</DropdownLink>
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
              aria-expanded={isOpen}
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

      {/* 4. MOBILE MENU — full screen overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-green-700 z-40 overflow-y-auto">
          <div className="flex flex-col px-6 py-8 gap-2">

            {/* WHO WE ARE section */}
            <p className="text-green-300 text-xs font-bold uppercase tracking-widest mb-1 px-2">
              Who We Are
            </p>
            <MobileNavLink href="/mission" onClick={() => setIsOpen(false)} emoji="🎯">Mission</MobileNavLink>
            <MobileNavLink href="/exec" onClick={() => setIsOpen(false)} emoji="👥">Exec Board</MobileNavLink>
            <MobileNavLink href="/learn-more" onClick={() => setIsOpen(false)} emoji="📖">Learn More</MobileNavLink>

            {/* Divider */}
            <div className="border-t border-green-600 my-3" />

            {/* Main links */}
            <MobileNavLink href="/impact" onClick={() => setIsOpen(false)} emoji="📊">Impact</MobileNavLink>
            <MobileNavLink href="/get-involved" onClick={() => setIsOpen(false)} emoji="🐝">Get Involved</MobileNavLink>
            <MobileNavLink href="/events" onClick={() => setIsOpen(false)} emoji="📅">Events</MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsOpen(false)} emoji="✉️">Contact</MobileNavLink>

          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 hover:text-white transition">
      {children}
    </Link>
  );
}

function DropdownLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} onClick={onClick} className="block px-4 py-3 text-sm text-gray-800 font-medium hover:bg-green-50 hover:text-green-700 transition border-b border-gray-100 last:border-0">
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  emoji,
  children,
}: {
  href: string;
  onClick: () => void;
  emoji: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-4 px-4 py-4 rounded-2xl text-lg font-semibold text-white hover:bg-green-600 active:bg-green-500 transition"
    >
      <span className="text-2xl w-8 text-center">{emoji}</span>
      {children}
    </Link>
  );
}