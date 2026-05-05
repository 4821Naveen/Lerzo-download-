import { Linkedin, Twitter, Instagram, ArrowUpRight, Phone, Mail } from 'lucide-react';
import lerzoLogo from '@/assets/lezo-logo.png';

const footerLinks = {
  services: [
    { name: 'Client Management', href: '#services' },
    { name: 'Project Tracking', href: '#services' },
    { name: 'Payment Management', href: '#services' },
    { name: 'Admin Dashboard', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#contact' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/30">
      <div className="noise-overlay absolute inset-0" />

      <div className="container-custom relative z-10 section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <img src={lerzoLogo} alt="Lerzo" className="w-10 h-10 object-contain" />
              <span className="font-display font-bold text-xl text-foreground">Lerzo</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed text-sm">
              The all-in-one platform for managing clients, projects, and students in one seamless workspace.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:8667811625" className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>8667811625</span>
              </a>
              <a href="mailto:contact@lerzo.com" className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@lerzo.com</span>
              </a>
            </div>
            
            <div className="flex gap-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted hover:border-muted-foreground/30 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lerzo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
