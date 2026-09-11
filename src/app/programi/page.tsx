import Link from "next/link";
import PageHero from "@/components/PageHero";
import { programByDate } from "@/lib/data";

const dayLabels: Record<string, string> = {
  "2026-10-15": "E Enjte, 15 Tetor",
  "2026-10-16": "E Premte, 16 Tetor",
  "2026-10-17": "E Shtunë, 17 Tetor",
  "2026-10-18": "E Diel, 18 Tetor",
  "2026-10-19": "E Hënë, 19 Tetor",
  "2026-10-20": "E Martë, 20 Tetor",
};

export default function ProgramiPage() {
  const days = programByDate();

  return (
    <>
      <PageHero
        eyebrow="Orari i Shfaqjeve"
        title="Programi"
        description="Programi i plotë i projeksioneve, ditë pas dite. Orari mund të pësojë ndryshime të vogla — kontrolloni rregullisht."
      />

      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="space-y-14">
          {days.map(([date, entries]) => (
            <div key={date}>
              <h2 className="font-display text-2xl text-amber-400 sm:text-3xl">
                {dayLabels[date] ?? date}
              </h2>
              <div className="mt-5 divide-y divide-white/10 rounded-lg border border-white/10 bg-neutral-900/40">
                {entries.map(({ film, screening }) => (
                  <Link
                    key={`${film.slug}-${screening.time}`}
                    href={`/filmat/${film.slug}`}
                    className="flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-white/5 sm:flex-row sm:items-center sm:gap-6"
                  >
                    <span className="w-16 shrink-0 font-display text-xl text-white">{screening.time}</span>
                    <span className="flex-1">
                      <span className="block font-medium text-white">{film.title}</span>
                      <span className="block text-sm text-neutral-400">
                        {film.genre} · {film.duration} min · {film.country}
                      </span>
                    </span>
                    <span className="shrink-0 text-sm uppercase tracking-wider text-neutral-500">
                      {screening.venue}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
