import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // Importing your navigation bar

// FONT OPTIMIZATION
// Next.js automatically downloads and optimizes Google Fonts for you.
// 'Inter' is a very popular, clean sans-serif font.
const inter = Inter({ subsets: ["latin"] });

// SEO & METADATA
// This controls what appears in the browser tab and Google search results.
export const metadata: Metadata = {
  title: "BEES Website",
  description: "Black Economic Empowerment Society at UVA",
};

// THE MASTER LAYOUT
// This function wraps EVERY page in your application.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* GLOBAL STYLES:
        inter.className -> Applies the font to the whole body.
        bg-white -> Forces the whole site to have a white background (removes dark mode defaults).
        text-black -> Forces text to be black by default.
        min-h-screen -> Ensures the page is at least as tall as the screen.
      */}
      <body className={`${inter.className} bg-white text-black min-h-screen`}>
        
        {/* GLOBAL NAVIGATION */}
        {/* Since this is OUTSIDE the {children}, it stays visible on every page. */}
        <Navbar />

        {/* PAGE CONTENT */}
        {/* This '{children}' variable is a placeholder. 
            Next.js will swap this out with whatever page the user is looking at 
            (e.g., page.tsx, events/page.tsx, exec/page.tsx). 
        */}
        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}