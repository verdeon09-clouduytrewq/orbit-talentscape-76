import { Code, Palette, Smartphone, Globe, Search, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    features: ["React & Next.js", "E-commerce Solutions", "API Integration", "Performance Optimization"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-friendly designs that convert visitors into customers",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android",
    features: ["React Native", "Flutter", "App Store Optimization", "Push Notifications"]
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies to grow your online presence",
    features: ["Social Media", "Content Strategy", "Email Marketing", "Analytics"]
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your search rankings and drive organic traffic",
    features: ["Keyword Research", "Technical SEO", "Content Optimization", "Link Building"]
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Streamline your business processes with custom automation solutions",
    features: ["Workflow Automation", "API Integrations", "Data Processing", "Task Scheduling"]
  }
];

export function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your ideas into reality with our comprehensive range of digital services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-8 rounded-2xl bg-card/50 hover:bg-card border border-border/50 hover:border-primary/20 transition-all duration-300 cursor-pointer animate-fade-in hover-scale"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              onClick={() => navigate('/services')}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => navigate('/contact')}
            className="px-8 py-4 text-lg"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
}