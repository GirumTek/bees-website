import type { Metadata } from "next";
import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import type { EXEC_QUERY_RESULT } from "@/sanity.types";

export const metadata: Metadata = {
  title: "Executive Board | BEES",
  description: "Meet the leadership team driving the Black Economic Empowerment Society at UVA forward.",
};

const EXEC_QUERY = defineQuery(
  `*[_type == "executive"] | order(coalesce(orderRank, 999) asc) { _id, name, role, image, orderRank }`
);

async function getTeam() {
  return await client.fetch(EXEC_QUERY, {}, { next: { tags: ["executive"] } });
}

export default async function ExecPage() {
  // ERROR HANDLING: if Sanity is down, show empty state instead of crashing
  let team: EXEC_QUERY_RESULT = [];

  try {
    team = await getTeam();
  } catch (error) {
    console.error("Failed to load exec board:", error);
  }

  return (
    <div className="bg-white min-h-screen p-10 flex flex-col items-center w-full max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-green-900 mb-12">Meet the Executive Board</h1>

      {team.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, index) => (
            <div key={member._id} className="w-full sm:w-80 bg-white rounded-[2.5rem] shadow-lg border-2 border-green-600 overflow-hidden flex flex-col">
              <div className="h-96 relative bg-gray-200">
                {member.image && (
                  <Image
                    src={urlFor(member.image).width(800).url()}
                    alt={member.name ?? "Board member"}
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    priority={index < 3}
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-8 text-center flex-grow flex flex-col justify-between">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">{member.name}</h2>
                <span className="self-center bg-green-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-md">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          Board info unavailable right now — check back soon!
        </p>
      )}
    </div>
  );
}