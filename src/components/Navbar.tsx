import { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import lerzoLogo from '@/assets/lezo-logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <div className={`rounded-full px-2 py-2 flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'glass' : 'bg-card/80 backdrop-blur-xl border border-border/50'
      }`}>
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 pl-2">
          <img src={lerzoLogo} alt="Lerzo" className="w-10 h-10 object-contain" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-muted/50 rounded-full px-1 py-1">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${
                i === 0 
                  ? 'bg-card text-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a href="https://app.lerzo.com/courses" target="_blank" rel="noopener noreferrer" className="hidden md:flex">
          <button className="flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-card border border-border hover:border-muted-foreground/50 transition-all group">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Login for Free Trial</span>
            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
          </button>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 text-foreground hover:bg-muted/50 rounded-full transition-colors mr-2"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-2 glass rounded-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-foreground hover:bg-muted/50 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="https://app.lerzo.com/courses" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block pt-2">
            <button className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium">
              Login for Free Trial
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};
