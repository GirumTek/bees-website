import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-green-700 text-white">
      {/* 1. The Logo is a Link to Home (/) */}
      <Link href="/" className="text-2xl font-bold hover:text-green-200 transition">
        BEES 🐝
      </Link>
      
      {/* 2. The "Core" link is gone from this list */}
      <div className="space-x-6 font-medium">
        <Link href="/exec" className="hover:underline">Exec Board</Link>
        <Link href="/mission" className="hover:underline">Mission</Link>
        <Link href="/events" className="hover:underline">Events</Link>
        <Link href="/impact" className="hover:underline">Impact</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}