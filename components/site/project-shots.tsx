"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

export function ProjectShots({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const count = images.length;

  const previous = () => setIndex((current) => (current - 1 + count) % count);
  const next = () => setIndex((current) => (current + 1) % count);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, count]);

  const lightbox = open && mounted
    ? createPortal(
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 sm:p-8"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot`}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 border border-border bg-background/90 p-2 text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
          <div
            className="relative h-[min(86vh,900px)] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt={`${title} screenshot ${index + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
            {count > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous screenshot"
                  onClick={previous}
                  className="absolute left-2 top-1/2 -translate-y-1/2 border border-border bg-background/90 px-3 py-2 font-mono text-sm"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next screenshot"
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 border border-border bg-background/90 px-3 py-2 font-mono text-sm"
                >
                  →
                </button>
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/90 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em]">
                  {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                </span>
              </>
            )}
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <div className="relative mb-6 aspect-video overflow-hidden border border-border bg-muted">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Enlarge ${title} screenshot`}
          className="absolute inset-0 z-10 cursor-zoom-in"
        />
        <Image
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover object-top"
        />
        <span className="pointer-events-none absolute left-2 top-2 inline-flex items-center gap-1 bg-background/85 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-foreground">
          <ZoomIn className="h-3 w-3" />
          Enlarge
        </span>
        {count > 1 && (
          <div className="absolute bottom-2 right-2 z-20 flex items-center gap-1 bg-background/85 px-1.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-foreground">
            <button type="button" onClick={previous} aria-label="Previous screenshot" className="px-1.5 py-0.5 hover:text-muted-foreground">
              ←
            </button>
            <span>
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
            <button type="button" onClick={next} aria-label="Next screenshot" className="px-1.5 py-0.5 hover:text-muted-foreground">
              →
            </button>
          </div>
        )}
      </div>
      {lightbox}
    </>
  );
}
