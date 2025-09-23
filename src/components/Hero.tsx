import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

export function Hero() {
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-section">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Professional freelance workspace" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Get Work Done with{" "}
            <span className="gradient-text">Top Freelancers</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with trusted professionals who deliver quality work on time. 
            From web development to design, we've got the talent you need.
          </p>

          {/* About & Stats */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto mb-8">
              <h3 className="text-2xl font-bold mb-4 text-center">About FreelanceHub</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2019, FreelanceHub connects businesses with world-class talent. 
                We specialize in web development and AI automation solutions, delivering exceptional 
                results with a 98% satisfaction rate. Our expert team has completed over 500 projects 
                across 50+ industries, providing 24/7 support throughout your project lifecycle.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">500+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">98% Satisfaction Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => scrollToSection("#contact")}
              className="group"
            >
              Hire Talent
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/20">
            <p className="text-sm text-muted-foreground mb-4">Trusted by companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* These would be actual client logos in production */}
              <div className="text-lg font-semibold">TechCorp</div>
              <div className="text-lg font-semibold">StartupXYZ</div>
              <div className="text-lg font-semibold">InnovateCo</div>
              <div className="text-lg font-semibold">DigitalWorks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}