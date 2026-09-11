import Link from "next/link";
import { notFound } from "next/navigation";
import { films } from "@/lib/data";

const dayLabels: Record<string, string> = {
  "2026-10-15": "E Enjte, 15 Tetor",
  "2026-10-16": "E Premte, 16 Tetor",
  "2026-10-17": "E Shtunë, 17 Tetor",
  "2026-10-18": "E Diel, 18 Tetor",
  "2026-10-19": "E Hënë, 19 Tetor",
  "2026-10-20": "E Martë, 20 Tetor",
};

export function generateStaticParams() {
  return films.map((film) => ({ slug: film.slug }));
}

export default async function FilmDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const film = films.find((f) => f.slug === slug);
  if (!film) notFound();

  return (
    <>
      <section className={`border-b border-white/10 bg-gradient-to-br ${film.gradient}`}>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Link href="/filmat" className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-white">
            ← Të gjithë filmat
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">{film.category}</p>
          <h1 className="mt-2 font-display text-4xl text-white sm:text-6xl">{film.title}</h1>
          {film.originalTitle && film.originalTitle !== film.title && (
            <p className="mt-2 text-lg text-white/70">{film.originalTitle}</p>
          )}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-display text-2xl text-amber-400">Përmbledhje</h2>
          <p className="mt-4 leading-relaxed text-neutral-300">{film.synopsis}</p>

          <h2 className="mt-10 font-display text-2xl text-amber-400">Projeksione</h2>
          <div className="mt-4 divide-y divide-white/10 rounded-lg border border-white/10 bg-neutral-900/40">
            {film.screenings.map((screening) => (
              <div key={`${screening.date}-${screening.time}`} className="flex flex-wrap items-center justify-between gap-2 px-5 py-4">
                <span className="text-white">{dayLabels[screening.date] ?? screening.date}</span>
                <span className="font-display text-lg text-amber-400">{screening.time}</span>
                <span className="text-sm uppercase tracking-wider text-neutral-400">{screening.venue}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4 rounded-lg border border-white/10 bg-neutral-900/40 p-6 text-sm h-fit">
          <div>
            <p className="text-neutral-500 uppercase tracking-wider text-xs">Regjisor</p>
            <p className="text-white">{film.director}</p>
          </div>
          <div>
            <p className="text-neutral-500 uppercase tracking-wider text-xs">Shteti</p>
            <p className="text-white">{film.country}</p>
          </div>
          <div>
            <p className="text-neutral-500 uppercase tracking-wider text-xs">Viti</p>
            <p className="text-white">{film.year}</p>
          </div>
          <div>
            <p className="text-neutral-500 uppercase tracking-wider text-xs">Zhanri</p>
            <p className="text-white">{film.genre}</p>
          </div>
          <div>
            <p className="text-neutral-500 uppercase tracking-wider text-xs">Kohëzgjatja</p>
            <p className="text-white">{film.duration} min</p>
          </div>
          <div>
            <p className="text-neutral-500 uppercase tracking-wider text-xs">Gjuha</p>
            <p className="text-white">{film.language}</p>
          </div>
          {film.subtitles && (
            <div>
              <p className="text-neutral-500 uppercase tracking-wider text-xs">Titra</p>
              <p className="text-white">{film.subtitles}</p>
            </div>
          )}
        </aside>
      </section>
    </>
  );
}
