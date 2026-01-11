import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { CursorField } from "@/components/ui/cursor-field";
import { Header } from "@/components/layout/header";
import { FloatingNav } from "@/components/layout/floating-nav";

export function MainLayout() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Header />
        <FloatingNav />
        <div className="relative">
          <CursorField />
          <div className="relative z-10">
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}