import { Users, Layout, CreditCard, PieChart, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Client & Student Records',
    description: 'Manage both professional client profiles and comprehensive student databases in one secure location.',
  },
  {
    icon: Layout,
    title: 'Project & Course Management',
    description: 'Track business milestones or manage educational courses and training schedules with ease.',
  },
  {
    icon: CreditCard,
    title: 'Payment & Fee Tracking',
    description: 'Handle professional invoicing or track student fees and enrollment payments effortlessly.',
  },
  {
    icon: PieChart,
    title: 'Admin Dashboard',
    description: 'Get a high-level view of your business health or institute performance with key metrics.',
  },
  {
    icon: Shield,
    title: 'Secure Login System',
    description: 'Protect sensitive business data and student records with enterprise-grade encryption.',
  },
  {
    icon: Zap,
    title: 'Workflow Simplification',
    description: 'Automate repetitive tasks, from client follow-ups to automated fee reminders.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="noise-overlay absolute inset-0" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 gsap-fade-in">
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-widest font-medium mb-2 block">
              Key Features
            </span>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">EMAIL</span>
              <a href="mailto:hello@lerzo.com" className="text-foreground hover:text-primary transition-colors">
                hello@lerzo.com
              </a>
            </div>
          </div>
          <a 
            href="https://app.lerzo.com/courses"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Login for Free Trial
          </a>
        </div>

        {/* Services Grid - 2 columns like reference */}
        <div className="grid md:grid-cols-2 gap-4 gsap-stagger-container">
          {services.map((service, index) => (
            <div
              key={index}
              className="gsap-stagger-item group p-6 rounded-2xl card-gradient hover:scale-[1.01] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center flex-shrink-0 group-hover:bg-muted transition-colors">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
