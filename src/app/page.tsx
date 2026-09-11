import Link from "next/link";
import Countdown from "@/components/Countdown";
import FilmCard from "@/components/FilmCard";
import { festival, films, venues } from "@/lib/data";

const stats = [
  { label: "Filma", value: "45+" },
  { label: "Vende", value: "18" },
  { label: "Salla Shfaqjeje", value: "3" },
  { label: "Ditë Festivali", value: "6" },
];

export default function Home() {
  const featured = films.slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-neutral-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.18),_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-5 py-16 sm:py-24 lg:py-32">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 sm:text-sm sm:tracking-[0.3em]">
              {festival.edition} · {festival.dates} · {festival.city}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-none text-white sm:text-7xl lg:text-8xl">
              {festival.name}
            </h1>
            <p className="mt-6 max-w-xl text-base text-neutral-300 sm:text-lg">{festival.tagline}</p>
            <p className="mt-3 max-w-xl text-sm text-neutral-400 sm:text-base">{festival.description}</p>

            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/programi"
                className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-950 transition-colors hover:bg-amber-300 sm:px-6"
              >
                Shiko Programin
              </Link>
              <Link
                href="/bileta"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-amber-400 hover:text-amber-400 sm:px-6"
              >
                Bleni Bileta
              </Link>
            </div>
          </div>

          <div className="overflow-x-auto">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Festivali fillon për
            </p>
            <Countdown />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-neutral-900/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 sm:grid-cols-4 sm:py-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl text-amber-400 sm:text-4xl">{stat.value}</p>
              <p className="text-xs uppercase tracking-wider text-neutral-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Zgjedhja e Selektuesve</p>
            <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">Filma të Veçuar</h2>
          </div>
          <Link href="/filmat" className="text-sm font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300">
            Të gjithë filmat →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((film) => (
            <FilmCard key={film.slug} film={film} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-900/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Vendndodhjet</p>
          <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">Ku Zhvillohet Festivali</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {venues.map((venue) => (
              <div key={venue.name} className="rounded-lg border border-white/10 bg-neutral-950 p-6">
                <h3 className="font-display text-xl text-amber-400">{venue.name}</h3>
                <p className="mt-2 text-sm text-neutral-300">{venue.address}</p>
                <p className="mt-3 text-sm text-neutral-500">{venue.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <h2 className="font-display text-3xl text-white sm:text-4xl">Bëhu Pjesë e DritaFest 2026</h2>
        <p className="mx-auto mt-4 max-w-xl text-neutral-400">
          Nga premierat botërore te bisedat pas-projeksionit me regjizorët — çdo natë sjell diçka të re. Rezervo vendin tënd sot.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/bileta"
            className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-950 transition-colors hover:bg-amber-300"
          >
            Info Biletash
          </Link>
          <Link
            href="/kontakt"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-amber-400 hover:text-amber-400"
          >
            Na Kontaktoni
          </Link>
        </div>
      </section>
    </>
  );
}
