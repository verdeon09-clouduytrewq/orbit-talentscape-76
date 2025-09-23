import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/logo.jpg";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/98 backdrop-blur-sm border-b-2 border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src={logo} alt="EGENTU Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold gradient-text">乇ム乇刀ｲひ</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.href ? "active" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Link to="/services">
              <Button variant="cta">
                Start Your Project
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`nav-link block px-3 py-2 text-base font-medium transition-colors ${
                  location.pathname === item.href ? "active" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link to="/services" onClick={() => setIsOpen(false)}>
                <Button variant="cta" className="w-full">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}