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
  return <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[40%_60%] gap-12 items-center max-w-7xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              We Provide The Best IPTV Service Around The World
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">Best IPTV services to stream your favorite channels, offers you the Best IPTV Subscription Service and after sell support.
Enjoy every moment in stunning 4K, FHD, HD, and SD quality, seamlessly delivered without interruptions, no-freezing viewing experience, guaranteeing you the highest quality live TV, SPORT, PPV and VODs.</p>
            <Button variant="hero" size="lg" onClick={scrollToPricing}>
              Choose Your IPTV Plan
            </Button>
            
            <div className="mt-8 overflow-hidden">
              <div className="flex items-center gap-6 animate-[scroll_20s_linear_infinite]">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="h-8 w-8 rounded bg-[hsl(0,79%,63%)] flex items-center justify-center text-white font-bold text-xs">N</div>
                  <span className="text-muted-foreground text-sm">Netflix</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="h-8 w-8 rounded bg-[hsl(231,100%,50%)] flex items-center justify-center text-white font-bold text-xs">D+</div>
                  <span className="text-muted-foreground text-sm">Disney+</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="h-8 w-8 rounded bg-foreground flex items-center justify-center text-background font-bold text-xs">TV</div>
                  <span className="text-muted-foreground text-sm">Apple TV</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="h-8 w-8 rounded bg-[hsl(270,91%,65%)] flex items-center justify-center text-white font-bold text-xs">HM</div>
                  <span className="text-muted-foreground text-sm">HBO Max</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="h-8 w-8 rounded bg-[hsl(146,100%,39%)] flex items-center justify-center text-white font-bold text-xs">H</div>
                  <span className="text-muted-foreground text-sm">Hulu</span>
                </div>
                {/* Duplicate pour animation continue */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className="h-8 w-8 rounded bg-[hsl(0,79%,63%)] flex items-center justify-center text-white font-bold text-xs">N</div>
                  <span className="text-muted-foreground text-sm">Netflix</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="h-8 w-8 rounded bg-[hsl(231,100%,50%)] flex items-center justify-center text-white font-bold text-xs">D+</div>
                  <span className="text-muted-foreground text-sm">Disney+</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="h-8 w-8 rounded bg-foreground flex items-center justify-center text-background font-bold text-xs">TV</div>
                  <span className="text-muted-foreground text-sm">Apple TV</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="h-8 w-8 rounded bg-[hsl(270,91%,65%)] flex items-center justify-center text-white font-bold text-xs">HM</div>
                  <span className="text-muted-foreground text-sm">HBO Max</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="h-8 w-8 rounded bg-[hsl(146,100%,39%)] flex items-center justify-center text-white font-bold text-xs">H</div>
                  <span className="text-muted-foreground text-sm">Hulu</span>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-scale-in relative">
            <img src={devicesImage} alt="IPTV on multiple devices" className="rounded-lg shadow-lg w-full" />
            <div className="absolute top-6 left-6 flex items-center gap-3 bg-background/95 backdrop-blur-sm px-6 py-3 rounded-lg shadow-xl border border-primary/20">
              <Globe className="h-10 w-10 text-accent" />
              <span className="text-2xl font-bold text-foreground">Connect Global</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicePresentation;