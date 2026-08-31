import { Nav } from "@/components/layout/nav";
import { Connect } from "@/components/sections/connect";
import { portfolioData } from "@/data/portfolio";

export const metadata = {
  title: "Work – Amanuel Ayalew",
};

export default function WorkPage() {
  const { personalInfo, experience, education } = portfolioData;

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="max-w-xl mx-auto px-4 py-8">
        <h1 className="text-base font-medium text-foreground mb-8">Work</h1>

        {/* Experience */}
        <section className="mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Experience
          </p>
          <div className="space-y-3">
            {experience.map((exp) => {
              return (
                <div
                  key={exp.id}
                  className="bg-card rounded-lg p-5 border border-border transition-colors hover:bg-accent/20"
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="min-w-0">
                      <h2 className="text-sm font-semibold text-foreground leading-tight">
                        {exp.company}
                      </h2>
                      <p className="text-sm text-muted-foreground mt-0.5">{exp.position}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-1.5 mb-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* Tech pills */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Education */}
        <section className="mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Education
          </p>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="text-sm font-semibold text-foreground">{education.institution}</h2>
                <p className="text-sm text-muted-foreground mt-0.5">{education.degree}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">
                {education.duration}
              </span>
            </div>
          </div>
        </section>

        {/* Connect */}
        <Connect description="Feel free to reach out about opportunities, collaborations, or just to say hi." />
      </main>

      <footer className="max-w-xl mx-auto px-4 py-10 text-center">
        <p className="text-xs text-muted-foreground">© 2026 {personalInfo.name}</p>
      </footer>
    </div>
  );
}
