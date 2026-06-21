import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "bg-green-50/50 rounded-[2.5rem] shadow-sm transition-transform duration-300 hover:-translate-y-3",
        className
      )}
    >
      {children}
    </div>
  );
}
