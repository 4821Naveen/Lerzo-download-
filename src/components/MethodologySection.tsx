import { Shield, Zap, Award } from 'lucide-react';

const methodologies = [
  { label: 'Setup', active: true },
  { label: 'Onboard', active: false },
  { label: 'Track', active: false },
  { label: 'Invoicing', active: false },
  { label: 'Payment', active: false },
  { label: 'Scale', active: false },
];

const highlights = [
  {
    icon: Award,
    title: 'Setup',
    lines: ['Onboard clients', 'or students and', 'organize workspaces'],
  },
  {
    icon: Shield,
    title: 'Monitor',
    lines: ['Track projects', 'or course progress', 'in real-time'],
  },
  {
    icon: Zap,
    title: 'Automate',
    lines: ['Send invoices', 'or fee reminders', 'automatically'],
  },
];

export const MethodologySection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="noise-overlay absolute inset-0" />

      <div className="container-custom relative z-10">
        {/* Section Label */}
        <div className="mb-12 gsap-fade-in">
          <span className="text-sm text-muted-foreground uppercase tracking-widest font-medium">
            Methodology
          </span>
        </div>

        {/* Process Pills */}
        <div className="flex flex-wrap gap-3 mb-16 gsap-fade-in">
          <span className="text-muted-foreground text-sm">Our streamlined process:</span>
          {methodologies.map((item, i) => (
            <span
              key={i}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                item.active
                  ? 'bg-card border border-border text-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
              }`}
            >
              {item.label}
            </span>
          ))}
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6 gsap-stagger-container">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="gsap-stagger-item p-8 rounded-2xl card-gradient group hover:scale-[1.02] transition-all duration-500"
            >
              {/* Label */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {item.title}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-1">
                {item.lines.map((line, i) => (
                  <p key={i} className="text-xl md:text-2xl font-display font-semibold text-foreground leading-tight">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
