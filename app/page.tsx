import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
// import { AchievementsSection } from "@/components/sections/AchievementsSection";
// import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
// import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      {/* <AchievementsSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <BlogSection /> */}
      <ContactSection />
      <Footer />
    </>
  );
}
