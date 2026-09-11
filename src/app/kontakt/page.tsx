import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { festival } from "@/lib/data";

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Na Shkruani"
        title="Kontakt"
        description="Për pyetje rreth programit, akreditimeve për media, apo bashkëpunime — jemi këtu."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2">
        <ContactForm />

        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">Adresa</p>
            <p className="mt-1 text-neutral-300">{festival.address}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">Email</p>
            <a href={`mailto:${festival.email}`} className="mt-1 block text-neutral-300 hover:text-amber-400">
              {festival.email}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">Telefon</p>
            <a href={`tel:${festival.phone}`} className="mt-1 block text-neutral-300 hover:text-amber-400">
              {festival.phone}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">Rrjetet Sociale</p>
            <div className="mt-2 flex gap-4">
              <a href={festival.social.instagram} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-amber-400">Instagram</a>
              <a href={festival.social.facebook} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-amber-400">Facebook</a>
              <a href={festival.social.youtube} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-amber-400">YouTube</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
