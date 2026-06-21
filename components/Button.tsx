import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline";
};

const VARIANTS = {
  primary: "bg-green-700 text-white hover:bg-green-800",
  outline: "border-2 border-green-700 text-green-700 hover:bg-green-50",
};

export default function Button({
  href,
  onClick,
  children,
  className,
  variant = "primary",
}: ButtonProps) {
  const classes = cn(
    "px-6 py-3 rounded-lg font-medium transition-colors",
    VARIANTS[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
