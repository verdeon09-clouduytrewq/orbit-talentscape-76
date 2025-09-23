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
        <div className="text-center">
          {/* Company Info */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">FreelanceHub</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Connecting businesses with exceptional freelancers worldwide. 
              Quality work, delivered on time, every time.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">hello@freelancehub.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">freelancehub.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-4">
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