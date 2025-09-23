import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    image: portfolio1,
    description: "Modern e-commerce solution with advanced filtering and payment integration",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    rating: 5,
    client: "TechRetail Co.",
    testimonial: "Outstanding work! The platform exceeded our expectations and boosted sales by 40%.",
  },
  {
    id: 2,
    title: "Fitness Mobile App",
    category: "Mobile Development",
    image: portfolio2,
    description: "Cross-platform fitness tracking app with social features and real-time analytics",
    technologies: ["React Native", "Firebase", "Chart.js", "Push Notifications"],
    rating: 5,
    client: "FitLife Inc.",
    testimonial: "The app is intuitive and our users love it. Downloads increased by 300%!",
  },
  {
    id: 3,
    title: "Brand Identity Design",
    category: "Design",
    image: portfolio3,
    description: "Complete brand identity package including logo, business cards, and guidelines",
    technologies: ["Adobe Illustrator", "Figma", "Brand Strategy", "Print Design"],
    rating: 5,
    client: "StartupXYZ",
    testimonial: "Professional, creative, and delivered exactly what we envisioned for our brand.",
  },
  {
    id: 4,
    title: "Marketing Analytics Dashboard",
    category: "Digital Marketing",
    image: portfolio4,
    description: "Comprehensive marketing analytics platform with real-time reporting and insights",
    technologies: ["React", "D3.js", "Google Analytics API", "PostgreSQL"],
    rating: 5,
    client: "MarketPro Agency",
    testimonial: "The dashboard transformed how we track and report campaign performance to clients.",
  },
  {
    id: 5,
    title: "E-commerce Store",
    category: "E-commerce",
    image: portfolio5,
    description: "Full-stack e-commerce solution with inventory management and payment processing",
    technologies: ["Shopify", "Custom API", "Stripe", "Inventory Management"],
    rating: 5,
    client: "RetailMax",
    testimonial: "Sales increased by 200% within the first month of launching the new store.",
  },
  {
    id: 6,
    title: "Content Strategy & SEO",
    category: "Content Writing",
    image: portfolio6,
    description: "Complete content overhaul and SEO optimization resulting in 300% traffic growth",
    technologies: ["SEO Strategy", "Content Writing", "Analytics", "Keyword Research"],
    rating: 5,
    client: "DigitalGrowth Co.",
    testimonial: "Our organic traffic tripled and we're ranking #1 for our target keywords.",
  },
];

export function Portfolio() {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover some of our most successful projects and the impact 
            we've made for businesses across various industries.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              className="portfolio-item bg-card rounded-xl overflow-hidden shadow-lg"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <Button size="icon" variant="secondary" className="opacity-80 hover:opacity-100">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Client Testimonial */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">
                      - {item.client}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "{item.testimonial}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[
            { label: "Projects Completed", value: "500+" },
            { label: "Happy Clients", value: "100+" },
            { label: "Countries Served", value: "25+" },
            { label: "Team Members", value: "50+" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your next project?
          </p>
          <Button variant="hero" size="lg" onClick={() => navigate("/services")}>
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}