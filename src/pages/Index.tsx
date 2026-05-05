import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ResponseSection } from "@/components/ResponseSection";
import { MethodologySection } from "@/components/MethodologySection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Helmet>
        {/* Primary SEO */}
        <title>Lerzo | All-in-One Business & Student Management Software</title>
        <meta
          name="description"
          content="Lerzo is a powerful SaaS platform for business management and student tracking. Manage clients, projects, payments, courses, and student fees in one system."
        />
        <meta
          name="keywords"
          content="business management software, student management system, student database software, course management system, fee management system, client management system, project management tool, SaaS business platform, institute management software"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://lerzo.com/" />
        <link rel="icon" type="image/png" href="/logo.png" />

        {/* Open Graph */}
        <meta property="og:title" content="Lerzo – All-in-One Business & Student Management" />
        <meta
          property="og:description"
          content="Manage clients, projects, and payments alongside student records and fees. The complete workspace for professionals and institutes."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lerzo.com" />
        <meta property="og:image" content="https://lerzo.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lerzo – Business & Student Management" />
        <meta
          name="twitter:description"
          content="The complete workspace for freelancers, agencies, and training institutes."
        />

        {/* Local SEO */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Lerzo",
              "description": "An all-in-one platform for business management (clients, projects, payments) and student management (records, courses, fees).",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Client Management",
                "Project Tracking",
                "Payment Management",
                "Student Records Management",
                "Course Management",
                "Fee Tracking",
                "Enrollment Tracking"
              ]
            }
          `}
        </script>
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <ResponseSection />
        <MethodologySection />
        <CapabilitiesSection />
        <ServicesSection />
        
        {/* FAQ Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="container-custom px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
              <span className="text-sm text-muted-foreground uppercase tracking-widest font-medium mb-4 block text-center">
                Common Questions
              </span>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl text-center mb-16">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    q: "What is Lerzo?",
                    a: "Lerzo is an all-in-one SaaS platform designed to help both businesses and educational institutes manage their daily operations, from client projects to student fee tracking."
                  },
                  {
                    q: "Is Lerzo a student management system?",
                    a: "Yes, Lerzo includes a full suite of student management tools, making it ideal for schools, coaching centers, and training institutes."
                  },
                  {
                    q: "Can I manage students and fees?",
                    a: "Absolutely. Lerzo allows you to maintain student databases, manage course enrollments, and track fee payments in one place."
                  },
                  {
                    q: "Can businesses use Lerzo?",
                    a: "Yes, Lerzo is built for freelancers, agencies, and small businesses to manage clients, track projects, and handle professional payments."
                  },
                  {
                    q: "Is Lerzo suitable for institutes?",
                    a: "Yes, Lerzo is specifically designed to meet the needs of training institutes and educational centers looking for a centralized management solution."
                  }
                ].map((faq, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all group">
                    <h3 className="font-display font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                      {faq.q}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
