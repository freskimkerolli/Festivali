# DritaFest — Website i Festivalit Ndërkombëtar të Filmit

Website informativ për **DritaFest**, një festival filmi (fiktiv, si projekt shembull) i frymëzuar nga struktura e faqeve të festivaleve reale si PriFest. Sajti shërben për të prezantuar programin e shfaqjeve, filmat pjesëmarrës, mysafirët/jurinë, informacionin për bileta, dhe të dhënat e kontaktit.

## Përmbajtja e Sajtit

| Faqja | Përshkrimi |
|---|---|
| `/` | Ballina — hero me numërues mbrapsht, statistika, filma të veçuar, vendndodhjet |
| `/programi` | Orari i plotë i shfaqjeve, i grupuar sipas ditësh |
| `/filmat` | Lista e filmave me filtrim sipas kategorisë |
| `/filmat/[slug]` | Faqja e detajeve për secilin film (përmbledhje, regjisor, projeksione) |
| `/mysafiret` | Juria dhe të ftuarit e festivalit |
| `/bileta` | Çmimet e biletave dhe vendndodhjet e sallave |
| `/rreth-nesh` | Historia, vlerat dhe kronologjia e festivalit |
| `/kontakt` | Formë kontakti dhe informacione |

Të dhënat e festivalit (filma, orare, mysafirë, vende, çmime) janë të centralizuara në `src/lib/data.ts` — për të ndryshuar përmbajtjen (emra, data, filma të rinj), mjafton të përditësohet ky skedar, pa prekur komponentët.

## Teknologjitë

- **[Next.js 16](https://nextjs.org)** (App Router) — framework-u kryesor
- **[React 19](https://react.dev)** — libraria e ndërfaqes
- **[TypeScript](https://www.typescriptlang.org)** — tipizim statik
- **[Tailwind CSS v4](https://tailwindcss.com)** — stilizimi
- **ESLint** — kontrolli i cilësisë së kodit

## Zhvillimi Lokal

Instalo varësitë dhe nis serverin e zhvillimit:

```bash
npm install
npm run dev
```

Hap [http://localhost:3000](http://localhost:3000) në shfletues. Faqja rifreskohet automatikisht kur ndryshon kodin.

### Komanda të tjera

```bash
npm run build   # build për prodhim
npm run start   # nis serverin e ndërtuar
npm run lint    # kontrollon kodin me ESLint
```

## Struktura e Projektit

```
src/
  app/            # faqet (App Router)
  components/     # komponentë të ripërdorshëm (Header, Footer, FilmCard, etj.)
  lib/data.ts     # të dhënat e festivalit (filma, orare, mysafirë, vende)
```

## Deploy

Projekti mund të publikohet lehtësisht në [Vercel](https://vercel.com/new) — mjafton lidhja e repository-t.
