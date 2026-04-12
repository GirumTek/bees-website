export default function ExecLoading() {
  return (
    <div className="bg-white min-h-screen p-10 flex flex-col items-center w-full max-w-7xl mx-auto animate-pulse">

      {/* Title skeleton */}
      <div className="h-10 bg-gray-200 rounded-full w-80 mx-auto mb-12" />

      {/* Card skeletons */}
      <div className="flex flex-wrap justify-center gap-10">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-full sm:w-80 bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden flex flex-col">
            {/* Photo placeholder */}
            <div className="h-96 bg-gray-200" />
            {/* Text placeholder */}
            <div className="p-8 flex flex-col items-center gap-4">
              <div className="h-7 bg-gray-200 rounded-full w-40" />
              <div className="h-8 bg-gray-100 rounded-full w-28" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}