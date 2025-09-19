import { Check, X } from 'lucide-react';

const Product = () => {
  const benefits = [
    'TODO: Reduced diagnostic time by 50%',
    'TODO: Improved patient outcomes',
    'TODO: Streamlined clinical workflows',
    'TODO: Cost-effective implementation',
    'TODO: Seamless EHR integration',
    'TODO: 24/7 technical support'
  ];

  const comparisonData = [
    {
      feature: 'AI-Powered Analysis',
      visara: true,
      competitor1: false,
      competitor2: true
    },
    {
      feature: 'Real-time Monitoring',
      visara: true,
      competitor1: true,
      competitor2: false
    },
    {
      feature: 'Regulatory Compliance',
      visara: true,
      competitor1: false,
      competitor2: false
    },
    {
      feature: 'Cloud Integration',
      visara: true,
      competitor1: true,
      competitor2: true
    },
    {
      feature: 'Custom Workflows',
      visara: true,
      competitor1: false,
      competitor2: false
    }
  ];

  return (
    <section id="product" className="py-24">
      <div className="container mx-auto px-6">
        <div className="glass-panel p-12 md:p-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-hubot font-bold text-xl md:text-2xl text-foreground mb-4">
              Product Overview
            </h2>
            <p className="font-work text-lg text-foreground/80 max-w-2xl mx-auto">
              TODO: Comprehensive description of our flagship medical technology platform
            </p>
          </div>

          {/* Product Description */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="glass-panel p-8">
              <h3 className="font-hubot font-semibold text-lg text-foreground mb-4">
                Product Features
              </h3>
              <p className="font-work text-foreground/80 leading-relaxed mb-6">
                TODO: Detailed description of our product's core functionality, 
                user interface, and key differentiators in the medical technology space.
              </p>
              <div className="space-y-3">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    <span className="font-work text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-panel p-8">
              <h3 className="font-hubot font-semibold text-lg text-foreground mb-4">
                Benefits & ROI
              </h3>
              <p className="font-work text-foreground/80 leading-relaxed mb-6">
                TODO: Quantifiable benefits, return on investment metrics, 
                and success stories from healthcare institutions using our platform.
              </p>
              <div className="space-y-3">
                {benefits.slice(3).map((benefit, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    <span className="font-work text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div>
            <h3 className="font-hubot font-semibold text-lg text-foreground text-center mb-8">
              Product Comparison
            </h3>
            <div className="glass-panel p-6 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="font-hubot font-semibold text-foreground text-left py-3 px-4">
                      Feature
                    </th>
                    <th className="font-hubot font-semibold text-primary text-center py-3 px-4">
                      Visara
                    </th>
                    <th className="font-hubot font-semibold text-foreground/60 text-center py-3 px-4">
                      Competitor A
                    </th>
                    <th className="font-hubot font-semibold text-foreground/60 text-center py-3 px-4">
                      Competitor B
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-white/10">
                      <td className="font-work text-foreground py-3 px-4">
                        {row.feature}
                      </td>
                      <td className="text-center py-3 px-4">
                        {row.visara ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-foreground/40 mx-auto" />
                        )}
                      </td>
                      <td className="text-center py-3 px-4">
                        {row.competitor1 ? (
                          <Check className="w-5 h-5 text-foreground/60 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-foreground/40 mx-auto" />
                        )}
                      </td>
                      <td className="text-center py-3 px-4">
                        {row.competitor2 ? (
                          <Check className="w-5 h-5 text-foreground/60 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-foreground/40 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;