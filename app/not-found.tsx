import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | BEES",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-10">
      <div className="text-8xl mb-6">🐝</div>
      <h1 className="text-4xl font-bold text-green-800 mb-4">Page Not Found</h1>
      <p className="text-gray-500 mb-8 max-w-md">
        Looks like this page flew away. Let&apos;s get you back to the hive.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}