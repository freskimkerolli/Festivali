import PageHero from "@/components/PageHero";
import { festival } from "@/lib/data";

const timeline = [
  { year: "2015", text: "Edicioni i parë i Festivalit mbahet në një kinema të vetme, me 12 filma nga rajoni." },
  { year: "2018", text: "Festivali zgjerohet me konkurrim ndërkombëtar dhe programin 'Të Rinjtë'." },
  { year: "2021", text: "Shtohet programi 'Dokumentar' dhe Festivali fillon të organizojë punëtori për filmbërës të rinj." },
  { year: "2026", text: "Edicioni i 12-të sjell filma nga mbi 15 shtete në tre salla shfaqjeje njëkohësisht." },
];

const values = [
  { title: "Kuratim i Guximshëm", text: "Zgjedhim filma që sfidojnë dhe që hapin biseda, jo vetëm ata që argëtojnë." },
  { title: "Vend për Talentin Rajonal", text: "Gjysma e programit i dedikohet filmbërësve nga Ballkani." },
  { title: "Komunitet i Hapur", text: "Bileta të përballueshme dhe biseda të hapura pas çdo shfaqjeje." },
];

export default function RrethNeshPage() {
  return (
    <>
      <PageHero
        eyebrow="Historia Jonë"
        title="Rreth Nesh"
        description={festival.description}
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-2xl text-amber-400 sm:text-3xl">Vlerat Tona</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-lg border border-white/10 bg-neutral-900/40 p-6">
              <h3 className="font-display text-lg text-white">{value.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{value.text}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl text-amber-400 sm:text-3xl">Udhëtimi Ynë</h2>
        <div className="mt-6 space-y-6 border-l border-white/10 pl-6">
          {timeline.map((item) => (
            <div key={item.year} className="relative">
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-amber-400" />
              <p className="font-display text-xl text-white">{item.year}</p>
              <p className="mt-1 text-sm text-neutral-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
