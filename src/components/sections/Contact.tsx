import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with actual form submission logic
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'TODO: Visara AG\nBahnhofstrasse 123\n8001 Zurich, Switzerland'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: 'TODO: +41 44 123 45 67'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'TODO: contact@visara.com'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'TODO: https://linkedin.com/company/visara' },
    { name: 'Twitter', url: 'TODO: https://twitter.com/visara' },
    { name: 'YouTube', url: 'TODO: https://youtube.com/visara' }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="glass-panel p-12 md:p-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-hubot font-bold text-xl md:text-2xl text-foreground mb-4">
              Contact Us
            </h2>
            <p className="font-work text-lg text-foreground/80 max-w-2xl mx-auto">
              TODO: Get in touch with our team to learn more about our technology solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-panel p-8">
              <h3 className="font-hubot font-semibold text-lg text-foreground mb-6">
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-work text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass-panel border-white/30 font-work"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-work text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass-panel border-white/30 font-work"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-work text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="glass-panel border-white/30 font-work"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-work text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="glass-panel border-white/30 font-work resize-none"
                    placeholder="Tell us more about your needs..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full font-work font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-panel p-8">
                <h3 className="font-hubot font-semibold text-lg text-foreground mb-6">
                  Get in touch
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/20 rounded-lg mr-4 flex-shrink-0 mt-1">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-hubot font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          <p className="font-work text-sm text-foreground/80 whitespace-pre-line">
                            {info.details}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-panel p-8">
                <h3 className="font-hubot font-semibold text-lg text-foreground mb-6">
                  Follow us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="glass-panel border-white/30 hover:bg-white/20 font-work"
                    >
                      {social.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="glass-panel p-8">
                <h3 className="font-hubot font-semibold text-lg text-foreground mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 font-work text-sm text-foreground/80">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM CET</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM CET</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;