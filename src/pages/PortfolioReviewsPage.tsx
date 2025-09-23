import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";
import { ExternalLink, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";
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

const additionalReviews = [
  {
    id: 7,
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    rating: 5,
    review: "Outstanding work on our web development project. The team delivered exactly what we needed, on time and within budget. Highly recommended!",
    project: "E-commerce Website",
    image: "https://images.unsplash.com/photo-1494790108755-2616b9b75e80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 8,
    name: "Michael Chen",
    company: "Digital Marketing Pro",
    rating: 5,
    review: "Exceptional SEO services that increased our organic traffic by 300%. Professional, knowledgeable, and results-driven.",
    project: "SEO Optimization",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 9,
    name: "Emily Rodriguez",
    company: "Creative Studios",
    rating: 5,
    review: "Amazing UI/UX design work. They understood our vision perfectly and created something even better than we imagined.",
    project: "Mobile App Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 10,
    name: "David Kim",
    company: "StartupXYZ",
    rating: 5,
    review: "The content writing team created compelling copy that significantly improved our conversion rates. Professional and creative.",
    project: "Website Copywriting",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
];

const PortfolioReviewsPage = () => {
  const navigate = useNavigate();

  const averageRating = 5.0;
  const totalReviews = portfolioItems.length + additionalReviews.length;

  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <Navigation />
      <div className="pt-16">
        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Featured <span className="gradient-text">Work</span> & Reviews
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our most successful projects and what our clients say about working with us
              </p>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
              {portfolioItems.map((item, index) => (
                <div 
                  key={item.id}
                  className="portfolio-item bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
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
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Reviews Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Client <span className="gradient-text">Reviews</span>
              </h2>
              
              {/* Stats */}
              <div className="flex justify-center items-center gap-8 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-2xl font-bold">{averageRating}</p>
                  <p className="text-muted-foreground">Average Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{totalReviews}+</p>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
              </div>
            </div>

            {/* Additional Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {additionalReviews.map((review) => (
                <div 
                  key={review.id}
                  className="service-card p-6 rounded-xl group hover:scale-105 transition-all duration-300"
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary/60" />
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{review.review}"
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-3">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.company}</p>
                      <p className="text-xs text-primary">{review.project}</p>
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

            {/* CTA Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Join Our Happy Clients?</h3>
              <p className="text-muted-foreground mb-8">
                Start your project today and experience the same quality service
              </p>
              <Button variant="hero" size="lg" onClick={() => navigate("/services")}>
                Start Your Project
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default PortfolioReviewsPage;