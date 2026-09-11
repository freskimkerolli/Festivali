"use client";

import { useState } from "react";
import FilmCard from "@/components/FilmCard";
import type { Film } from "@/lib/data";

export default function FilmsGrid({ films }: { films: Film[] }) {
  const categories = ["Të gjitha", ...Array.from(new Set(films.map((f) => f.category)))];
  const [active, setActive] = useState("Të gjitha");

  const filtered = active === "Të gjitha" ? films : films.filter((f) => f.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
              active === category
                ? "border-amber-400 bg-amber-400 text-neutral-950"
                : "border-white/20 text-neutral-300 hover:border-amber-400 hover:text-amber-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((film) => (
          <FilmCard key={film.slug} film={film} />
        ))}
      </div>
    </div>
  );
}
