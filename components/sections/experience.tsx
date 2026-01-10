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

const defaultExperience = [
  {
    id: "icog-labs",
    company: "iCog Labs",
    position: "Machine Learning Engineer Intern",
    duration: "July 2024 - Present",
    description: [
      "Working on machine learning projects and AI research initiatives",
      "Developing and implementing ML models for real-world applications",
      "Collaborating with research team on cutting-edge AI technologies"
    ],
    technologies: ["Python", "PyTorch", "Machine Learning", "AI Research"]
  },
  {
    id: "alet-systems",
    company: "Alet Systems",
    position: "Software Engineer",
    duration: "April 2024 - December 2024",
    description: [
      "Fixed and tested backend systems to ensure optimal performance",
      "Worked on the company's Android app, adding new functionalities and ensuring smooth operation",
      "Gained experience in full-stack development and mobile application maintenance"
    ],
    technologies: ["Backend Development", "Android", "Full-stack Development", "Mobile Apps"]
  },
  {
    id: "dm-trading",
    company: "D&M Trading",
    position: "Intern Software Engineer",
    duration: "June 2022 - August 2022",
    description: [
      "Assisted in developing and maintaining the company's website and internal tools using Python",
      "Built internal tools for data visualization and reporting",
      "Developed custom WordPress themes to improve functionality and user experience"
    ],
    technologies: ["Python", "WordPress", "Data Visualization", "Web Development"]
  }
];

export function Experience() {
  const { experience, education } = portfolioData;
  const experienceItems = experience?.length ? experience : defaultExperience;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="relative bg-card border border-border rounded-2xl p-8 shadow-sm"
        >
          <div className="relative">
            {/* Timeline line */}
            {/* Timeline line - REMOVED */}

            {/* Experience items */}
            {experienceItems.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative flex items-start mb-12 last:mb-8"
              >
                {/* Timeline dot */}
                {/* Timeline dot - REMOVED */}

                {/* Content */}
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 w-full">
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
              {/* Timeline dot - REMOVED */}

              {/* Content */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {education.degree}
                    </h3>
                    <div className="flex items-center text-primary font-medium mb-2">
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
    </section>
  );
}