"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  // STATE MANAGEMENT
  // This variable tracks if the mobile menu is open (true) or closed (false).
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-md">
      {/* MAX-WIDTH CONTAINER
         max-w-7xl mx-auto: Keeps the content centered on huge monitors 
         so it doesn't stretch to the edges of the universe.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* 1. LOGO SECTION */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-wider hover:text-green-200 transition">
              BEES 🐝
            </Link>
          </div>

          {/* 2. DESKTOP MENU (Hidden on Mobile)
             hidden: Hides this entire block by default (Mobile First approach).
             md:block: Shows it ONLY on 'medium' screens (tablets/laptops) and larger.
          */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/exec">Exec Board</NavLink>
              <NavLink href="/mission">Mission</NavLink>
              <NavLink href="/events">Events</NavLink>
              <NavLink href="/impact">Impact</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>

          {/* 3. MOBILE MENU BUTTON (Visible on Mobile Only)
             md:hidden: Hides this button on desktop screens (we don't need a hamburger on a laptop).
          */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)} // Toggle the state when clicked
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-green-200 hover:text-white hover:bg-green-600 focus:outline-none transition"
            >
              <span className="sr-only">Open main menu</span>
              
              {/* ICON SWITCHER
                 Logic: If open, show an 'X' icon. If closed, show the 'Hamburger' (3 lines).
              */}
              {!isOpen ? (
                // Hamburger Icon (SVG)
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                // Close 'X' Icon (SVG)
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. MOBILE MENU DROPDOWN
         This is the list of links that slides down.
         It is conditionally rendered: {isOpen && (...)}
      */}
      {isOpen && (
        <div className="md:hidden bg-green-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {/* Note: We pass 'onClick' to close the menu immediately after a user clicks a link */}
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

// ----------------------------------------------------------------------
// HELPER COMPONENTS (To keep the main code clean)
// ----------------------------------------------------------------------
// DESKTOP LINK COMPONENT
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      /* Added flex items-center to ensure vertical alignment */
      className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-green-600 hover:text-white transition flex items-center"
    >
      {children}
    </Link>
  );
}

// MOBILE LINK COMPONENT
function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      /* Added w-full and text-left to fix mobile stretching */
      className="block w-full text-left px-3 py-4 rounded-md text-base font-medium text-white hover:bg-green-600 transition border-b border-green-700 last:border-0"
    >
      {children}
    </Link>
  );
}