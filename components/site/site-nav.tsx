"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
  { id: "home", label: "// home" },
  { id: "about", label: "// about" },
  { id: "experience", label: "// experience" },
  { id: "projects", label: "// projects" },
  { id: "skills", label: "// skills" },
  { id: "contact", label: "// contact" },
];

export function SiteNav() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? window.scrollY / height : 0);

      const marker = window.scrollY + 140;
      let current = "home";
      for (const link of links) {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= marker) current = link.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = (resolvedTheme ?? theme) !== "light";

  return (
    <>
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-foreground"
        style={{ transform: `scaleX(${progress})` }}
      />
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-md">
        <div className="mx-auto w-full max-w-[1240px] px-[clamp(1.25rem,5vw,5.5rem)] flex h-[76px] items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2.5 font-mono text-foreground">
            <span className="inline-flex h-8 w-8 items-center justify-center border border-foreground text-sm">
              A
            </span>
            <span className="text-[17px] tracking-tight">AA.</span>
          </a>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`font-mono text-[11px] uppercase tracking-[0.08em] ${
                  active === link.id
                    ? "text-foreground underline underline-offset-8"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="site-btn inline-flex items-center gap-1.5 border border-foreground px-2.5 py-2 font-mono text-[10px] uppercase tracking-[0.08em] sm:gap-2 sm:px-3 sm:text-[11px]"
            >
              Resume <span aria-hidden>↗</span>
            </a>
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="inline-flex h-[30px] w-[30px] items-center justify-center border border-border text-foreground"
              aria-label={mounted ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
            >
              {mounted && (isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />)}
            </button>
            <span className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground xl:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Open to new opportunities
            </span>
            <button
              type="button"
              className="inline-flex h-[30px] w-[30px] items-center justify-center border border-border lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="mx-auto w-full max-w-[1240px] px-[clamp(1.25rem,5vw,5.5rem)] flex flex-col gap-4 border-t border-border py-5 lg:hidden" aria-label="Mobile navigation">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.08em] text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="site-btn inline-flex w-fit items-center gap-2 border border-foreground px-3 py-2 font-mono text-[11px] uppercase tracking-[0.08em]"
            >
              Resume <span aria-hidden>↗</span>
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
