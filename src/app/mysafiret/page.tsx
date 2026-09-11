import PageHero from "@/components/PageHero";
import { guests } from "@/lib/data";

export default function MysafiretPage() {
  return (
    <>
      <PageHero
        eyebrow="Juria & Mysafirët"
        title="Mysafirët"
        description="Njihuni me jurinë e këtij edicioni dhe krijuesit që do të jenë të pranishëm gjatë festivalit."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {guests.map((guest) => (
            <div key={guest.name} className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-neutral-900/40">
              <div className={`flex aspect-square items-center justify-center bg-gradient-to-br ${guest.gradient}`}>
                <span className="font-display text-4xl text-white/90">
                  {guest.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-white">{guest.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">{guest.role}</p>
                <p className="mt-3 text-sm text-neutral-400">{guest.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
