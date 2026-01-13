export default function ExecPage() {
  const team = [
    {
      role: "CEO",
      name: "Member Name",
      image: "https://placehold.co/400x600/png?text=CEO"
    },
    {
      role: "Vice CEO",
      name: "Member Name",
      image: "https://placehold.co/400x600/png?text=Vice+CEO"
    },
    {
      role: "Administrative Assistant",
      name: "Member Name",
      image: "https://placehold.co/400x600/png?text=Admin"
    },
    {
      role: "Chief Financial Officer",
      name: "Member Name",
      image: "https://placehold.co/400x600/png?text=CFO"
    },
    {
      role: "Events Coordinator",
      name: "Member Name",
      image: "https://placehold.co/400x600/png?text=Events"
    },
    {
      role: "Marketing Director",
      name: "Member Name",
      image: "https://placehold.co/400x600/png?text=Marketing"
    },
    {
      role: "Website Development Chair",
      name: "Member Name",
      image: "https://placehold.co/400x600/png?text=Web+Dev"
    },
  ];

  return (
    <div className="bg-white min-h-screen p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-12">
          Meet the Executive Board
        </h1>

        {/* CHANGED: Switch to Flexbox + Wrap + Justify Center.
           This ensures the bottom row is always centered, no matter how many people are in it.
        */}
        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, index) => (
            
            /* CHANGED: Added 'w-full sm:w-80' 
               This sets a fixed width for the cards so they look uniform 
               (like a grid) but allows them to center properly.
            */
            <div key={index} className="w-full sm:w-80 bg-white rounded-3xl shadow-lg border-2 border-green-600 overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              
              {/* Image Section */}
              <div className="h-96 overflow-hidden border-b border-gray-100">
                <img 
                  src={member.image} 
                  alt={member.role} 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-8 text-center flex-grow flex flex-col justify-between bg-white">
                <div className="mb-4">
                  <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">{member.name}</h2>
                </div>
                <div>
                  <span className="inline-block bg-green-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-md">
                    {member.role}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}