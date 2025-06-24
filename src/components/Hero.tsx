
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1)_0%,transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/api/placeholder/200/80" 
            alt="Rentelligence AI Logo" 
            className="mx-auto h-16 w-auto"
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
          Complete AI Automation Systems
          <span className="block text-primary-600 mt-2">
            For Property Management Firms
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          Stop testing tools. Start scaling operations. We deliver plug-and-play AI systems that save staff time, increase lease conversions, and deliver measurable ROI.
        </p>

        {/* Key Benefits */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 animate-scale-in">
          {[
            "Voice AI for Tenant Calls",
            "Lead Capture Chatbots", 
            "Workflow Automation",
            "GPT-Powered Operations"
          ].map((benefit, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="text-primary-700 font-semibold">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="animate-scale-in">
          <Button 
            size="lg" 
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
          >
            Book Your Free AI Systems Assessment
          </Button>
          <p className="text-sm text-gray-500 mt-3">
            📞 US phone support launching soon
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
