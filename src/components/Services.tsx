import { CheckCircle, Users, Trophy, Clock, ArrowRight } from "lucide-react";
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

export function Services() {
  const navigate = useNavigate();

  return (
    <>
      {/* About Hero Section */}
      <section id="services" className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutBackground} 
            alt="Professional workspace background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/90"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">FreelanceHub</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're more than just a marketplace. We're your trusted partner in finding 
              exceptional talent that brings your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-card/30 relative">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-float"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Story Content */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission: <span className="gradient-text">Connecting Vision with Talent</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
            </div>

            {/* Right - Team Image */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={teamCollaboration} 
                  alt="Professional team collaboration" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">Our Expert Team</p>
                  <p className="text-sm opacity-90">Working together to deliver excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background relative">
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Sets Us <span className="gradient-text">Apart</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence and innovation makes us the preferred choice 
              for businesses seeking top-tier freelance talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center p-6 rounded-xl bg-card/50 hover:bg-card transition-all duration-300 group cursor-pointer animate-fade-in hover-scale"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-card/30 relative">
        <div className="absolute top-20 left-20 w-16 h-16 bg-primary/5 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-6 rounded-lg bg-background/50 hover:bg-background/70 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground leading-relaxed">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background relative">
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-float"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process makes it easy to get started and ensures 
              you'll love working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
              <div key={step.step} className="text-center group animate-fade-in hover-scale" style={{ animationDelay: `${0.2 + index * 0.2}s` }}>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
                
                {/* Arrow connector (hidden on last item) */}
                {index < 2 && (
                  <div className="hidden md:block mt-8">
                    <div className="w-full h-px bg-border relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary rotate-45 animate-pulse"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}