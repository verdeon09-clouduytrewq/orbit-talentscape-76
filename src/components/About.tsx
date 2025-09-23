import { CheckCircle, Users, Trophy, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import aboutBackground from "@/assets/about-background.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const features = [
  {
    icon: Users,
    title: "Expert Freelancers",
    description: "Hand-picked professionals with proven track records and specialized skills"
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality or attention to detail"
  },
  {
    icon: Trophy,
    title: "Quality Guaranteed", 
    description: "100% satisfaction guarantee with unlimited revisions until you're happy"
  },
  {
    icon: CheckCircle,
    title: "Trusted Process",
    description: "Streamlined workflow with clear communication and milestone tracking"
  }
];

const values = [
  "Over 5 years of connecting businesses with top freelancers",
  "Rigorous vetting process ensuring only the best talent",
  "24/7 support throughout your project lifecycle",
  "Transparent pricing with no hidden fees or surprises",
  "Proven track record with 98% client satisfaction rate",
  "Expertise across 50+ industries and project types"
];

export function About() {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <img 
            src={aboutBackground} 
            alt="Professional workspace background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">FreelanceHub</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're more than just a marketplace. We're your trusted partner in finding 
            exceptional talent that brings your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Story */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-lg"></div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">
              Our Mission: Connecting Vision with Talent
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed relative z-10">
              <p>
                Founded in 2019, FreelanceHub was born from a simple yet powerful idea: 
                every business deserves access to world-class talent, regardless of size or location.
              </p>
              <p>
                We've built a platform that goes beyond traditional freelance marketplaces. 
                Our focus is on creating meaningful partnerships between clients and freelancers, 
                ensuring every project is not just completed, but exceeds expectations.
              </p>
              <p>
                With over 500 successful projects and a growing community of satisfied clients, 
                we've proven that quality work and exceptional service can scale.
              </p>
            </div>

            {/* Values List */}
            <div className="mt-8 space-y-3 relative z-10">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3 group animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 relative z-10">
              <Button variant="hero" size="lg" onClick={() => navigate("/services")}>
                Start Your Project Today
              </Button>
            </div>
          </div>

          {/* Right Column - Features with Team Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Team Collaboration Image */}
            <div className="mb-8 relative overflow-hidden rounded-2xl">
              <img 
                src={teamCollaboration} 
                alt="Professional team collaboration" 
                className="w-full h-64 object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Our Expert Team</p>
                <p className="text-xs opacity-90">Working together to deliver excellence</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-8">What Sets Us Apart</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-background/50 transition-all duration-300 group cursor-pointer animate-fade-in hover-scale"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="border-t border-border pt-16 relative">
          <div className="absolute top-16 right-10 w-16 h-16 bg-primary/5 rounded-full blur-xl"></div>
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process makes it easy to get started and ensures 
              you'll love working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                step: "01",
                title: "Tell Us Your Needs",
                description: "Share your project details, timeline, and budget. We'll analyze your requirements and suggest the best approach."
              },
              {
                step: "02", 
                title: "Get Matched with Experts",
                description: "We hand-pick 3-5 qualified freelancers based on your specific needs and introduce you to the perfect match."
              },
              {
                step: "03",
                title: "Receive Exceptional Results",
                description: "Work directly with your chosen freelancer while we provide support, milestone tracking, and quality assurance."
              }
            ].map((step, index) => (
              <div key={step.step} className="text-center group animate-fade-in hover-scale" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl font-bold text-primary">{step.step}</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{step.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                
                {/* Arrow connector (hidden on last item) */}
                {index < 2 && (
                  <div className="hidden md:block mt-8">
                    <div className="w-full h-px bg-border relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rotate-45 animate-pulse"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}