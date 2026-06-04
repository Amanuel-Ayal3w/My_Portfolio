"use client";

import { useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({ title, description, githubUrl, liveUrl }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const href = githubUrl ?? liveUrl;

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
          <p className="text-sm text-muted-foreground leading-relaxed mt-3 mb-4">
            {description}
          </p>
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
    </div>
  );
}
