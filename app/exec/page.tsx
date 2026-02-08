import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

// 1. TYPE DEFINITIONS
// This interface acts as a contract. It guarantees that any 'member' 
// we use in our code has these specific fields.
interface BoardMember {
  _id: string;
  name: string;
  role: string;
  image: any; // Sanity image object
}

// 2. DATA FETCHING LAYER
// This function runs on the server side.


 async function getTeam() {
  const query = `*[_type == "executive"] | order(orderRank)`;
  
  // Await the fetch request with the specific tag
  return await client.fetch(query, {}, { 
    next: { tags: ["executive"] } 
  });
}

// 3. MAIN SERVER COMPONENT
// The 'async' keyword allows us to fetch data directly inside the component body.
export default async function ExecPage() {
  const team: BoardMember[] = await getTeam();

  return (
    <div className="bg-white min-h-screen p-10 flex flex-col items-center w-full max-w-7xl mx-auto">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-12">
          Meet the Executive Board
        </h1>

        {/* RESPONSIVE GRID LAYOUT
            flex-wrap: Allows items to drop to the next line on small screens.
            justify-center: Keeps the grid centered if there's an odd number of people.
        */}
        <div className="flex flex-wrap justify-center gap-10">
          
          {/* Conditional Rendering: Check if the array is empty first */}
          {team.length > 0 ? (
            team.map((member) => (
              
              /* CARD CONTAINER
                  w-full sm:w-80: Full width on mobile, fixed 20rem width on larger screens.
                  hover:shadow-2xl: Adds a nice "lift" effect when the user hovers.
              */
              <div key={member._id} className="w-full sm:w-80 bg-white rounded-3xl shadow-lg border-2 border-green-600 overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                
                {/* IMAGE CONTAINER */}
                <div className="h-96 overflow-hidden border-b border-gray-100 relative bg-gray-200">
                  {/* Safety Check: Only try to render the image if one was uploaded */}
                  {member.image ? (
                    <Image 
                      src={urlFor(member.image).url()} 
                      alt={member.name}
                      fill // Fills the parent div (h-96)
                      
                      // CSS MAGIC FOR HEADSHOTS:
                      // object-cover: Zooms in to fill the box (no white space).
                      // object-top: Focuses on the top of the image (faces are usually at the top!).
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    // FALLBACK STATE
                    // Shows this if the user forgot to upload a photo.
                    <div className="flex items-center justify-center h-full text-gray-400">
                      No Image
                    </div>
                  )}
                </div>
                
                {/* TEXT CONTENT 
                    flex-grow: Pushes the footer/role to the bottom if the name is long.
                */}
                <div className="p-8 text-center flex-grow flex flex-col justify-between bg-white">
                  <div className="mb-4">
                    <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
                      {member.name}
                    </h2>
                  </div>
                  <div>
                    {/* Role Badge */}
                    <span className="inline-block bg-green-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-md">
                      {member.role}
                    </span>
                  </div>
                </div>

              </div>
            ))
          ) : (
            // EMPTY STATE
            // Helpful message for the admin if the database is empty.
            <p className="text-center text-gray-500 w-full">
              No board members found. Go to the Studio to add them!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}