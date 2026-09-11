import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ticketInfo, venues } from "@/lib/data";

const tiers = [
  { name: "Biletë e Vetme", price: ticketInfo.single, desc: "Hyrje në një shfaqje të vetme, në sallën dhe orarin e zgjedhur." },
  { name: "Pasaportë Ditore", price: ticketInfo.day, desc: "Hyrje e pakufizuar në të gjitha shfaqjet e një dite." },
  { name: "Pasaportë e Plotë", price: ticketInfo.full, desc: "Qasje në të gjitha shfaqjet e festivalit, përfshirë hapjen dhe mbylljen." },
];

export default function BiletaPage() {
  return (
    <>
      <PageHero
        eyebrow="Info Praktike"
        title="Bileta"
        description="Zgjidhni opsionin që ju përshtatet më së miri dhe rezervoni vendin tuaj përpara se të shiten biletat."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="flex flex-col rounded-lg border border-white/10 bg-neutral-900/40 p-6">
              <h3 className="font-display text-xl text-white">{tier.name}</h3>
              <p className="mt-2 font-display text-4xl text-amber-400">{tier.price}</p>
              <p className="mt-3 flex-1 text-sm text-neutral-400">{tier.desc}</p>
              <button className="mt-6 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-neutral-950 transition-colors hover:bg-amber-300">
                Rezervo
              </button>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-neutral-500">{ticketInfo.note}</p>

        <div className="mt-16">
          <h2 className="font-display text-2xl text-white sm:text-3xl">Vendndodhjet e Shfaqjeve</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {venues.map((venue) => (
              <div key={venue.name} className="rounded-lg border border-white/10 bg-neutral-900/40 p-6">
                <h3 className="font-display text-xl text-amber-400">{venue.name}</h3>
                <p className="mt-2 text-sm text-neutral-300">{venue.address}</p>
                <p className="mt-3 text-sm text-neutral-500">{venue.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-lg border border-amber-400/30 bg-amber-400/5 p-6 text-center">
          <p className="text-neutral-200">
            Keni pyetje rreth biletave apo grupeve të mëdha?{" "}
            <Link href="/kontakt" className="font-semibold text-amber-400 hover:text-amber-300">
              Na kontaktoni
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
