"use client"
 import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div>
       <HeroSection />  
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificatesSection />
      <ContactSection /> 
    </div>
  );
}
