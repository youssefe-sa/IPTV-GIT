import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import devicesImage from "@/assets/devices-showcase.jpg";
const ServicePresentation = () => {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="services" className="py-8 xs:py-10 sm:py-14 md:py-20 bg-background">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 items-center max-w-7xl mx-auto">
          <div className="animate-fade-in w-full">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-snug sm:leading-tight">
              We Provide The Best IPTV Service Around The World
            </h2>
            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground mb-4 xs:mb-5 sm:mb-6 md:mb-8 leading-relaxed">
              Best IPTV services to stream your favorite channels, offers you the Best IPTV Subscription Service and after sell support. Enjoy every moment in stunning 4K, FHD, HD, and SD quality, seamlessly delivered without interruptions.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToPricing}
              className="w-full xs:w-4/5 sm:w-auto text-xs xs:text-sm sm:text-base px-4 xs:px-5 sm:px-6 py-4 xs:py-4 sm:py-5 md:py-6 font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-95"
            >
              Choose Your IPTV Plan
            </Button>
            
            <div className="mt-8 overflow-hidden">
              <div className="flex items-center gap-4 sm:gap-6 animate-[scroll_20s_linear_infinite]">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2 shrink-0">
                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded bg-[hsl(0,79%,63%)] flex items-center justify-center text-white font-bold text-[10px] sm:text-xs">N</div>
                    <span className="text-muted-foreground text-xs sm:text-sm">Netflix</span>
                    
                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded bg-[hsl(231,100%,50%)] flex items-center justify-center text-white font-bold text-[10px] sm:text-xs">D+</div>
                    <span className="text-muted-foreground text-xs sm:text-sm">Disney+</span>
                    
                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded bg-foreground flex items-center justify-center text-background font-bold text-[10px] sm:text-xs">TV</div>
                    <span className="text-muted-foreground text-xs sm:text-sm">Apple TV</span>
                    
                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded bg-[hsl(270,91%,65%)] flex items-center justify-center text-white font-bold text-[10px] sm:text-xs">HM</div>
                    <span className="text-muted-foreground text-xs sm:text-sm">HBO Max</span>
                    
                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded bg-[hsl(146,100%,39%)] flex items-center justify-center text-white font-bold text-[10px] sm:text-xs">H</div>
                    <span className="text-muted-foreground text-xs sm:text-sm">Hulu</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-scale-in relative w-full mb-8 md:mb-0">
            <img 
              src={devicesImage} 
              alt="IPTV on multiple devices" 
              className="rounded-lg shadow-lg w-full h-auto"
              loading="lazy"
            />
            <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-6 flex items-center gap-2 sm:gap-3 bg-background/95 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-lg shadow-xl border border-primary/20">
              <Globe className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-accent" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Connect Global</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicePresentation;