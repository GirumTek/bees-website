import { PortableText } from "@portabletext/react";
import Card from "@/components/Card";
import type { IMPACT_QUERY_RESULT } from "@/sanity.types";

export default function ImpactGrid({ items }: { items: IMPACT_QUERY_RESULT }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      {items.map((item) => (
        <Card
          key={item._id}
          className="flex flex-col items-center text-center p-6 sm:p-12 border border-green-100/50 transition-all hover:shadow-xl hover:bg-green-50"
        >
          {/* 1. The Number / Statistic (e.g., 50+) */}
          <div className="text-7xl font-black text-green-700 mb-2 tracking-tighter">
            {item.stat}
          </div>
          
          {/* 2. The Metric / Heading (e.g., Active Members) */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            {item.title}
          </h2>
          
          {/* 3. The Full Description */}
          <div className="text-gray-600 leading-relaxed prose prose-sm prose-green">
             <PortableText value={item.description ?? []} />
          </div>
        </Card>
      ))}
    </div>
  );
}