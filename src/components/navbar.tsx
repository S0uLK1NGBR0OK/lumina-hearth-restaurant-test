"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { UtensilsCrossed, CalendarDays, MapPin } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const navs = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Visit & Story", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="w-6 h-6 text-white" />
          <span className="text-xl font-bold text-white tracking-wider">
            LUMINA
          </span>
        </div>

        <div className="flex items-center gap-8">
          {navs.map((n) => (
            <Link
              key={n.name}
              href={n.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                pathname === n.href ? "text-white" : "text-zinc-400"
              )}
            >
              {n.name}
            </Link>
          ))}
        </div>

        <button className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:bg-zinc-200 transition-colors">
          <CalendarDays className="w-4 h-4" />
          RESERVE
        </button>
      </div>
    </nav>
  );
}
