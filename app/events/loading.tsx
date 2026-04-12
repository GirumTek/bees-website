export default function EventsLoading() {
  return (
    <div className="bg-white min-h-screen p-6 md:p-10 animate-pulse">
      <div className="max-w-7xl mx-auto">

        {/* Title skeleton */}
        <div className="h-10 bg-gray-200 rounded-full w-72 mx-auto mb-4" />
        <div className="h-5 bg-gray-100 rounded-full w-96 mx-auto mb-12" />

        {/* Upcoming event card skeletons */}
        {[1, 2].map((i) => (
          <div key={i} className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 flex flex-col md:flex-row min-h-[300px] mb-12">
            {/* Image placeholder */}
            <div className="w-full md:w-1/3 h-64 md:h-auto bg-gray-200" />
            {/* Text placeholder */}
            <div className="p-8 flex-1 flex flex-col gap-4 justify-center">
              <div className="h-8 bg-gray-200 rounded-full w-3/4" />
              <div className="h-5 bg-gray-100 rounded-full w-1/2" />
              <div className="h-4 bg-gray-100 rounded-full w-full" />
              <div className="h-4 bg-gray-100 rounded-full w-5/6" />
            </div>
          </div>
        ))}

        {/* Past events section */}
        <div className="border-t border-gray-200 pt-16">
          <div className="h-10 bg-gray-200 rounded-full w-64 mx-auto mb-4" />
          <div className="h-5 bg-gray-100 rounded-full w-80 mx-auto mb-12" />

          {/* Past events grid skeletons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[3/4] bg-gray-200" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}