/* Landing page */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import HelpSection from "@/components/HelpSection";
// NotForSection removed
import DifferenceSection from "@/components/DifferenceSection";
import ProcessSection from "@/components/ProcessSection";
import MidCTA from "@/components/MidCTA";
import ResultsSection from "@/components/ResultsSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import NotForSection from "@/components/NotForSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <ProblemsSection />
      <HelpSection />
      <DifferenceSection />
      <ProcessSection />
      <MidCTA />
      <ResultsSection />
      <AboutSection />
      <EducationSection />
      <NotForSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <SiteFooter />
    </div>
  );
};

export default Index;
