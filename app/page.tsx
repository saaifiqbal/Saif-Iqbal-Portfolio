import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ExperienceSection } from "@/components/sections/experience"
import { ProjectsSection } from "@/components/sections/projects"
import { EducationSection } from "@/components/sections/education"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { AnimatedCursor } from "@/components/animated-cursor"
import { InteractiveBackground } from "@/components/interactive-background"

export default function Home() {
  return (
    <main className="min-h-screen">
      <InteractiveBackground />
      <AnimatedCursor />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
