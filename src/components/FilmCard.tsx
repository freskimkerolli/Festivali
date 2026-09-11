import Link from "next/link";
import type { Film } from "@/lib/data";

export default function FilmCard({ film }: { film: Film }) {
  return (
    <Link
      href={`/filmat/${film.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-neutral-900 transition-transform hover:-translate-y-1 hover:border-amber-400/50"
    >
      <div className={`flex aspect-[2/3] items-center justify-center bg-gradient-to-br ${film.gradient} p-4`}>
        <span className="text-center font-display text-2xl leading-tight text-white/90 drop-shadow">
          {film.title}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">{film.category}</span>
        <h3 className="font-display text-lg text-white group-hover:text-amber-300">{film.title}</h3>
        <p className="text-sm text-neutral-400">{film.director} · {film.country} · {film.year}</p>
        <p className="mt-auto pt-2 text-xs text-neutral-500">{film.genre} · {film.duration} min</p>
      </div>
    </Link>
  );
}
