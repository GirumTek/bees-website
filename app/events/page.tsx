import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import type { Event } from "@/sanity.types";
import UpcomingEventCard from "@/components/UpcomingEventCard";
import PastEventsGrid from "@/components/PastEventsGrid";

export const metadata: Metadata = {
  title: "Events | BEES",
  description: "See upcoming BEES events — workshops, socials, panels, and more — plus a look back at past events.",
};

async function getEventData() {
  const query = `{
    "upcoming": *[_type == "event" && date >= now()] | order(date asc),
    "past": *[_type == "event" && date < now()] | order(date desc)
  }`;
  return await client.fetch(query, {}, { next: { tags: ["event"] } });
}

export default async function EventsPage() {
  // ERROR HANDLING: if Sanity is down, show empty state instead of crashing
  let upcoming: Event[] = [];
  let past: Event[] = [];

  try {
    const data = await getEventData();
    upcoming = data.upcoming;
    past = data.past;
  } catch (error) {
    console.error("Failed to load events:", error);
  }

  return (
    <div className="bg-white min-h-screen p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-900 mb-4">Things to Look Forward To</h1>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Check out what we have coming up — workshops, socials, panels, and more.
        </p>

        <div className="flex flex-col gap-12 mb-24">
          {upcoming.length > 0 ? (
            upcoming.map((event) => <UpcomingEventCard key={event._id} event={event} />)
          ) : (
            <p className="text-center text-gray-500">No upcoming events right now — stay tuned! 🐝</p>
          )}
        </div>

        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">Things from the Past</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            A look back at our history and the moments that shaped BEES — annual events, community gatherings, and milestones.
          </p>
          <PastEventsGrid events={past} />
        </div>
      </div>
    </div>
  );
}