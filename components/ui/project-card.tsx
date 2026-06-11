"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, ExternalLink, X } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  achievements?: string[];
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({ title, description, achievements, images, githubUrl, liveUrl }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const href = githubUrl ?? liveUrl;
  const hasImages = images && images.length > 0;
  const index = hasImages ? current % images.length : 0;

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => {
      if (!hasImages) return;
      if (e.key === "Escape") setZoomed(false);
      if (e.key === "ArrowRight") setCurrent((index + 1) % images.length);
      if (e.key === "ArrowLeft") setCurrent((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomed, hasImages, images, index]);

  return (
    <div className="bg-card border border-border rounded-md overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-accent/40 transition-colors text-left"
      >
        <span className="text-sm font-medium text-foreground">{title}</span>
        <ChevronRight
          className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-4 pb-4 border-t border-border">
          {hasImages && (
            <div className="mt-3 mb-4">
              <div className="relative w-full aspect-video rounded-md overflow-hidden border border-border bg-muted">
                <button
                  type="button"
                  aria-label="Expand image"
                  onClick={() => setZoomed(true)}
                  className="absolute inset-0 z-10 cursor-zoom-in"
                />
                <Image
                  src={images[index]}
                  alt={`${title} screenshot ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 576px"
                  className="object-cover"
                />
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      onClick={() => setCurrent((index - 1 + images.length) % images.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full bg-background/70 text-foreground hover:bg-background transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={() => setCurrent((index + 1) % images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full bg-background/70 text-foreground hover:bg-background transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex justify-center gap-1.5 mt-2">
                  {images.map((_, i) => (
                    <button
                      type="button"
                      key={i}
                      aria-label={`Go to image ${i + 1}`}
                      onClick={() => setCurrent(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        i === index ? "bg-foreground" : "bg-muted-foreground/40"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
          <p className="text-sm text-muted-foreground leading-relaxed mt-3 mb-4">
            {description}
          </p>
          {achievements && achievements.length > 0 && (
            <ul className="space-y-2 mb-4">
              {achievements.map((item, i) => (
                <li key={i} className="flex items-start text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full mt-1.5 mr-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline underline-offset-2 transition-opacity hover:opacity-70"
            >
              Go to code
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      )}

      {zoomed && hasImages && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setZoomed(false)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setZoomed(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/70 text-foreground hover:bg-background transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt={`${title} screenshot ${index + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => setCurrent((index - 1 + images.length) % images.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/70 text-foreground hover:bg-background transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => setCurrent((index + 1) % images.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/70 text-foreground hover:bg-background transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
