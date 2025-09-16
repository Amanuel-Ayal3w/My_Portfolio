"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Layers,
    Wrench,
    FileCode,
    Brain,
    Cpu,
    Globe,
    Smartphone,
    GitBranch,
    Terminal,
    Zap
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

// Icon mapping for different technologies
const getSkillIcon = (skill: string) => {
    const skillLower = skill.toLowerCase();

    if (skillLower.includes('python')) return Terminal;
    if (skillLower.includes('javascript')) return Zap;
    if (skillLower.includes('sql')) return Database;
    if (skillLower.includes('numpy') || skillLower.includes('pytorch')) return Brain;
    if (skillLower.includes('react') || skillLower.includes('next')) return Layers;
    if (skillLower.includes('express')) return Cpu;
    if (skillLower.includes('postgres')) return Database;
    if (skillLower.includes('wordpress')) return Globe;
    if (skillLower.includes('mobile') || skillLower.includes('app')) return Smartphone;
    if (skillLower.includes('git')) return GitBranch;
    if (skillLower.includes('full-stack')) return Code2;

    return FileCode; // Default icon
};

const getCategoryIcon = (category: string) => {
    const categoryLower = category.toLowerCase();

    if (categoryLower.includes('programming')) return Code2;
    if (categoryLower.includes('libraries') || categoryLower.includes('frameworks')) return Layers;
    if (categoryLower.includes('databases')) return Database;

    return Wrench; // Default for "Other Technologies"
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3
        }
    }
};

export function Skills() {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
                    >
                        Skills & Technologies
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        A comprehensive overview of the technologies and tools I work with to build innovative solutions.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div
                        variants={itemVariants}
                        className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                    >
                        {/* Grid background only behind content */}
                        <div
                            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
                            style={{
                                backgroundImage: `
                                    linear-gradient(to right, rgb(var(--foreground)) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgb(var(--foreground)) 1px, transparent 1px)
                                `,
                                backgroundSize: '40px 40px'
                            }}
                        />
                        <div className="relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {skills.map((skillCategory, categoryIndex) => (
                                    <div key={skillCategory.category} className="space-y-4">
                                        <h3 className="text-lg font-semibold text-foreground flex items-center">
                                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                            {skillCategory.category}
                                        </h3>
                                        <ul className="space-y-2">
                                            {skillCategory.items.map((skill, skillIndex) => (
                                                <li key={skill} className="text-muted-foreground hover:text-foreground transition-colors">
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Additional skills highlight */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="mt-16 text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center px-6 py-3 bg-primary/5 border border-primary/20 rounded-full"
                    >
                        <Brain className="w-5 h-5 text-primary mr-2" />
                        <span className="text-sm font-medium text-primary">
                            Specialized in Machine Learning & AI Technologies
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}