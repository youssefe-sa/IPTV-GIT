import { Globe, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // Si on est sur la page d'accueil, on fait le scroll
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }
    } else {
      // Sinon, on redirige vers la page d'accueil avec le hash
      navigate(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-[hsl(217,91%,20%)] border-b border-primary/20 w-full">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between relative">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity z-[110]">
            <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
            <span className="text-lg sm:text-xl font-bold text-primary-foreground">Connect Global</span>
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
            
            {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2 text-primary-foreground hover:text-accent transition-colors z-[110]"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-[90] md:hidden transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        
        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-full max-w-xs bg-[hsl(217,91%,15%)] z-[100] shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4 h-full flex flex-col">
            <div className="flex items-center justify-end mb-6">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 -mr-2 text-primary-foreground hover:text-accent transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 flex flex-col space-y-2 py-2 overflow-y-auto">
              <button 
                onClick={() => {
                  scrollToSection("home");
                  setIsMenuOpen(false);
                }} 
                className="text-base text-primary-foreground/90 hover:text-accent transition-colors text-left py-3 px-4 rounded-lg hover:bg-white/10"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  scrollToSection("services");
                  setIsMenuOpen(false);
                }} 
                className="text-base text-primary-foreground/90 hover:text-accent transition-colors text-left py-3 px-4 rounded-lg hover:bg-white/10"
              >
                Our Services
              </button>
              <button 
                onClick={() => {
                  scrollToSection("pricing");
                  setIsMenuOpen(false);
                }} 
                className="text-base text-primary-foreground/90 hover:text-accent transition-colors text-left py-3 px-4 rounded-lg hover:bg-white/10"
              >
                Pricing
              </button>
              <button 
                onClick={() => {
                  scrollToSection("installation");
                  setIsMenuOpen(false);
                }} 
                className="text-base text-primary-foreground/90 hover:text-accent transition-colors text-left py-3 px-4 rounded-lg hover:bg-white/10"
              >
                Installation Tutorial
              </button>
              <button 
                onClick={() => {
                  scrollToSection("faq");
                  setIsMenuOpen(false);
                }} 
                className="text-base text-primary-foreground/90 hover:text-accent transition-colors text-left py-3 px-4 rounded-lg hover:bg-white/10"
              >
                FAQ
              </button>
              <div className="pt-4 mt-auto border-t border-white/10 sticky bottom-0 bg-[hsl(217,91%,15%)] pb-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full py-6 text-base" 
                  onClick={() => {
                    scrollToSection("pricing");
                    setIsMenuOpen(false);
                  }}
                >
                  Watch IPTV Now
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;