"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

function format(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.floor(totalSeconds % 60);
  const f = Math.floor((totalSeconds % 1) * 24);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `TC ${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
}

export function Timecode({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const started = Date.now();
    const id = window.setInterval(() => {
      setSeconds((Date.now() - started) / 1000);
    }, 120);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <span className={className}>
      {reduceMotion ? "TC 00:00:00:00" : format(seconds)}
    </span>
  );
}
