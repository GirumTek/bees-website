import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import type { Impact } from "@/sanity.types";
import ImpactGrid from "@/components/ImpactGrid";

export const metadata: Metadata = {
  title: "Our Impact | BEES",
  description: "See the tangible difference the Black Economic Empowerment Society is making on campus and in the community.",
};

async function getImpactData() {
  return await client.fetch(
    `*[_type == "impact"] | order(_createdAt asc)`,
    {},
    { next: { tags: ["impact"] } }
  );
}

export default async function ImpactPage() {
  // ERROR HANDLING: if Sanity is down, show empty state instead of crashing
  let impactItems: Impact[] = [];

  try {
    impactItems = await getImpactData();
  } catch (error) {
    console.error("Failed to load impact data:", error);
  }

  return (
    <div className="bg-white min-h-screen py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-green-900 mb-4">Our Impact</h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
          BEES is dedicated to tangible results. Here is how we are making a difference in the community and on grounds.
        </p>

        {impactItems.length > 0 ? (
          <ImpactGrid items={impactItems} />
        ) : (
          <p className="text-center text-gray-500">
            Impact stats unavailable right now — check back soon!
          </p>
        )}
      </div>
    </div>
  );
}