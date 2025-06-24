
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Automate Your Property Management?
          </h2>
          
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Stop wasting time on manual tasks. Get a free assessment of your current operations 
            and discover exactly how AI automation can transform your business.
          </p>

          <div className="space-y-6 mb-10">
            <Button 
              size="lg" 
              className="bg-white text-primary-600 hover:bg-gray-100 px-10 py-6 text-xl font-bold rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Book Your Free AI Systems Assessment
            </Button>
            
            <div className="flex items-center justify-center space-x-2 text-blue-100">
              <Phone className="w-5 h-5" />
              <span>US phone support line launching soon</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-3">What You'll Get in Your Assessment:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>✅ Current workflow analysis</div>
              <div>✅ Automation opportunity mapping</div>
              <div>✅ Custom ROI projection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
