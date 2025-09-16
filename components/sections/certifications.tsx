"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Trophy, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

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

export function Certifications() {
  const { certifications } = portfolioData;

  const certificationItems = certifications.filter(cert => cert.type === 'certification');
  const awards = certifications.filter(cert => cert.type === 'award');

  return (
    <section className="py-20 bg-muted/30">
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
            Certifications & Awards
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Professional certifications and recognition for technical excellence and innovation.
          </motion.p>
        </motion.div>

        <div className="bg-background/50 backdrop-blur-sm border border-border/30 rounded-2xl p-8 relative overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
          {/* Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary/10 rounded-lg mr-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
              </div>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-4">
              {certificationItems.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Award className="w-4 h-4 mr-2" />
                        <span className="font-medium">{cert.issuer}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Issued: {cert.date}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-yellow-500/10 rounded-lg mr-3">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Awards & Recognition</h3>
              </div>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Highlight for finalist achievements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-500/20 to-transparent"></div>

                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-yellow-600 transition-colors">
                        {award.title}
                      </h4>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                        <span className="font-medium">{award.issuer}</span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">
                        {award.date}
                      </div>
                      <div className="inline-flex items-center px-3 py-1 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 text-xs font-medium rounded-full">
                        <Trophy className="w-3 h-3 mr-1" />
                        Finalist
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                        <Trophy className="w-6 h-6 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        </div>

        {/* Call to action */}
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
            <ExternalLink className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              View credentials on LinkedIn
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}