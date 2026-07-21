"use client";

import Image from "next/image";
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
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "btn-3d rounded-sm border border-foreground bg-transparent px-3 py-1 text-foreground"
                  : "btn-3d rounded-sm border border-border bg-transparent px-3 py-1 hover:border-foreground hover:text-foreground"
              }
            >
              {link.label}
            </Link>
          ))}
          <span className="ml-2">
            <ThemeToggle />
          </span>
        </div>
      </div>
    </nav>
  );
}
