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
  return <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(217,91%,20%)] to-[hsl(217,91%,30%)]">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold text-primary-foreground mb-4 md:text-6xl">
            The International <span className="text-accent relative inline-block px-3 py-1 bg-accent/20 rounded-lg border-2 border-accent/40">IPTV</span> Service
          </h1>
          <p className="text-2xl text-accent mb-6 font-bold md:text-5xl">
            Stream the World in One Click
          </p>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed md:text-xl">
            Experience The Best IPTV Service At Competitive Rates! Unlock Access To Over 18,000 Live TV Channels, VODs, EPIC & IPTV Series. Stream From Anywhere On Your All Devices.
          </p>
          <Button variant="hero" size="xl" onClick={scrollToPricing} className="animate-glow">
            Subscribe Now
          </Button>

          {/* Device Compatibility */}
          <div className="mt-16 pt-16 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/80 mb-6 text-sm uppercase tracking-wider">Compatible With All Devices</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex flex-col items-center gap-2 animate-fade-in">
                <Tv className="h-12 w-12 text-primary-foreground" />
                <span className="text-primary-foreground/70 text-sm">Smart TV</span>
              </div>
              <div className="flex flex-col items-center gap-2 animate-fade-in" style={{
              animationDelay: "0.1s"
            }}>
                <Smartphone className="h-12 w-12 text-primary-foreground" />
                <span className="text-primary-foreground/70 text-sm">Android/iOS</span>
              </div>
              <div className="flex flex-col items-center gap-2 animate-fade-in" style={{
              animationDelay: "0.2s"
            }}>
                <Tablet className="h-12 w-12 text-primary-foreground" />
                <span className="text-primary-foreground/70 text-sm">Firestick</span>
              </div>
              <div className="flex flex-col items-center gap-2 animate-fade-in" style={{
              animationDelay: "0.3s"
            }}>
                <Monitor className="h-12 w-12 text-primary-foreground" />
                <span className="text-primary-foreground/70 text-sm">PC</span>
              </div>
              <div className="flex flex-col items-center gap-2 animate-fade-in" style={{
              animationDelay: "0.4s"
            }}>
                <Laptop className="h-12 w-12 text-primary-foreground" />
                <span className="text-primary-foreground/70 text-sm">Windows</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;