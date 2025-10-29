import { Button } from "./ui/button";
import { Tv, Smartphone, Tablet, Monitor, Laptop } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
const HeroSection = () => {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(217,91%,20%)] to-[hsl(217,91%,30%)] pt-16">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up px-2 sm:px-0">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-primary-foreground mb-3 sm:mb-4 md:mb-6 leading-tight md:text-6xl">
            The International <span className="text-accent relative inline-block px-2 py-1 sm:px-3 bg-accent/20 rounded-lg border-2 border-accent/40 text-xl xs:text-2xl sm:text-3xl mt-1 inline-block md:text-6xl">IPTV</span> Service
          </h1>
          <p className="text-lg xs:text-xl sm:text-2xl text-accent mb-3 sm:mb-4 md:mb-6 font-bold leading-snug md:text-5xl">
            Stream the World in One Click
          </p>
          <p className="text-sm xs:text-base sm:text-lg text-primary-foreground/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed px-1">
            Experience The Best IPTV Service At Competitive Rates! Unlock Access To Over 18,000 Live TV Channels, VODs, EPIC & IPTV Series. Stream From Anywhere On Your All Devices.
          </p>
          <Button variant="hero" size="xl" onClick={scrollToPricing} className="animate-glow text-sm xs:text-base sm:text-lg px-4 py-5 sm:px-6 sm:py-6 w-full max-w-xs mx-auto">
            Subscribe Now
          </Button>

          {/* Device Compatibility */}
          <div className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 md:pt-12 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/80 mb-3 sm:mb-4 md:mb-6 text-[10px] xs:text-xs sm:text-sm uppercase tracking-wider">Compatible With All Devices</p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              <div className="flex flex-col items-center gap-1 animate-fade-in">
                <Tv className="h-7 w-7 xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary-foreground" />
                <span className="text-primary-foreground/70 text-[10px] xs:text-xs sm:text-sm">Smart TV</span>
              </div>
              <div className="flex flex-col items-center gap-1 animate-fade-in" style={{
              animationDelay: "0.1s"
            }}>
                <Smartphone className="h-7 w-7 xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary-foreground" />
                <span className="text-primary-foreground/70 text-[10px] xs:text-xs sm:text-sm">Android/iOS</span>
              </div>
              <div className="flex flex-col items-center gap-1 animate-fade-in" style={{
              animationDelay: "0.2s"
            }}>
                <Tablet className="h-7 w-7 xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary-foreground" />
                <span className="text-primary-foreground/70 text-[10px] xs:text-xs sm:text-sm">Tablets</span>
              </div>
              <div className="flex flex-col items-center gap-1 animate-fade-in" style={{
              animationDelay: "0.3s"
            }}>
                <Monitor className="h-7 w-7 xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary-foreground" />
                <span className="text-primary-foreground/70 text-[10px] xs:text-xs sm:text-sm">Computers</span>
              </div>
              <div className="flex flex-col items-center gap-1 animate-fade-in" style={{
              animationDelay: "0.4s"
            }}>
                <Laptop className="h-7 w-7 xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary-foreground" />
                <span className="text-primary-foreground/70 text-[10px] xs:text-xs sm:text-sm">Laptops</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;