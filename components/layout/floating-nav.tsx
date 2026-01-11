"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, Code, Terminal, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface NavItem {
    icon: React.ElementType;
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { icon: User, label: "About", href: "#about" },
    { icon: Briefcase, label: "Experience", href: "#experience" },
    { icon: Code, label: "Projects", href: "#projects" },
    { icon: Terminal, label: "Skills", href: "#skills" },
    { icon: Mail, label: "Contact", href: "#contact" },
];

export function FloatingNav() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                className="flex flex-col items-center gap-4 px-3 py-6 bg-background/60 backdrop-blur-lg border border-border/50 rounded-full shadow-lg"
            >
                {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isHovered = hoveredIndex === index;

                    return (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative p-3 rounded-full hover:bg-muted/50 transition-colors group"
                        >
                            <AnimatePresence>
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20, y: "-50%" }}
                                        animate={{ opacity: 1, x: -10, y: "-50%" }}
                                        exit={{ opacity: 0, x: 10, y: "-50%" }}
                                        className="absolute right-full top-1/2 -translate-y-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md whitespace-nowrap border border-border/50 shadow-md mr-2"
                                    >
                                        {item.label}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <Icon className={cn("w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors")} />
                            </motion.div>
                        </a>
                    );
                })}

                <div className="w-6 h-px bg-border my-1" />

                <div className="flex items-center justify-center w-10 h-10">
                    <ThemeToggle />
                </div>
            </motion.div>
        </div>
    );
}
