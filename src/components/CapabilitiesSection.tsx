const capabilities = [
  ['Freelancers', 'Agencies', 'Startups', 'Training Institutes', 'Schools', 'Coaching Centers'],
  ['Student Management', 'Course Management', 'Fee Tracking', 'Client Database', 'Project Tracking'],
  ['Invoicing', 'Enrollment', 'Student Records', 'Admin Dashboard', 'Workflow Automation'],
];

export const CapabilitiesSection = () => {
  return (
    <section id="users" className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="noise-overlay absolute inset-0" />

      <div className="container-custom relative z-10 px-6">
        {/* Section Label */}
        <div className="mb-8 gsap-fade-in">
          <span className="text-sm text-muted-foreground uppercase tracking-widest font-medium">
            Who It's For
          </span>
        </div>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-4">
        {capabilities.map((row, rowIndex) => (
          <div key={rowIndex} className="relative overflow-hidden">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

            {/* Marquee track */}
            <div className={`flex ${rowIndex % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'}`}>
              {[...row, ...row, ...row, ...row].map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 mx-2 px-6 py-3 rounded-full bg-card border border-border text-foreground font-display font-medium text-sm hover:bg-muted/50 hover:border-muted-foreground/30 transition-all cursor-default"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="container-custom px-6 mt-12">
        <div className="flex items-center gap-4 gsap-fade-in">
          <span className="text-muted-foreground text-sm">Need something specific?</span>
          <a 
            href="#contact" 
            className="text-sm font-medium gradient-text hover:opacity-80 transition-opacity"
          >
            Let's Talk →
          </a>
        </div>
      </div>
    </section>
  );
};
