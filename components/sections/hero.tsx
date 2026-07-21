"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
    const { personalInfo } = portfolioData;

    const scrollToContact = () => {
        const element = document.querySelector("#contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };



    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-card border border-border rounded-sm p-8 lg:p-12"
                >
                    <div className="grid grid-cols-1 gap-12 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-left"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mb-6"
                            >
                                <p className="text-xs font-mono font-medium text-muted-foreground mb-2 tracking-[0.2em] uppercase">
                                    — Drawing No. 001 — Welcome to my portfolio
                                </p>
                                <h1 className="mb-4 font-sans font-black uppercase leading-[0.88] tracking-[-0.03em] text-5xl sm:text-6xl lg:text-7xl">
                                    <span className="block text-foreground">
                                        Hi, I&apos;m
                                    </span>
                                    <span className="block text-outline">
                                        {personalInfo.name}
                                    </span>
                                </h1>
                                <h2 className="font-display font-bold text-lg sm:text-xl lg:text-2xl uppercase tracking-[0.02em] text-muted-foreground mb-6">
                                    {personalInfo.title}
                                </h2>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed"
                            >
                                {personalInfo.summary}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4 justify-start"
                            >
                                <Button
                                    onClick={scrollToContact}
                                    size="lg"
                                    className="group"
                                >
                                    <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                    Get In Touch
                                </Button>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="group"
                                    onClick={() => window.open('/resume.pdf', '_blank')}
                                >
                                    <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                    Download Resume
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mt-8 text-sm text-muted-foreground"
                            >
                                {personalInfo.location}
                            </motion.div>
                        </motion.div>

                        {/* Right side - Empty space for balance */}
                        <div className="hidden lg:block"></div>
                    </div>
                </motion.div>
            </div>


        </section>
    );
}