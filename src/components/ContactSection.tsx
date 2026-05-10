import { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    pickupDate: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';
      const response = await fetch(`${apiBaseUrl}/api/leads/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          company_name: formData.company,
          phone: formData.phone,
          started_date: formData.pickupDate,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit lead');
      }

      toast({
        title: "Success!",
        description: "Your inquiry has been sent. Redirecting you to the free trial registration...",
      });
      
      // Clear form and redirect to main app's register page
      setFormData({ name: '', email: '', company: '', phone: '', pickupDate: '', message: '' });
      setTimeout(() => {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';
        window.location.href = `${apiBaseUrl}/register`;
      }, 2000);

    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to connect to the server. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="noise-overlay absolute inset-0" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div className="gsap-slide-right">
            <span className="text-sm text-muted-foreground uppercase tracking-widest font-medium mb-4 block">
              Join Lerzo Today
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 leading-[0.95]">
              <span className="text-foreground">SIMPLIFY</span>
              <br />
              <span className="gradient-text">YOUR WORKFLOW</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-md">
              Ready to simplify your business? Join thousands of professionals who have already reclaimed their time with Lerzo.
            </p>

            {/* Contact Info */}
            <div className="space-y-5">
              {[
                { icon: Phone, label: 'Phone', value: '8667811625', href: 'tel:8667811625' },
                { icon: Mail, label: 'Email', value: 'contact@lerzo.com', href: 'mailto:contact@lerzo.com' },
              ].map((item, i) => (
                <a key={i} href={item.href} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</div>
                    <div className="text-foreground group-hover:text-primary transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="gsap-slide-left">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl card-gradient space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-primary/50 focus:bg-muted/50 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-primary/50 focus:bg-muted/50 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-primary/50 focus:bg-muted/50 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-primary/50 focus:bg-muted/50 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                  Desired Start Date
                </label>
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-primary/50 focus:bg-muted/50 outline-none transition-all text-foreground"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-primary/50 focus:bg-muted/50 outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground/50"
                  placeholder="Tell us about your business management needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-display font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Register for Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
