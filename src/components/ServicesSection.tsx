
import { Bot, Phone, Zap, Brain } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Phone,
      title: "Retell Voice AI",
      description: "Handle inbound tenant calls 24/7 with intelligent voice responses that sound human and resolve issues instantly.",
      benefits: ["24/7 availability", "Instant issue resolution", "Reduced staff workload"]
    },
    {
      icon: Bot,
      title: "Lead Capture Chatbots",
      description: "Convert website visitors into qualified leads with intelligent chatbots that capture info and schedule tours.",
      benefits: ["Higher conversion rates", "Automated qualification", "Tour scheduling"]
    },
    {
      icon: Zap,
      title: "Make.com Automation",
      description: "Seamlessly connect all your PM tools with custom workflows that eliminate manual data entry and follow-ups.",
      benefits: ["Zero manual entry", "Tool integration", "Workflow optimization"]
    },
    {
      icon: Brain,
      title: "GPT-Powered Operations",
      description: "Streamline communications, automate reports, and enhance decision-making with AI that understands PM operations.",
      benefits: ["Smart communications", "Automated reporting", "Enhanced decisions"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Complete AI System Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four integrated solutions that work together to automate your entire property management operation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={48} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-green-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-xl border border-primary-200">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              🎯 The Result? Complete Automation Integration
            </h3>
            <p className="text-lg text-primary-700">
              All systems work together seamlessly - no gaps, no manual handoffs, no technical headaches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
