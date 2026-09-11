"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-10-15T18:00:00");

function getRemaining() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [remaining, setRemaining] = useState<ReturnType<typeof getRemaining> | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(getRemaining());
    const timeout = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(timeout);
      clearInterval(id);
    };
  }, []);

  const units = [
    { label: "Ditë", value: remaining?.days },
    { label: "Orë", value: remaining?.hours },
    { label: "Minuta", value: remaining?.minutes },
    { label: "Sekonda", value: remaining?.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-6">
      {units.map((unit) => (
        <div key={unit.label} className="flex min-w-[3.5rem] flex-col items-center">
          <span className="font-display text-2xl text-amber-400 tabular-nums sm:text-4xl">
            {unit.value !== undefined ? String(unit.value).padStart(2, "0") : "--"}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-neutral-400 sm:text-xs">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
