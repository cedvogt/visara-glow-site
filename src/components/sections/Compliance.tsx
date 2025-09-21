import {FileText, Shield, Award, Download} from 'lucide-react';
import {Button} from '@/components/ui/button';
import SectionContainer from "@/components/core/SectionContainer.tsx";

const Compliance = () => {
    const certifications = [
        {
            icon: Shield,
            title: 'Swissmedic Approval',
            description: 'TODO: Details about Swissmedic certification and compliance status'
        },
        {
            icon: Award,
            title: 'MDR Compliance',
            description: 'TODO: European Medical Device Regulation compliance information'
        },
        {
            icon: FileText,
            title: 'ISO 13485',
            description: 'TODO: Quality management system certification for medical devices'
        },
        {
            icon: FileText,
            title: 'ISO 27001',
            description: 'TODO: Information security management system certification'
        }
    ];

    const documents = [
        'Clinical Evidence Report',
        'Risk Management File',
        'Technical Documentation',
        'Post-Market Surveillance Plan',
        'Quality Manual',
        'Software Lifecycle Process'
    ];

    return (
        <SectionContainer id="compliance">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="font-hubot font-bold text-xl md:text-2xl text-foreground mb-4">
                    Regulatory & Compliance
                </h2>
                <p className="font-work text-lg text-foreground/80 max-w-2xl mx-auto">
                    TODO: Our commitment to meeting the highest regulatory standards and compliance requirements
                </p>
            </div>

            {/* Regulatory Statements */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="glass-panel p-8">
                    <div className="flex items-center mb-4">
                        <Shield className="w-6 h-6 text-primary mr-3"/>
                        <h3 className="font-hubot font-semibold text-lg text-foreground">
                            Swissmedic Compliance
                        </h3>
                    </div>
                    <p className="font-work text-foreground/80 leading-relaxed">
                        TODO: Detailed statement about Swissmedic approval status, clinical trials,
                        and ongoing compliance with Swiss medical device regulations. Include
                        reference numbers and approval dates.
                    </p>
                </div>

                <div className="glass-panel p-8">
                    <div className="flex items-center mb-4">
                        <Award className="w-6 h-6 text-primary mr-3"/>
                        <h3 className="font-hubot font-semibold text-lg text-foreground">
                            MDR Compliance
                        </h3>
                    </div>
                    <p className="font-work text-foreground/80 leading-relaxed">
                        TODO: Statement about European Medical Device Regulation compliance,
                        CE marking status, notified body relationships, and conformity assessment procedures.
                    </p>
                </div>
            </div>

            {/* Certifications Grid */}
            <div className="mb-16">
                <h3 className="font-hubot font-semibold text-lg text-foreground text-center mb-8">
                    Certifications & Standards
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => {
                        const IconComponent = cert.icon;
                        return (
                            <div key={index} className="glass-panel p-6 text-center">
                                <div
                                    className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mb-4">
                                    <IconComponent className="w-6 h-6 text-primary"/>
                                </div>
                                <h4 className="font-hubot font-semibold text-foreground mb-3 text-sm">
                                    {cert.title}
                                </h4>
                                <p className="font-work text-xs text-foreground/80">
                                    {cert.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Documentation Downloads */}
            <div>
                <h3 className="font-hubot font-semibold text-lg text-foreground text-center mb-8">
                    Regulatory Documentation
                </h3>
                <div className="glass-panel p-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {documents.map((document, index) => (
                            <Button
                                key={index}
                                variant="outline"
                                className="glass-panel border-white/30 hover:bg-white/20 justify-between font-work"
                            >
                                <span>{document}</span>
                                <Download className="w-4 h-4"/>
                            </Button>
                        ))}
                    </div>
                    <p className="font-work text-sm text-foreground/60 text-center mt-6">
                        TODO: Note about document access requirements or contact information for restricted documents
                    </p>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Compliance;