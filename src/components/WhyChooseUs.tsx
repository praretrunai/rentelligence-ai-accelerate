
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "No Months of Testing",
      description: "Skip the trial-and-error phase. Get proven systems that work from day one."
    },
    {
      title: "Done-For-You Systems",
      description: "We handle setup, integration, and optimization so you can focus on your business."
    },
    {
      title: "Focus on Leases, Not Tech",
      description: "Automation handles operations while you concentrate on growing your portfolio."
    },
    {
      title: "Build Leverage, Not Overhead",
      description: "Scale your operations without scaling your headcount or complexity."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Rentelligence AI?
            </h2>
            <p className="text-xl text-gray-600">
              We're not another AI vendor. We're your automation implementation partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-primary-50 border border-primary-200 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                📊 Industry Insight
              </h3>
              <p className="text-lg text-primary-700 leading-relaxed">
                According to PM tech adoption data, <strong>65% of firms are testing automation</strong>, 
                but few have in-house AI expertise to implement it effectively. Rentelligence AI solves 
                this gap with pre-integrated, agency-delivered systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
