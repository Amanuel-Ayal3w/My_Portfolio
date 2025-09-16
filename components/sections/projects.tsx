"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-background">
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
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Showcasing innovative solutions and technical expertise through real-world applications.
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Project header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          className="opacity-70 hover:opacity-100"
                        >
                          <Github className="w-5 h-5" />
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="opacity-70 hover:opacity-100"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Button>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  {project.achievements && project.achievements.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center text-sm font-medium text-foreground mb-2">
                        <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                        Key Achievements
                      </div>
                      {project.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project footer */}
                <div className="px-6 py-4 bg-muted/30 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      Team Project
                    </div>
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="group-hover:border-primary group-hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Placeholder for additional projects */}
            <motion.div
              variants={itemVariants}
              className="bg-card border border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors group cursor-pointer"
              onClick={() => window.open(portfolioData.personalInfo.github, '_blank')}
            >
              <Github className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                More Projects
              </h3>
              <p className="text-muted-foreground mb-4">
                Explore additional projects and contributions on GitHub
              </p>
              <Button variant="outline" className="group-hover:border-primary group-hover:text-primary transition-colors">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit GitHub
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}