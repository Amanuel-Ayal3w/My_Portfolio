import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";
import { ContactSection } from "@/components/site/contact-section";
import { Hero } from "@/components/site/hero";
import { ProjectShots } from "@/components/site/project-shots";
import { SiteNav } from "@/components/site/site-nav";

const expertise = [
  {
    title: "Backend Engineering",
    body: "Go, FastAPI, Node.js, REST APIs, GraphQL, and PostgreSQL — services built to stay reliable under real use.",
  },
  {
    title: "Machine Learning",
    body: "PyTorch, experimentation, predictive coding, and quantum circuits. I care how a model learns, not only the final score.",
  },
  {
    title: "AI Products",
    body: "RAG, agents, and bilingual assistants. Grounded answers, citations, and evaluation instead of unchecked generation.",
  },
  {
    title: "Product Engineering",
    body: "Next.js and TypeScript, from interface to API, plus the testing and debugging that keep a system in production.",
  },
];

const projectLabels: Record<string, string> = {
  sift: "Sift",
  awaqi: "Awaqi",
  "gpt-transformer": "GPT",
  "quantum-vqc": "VQC",
  mobilevit: "MobileViT",
  "predictive-coding": "PCN",
};

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function HomePage() {
  const { personalInfo, experience, projects, skills, certifications, education } = portfolioData;
  const awards = certifications.filter((item) => item.type === "award");
  const certs = certifications.filter((item) => item.type === "certification");

  const socials = [
    { href: personalInfo.linkedin, label: "LinkedIn", icon: FaLinkedin },
    { href: personalInfo.github, label: "GitHub", icon: FaGithub },
    { href: personalInfo.telegram, label: "Telegram", icon: FaTelegram },
    { href: `mailto:${personalInfo.email}`, label: "Email", icon: FaEnvelope },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <aside className="fixed top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-4 text-muted-foreground lg:flex left-[max(1.25rem,calc((100vw-1240px)/2+1.25rem))]">
        {socials.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={item.label}
              title={item.label}
              className="transition-colors hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </aside>

      <main>
        <Hero />

        <section id="about" className="mx-auto w-full max-w-[1240px] px-[clamp(1.25rem,5vw,5.5rem)] py-24">
          <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">01 / Expertise</p>
              <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-[-0.045em] sm:text-6xl">
                Engineering with
                <br />
                a research bent.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:justify-self-end">
              Backend systems by trade, machine learning by focus. I like work where the model and the software around it both have to hold up.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {expertise.map((item, index) => (
              <article key={item.title} className="lift flex min-h-[220px] flex-col justify-between border border-border bg-card/50 p-6">
                <div className="flex items-center justify-between font-mono text-[11px] text-muted-foreground">
                  <span>{pad(index)}</span>
                  <span aria-hidden>↗</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto w-full max-w-[1240px] px-[clamp(1.25rem,5vw,5.5rem)] py-24">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">02 / Career</p>
              <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-[-0.045em] sm:text-6xl">
                Built across
                <br />
                different problems.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground lg:text-right">
              Research, production systems, and the work in between.
            </p>
          </div>
          <div>
            {experience.map((role, index) => (
              <article key={role.id} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-t border-border py-8 sm:gap-8">
                <span className="inline-flex h-8 w-8 items-center justify-center border border-border font-mono text-[11px]">
                  {pad(index)}
                </span>
                <div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <p className="text-sm">{role.company}</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">{role.duration}</p>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{role.position}</h3>
                  {role.location && <p className="mt-1 text-sm text-muted-foreground">{role.location}</p>}
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {role.description.join(" ")}
                  </p>
                  {role.technologies && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {role.technologies.map((tech) => (
                        <span key={tech} className="border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto w-full max-w-[1240px] px-[clamp(1.25rem,5vw,5.5rem)] py-24">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">03 / Selected work</p>
              <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-[-0.045em] sm:text-6xl">
                Things I&apos;ve
                <br />
                actually shipped.
              </h2>
            </div>
            <a href="#contact" className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground hover:text-foreground">
              Start a conversation ↗
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.id} className="lift flex flex-col border border-border bg-card/40 p-6">
                {project.images && project.images.length > 0 && (
                  <ProjectShots images={project.images} title={project.title} />
                )}
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  Project / {pad(index)}
                </p>
                <p className="mt-6 font-mono text-xs text-muted-foreground">{projectLabels[project.id] ?? project.title}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit font-mono text-[11px] uppercase tracking-[0.08em] hover:underline"
                  >
                    View Project ↗
                  </a>
                )}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto w-full max-w-[1240px] px-[clamp(1.25rem,5vw,5.5rem)] py-24">
          <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] lg:items-end">
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">04 / Toolkit</p>
              <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-[-0.045em] sm:text-6xl">
                The stack
                <br />
                I actually use.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              A practical set, shaped by shipping backend services, ML experiments, and the interfaces in front of them.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="border border-border px-3 py-1.5 font-mono text-[12px]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1240px] px-[clamp(1.25rem,5vw,5.5rem)] py-24">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">05 / Foundations</p>
          <h2 className="mb-12 font-display text-5xl font-bold leading-[0.9] tracking-[-0.045em] sm:text-6xl">
            School, study,
            <br />
            and recognition.
          </h2>
          <div className="grid gap-4 lg:grid-cols-3">
            <article className="lift min-h-[180px] border border-border p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Education</p>
              <h3 className="mt-6 text-xl font-semibold">{education.degree}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{education.institution}</p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">{education.duration}</p>
            </article>
            <article className="lift min-h-[180px] border border-border p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Study</p>
              <ul className="mt-6 space-y-4">
                {certs.map((item) => (
                  <li key={item.title}>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.issuer} · {item.date}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
            <article className="lift min-h-[180px] border border-border p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Recognition</p>
              <ul className="mt-6 space-y-4">
                {awards.map((item) => (
                  <li key={item.title} className="text-sm leading-relaxed">
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-muted-foreground"> — {item.issuer}, {item.date}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <ContactSection />
      </main>

      <footer className="flex flex-col gap-3 border-t border-border mx-auto w-full max-w-[1240px] px-[clamp(1.25rem,5vw,5.5rem)] py-8 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="text-foreground">
          AA.
        </a>
        <p>© 2026 {personalInfo.name}</p>
        <p>Built with Next.js</p>
      </footer>
    </div>
  );
}
