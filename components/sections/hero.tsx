"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

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

    const scrollToNextSection = () => {
        const element = document.querySelector("#experience");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
            <div className="relative z-10 py-20">
                {/* Main content container with border */}
                <div className="border border-border/30 rounded-2xl p-8 lg:p-12 bg-background/50 backdrop-blur-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
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
                                <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
                                    Welcome to my portfolio
                                </p>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                                    Hi, I'm{" "}
                                    <span className="text-primary">
                                        {personalInfo.name}
                                    </span>
                                </h1>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6">
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
                                📍 {personalInfo.location}
                            </motion.div>
                        </motion.div>

                        {/* Right side - Empty space for balance */}
                        <div className="hidden lg:block"></div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                onClick={scrollToNextSection}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors group"
                aria-label="Scroll to next section"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center"
                >
                    <span className="text-sm mb-2 group-hover:text-foreground transition-colors">
                        Scroll down
                    </span>
                    <ArrowDown className="w-5 h-5" />
                </motion.div>
            </motion.button>
        </section>
    );
}