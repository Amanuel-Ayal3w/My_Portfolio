import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/layout/nav";
import { ProjectCard } from "@/components/ui/project-card";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const { personalInfo, experience, projects, skills } = portfolioData;
  const recentExperience = experience.slice(0, 2);
  const recentProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="max-w-xl mx-auto px-4 py-8 space-y-12">
        {/* Intro */}
        <section>
          <div className="mb-6">
            <h1 className="font-display font-medium uppercase leading-[0.85] tracking-[-0.02em] text-[clamp(2.5rem,11vw,3.9rem)]">
              <span className="block text-foreground">Hi, I&apos;m</span>
              <span className="block text-outline">{personalInfo.name}</span>
            </h1>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {personalInfo.summary}
          </p>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            I&apos;m passionate about AI, machine learning, and building things that
            solve real problems.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d mt-5 inline-flex items-center gap-2 rounded-sm border border-foreground bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-background hover:text-foreground"
          >
            Download Resume
          </a>
        </section>

        {/* Work Experience preview */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-foreground">Work Experience</h2>
            <Link
              href="/work"
              className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-2 transition-colors"
            >
              See all work
            </Link>
          </div>
          <div className="space-y-3">
            {recentExperience.map((exp) => {
              const isCurrent = exp.duration.toLowerCase().includes("present");
              return (
                <div
                  key={exp.id}
                  className={`bg-card rounded-lg p-4 border transition-colors hover:bg-accent/20 ${
                    isCurrent ? "border-border border-l-2 border-l-foreground" : "border-border"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{exp.position}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{exp.duration}</span>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full bg-muted text-foreground font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-sm font-medium text-foreground mb-4">Education</h2>
          <div className="bg-card rounded-lg p-4 border border-border">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">Bachelor of Science in Software Engineering</p>
                <p className="text-sm text-muted-foreground mt-0.5">Addis Ababa University</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">2021 – 2026</span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-sm font-medium text-foreground mb-4">Skills</h2>
          <div className="space-y-3">
            {skills.map((skillCategory) => (
              <div key={skillCategory.category} className="bg-card rounded-lg p-4 border border-border">
                <p className="text-xs font-medium text-muted-foreground mb-2">{skillCategory.category}</p>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill) => (
                    <span key={skill} className="text-xs px-2 py-1 rounded-md bg-muted text-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent projects */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-medium text-foreground">Recent projects</h2>
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-2 transition-colors"
            >
              See all projects
            </Link>
          </div>
          <div className="space-y-2">
            {recentProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                achievements={project.achievements}
                images={project.images}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </section>

        {/* Let's Connect */}
        <section className="border-t border-border pt-10">
          <h2 className="text-sm font-medium text-foreground mb-2">Let&apos;s Connect</h2>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            If you want to get in touch about something or just to say hi, feel free
            to reach out on social media or send me an email.
          </p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground hover:underline underline-offset-2 transition-colors"
            >
              github
            </a>
            <span>/</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground hover:underline underline-offset-2 transition-colors"
            >
              linkedin
            </a>
            <span>/</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-foreground hover:underline underline-offset-2 transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="max-w-xl mx-auto px-4 py-10 text-center">
        <p className="text-xs text-muted-foreground">© 2026 {personalInfo.name}</p>
      </footer>
    </div>
  );
}
