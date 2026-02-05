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
        
        <Navbar />

        {/* UPDATED MAIN CONTAINER:
            - max-w-7xl: Allows the site to get much wider (80rem / 1280px).
            - mx-auto: Centers the content.
            - px-4 sm:px-6: Adds safety padding on the sides so text doesn't hit the edge of phone screens.
        */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        
        <Analytics />
        <SpeedInsights/>
        
      </body>
    </html>
  );
}