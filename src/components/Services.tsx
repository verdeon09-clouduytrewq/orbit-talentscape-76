import { Code, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "WEBDEV",
    description: "Custom websites and web applications built with modern technologies for your business needs",
    skills: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description: "Intelligent automation solutions and AI agents to streamline your business processes",
    skills: ["AI Chatbots", "Workflow Automation", "n8n Integration", "Process Optimization"],
  },
];

export function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceTitle: string) => {
    if (serviceTitle === "WEBDEV") {
      navigate("/webdev");
    } else if (serviceTitle === "AI Agents & Automation") {
      navigate("/ai-agents");
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized expertise in web development and AI automation to transform your business operations.
          </p>
        </div>

        {/* Services Grid - Centered */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="service-card p-8 rounded-xl group cursor-pointer hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => handleServiceClick(service.title)}
              >
                {/* Icon */}
                <div className="mb-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="text-sm px-3 py-1 bg-muted rounded-full text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to elevate your business with cutting-edge solutions?
          </p>
        </div>
      </div>
    </section>
  );
}