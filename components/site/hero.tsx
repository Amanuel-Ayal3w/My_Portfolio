"use client";

import { useEffect, useState } from "react";

const LINE = "Building software that learns from data";

const profile = [
  "const engineer = {",
  '  name: "Amanuel",',
  '  role: "Software Engineer",',
  '  focus: ["backend", "machine learning"],',
  '  location: "Addis Ababa",',
  '  status: "building",',
  '  stack: ["Python", "Go", "PyTorch"]',
  "}",
];

export function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(LINE.length);
      return;
    }
    if (count >= LINE.length) return;
    const timer = window.setTimeout(() => setCount((value) => value + 1), 42);
    return () => window.clearTimeout(timer);
  }, [count]);

  return (
    <section id="home" className="relative mx-auto flex w-full max-w-[1240px] items-start overflow-hidden px-[clamp(1.25rem,5vw,5.5rem)] pb-12 pt-24 lg:min-h-[100svh] lg:items-center lg:pb-16 lg:pt-28">
      <div className="grid w-full min-w-0 items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:gap-14">
        <div className="min-w-0">
          <p className="mb-4 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground lg:mb-6">
            <span className="h-px w-10 bg-foreground/50" />
            Software Engineer / ML
          </p>
          <h1 className="font-display text-[clamp(3.25rem,22vw,5.6rem)] font-bold leading-[0.86] tracking-[-0.06em] text-foreground lg:text-[clamp(3.4rem,8vw,6.6rem)]">
            <span className="block">Amanuel</span>
            <span className="block">
              <span className="text-outline">Ayalew</span>
              <span>.</span>
            </span>
          </h1>
          <p className="mt-5 font-mono text-sm text-foreground lg:mt-6 lg:text-base">
            <span className="text-muted-foreground">&gt; </span>
            {LINE.slice(0, count)}
            <span className="cursor-blink ml-1 inline-block h-[1em] w-0.5 translate-y-[2px] bg-foreground align-middle" />
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground lg:mt-5 lg:text-base">
            Software Engineer with experience in backend systems and growing expertise in machine learning.
            I build scalable applications, experiment with model design, and apply ML to real, data-driven problems.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-8">
            <a
              href="#projects"
              className="site-btn inline-flex items-center justify-center gap-3 border border-foreground bg-foreground px-5 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-background"
            >
              View My Work <span aria-hidden>↗</span>
            </a>
            <a
              href="#contact"
              className="site-btn inline-flex items-center justify-center gap-3 border border-foreground bg-transparent px-5 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-foreground"
            >
              Get In Touch <span aria-hidden>↗</span>
            </a>
          </div>
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground lg:mt-8">
            <span>Addis Ababa, Ethiopia</span>
            <span aria-hidden>|</span>
            <span>Working on backend and ML</span>
          </p>
        </div>

        <div className="min-w-0 border border-border bg-card/80 font-mono text-[11px] leading-5 text-foreground shadow-[0_30px_80px_rgb(var(--foreground)/0.12)] lg:rotate-[2deg] lg:text-[12px] lg:leading-6">
          <div className="flex items-center justify-between border-b border-border px-4 py-3 text-muted-foreground">
            <span className="flex gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full border border-border" />
              <span className="h-2.5 w-2.5 rounded-full border border-border" />
              <span className="h-2.5 w-2.5 rounded-full border border-border" />
            </span>
            <span className="text-[11px]">amanuel.ts — profile</span>
            <span aria-hidden>···</span>
          </div>
          <pre className="overflow-x-auto px-4 py-4">
            {profile.map((line, index) => (
              <div key={line} className="flex gap-4">
                <span className="w-5 shrink-0 select-none text-right text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 whitespace-pre-wrap">{line}</span>
              </div>
            ))}
          </pre>
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-border px-4 py-2.5 text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Open to new opportunities
            </span>
            <span>Ln {profile.length}, Col 2</span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 right-[clamp(1.25rem,5vw,5.5rem)] hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground sm:inline-flex"
      >
        Scroll to explore <span aria-hidden>↓</span>
      </a>
    </section>
  );
}
