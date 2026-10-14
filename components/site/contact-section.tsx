"use client";

import { FormEvent, useState } from "react";
import { portfolioData } from "@/data/portfolio";

export function ContactSection() {
  const { personalInfo } = portfolioData;
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)}`;
    setSent(true);
    window.location.href = href;
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-[1240px] px-[clamp(1.25rem,5vw,5.5rem)] py-24">
      <div className="mb-12">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">06 / Contact</p>
        <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-[-0.045em] sm:text-6xl">
          Let&apos;s build
          <br />
          something useful.
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Open to software engineering and machine learning roles. If you have a hard problem,
            a product to ship, or just want to say hello — send a note.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 font-mono text-sm">
            <a href={`mailto:${personalInfo.email}`} className="underline-offset-4 hover:underline">
              {personalInfo.email} ↗
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
              LinkedIn ↗
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
              GitHub ↗
            </a>
            <a href={personalInfo.telegram} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
              Telegram ↗
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="grid gap-5">
          <label className="flex flex-col gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
            Name
            <input
              name="name"
              required
              placeholder="Your name"
              className="border border-border bg-transparent px-3 py-3 font-sans text-sm normal-case tracking-normal text-foreground outline-none placeholder:text-muted-foreground focus:border-foreground"
            />
          </label>
          <label className="flex flex-col gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
            Email
            <input
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="border border-border bg-transparent px-3 py-3 font-sans text-sm normal-case tracking-normal text-foreground outline-none placeholder:text-muted-foreground focus:border-foreground"
            />
          </label>
          <label className="flex flex-col gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
            Message
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about what you're building..."
              className="resize-y border border-border bg-transparent px-3 py-3 font-sans text-sm normal-case tracking-normal text-foreground outline-none placeholder:text-muted-foreground focus:border-foreground"
            />
          </label>
          <button
            type="submit"
            className="site-btn inline-flex w-fit items-center gap-3 border border-foreground bg-foreground px-5 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-background"
          >
            {sent ? "Opening email" : "Send message"} <span aria-hidden>↗</span>
          </button>
        </form>
      </div>
    </section>
  );
}
