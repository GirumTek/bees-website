import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // We import the file we just made

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BEES Website",
  description: "Black Economic Empowerment Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black min-h-screen`}>
        <Navbar />  {/* This puts the yellow bar at the top */}
        {children}  {/* This is where the page content will go underneath */}
      </body>
    </html>
  );
}