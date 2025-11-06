import { Menu, X } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-sm border-b border-border/50 w-full shadow-lg">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between relative">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 z-[110] group">
            <div className="relative flex-shrink-0">
              <svg 
                width="44" 
                height="44" 
                viewBox="0 0 44 44" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 sm:h-12 sm:w-12"
              >
                {/* Fond avec effet de brillance */}
                <rect width="44" height="44" rx="12" fill="hsl(210 100% 50%)" />
                <rect 
                  width="44" 
                  height="44" 
                  rx="12" 
                  fill="url(#shineOverlay)" 
                  style={{mixBlendMode: 'overlay'}}
                />
                
                {/* Icône de lecture moderne */}
                <path 
                  d="M17 15L30 22L17 29V15Z" 
                  fill="white"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Effet de vague subtil */}
                <path 
                  d="M12 22C12 22 14 18 17 18C20 18 22 22 22 22C22 22 24 18 27 18C30 18 32 22 32 22C32 22 30 26 27 26C24 26 22 22 22 22C22 22 20 26 17 26C14 26 12 22 12 22Z" 
                  fill="white" 
                  fillOpacity="0.15"
                  className="group-hover:opacity-100 transition-opacity"
                />
                
                <defs>
                  <linearGradient id="shineOverlay" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="white" stopOpacity="0" />
                    <stop offset="0.5" stopColor="white" stopOpacity="0.1" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-[hsl(210_100%_50%)] dark:text-[hsl(210_100%_60%)] transition-colors">
                Media4Live
              </span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                PREMIUM IPTV SERVICE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("home")} className="text-primary-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-muted/50">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-primary-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-muted/50">
              Our Services
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-primary-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-muted/50">
              Pricing
            </button>
            <button onClick={() => scrollToSection("installation")} className="text-primary-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-muted/50">
              Installation Tutorial
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-primary-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-muted/50">
              FAQ
            </button>
            <button onClick={() => scrollToSection("about")} className="text-primary-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-muted/50">
              About
            </button>
            <Link to="/channels" className="text-primary-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-muted/50">
              Channels List
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="hero" size="lg" className="hidden md:inline-flex" onClick={() => scrollToSection("pricing")}>
              Watch IPTV Now
            </Button>
            
            {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2 text-primary-foreground hover:text-primary transition-colors z-[110] rounded-lg hover:bg-muted/50"
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
          className={`fixed top-0 right-0 h-full w-full max-w-xs bg-card/95 backdrop-blur-sm z-[100] shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto border-l border-border/50 ${
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
                className="text-base text-primary-foreground/90 hover:text-primary transition-colors text-left py-3 px-4 rounded-lg hover:bg-muted/50"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  scrollToSection("services");
                  setIsMenuOpen(false);
                }} 
                className="text-base text-primary-foreground/90 hover:text-primary transition-colors text-left py-3 px-4 rounded-lg hover:bg-muted/50"
              >
                Our Services
              </button>
              <button 
                onClick={() => {
                  scrollToSection("pricing");
                  setIsMenuOpen(false);
                }} 
                className="text-base text-primary-foreground/90 hover:text-primary transition-colors text-left py-3 px-4 rounded-lg hover:bg-muted/50"
              >
                Pricing
              </button>
              <button 
                onClick={() => {
                  scrollToSection("installation");
                  setIsMenuOpen(false);
                }} 
                className="text-base text-primary-foreground/90 hover:text-primary transition-colors text-left py-3 px-4 rounded-lg hover:bg-muted/50"
              >
                Installation Tutorial
              </button>
              <button 
                onClick={() => {
                  scrollToSection("faq");
                  setIsMenuOpen(false);
                }} 
                className="text-base text-primary-foreground/90 hover:text-primary transition-colors text-left py-3 px-4 rounded-lg hover:bg-muted/50"
              >
                FAQ
              </button>
              <Link 
                to="/channels"
                onClick={() => setIsMenuOpen(false)}
                className="text-base text-primary-foreground/90 hover:text-primary transition-colors text-left py-3 px-4 rounded-lg hover:bg-muted/50"
              >
                Channels List
              </Link>
              <div className="pt-4 mt-auto border-t border-border/50 sticky bottom-0 bg-card/95 backdrop-blur-sm pb-4">
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