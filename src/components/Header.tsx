import { Globe, Menu, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };
  return <header className="sticky top-0 z-50 bg-[hsl(217,91%,20%)] border-b border-primary/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Globe className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-primary-foreground">Connect Global</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("home")} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Our Services
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection("installation")} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Installation Tutorial
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection("about")} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              About
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="hero" size="lg" className="hidden md:inline-flex" onClick={() => scrollToSection("pricing")}>
              Watch IPTV Now
            </Button>
            
            <button className="md:hidden text-primary-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 pt-4 border-t border-primary/20 flex flex-col gap-3 animate-fade-in">
            <button onClick={() => scrollToSection("home")} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-left">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-left">
              Our Services
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-left">
              Pricing
            </button>
            <button onClick={() => scrollToSection("installation")} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-left">
              Installation Tutorial
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-left">
              FAQ
            </button>
            <button onClick={() => scrollToSection("about")} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-left">
              About
            </button>
            <Button variant="hero" size="lg" className="mt-2" onClick={() => scrollToSection("pricing")}>
              Watch IPTV Now
            </Button>
          </nav>}
      </div>
    </header>;
};
export default Header;