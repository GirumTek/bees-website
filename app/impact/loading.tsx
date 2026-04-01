export default function ImpactLoading() {
  return (
    <div className="bg-white min-h-screen py-16 px-6 md:px-10 animate-pulse">
      <div className="max-w-7xl mx-auto text-center">

        {/* Title skeleton */}
        <div className="h-12 bg-gray-200 rounded-full w-56 mx-auto mb-4" />
        <div className="h-5 bg-gray-100 rounded-full w-96 mx-auto mb-16" />

        {/* Impact card skeletons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center p-12 rounded-[2.5rem] bg-green-50/50 border border-green-100/50 gap-4">
              {/* Big stat number */}
              <div className="h-16 bg-gray-200 rounded-full w-28" />
              {/* Title */}
              <div className="h-7 bg-gray-200 rounded-full w-40" />
              {/* Description lines */}
              <div className="h-4 bg-gray-100 rounded-full w-full" />
              <div className="h-4 bg-gray-100 rounded-full w-4/5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}