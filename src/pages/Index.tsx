/* Landing page */
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import HelpSection from "@/components/HelpSection";
import DifferenceSection from "@/components/DifferenceSection";
import ProcessSection from "@/components/ProcessSection";
import MidCTA from "@/components/MidCTA";
import BenefitsSection from "@/components/BenefitsSection";

import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SiteFooter from "@/components/SiteFooter";
import CursorTrail from "@/components/CursorTrail";
import Preloader from "@/components/Preloader";

const Index = () => {
  const [loading, setLoading] = useState(true);
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <CursorTrail />
      <SiteHeader />
      <HeroSection />
      <div className="section-divider" />
      <ProblemsSection />
      <div className="section-divider" />
      <HelpSection />
      <div className="section-divider" />
      <DifferenceSection />
      <div className="section-divider" />
      <ProcessSection />
      <MidCTA />
      <BenefitsSection />
      <AboutSection />
      <div className="section-divider" />
      <EducationSection />
      <div className="section-divider" />
      <TestimonialsSection />
      <div className="section-divider" />
      <FAQSection />
      <div className="section-divider" />
      <CTASection />
      <SiteFooter />
    </div>
  );
};

export default Index;
