import {MapPin, Clock, Users, ArrowRight} from 'lucide-react';
import {Button} from '@/components/ui/button';
import SectionContainer from "@/components/core/SectionContainer.tsx";

const Careers = () => {
    const jobOpenings = [
        {
            title: 'TODO: Senior Software Engineer - Medical Devices',
            department: 'Engineering',
            location: 'Zurich, Switzerland',
            type: 'Full-time',
            description: 'TODO: Lead development of next-generation medical software platforms...'
        },
        {
            title: 'TODO: Regulatory Affairs Manager',
            department: 'Regulatory',
            location: 'Basel, Switzerland',
            type: 'Full-time',
            description: 'TODO: Manage regulatory submissions and compliance for medical devices...'
        },
        {
            title: 'TODO: Clinical Research Coordinator',
            department: 'Clinical Affairs',
            location: 'Bern, Switzerland',
            type: 'Full-time',
            description: 'TODO: Coordinate clinical trials and research studies...'
        },
        {
            title: 'TODO: UX/UI Designer - Healthcare Applications',
            department: 'Design',
            location: 'Geneva, Switzerland',
            type: 'Full-time',
            description: 'TODO: Design intuitive interfaces for medical professionals...'
        },
        {
            title: 'TODO: Quality Assurance Specialist',
            department: 'Quality',
            location: 'Lausanne, Switzerland',
            type: 'Full-time',
            description: 'TODO: Ensure quality standards for medical device manufacturing...'
        },
        {
            title: 'TODO: Business Development Manager',
            department: 'Sales',
            location: 'Remote',
            type: 'Full-time',
            description: 'TODO: Drive growth and partnerships in European markets...'
        }
    ];

    const benefits = [
        'Competitive salary and equity package',
        'Comprehensive health insurance',
        'Flexible working arrangements',
        'Professional development budget',
        'Modern office facilities',
        'Team events and retreats'
    ];

    return (
        <SectionContainer id="careers">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="font-hubot font-bold text-xl md:text-2xl text-foreground mb-4">
                    Join Our Team
                </h2>
                <p className="font-work text-lg text-foreground/80 max-w-2xl mx-auto">
                    TODO: Be part of our mission to revolutionize healthcare through innovative technology
                </p>
            </div>

            {/* Company Culture */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="glass-panel p-8">
                    <h3 className="font-hubot font-semibold text-lg text-foreground mb-4">
                        Why Work at Visara?
                    </h3>
                    <p className="font-work text-foreground/80 leading-relaxed mb-6">
                        TODO: Description of company culture, mission-driven work, impact on healthcare,
                        and opportunities for professional growth in the medical technology sector.
                    </p>
                    <div className="space-y-2">
                        {benefits.slice(0, 3).map((benefit, index) => (
                            <div key={index} className="flex items-center text-sm">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"/>
                                <span className="font-work text-foreground/80">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel p-8">
                    <h3 className="font-hubot font-semibold text-lg text-foreground mb-4">
                        Benefits & Perks
                    </h3>
                    <p className="font-work text-foreground/80 leading-relaxed mb-6">
                        TODO: Additional details about employee benefits, work-life balance,
                        learning opportunities, and the supportive team environment at Visara.
                    </p>
                    <div className="space-y-2">
                        {benefits.slice(3).map((benefit, index) => (
                            <div key={index} className="flex items-center text-sm">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"/>
                                <span className="font-work text-foreground/80">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Job Openings */}
            <div>
                <h3 className="font-hubot font-semibold text-lg text-foreground mb-8">
                    Current Openings
                </h3>
                <div className="space-y-4">
                    {jobOpenings.map((job, index) => (
                        <div key={index} className="glass-panel p-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h4 className="font-hubot font-semibold text-foreground mb-2">
                                        {job.title}
                                    </h4>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/80">
                                        <div className="flex items-center">
                                            <Users className="w-4 h-4 mr-1"/>
                                            <span className="font-work">{job.department}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="w-4 h-4 mr-1"/>
                                            <span className="font-work">{job.location}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="w-4 h-4 mr-1"/>
                                            <span className="font-work">{job.type}</span>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="glass-panel border-white/30 hover:bg-white/20 font-work mt-4 md:mt-0"
                                >
                                    Apply Now
                                    <ArrowRight className="w-4 h-4 ml-2"/>
                                </Button>
                            </div>
                            <p className="font-work text-sm text-foreground/80">
                                {job.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="glass-panel p-8 text-center mt-8">
                    <h4 className="font-hubot font-semibold text-foreground mb-4">
                        Don't see the right position?
                    </h4>
                    <p className="font-work text-foreground/80 mb-6">
                        TODO: We're always looking for talented individuals to join our team.
                        Send us your resume and let us know how you'd like to contribute to our mission.
                    </p>
                    <Button
                        variant="outline"
                        className="glass-panel border-white/30 hover:bg-white/20 font-work"
                    >
                        Send Your Resume
                    </Button>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Careers;