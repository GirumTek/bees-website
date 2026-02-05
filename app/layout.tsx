import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; 
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BEES Website",
  description: "Black Economic Empowerment Society at UVA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black min-h-screen`}>
        
        {/* GLOBAL NAVIGATION */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main>
          {children}
        </main>
        
      
        <Analytics />
        <SpeedInsights/>
        
      </body>
    </html>
  );
}