
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import ROISection from "@/components/ROISection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <ROISection />
      <WhyChooseUs />
      <CTA />
    </div>
  );
};

export default Index;
