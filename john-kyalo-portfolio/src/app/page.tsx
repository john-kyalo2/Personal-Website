"use client"

import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WritingSection from "@/components/sections/WritingSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <WritingSection />
      <SkillsSection />
      <CertificatesSection />
      <ContactSection />
    </div>
  );
}
