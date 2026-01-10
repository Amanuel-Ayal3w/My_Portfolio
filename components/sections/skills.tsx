"use client";

import { motion } from "framer-motion";
import {
    SiPython,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiWordpress,
    SiAndroid,
    SiGit,
    SiPytorch,
    SiTensorflow,

    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiMongodb,
    SiDocker,
    SiAmazonwebservices,
} from "react-icons/si";
import { Code2, Brain } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

// Icon mapping for different technologies
const getSkillIcon = (skill: string) => {
    const skillLower = skill.toLowerCase();

    // Programming Languages
    if (skillLower.includes('python')) return SiPython;
    if (skillLower.includes('javascript')) return SiJavascript;
    if (skillLower.includes('typescript')) return SiTypescript;
    if (skillLower.includes('html')) return SiHtml5;
    if (skillLower.includes('css')) return SiCss3;

    // Frameworks & Libraries
    if (skillLower.includes('react')) return SiReact;
    if (skillLower.includes('next')) return SiNextdotjs;
    if (skillLower.includes('node')) return SiNodedotjs;
    if (skillLower.includes('express')) return SiExpress;
    if (skillLower.includes('tailwind')) return SiTailwindcss;

    // AI/ML
    if (skillLower.includes('pytorch')) return SiPytorch;
    if (skillLower.includes('tensorflow')) return SiTensorflow;

    // Databases
    if (skillLower.includes('postgres')) return SiPostgresql;
    if (skillLower.includes('sql')) return SiPostgresql; // Default for SQL
    if (skillLower.includes('mongo')) return SiMongodb;

    // Tools & Platforms
    if (skillLower.includes('wordpress')) return SiWordpress;
    if (skillLower.includes('git')) return SiGit;
    if (skillLower.includes('docker')) return SiDocker;
    if (skillLower.includes('aws')) return SiAmazonwebservices;
    if (skillLower.includes('android')) return SiAndroid;

    // Generic fallbacks based on category if specific match fails
    return Code2;
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



export function Skills() {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="py-20">
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
                        className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-all duration-300"
                    >
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {skills.map((skillCategory) => (
                                    <div key={skillCategory.category} className="space-y-4">
                                        <h3 className="text-lg font-semibold text-foreground flex items-center">
                                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                            {skillCategory.category}
                                        </h3>
                                        <ul className="space-y-2">
                                            {skillCategory.items.map((skill) => {
                                                const Icon = getSkillIcon(skill);
                                                return (
                                                    <li key={skill} className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                                                        <Icon className="w-4 h-4 mr-2 text-primary/70" />
                                                        {skill}
                                                    </li>
                                                );
                                            })}
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