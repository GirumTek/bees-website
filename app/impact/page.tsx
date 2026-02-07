export default function ImpactPage(){
    const stats = [
    {
      label: "Active Members",
      value: "50+",
      description: "Dedicated students building their future."
    },
    {
      label: "Workshops Hosted",
      value: "12",
      description: "Covering finance, coding, and leadership."
    },
    {
      label: "Businesses Showcased",
      value: "30+", 
      description: "Providing a platform for Black entrepreneurs to sell and grow in our Pop-Up Shop Event."
    },
    
  ];
  return (
    <div className="bg-white min-h-screen p-10">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-green-800 mb-6">Our Impact</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
          BEES is dedicated to tangible results. Here is how we are making a difference in the community and on campus.
        </p>

     {/* The Stats Container (Flexbox for perfect centering) */}
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-green-50 border-2 border-green-100 shadow-lg hover:-translate-y-2 transition-transform duration-300 w-full md:w-[350px]"
            >
              {/* Big Number */}
              <div className="text-5xl font-extrabold text-green-700 mb-2">
                {stat.value}
              </div>
              
              {/* Label */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}