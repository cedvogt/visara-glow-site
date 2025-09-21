import {Heart, Shield, Zap} from 'lucide-react';
import SectionContainer from "@/components/core/SectionContainer.tsx";

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
        <SectionContainer id="about">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="font-hubot font-bold text-xl md:text-2xl text-foreground mb-4">
                    About Visara
                </h2>
                <p className="font-work text-lg text-foreground/80 max-w-4xl mx-auto">
                    {/*TODO: translation */}
                    We are building the next generation of AI-powered diagnostic tools to support breast cancer care.
                    Our web-based platform analyzes mammograms, predicts BI-RADS scores, estimates tumor aggressiveness,
                    and generates structured reports—reducing reporting time, increasing consistency, and enabling earlier,
                    more personalized treatment decisions. Our mission is to harness trustworthy AI to help clinicians
                    detect cancer earlier, improve diagnostic accuracy, and enhance survival and quality of life for patients.
                </p>
            </div>

            {/* Two-column layout */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="glass-panel p-8">
                    <h3 className="font-hubot font-semibold text-lg text-foreground mb-4">
                        Our Mission
                    </h3>
                    <p className="font-work text-foreground/80 leading-relaxed">
                        {/*TODO: Translation */}
                        Our mission is to empower clinicians with trustworthy AI that enhances accuracy, consistency,
                        and speed in breast cancer diagnostics, enabling earlier detection, more personalized treatments,
                        and ultimately better outcomes and quality of life for patients.
                    </p>
                </div>

                <div className="glass-panel p-8">
                    <h3 className="font-hubot font-semibold text-lg text-foreground mb-4">
                        Our Story
                    </h3>
                    <p className="font-work text-foreground/80 leading-relaxed">
                        {/*TODO: Translation */}
                        Visara was founded out of research at Lucerne University of Applied Sciences and Arts, where our
                        team developed AI models for mammogram analysis and automated reporting. What began as three
                        master theses grew into a startup project in 2025 with the aim of transforming breast cancer
                        diagnostics.
                        <br/><br/>
                        Key milestones include the first web-based prototype with BI-RADS scoring and aggressiveness
                        prediction, clinical validation with Luzerner Kantonsspital, and preparation for Swissmedic
                        Class IIa/IIb certification. Our vision is to bring trustworthy AI into everyday clinical
                        workflows—starting with breast cancer and expanding into other imaging domains—to improve
                        accuracy, consistency, and patient outcomes.
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
                                <div
                                    className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mb-4">
                                    <IconComponent className="w-6 h-6 text-primary"/>
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
        </SectionContainer>
    );
};

export default About;