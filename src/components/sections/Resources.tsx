import {Calendar, ArrowRight, FileText, Video, Download} from 'lucide-react';
import {Button} from '@/components/ui/button';
import SectionContainer from "@/components/core/SectionContainer.tsx";

const Resources = () => {
    const newsItems = [
        {
            date: '2024-03-15',
            title: 'TODO: Visara Receives Breakthrough Device Designation',
            summary: 'TODO: Brief summary of recent regulatory milestone or company news...',
            type: 'Press Release'
        },
        {
            date: '2024-03-01',
            title: 'TODO: Clinical Study Results Published in Medical Journal',
            summary: 'TODO: Summary of research findings and clinical outcomes...',
            type: 'Research'
        },
        {
            date: '2024-02-20',
            title: 'TODO: Partnership Announcement with Leading Hospital System',
            summary: 'TODO: Details about strategic partnership and implementation...',
            type: 'Partnership'
        },
        {
            date: '2024-02-10',
            title: 'TODO: Visara Technology Featured at MedTech Conference',
            summary: 'TODO: Conference presentation highlights and industry recognition...',
            type: 'Event'
        },
        {
            date: '2024-01-25',
            title: 'TODO: New Software Update Enhances Diagnostic Accuracy',
            summary: 'TODO: Product update details and performance improvements...',
            type: 'Product Update'
        },
        {
            date: '2024-01-15',
            title: 'TODO: CEO Interview on Future of Medical Technology',
            summary: 'TODO: Industry insights and Visara\'s vision for healthcare innovation...',
            type: 'Interview'
        }
    ];

    const resourceTypes = [
        {icon: FileText, label: 'White Papers', count: 'TODO: 12'},
        {icon: Video, label: 'Webinars', count: 'TODO: 8'},
        {icon: Download, label: 'Case Studies', count: 'TODO: 15'},
        {icon: Calendar, label: 'Events', count: 'TODO: 6'}
    ];

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <SectionContainer id="resources">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="font-hubot font-bold text-xl md:text-2xl text-foreground mb-4">
                    Resources & News
                </h2>
                <p className="font-work text-lg text-foreground/80 max-w-2xl mx-auto">
                    TODO: Stay updated with the latest developments, research, and insights from Visara
                </p>
            </div>

            {/* Resource Types */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
                {resourceTypes.map((type, index) => {
                    const IconComponent = type.icon;
                    return (
                        <div key={index} className="glass-panel p-6 text-center">
                            <div
                                className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mb-4">
                                <IconComponent className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="font-hubot font-semibold text-foreground mb-2">
                                {type.label}
                            </h3>
                            <p className="font-work text-sm text-foreground/60">
                                {type.count} available
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* News & Updates */}
            <div>
                <h3 className="font-hubot font-semibold text-lg text-foreground mb-8">
                    Latest News & Updates
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {newsItems.map((item, index) => (
                        <div key={index} className="glass-panel p-6">
                            <div className="flex items-center justify-between mb-3">
                    <span
                        className="inline-flex items-center px-2 py-1 rounded-md bg-primary/20 text-primary text-xs font-work font-medium">
                      {item.type}
                    </span>
                                <div className="flex items-center text-xs text-foreground/60 font-work">
                                    <Calendar className="w-3 h-3 mr-1"/>
                                    {formatDate(item.date)}
                                </div>
                            </div>

                            <h4 className="font-hubot font-semibold text-foreground mb-3 line-clamp-2">
                                {item.title}
                            </h4>

                            <p className="font-work text-sm text-foreground/80 mb-4 line-clamp-3">
                                {item.summary}
                            </p>

                            <Button
                                variant="ghost"
                                size="sm"
                                className="font-work text-primary hover:bg-primary/10 p-0 h-auto"
                            >
                                Read more
                                <ArrowRight className="w-4 h-4 ml-1"/>
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center">
                    <div className="glass-panel p-4 flex items-center space-x-2">
                        <Button variant="ghost" size="sm" disabled className="font-work">
                            Previous
                        </Button>
                        <div className="flex space-x-1">
                            <Button variant="ghost" size="sm" className="font-work bg-primary/20 text-primary">
                                1
                            </Button>
                            <Button variant="ghost" size="sm" className="font-work">
                                2
                            </Button>
                            <Button variant="ghost" size="sm" className="font-work">
                                3
                            </Button>
                        </div>
                        <Button variant="ghost" size="sm" className="font-work">
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Resources;