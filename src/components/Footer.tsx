import Link from "next/link";
import { festival } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="font-display text-lg text-amber-400">{festival.name}</p>
          <p className="mt-3 text-sm leading-6 text-neutral-400">{festival.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Faqet</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            <li><Link className="hover:text-amber-400" href="/programi">Programi</Link></li>
            <li><Link className="hover:text-amber-400" href="/filmat">Filmat</Link></li>
            <li><Link className="hover:text-amber-400" href="/mysafiret">Mysafirët</Link></li>
            <li><Link className="hover:text-amber-400" href="/bileta">Bileta</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Kontakt</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            <li>{festival.address}</li>
            <li>
              <a className="hover:text-amber-400" href={`mailto:${festival.email}`}>{festival.email}</a>
            </li>
            <li>
              <a className="hover:text-amber-400" href={`tel:${festival.phone}`}>{festival.phone}</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Na ndiqni</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            <li><a className="hover:text-amber-400" href={festival.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a className="hover:text-amber-400" href={festival.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a className="hover:text-amber-400" href={festival.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {festival.fullName}. Të gjitha të drejtat e rezervuara.
      </div>
    </footer>
  );
}
