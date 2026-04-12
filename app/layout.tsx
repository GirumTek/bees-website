import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BEES Website",
  description: "Black Economic Empowerment Society at UVA",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black min-h-screen overflow-x-hidden`}>
        
        <Navbar />

        {/* UPDATED MAIN CONTAINER:
            - max-w-7xl: Allows the site to get much wider (80rem / 1280px).
            - mx-auto: Centers the content.
            - px-4 sm:px-6: Adds safety padding on the sides so text doesn't hit the edge of phone screens.
        */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>

        <Footer />
        
        <Analytics />
        <SpeedInsights/>
        
      </body>
    </html>
  );
}