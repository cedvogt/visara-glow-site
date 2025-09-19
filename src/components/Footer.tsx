import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Technology', href: '#technology' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Data Protection', href: '/data-protection' }
    ],
    resources: [
      { label: 'Resources', href: '#resources' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Support', href: '/support' },
      { label: 'Downloads', href: '/downloads' }
    ]
  };

  return (
    <footer className="py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="glass-panel p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="font-hubot font-bold text-xl text-foreground mb-4">
                Visara
              </div>
              <p className="font-work text-sm text-foreground/80 mb-4 leading-relaxed">
                TODO: Revolutionizing healthcare through innovative medical technology solutions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  <span className="font-work text-foreground/80">Zurich, Switzerland</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  <span className="font-work text-foreground/80">TODO: contact@visara.com</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  <span className="font-work text-foreground/80">TODO: +41 44 123 45 67</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-hubot font-semibold text-foreground mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="font-work text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-hubot font-semibold text-foreground mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="font-work text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-hubot font-semibold text-foreground mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="font-work text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="font-work text-sm text-foreground/60">
                © 2024 Visara AG. All rights reserved.
              </p>
              <p className="font-work text-sm text-foreground/60 mt-2 md:mt-0">
                Swiss Medical Technology Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;