import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image"; // Utility to convert Sanity image references to real URLs
import { PortableText } from "@portabletext/react"; // Renders the "Block Content" (Rich Text) from Sanity
import Image from "next/image";

// TYPE DEFINITION
// Keeps TypeScript happy. This must match the schema fields defined in Sanity.
interface Event {
  _id: string;
  name: string;
  date: string;
  location: string;
  image: any; // 'any' is used here because Sanity image objects are complex nested structures
  details: any; // The rich text array
}

// DATA FETCHING SERVICE
// This runs on the server. We fetch *all* events and sort them by date closest to now.
async function getEvents() {
  const query = `*[_type == "event"] | order(date asc) {
    _id,
    name,
    date,
    location,
    image,
    details
  }`;
  
  // client.fetch returns a Promise, so we await it
  return await client.fetch(query);
}

// MAIN COMPONENT
// This is an Async Server Component (standard in Next.js 13+).
// It fetches data directly inside the component body.
export default async function EventsPage() {
  const events: Event[] = await getEvents();

  return (
    <div className="bg-white min-h-screen p-10">
      {/* FIXED: Changed from max-w-4xl to max-w-7xl to match Navbar on large monitors */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-900 mb-12">
          Events Calendar
        </h1>

        <div className="flex flex-col gap-10">
          {/* Conditional Rendering: Check if we actually have events before mapping */}
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event._id} className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
                
                {/* IMAGE LOGIC:
                  1. Check 'event.image' existence to prevent crashes if an event has no photo.
                  2. Use 'urlFor()' to generate the src string.
                  3. CSS: Use 'object-contain' so the full logo is visible without cropping.
                */}
                {event.image && (
                  <div className="relative w-full h-64 bg-gray-200">
                    <Image
                      src={urlFor(event.image).url()} 
                      alt={event.name}
                      fill // Fills the parent 'relative' div
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

                    {/* DATE FORMATTING:
                      Using native JS .toLocaleDateString to format the ISO date string 
                      coming from Sanity into something human-readable.
                      Displays on two lines: date on top, time below (works on mobile and desktop).
                      Using UTC to prevent timezone conversion issues.
                    */}
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold text-center border border-green-200 flex-shrink-0">
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

                  {/* RICH TEXT RENDERER:
                    PortableText takes the raw JSON blocks from Sanity and recursively 
                    renders them as HTML paragraphs, lists, etc.
                  */}
                  <div className="mt-6 prose prose-green text-gray-600">
                    <PortableText value={event.details} />
                  </div>
                  
                </div>
              </div>
            ))
          ) : (
            // EMPTY STATE: Good UX to show a message if the database is empty.
            <p className="text-center text-gray-500">No upcoming events.</p>
          )}
        </div>
      </div>
    </div>
  );
}