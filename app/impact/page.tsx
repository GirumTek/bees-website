import { client } from "@/sanity/lib/client";
import ImpactGrid from "@/components/ImpactGrid";

async function getImpactData() {
  // Fetches items in the order they were created
  return await client.fetch(
    `*[_type == "impact"] | order(_createdAt asc)`, 
    {}, 
    { next: { tags: ["impact"] } }
  );
}

export default async function ImpactPage() {
  const impactItems = await getImpactData();

  return (
    <div className="bg-white min-h-screen py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header Section */}
        <h1 className="text-5xl font-bold text-green-900 mb-4">Our Impact</h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
          BEES is dedicated to tangible results. Here is how we are making a difference in the community and on grounds.
        </p>

        {/* Interactive Grid Component */}
        <ImpactGrid items={impactItems} />
        
      </div>
    </div>
  );
}