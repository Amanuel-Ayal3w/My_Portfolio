"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Experience() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-background">
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
            Experience & Education
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            My professional journey and academic background in software engineering and machine learning.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline with grid background */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="relative bg-background/50 backdrop-blur-sm border border-border/30 rounded-2xl p-8 overflow-hidden"
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
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

              {/* Experience items */}
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative flex items-start mb-12 last:mb-8"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                  {/* Content */}
                  <div className="ml-20 bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center text-primary font-medium mb-2">
                          <Building2 className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Education */}
              <motion.div
                variants={itemVariants}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-secondary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className="ml-20 bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {education.degree}
                      </h3>
                      <div className="flex items-center text-secondary font-medium mb-2">
                        <Building2 className="w-4 h-4 mr-2" />
                        {education.institution}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {education.duration}
                    </div>
                  </div>

                  <p className="text-muted-foreground">
                    Currently pursuing a comprehensive degree in Software Engineering,
                    focusing on modern development practices, algorithms, and emerging technologies.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}