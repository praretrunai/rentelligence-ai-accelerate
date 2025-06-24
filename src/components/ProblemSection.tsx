
const ProblemSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            Why Standalone Tools Fail Property Managers
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Problem Side */}
            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-700 mb-4">❌ The Problem</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li>• 65% of PM firms test automation but fail to implement</li>
                <li>• ChatGPT and Zapier create Frankenstein systems</li>
                <li>• Tools aren't integrated into PM workflows</li>
                <li>• No in-house AI expertise to make it work</li>
                <li>• Months wasted testing partial fixes</li>
              </ul>
            </div>

            {/* Solution Side */}
            <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-4">✅ Our Solution</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li>• Complete, pre-integrated AI systems</li>
                <li>• Tailored specifically for PM operations</li>
                <li>• Done-for-you implementation</li>
                <li>• No AI expertise required from your team</li>
                <li>• Plug-and-play systems that scale</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              We Don't Sell Tools. We Deliver Complete Systems.
            </h3>
            <p className="text-xl opacity-90">
              No gimmicks. No partial fixes. Just automated workflows that let you focus on leases, not tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
