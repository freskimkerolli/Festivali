"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { festival } from "@/lib/data";

const links = [
  { href: "/", label: "Ballina" },
  { href: "/programi", label: "Programi" },
  { href: "/filmat", label: "Filmat" },
  { href: "/mysafiret", label: "Mysafirët" },
  { href: "/bileta", label: "Bileta" },
  { href: "/rreth-nesh", label: "Rreth Nesh" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="flex items-baseline gap-2 font-display text-xl tracking-wide text-white"
          onClick={() => setOpen(false)}
        >
          <span className="text-amber-400">{festival.name}</span>
        </Link>

        <nav className="hidden gap-7 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  active ? "text-amber-400" : "text-neutral-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Hap menynë"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-neutral-950 px-5 py-4 md:hidden">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm uppercase tracking-wider ${
                  active ? "bg-white/5 text-amber-400" : "text-neutral-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
