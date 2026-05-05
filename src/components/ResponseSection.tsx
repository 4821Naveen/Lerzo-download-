const responses = [
  { value: '10+', unit: 'HOURS', label: 'Saved per week', sublabel: 'on admin tasks' },
  { value: '2X', unit: 'FASTER', label: 'Get paid', sublabel: 'with automation' },
  { value: '100%', unit: 'SECURE', label: 'Data security', sublabel: 'for your business' },
];

export const ResponseSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="noise-overlay absolute inset-0" />

      <div className="container-custom px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 gsap-stagger-container">
          {responses.map((item, index) => (
            <div key={index} className="gsap-stagger-item text-center group">
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-6xl md:text-8xl font-display font-extrabold gradient-text">
                  {item.value}
                </span>
                <span className="text-2xl md:text-3xl font-display font-bold text-muted-foreground">
                  {item.unit}
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">{item.label}</span>
                <br />
                {item.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
