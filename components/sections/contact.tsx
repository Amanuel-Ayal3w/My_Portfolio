"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export function Contact() {
  const { personalInfo } = portfolioData;

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: "Send me an email"
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      description: "Give me a call"
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
      description: "Based in"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: personalInfo.linkedin,
      description: "Professional profile"
    },
    {
      icon: Github,
      label: "GitHub",
      href: personalInfo.github,
      description: "Code repositories"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Let&apos;s Connect
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            I&apos;m always interested in new opportunities and collaborations.
            Feel free to reach out if you&apos;d like to work together!
          </motion.p>
        </motion.div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-foreground mb-8"
              >
                Get In Touch
              </motion.h3>

              <motion.div variants={containerVariants} className="space-y-6">
                {contactMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <motion.div
                      key={method.label}
                      variants={itemVariants}
                      className="flex items-start group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {method.label}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {method.description}
                        </p>
                        {method.href ? (
                          <a
                            href={method.href}
                            className="text-primary hover:underline font-medium"
                            target={method.href.startsWith('http') ? '_blank' : undefined}
                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {method.value}
                          </a>
                        ) : (
                          <span className="text-foreground font-medium">
                            {method.value}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Social Links & CTA */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-foreground mb-8"
              >
                Follow My Work
              </motion.h3>

              <motion.div variants={containerVariants} className="space-y-6 mb-8">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      variants={itemVariants}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start group hover:bg-accent/50 p-3 rounded-lg transition-colors"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h4 className="font-semibold text-foreground mb-1 mr-2">
                            {social.label}
                          </h4>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {social.description}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Quick Contact CTA */}
              <motion.div
                variants={itemVariants}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h4 className="font-semibold text-foreground mb-3">
                  Ready to collaborate?
                </h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  I&apos;m currently open to new opportunities in software engineering
                  and machine learning roles.
                </p>
                <Button
                  onClick={() => window.location.href = `mailto:${personalInfo.email}`}
                  className="w-full"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-20 pt-8 border-t border-border text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground"
          >
            © 2025 {personalInfo.name}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}