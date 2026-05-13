import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EducationSection } from "@/components/education-section"
import { ResearchSection } from "@/components/research-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { LeadershipSection } from "@/components/leadership-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <EducationSection />
      <ResearchSection />
      <SkillsSection />
      <ProjectsSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </main>
  )
}