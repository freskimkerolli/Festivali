"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-amber-400/30 bg-amber-400/5 p-6 text-center">
        <p className="font-display text-xl text-amber-400">Faleminderit!</p>
        <p className="mt-2 text-sm text-neutral-300">Mesazhi juaj u dërgua. Do t&apos;ju kontaktojmë së shpejti.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Emri</label>
          <input
            required
            type="text"
            className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-4 py-2.5 text-white outline-none focus:border-amber-400"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Email</label>
          <input
            required
            type="email"
            className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-4 py-2.5 text-white outline-none focus:border-amber-400"
          />
        </div>
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Subjekti</label>
        <input
          required
          type="text"
          className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-4 py-2.5 text-white outline-none focus:border-amber-400"
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Mesazhi</label>
        <textarea
          required
          rows={5}
          className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-4 py-2.5 text-white outline-none focus:border-amber-400"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-950 transition-colors hover:bg-amber-300"
      >
        Dërgo Mesazhin
      </button>
    </form>
  );
}
