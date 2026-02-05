"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  // STATE MANAGEMENT
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-green-700 text-white shadow-md w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* 1. LOGO SECTION - Now on the far left */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-wider hover:text-green-200 transition">
              BEES 🐝
            </Link>
          </div>

          {/* 2. DESKTOP MENU - Contact will now be on the far right */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              <NavLink href="/exec">Exec Board</NavLink>
              <NavLink href="/mission">Mission</NavLink>
              <NavLink href="/events">Events</NavLink>
              <NavLink href="/impact">Impact</NavLink>
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
            <MobileNavLink href="/exec" onClick={() => setIsOpen(false)}>Exec Board</MobileNavLink>
            <MobileNavLink href="/mission" onClick={() => setIsOpen(false)}>Mission</MobileNavLink>
            <MobileNavLink href="/events" onClick={() => setIsOpen(false)}>Events</MobileNavLink>
            <MobileNavLink href="/impact" onClick={() => setIsOpen(false)}>Impact</MobileNavLink>
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

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-4 rounded-md text-base font-medium text-white hover:bg-green-600 hover:text-white transition border-b border-green-700 last:border-0"
    >
      {children}
    </Link>
  );
}