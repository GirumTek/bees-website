import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

// TYPE DEFINITION
interface Event {
  _id: string;
  name: string;
  date: string;
  location: string;
  image: any;
  details: any;
}

// DATA FETCHING SERVICE
async function getEvents() {
  const query = `*[_type == "event"] | order(date desc)`;

  return await client.fetch(query, {}, {
    next: {
      tags: ["event"],
    },
  });
}

// MAIN COMPONENT
export default async function EventsPage() {
  const events: Event[] = await getEvents();

  const now = new Date();
  const upcomingEvents = events.filter((e) => new Date(e.date) >= now);
  const pastEvents = events.filter((e) => new Date(e.date) < now);

  return (
    <div className="bg-white min-h-screen p-10">
      <div className="max-w-7xl mx-auto">

        {/* ───────────────────────────────────────────────
            SECTION 1 — THINGS TO LOOK FORWARD TO (Upcoming)
        ─────────────────────────────────────────────── */}
        <h1 className="text-4xl font-bold text-center text-green-900 mb-4">
          Things to Look Forward To
        </h1>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Check out what we have coming up — workshops, socials, panels, and more.
        </p>

        <div className="flex flex-col gap-10 mb-20">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))
          ) : (
            <p className="text-center text-gray-500">
              No upcoming events right now — stay tuned! 🐝
            </p>
          )}
        </div>

        {/* ───────────────────────────────────────────────
            SECTION 2 — THINGS FROM THE PAST (History / Gallery)
        ─────────────────────────────────────────────── */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
            Things from the Past
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            A look back at our history and the moments that shaped BEES — annual events, community gatherings, and milestones.
          </p>

          {pastEvents.length > 0 ? (
            <>
              {/* IMAGE GALLERY — past events with images shown in a grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {pastEvents
                  .filter((event) => event.image)
                  .map((event) => (
                    <div
                      key={event._id}
                      className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-[4/3]"
                    >
                      <Image
                        src={urlFor(event.image).url()}
                        alt={event.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Hover overlay with event name & date */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-white font-bold text-lg leading-tight">
                          {event.name}
                        </h3>
                        <p className="text-green-300 text-sm mt-1">
                          {new Date(event.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                            timeZone: "UTC",
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* DETAILED CARDS — full past event details below the gallery */}
              <div className="flex flex-col gap-10">
                {pastEvents.map((event) => (
                  <EventCard key={event._id} event={event} isPast />
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500">
              No past events to show yet — we&apos;re just getting started!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────
// REUSABLE EVENT CARD COMPONENT
// ─────────────────────────────────────────────────────
function EventCard({ event, isPast = false }: { event: Event; isPast?: boolean }) {
  return (
    <div
      className={`bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 ${
        isPast ? "opacity-90" : ""
      }`}
    >
      {event.image && (
        <div className="relative w-full h-64 bg-gray-200">
          <Image
            src={urlFor(event.image).url()}
            alt={event.name}
            fill
            className="object-contain"
          />
        </div>
      )}

      <div className="p-8">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {event.name}
            </h3>
            <p className="text-green-700 font-semibold text-lg mb-4">
              📍 {event.location}
            </p>
          </div>

          <div
            className={`px-4 py-2 rounded-lg font-bold text-center border flex-shrink-0 ${
              isPast
                ? "bg-gray-100 text-gray-600 border-gray-200"
                : "bg-green-100 text-green-800 border-green-200"
            }`}
          >
            <div>
              {new Date(event.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                timeZone: "UTC",
              })}
            </div>
            <div className="text-sm font-normal text-gray-600">
              {new Date(event.date).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC",
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 prose prose-green text-gray-600">
          <PortableText value={event.details} />
        </div>
      </div>
    </div>
  );
}
