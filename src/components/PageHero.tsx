export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-white/10 bg-neutral-950 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.12),_transparent_60%)]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl text-white sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-neutral-400">{description}</p>
        )}
      </div>
    </section>
  );
}
