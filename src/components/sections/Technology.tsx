import { Cpu, Database, Lock, Wifi, Microscope, Activity } from 'lucide-react';

const Technology = () => {
  const features = [
    {
      icon: Cpu,
      title: 'AI-Powered Analytics',
      description: 'TODO: Advanced machine learning algorithms for medical data analysis'
    },
    {
      icon: Database,
      title: 'Secure Data Management',
      description: 'TODO: HIPAA-compliant data storage and processing systems'
    },
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'TODO: Military-grade security for patient data protection'
    },
    {
      icon: Wifi,
      title: 'IoT Integration',
      description: 'TODO: Seamless connectivity with medical devices and sensors'
    },
    {
      icon: Microscope,
      title: 'Precision Diagnostics',
      description: 'TODO: High-accuracy diagnostic tools and imaging systems'
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'TODO: Continuous patient monitoring and alert systems'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Data Acquisition',
      description: 'TODO: Collect patient data from multiple sources'
    },
    {
      step: '02',
      title: 'AI Processing',
      description: 'TODO: Apply machine learning algorithms for analysis'
    },
    {
      step: '03',
      title: 'Clinical Insights',
      description: 'TODO: Generate actionable insights for healthcare providers'
    },
    {
      step: '04',
      title: 'Treatment Optimization',
      description: 'TODO: Recommend personalized treatment plans'
    },
    {
      step: '05',
      title: 'Outcome Tracking',
      description: 'TODO: Monitor patient progress and adjust treatments'
    }
  ];

  return (
    <section id="technology" className="py-24">
      <div className="container mx-auto px-6">
        <div className="glass-panel p-12 md:p-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-hubot font-bold text-xl md:text-2xl text-foreground mb-4">
              Technology Platform
            </h2>
            <p className="font-work text-lg text-foreground/80 max-w-2xl mx-auto">
              TODO: Overview of our cutting-edge technology stack and capabilities
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="glass-panel p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-hubot font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-work text-sm text-foreground/80">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* How It Works */}
          <div>
            <h3 className="font-hubot font-semibold text-lg text-foreground text-center mb-12">
              How Our Technology Works
            </h3>
            <div className="grid md:grid-cols-5 gap-6">
              {workflowSteps.map((step, index) => (
                <div key={index} className="glass-panel p-6 text-center relative">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full font-hubot font-bold text-sm mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-hubot font-semibold text-foreground mb-3 text-sm">
                    {step.title}
                  </h4>
                  <p className="font-work text-xs text-foreground/80">
                    {step.description}
                  </p>
                  
                  {/* Connector Arrow */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;