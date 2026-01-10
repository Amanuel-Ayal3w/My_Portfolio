"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CursorFieldProps {
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  dx: number;
  dy: number;
}

export function CursorField({ className }: CursorFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const particlesRef = useRef<Particle[]>([]);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Spawn particles on move
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 2 + 1,
          alpha: 1,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Main Gradient Cursor (Green)
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        400
      );
      // Emerald-500 equivalent: #10b981 -> r:16, g:185, b:129
      gradient.addColorStop(0, "rgba(16, 185, 129, 0.15)");
      gradient.addColorStop(0.5, "rgba(16, 185, 129, 0.05)");
      gradient.addColorStop(1, "rgba(16, 185, 129, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and Draw Particles
      particlesRef.current.forEach((p, index) => {
        p.x += p.dx;
        p.y += p.dy;
        p.alpha -= 0.02;

        if (p.alpha <= 0) {
          particlesRef.current.splice(index, 1);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(16, 185, 129, ${p.alpha})`; // Green particles
          ctx.fill();
        }
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "pointer-events-none fixed inset-0 z-0",
        className
      )}
    />
  );
}
