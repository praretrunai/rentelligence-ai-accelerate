
const ROISection = () => {
  const metrics = [
    {
      number: "73%",
      label: "Staff Time Saved",
      description: "Average reduction in manual tasks and follow-ups"
    },
    {
      number: "2.5x",
      label: "Faster Responses",
      description: "AI handles tenant inquiries in minutes, not hours"
    },
    {
      number: "41%",
      label: "Lease Conversion Increase",
      description: "More leads convert with instant, intelligent responses"
    },
    {
      number: "89%",
      label: "Reduced Follow-ups",
      description: "Automated systems handle routine communications"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Measurable ROI You Can Count On
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Our clients see real results within 30 days of implementation. Here's what complete AI automation delivers:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-3 text-white group-hover:scale-110 transition-transform duration-300">
                  {metric.number}
                </div>
                <div className="text-xl font-semibold mb-3 text-blue-100">
                  {metric.label}
                </div>
                <div className="text-sm opacity-80 leading-relaxed">
                  {metric.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
          <h3 className="text-2xl font-bold mb-4">
            💰 Average ROI: 340% in First Year
          </h3>
          <p className="text-lg opacity-90">
            Most clients break even within 60 days and see 3-4x returns by month 12.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
