import { Nav } from "@/components/layout/nav";
import { Connect } from "@/components/sections/connect";
import { ProjectCard } from "@/components/ui/project-card";
import { portfolioData } from "@/data/portfolio";

export const metadata = {
  title: "Projects – Amanuel Ayalew",
};

export default function ProjectsPage() {
  const { projects, personalInfo } = portfolioData;

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="max-w-xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-base font-medium text-foreground">Projects</h1>
          <span className="text-sm text-muted-foreground">{projects.length}</span>
        </div>

        <div className="space-y-2">
          {projects.map((project) => (
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

        {/* Connect */}
        <div className="mt-12">
          <Connect description="Interested in working together or have a question about a project? Let's talk." />
        </div>
      </main>

      <footer className="max-w-xl mx-auto px-4 py-10 text-center">
        <p className="text-xs text-muted-foreground">© 2026 {personalInfo.name}</p>
      </footer>
    </div>
  );
}
