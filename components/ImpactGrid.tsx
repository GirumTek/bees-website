'use client';

import { PortableText } from "@portabletext/react";
import type { Impact } from "@/sanity.types";

export default function ImpactGrid({ items }: { items: Impact[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      {items.map((item) => (
        <div 
          key={item._id} 
          className="flex flex-col items-center text-center p-6 sm:p-12 rounded-[2.5rem] bg-green-50/50 border border-green-100/50 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:bg-green-50"
        >
          {/* 1. The Number / Statistic (e.g., 50+) */}
          <div className="text-7xl font-black text-green-700 mb-2 tracking-tighter">
            {item.stat}
          </div>
          
          {/* 2. The Metric / Heading (e.g., Active Members) */}
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            {item.title}
          </h3>
          
          {/* 3. The Full Description */}
          <div className="text-gray-600 leading-relaxed prose prose-sm prose-green">
             <PortableText value={item.description ?? []} />
          </div>
        </div>
      ))}
    </div>
  );
}