import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { Button } from "@/components/ui/button";
import { Bot, Workflow, Clock, TrendingUp, Zap, Users, MessageSquare, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIAgentsPage = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "AI agents work around the clock, handling tasks and inquiries even when you're not available"
    },
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and free up your team to focus on high-value activities"
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Provide immediate responses to customer inquiries and process requests in real-time"
    },
    {
      icon: Users,
      title: "Scalable Support",
      description: "Handle unlimited conversations and tasks simultaneously without additional overhead"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Gain valuable insights from automated data collection and analysis"
    }
  ];

  const solutions = [
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description: "Intelligent conversational agents for customer support, sales, and engagement",
      features: ["Natural language processing", "Multi-platform integration", "Learning capabilities", "Custom training"]
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Streamline business processes with intelligent automation solutions",
      features: ["Process optimization", "Data synchronization", "Task scheduling", "Error handling"]
    },
    {
      icon: Bot,
      title: "Custom AI Agents",
      description: "Tailored AI solutions designed specifically for your business needs",
      features: ["Industry-specific training", "Custom integrations", "Advanced analytics", "Continuous learning"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Process Analysis",
      description: "We analyze your current workflows to identify automation opportunities"
    },
    {
      step: "02",
      title: "AI Design",
      description: "Design intelligent agents tailored to your specific business requirements"
    },
    {
      step: "03",
      title: "Development & Training",
      description: "Build and train AI agents using your data and business logic"
    },
    {
      step: "04",
      title: "Integration & Optimization",
      description: "Deploy agents and continuously optimize their performance"
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
                <Bot className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Agents & <span className="gradient-text">Automation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your business with intelligent automation solutions that work 24/7 to boost efficiency and drive growth
            </p>
          </div>
        </section>

        {/* Why AI Agents Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why <span className="gradient-text">AI Automation?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                AI agents are revolutionizing how businesses operate. Here's why you need them:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="p-6 bg-card rounded-xl border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Our AI <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive AI automation solutions designed to transform your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={solution.title} className="p-8 bg-card rounded-xl border">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                How It <span className="gradient-text">Works</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our proven methodology for implementing AI automation in your business
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              AI <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              We leverage cutting-edge AI technologies and platforms to build powerful automation solutions
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["OpenAI GPT", "LangChain", "n8n", "Zapier", "Microsoft AI", "Google AI", "Anthropic", "Hugging Face"].map((tech) => (
                <div key={tech} className="p-4 bg-card rounded-lg border">
                  <span className="font-semibold">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Automate Your <span className="gradient-text">Business?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how AI agents can transform your operations and boost productivity
            </p>
            <Button size="lg" onClick={() => navigate("/contact")}>
              Start Your AI Journey
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingChat />
    </div>
  );
};

export default AIAgentsPage;