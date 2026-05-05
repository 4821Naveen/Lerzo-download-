import { useEffect, useRef } from 'react';
import { ArrowRight, Copy } from 'lucide-react';
import gsap from 'gsap';

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation - clip path reveal like reference
      gsap.fromTo(
        '.hero-line',
        { 
          opacity: 0, 
          y: 80,
          clipPath: 'inset(100% 0 0 0)'
        },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0 0 0)',
          duration: 1,
          ease: 'power4.out',
          stagger: 0.15,
          delay: 0.5,
        }
      );

      gsap.fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1.2 }
      );

      gsap.fromTo(
        '.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1.4 }
      );

      gsap.fromTo(
        '.hero-status',
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out', delay: 1.6 }
      );

      // Floating orb animation
      gsap.to('.hero-orb', {
        y: -30,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Noise Texture */}
      <div className="noise-overlay absolute inset-0" />

      {/* Abstract Orb Background - like reference */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="hero-orb relative w-[500px] h-[500px] md:w-[700px] md:h-[700px]">
          {/* Main gradient orb with noise texture */}
          <div className="absolute inset-0 rounded-full opacity-20">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 blur-3xl" />
          </div>
          {/* Particle ring effect */}
          <div 
            className="absolute inset-8 rounded-full opacity-40"
            style={{
              background: 'radial-gradient(circle at 30% 30%, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)',
            }}
          />
          {/* Inner glow */}
          <div className="absolute inset-20 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-2xl animate-pulse-slow" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-custom text-center px-6 pt-24">
        {/* Main Title - Large bold geometric like reference */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mb-8">
          <span className="hero-line block text-foreground">MANAGE YOUR</span>
          <span className="hero-line block gradient-text">BUSINESS, NOT</span>
          <span className="hero-line block text-foreground">YOUR TOOLS.</span>
        </h1>

        {/* Subtitle - Right aligned like reference */}
        <div className="hero-subtitle max-w-md ml-auto mr-0 md:mr-20 text-right mb-12">
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            The all-in-one platform for managing
            <br />
            clients, projects, and student fees
            <br />
            in one seamless workspace.
          </p>
        </div>

        {/* CTA Section - Like reference */}
        <div className="hero-cta flex flex-col sm:flex-row items-start gap-4 mb-8">
          {/* Arrow Button */}
          <a href="https://app.lerzo.com/courses" target="_blank" rel="noopener noreferrer">
            <button className="arrow-btn group">
              <span>Login for Free Trial</span>
              <span className="arrow-circle transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </a>

          {/* Email with copy */}
          <button 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            onClick={() => {
              navigator.clipboard.writeText('hello@lerzo.com');
            }}
          >
            <Copy className="w-4 h-4 opacity-50 group-hover:opacity-100" />
            <span className="text-sm">hello@lerzo.com</span>
          </button>
        </div>
      </div>

      {/* Status Bar - Bottom like reference */}
      <div className="hero-status absolute bottom-8 left-0 right-0">
        <div className="container-custom px-6">
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="glow-dot" />
              <span>Now in Open Beta</span>
            </div>
            <span className="text-muted-foreground/30">•</span>
            <span>Built for Teams</span>
            <span className="text-muted-foreground/30">•</span>
            <span>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
            <span className="text-muted-foreground/30">•</span>
            <span>Secure & Encrypted</span>
          </div>
        </div>
      </div>
    </section>
  );
};
