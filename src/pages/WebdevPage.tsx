import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Globe, Zap, Shield, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WebdevPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Globe,
      title: "Modern Web Technologies",
      description: "Built with React, TypeScript, and cutting-edge frameworks for optimal performance"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Your website will look perfect on all devices - desktop, tablet, and mobile"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with modern build tools and performance best practices"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with security in mind and hosted on reliable infrastructure"
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Clean, maintainable code that grows with your business needs"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create wireframes and designs that align with your brand and goals"
    },
    {
      step: "03",
      title: "Development",
      description: "Build your website with modern technologies and best practices"
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing and deployment to ensure everything works perfectly"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="gradient-text">Web Development</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your ideas into powerful, modern web applications that drive results and engage your audience
            </p>
          </div>
        </section>

        {/* Why Choose Web Development Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why Choose Professional <span className="gradient-text">Web Development?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                In today's digital world, your website is your most important business asset. Here's why professional development matters:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={feature.title} className="p-6 bg-card rounded-xl border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                How It <span className="gradient-text">Works</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our proven development process ensures your project is delivered on time, on budget, and exceeds expectations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Modern <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              We use the latest and most reliable technologies to build your web applications
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["React", "TypeScript", "Node.js", "Tailwind CSS", "Next.js", "PostgreSQL", "AWS", "Docker"].map((tech) => (
                <div key={tech} className="p-4 bg-card rounded-lg border">
                  <span className="font-semibold">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Build Your <span className="gradient-text">Website?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your project and turn your vision into reality
            </p>
            <Button size="lg" onClick={() => navigate("/contact")}>
              Get Started Today
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingChat />
    </div>
  );
};

export default WebdevPage;