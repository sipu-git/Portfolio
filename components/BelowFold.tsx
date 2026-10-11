"use client";

import dynamic from "next/dynamic";

const SkillsSection = dynamic(() => import("@/components/sections/SkillsSection").then((mod) => mod.SkillsSection), {
  loading: SectionFallback,
});
const ExperienceSection = dynamic(
  () => import("@/components/sections/ExperienceSection").then((mod) => mod.ExperienceSection),
  { loading: SectionFallback },
);
const ProjectsSection = dynamic(
  () => import("@/components/sections/ProjectsSection").then((mod) => mod.ProjectsSection),
  { loading: SectionFallback },
);
const ServicesSection = dynamic(
  () => import("@/components/sections/ServicesSection").then((mod) => mod.ServicesSection),
  { loading: SectionFallback },
);
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection").then((mod) => mod.ContactSection),
  { loading: SectionFallback },
);
const Footer = dynamic(() => import("@/components/sections/Footer").then((mod) => mod.Footer), {
  loading: SectionFallback,
});

function SectionFallback() {
  return <div className="section-padding min-h-[18rem]" aria-hidden="true" />;
}

export function BelowFold() {
  return (
    <>
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
