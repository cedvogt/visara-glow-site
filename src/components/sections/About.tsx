import { Heart, Shield, Zap } from 'lucide-react';

const About = () => {
  const valuePillars = [
    {
      icon: Heart,
      title: 'Patient-Centric',
      description: 'TODO: Our commitment to improving patient outcomes through innovative solutions.'
    },
    {
      icon: Shield,
      title: 'Regulatory Excellence',
      description: 'TODO: Maintaining the highest standards of compliance and safety in all our products.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'TODO: Pioneering breakthrough technologies that transform healthcare delivery.'
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="glass-panel p-12 md:p-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-hubot font-bold text-xl md:text-2xl text-foreground mb-4">
              About Visara
            </h2>
            <p className="font-work text-lg text-foreground/80 max-w-2xl mx-auto">
              TODO: Brief company overview and mission statement
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="glass-panel p-8">
              <h3 className="font-hubot font-semibold text-lg text-foreground mb-4">
                Our Mission
              </h3>
              <p className="font-work text-foreground/80 leading-relaxed">
                TODO: Detailed mission statement about transforming healthcare through innovative 
                medical technology solutions. Focus on patient outcomes, safety, and regulatory compliance.
              </p>
            </div>
            
            <div className="glass-panel p-8">
              <h3 className="font-hubot font-semibold text-lg text-foreground mb-4">
                Our Story
              </h3>
              <p className="font-work text-foreground/80 leading-relaxed">
                TODO: Company founding story, key milestones, and vision for the future. 
                Highlight expertise in medical device development and regulatory pathways.
              </p>
            </div>
          </div>

          {/* Value Pillars */}
          <div>
            <h3 className="font-hubot font-semibold text-lg text-foreground text-center mb-8">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {valuePillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={index} className="glass-panel p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-hubot font-semibold text-foreground mb-3">
                      {pillar.title}
                    </h4>
                    <p className="font-work text-sm text-foreground/80">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;