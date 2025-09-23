import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Development", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Digital Marketing", href: "#services" },
      { name: "Content Writing", href: "#services" },
      { name: "SEO Optimization", href: "#services" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Our Process", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Testimonials", href: "#portfolio" },
      { name: "Careers", href: "#contact" },
      { name: "Contact", href: "#contact" },
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "FAQ", href: "#faq" },
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#portfolio" },
      { name: "Free Consultation", href: "#contact" },
      { name: "Project Planner", href: "#contact" },
      { name: "Industry Reports", href: "#" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Data Protection", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "Service Agreement", href: "#" },
    ]
  }
];

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">FreelanceHub</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Connecting businesses with exceptional freelancers worldwide. 
              Quality work, delivered on time, every time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">hello@freelancehub.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">New York, NY 10001</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="max-w-md">
            <h4 className="font-semibold mb-2">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest updates on new services, industry insights, and special offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm" variant="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <span>© 2024 FreelanceHub. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <button className="hover:text-primary transition-colors">
                  Privacy Policy
                </button>
                <span>•</span>
                <button className="hover:text-primary transition-colors">
                  Terms of Service
                </button>
                <span>•</span>
                <button className="hover:text-primary transition-colors">
                  Cookie Policy
                </button>
              </div>
            </div>

            {/* Back to Top */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}