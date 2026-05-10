import { Check } from 'lucide-react';

export const PricingSection = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "₹0",
      duration: "14 Days",
      description: "Experience the full power of Lerzo with no commitment.",
      features: [
        "Student Management",
        "Enquiry Tracking",
        "Fee Management",
        "Excel Imports/Exports",
        "Digital Receipts",
        "Reports & Analytics"
      ],
      cta: "Start Free Trial",
      link: "https://app.lerzo.com/auth/login",
      highlighted: false
    },
    {
      name: "Professional",
      price: "₹499",
      duration: "Per Month",
      description: "Perfect for growing institutes and training centers.",
      features: [
        "Everything in Free Trial",
        "Unlimited Students",
        "Unlimited Batches",
        "Multiple Courses",
        "GST Invoices",
        "Priority Support"
      ],
      cta: "Get Started",
      link: "https://app.lerzo.com/auth/login",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "Contact Us",
      description: "Scalable solution for large multi-centre institutions.",
      features: [
        "Everything in Professional",
        "Multi-Centre Support",
        "Custom Branding",
        "Dedicated Manager",
        "API Access",
        "Custom Integrations"
      ],
      cta: "Contact Sales",
      link: "mailto:hello@lerzo.com",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="container-custom px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-widest font-medium mb-4 block">
            Simple Pricing
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
            Choose the Right <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you're a small coaching center or a large institution, 
            we have a plan that scales with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-[32px] border transition-all duration-300 flex flex-col ${
                plan.highlighted 
                ? 'bg-primary/5 border-primary/20 shadow-xl shadow-primary/5 scale-105' 
                : 'bg-card border-border/50 hover:border-primary/20'
              }`}
            >
              <div className="mb-8">
                <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm font-medium">{plan.duration}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 rounded-full p-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <a href={plan.link} className="block w-full">
                <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  plan.highlighted 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}>
                  {plan.cta}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};
