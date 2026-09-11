import PageHero from "@/components/PageHero";
import FilmsGrid from "@/components/FilmsGrid";
import { films } from "@/lib/data";

export default function FilmatPage() {
  return (
    <>
      <PageHero
        eyebrow="Selektimi Zyrtar 2026"
        title="Filmat"
        description="Nga drama intime deri te dokumentarë të fuqishëm — zbuloni filmat e këtij edicioni."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <FilmsGrid films={films} />
      </section>
    </>
  );
}
