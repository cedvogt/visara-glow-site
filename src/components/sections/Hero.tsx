import {Button} from '@/components/ui/button';
import {Mail, Download} from 'lucide-react';
import SectionContainer from "@/components/core/SectionContainer.tsx";

const Hero = () => {
    return (
        <div className="mt-[160px]">
            <SectionContainer id="hero">
                <h1 className="font-hubot font-bold text-3xl md:text-2xl lg:text-3xl text-foreground mb-6 leading-tight">
                    Revolutionizing Healthcare Through
                    <span className="block text-primary mt-2">
              Innovative Technology
            </span>
                </h1>

                <p className="font-work text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                    TODO: Add compelling hero description about Visara's mission to transform healthcare
                    with cutting-edge medical technology and regulatory excellence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        size="lg"
                        className="font-work font-medium bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                    >
                        <Mail className="w-5 h-5 mr-2"/>
                        Contact Us
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="font-work font-medium glass-panel border-white/30 hover:bg-white/20 px-8 py-3"
                    >
                        <Download className="w-5 h-5 mr-2"/>
                        Download One-Pager
                    </Button>
                </div>

                {/* TODO: Optional illustration area */}
                <div className="mt-12 p-8 glass-panel bg-white/10">
                    <p className="font-work text-sm text-foreground/60">
                        TODO: Add hero illustration or product preview
                    </p>
                </div>
            </SectionContainer>
        </div>
    );
};

export default Hero;