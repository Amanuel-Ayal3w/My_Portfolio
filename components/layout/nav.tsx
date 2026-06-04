"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { href: "/work", label: "work" },
  { href: "/projects", label: "projects" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="w-full pt-5 pb-3 px-4">
      <div className="max-w-xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-sm text-foreground hover:underline">
          Amanuel Ayalew
        </Link>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          {navLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-1">
              {i > 0 && <span>/</span>}
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-foreground underline underline-offset-2"
                    : "hover:text-foreground transition-colors"
                }
              >
                {link.label}
              </Link>
            </span>
          ))}
          <span className="ml-2">
            <ThemeToggle />
          </span>
        </div>
      </div>
    </nav>
  );
}
