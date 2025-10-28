import { Globe, Zap, Video, Box, RefreshCw, Headphones, Film, Shield } from "lucide-react";
import tabletsImage from "@/assets/tablets-showcase.png";

const KeyFeatures = () => {
  const features = [
    {
      icon: Globe,
      title: "Access From Anywhere",
      description: "Watch from any location worldwide",
    },
    {
      icon: Zap,
      title: "Very Easy To Use",
      description: "Simple setup and intuitive interface",
    },
    {
      icon: Video,
      title: "4K, FHD, HD Quality",
      description: "Crystal clear streaming quality",
    },
    {
      icon: Box,
      title: "No Extra Hardware",
      description: "Works with your existing devices",
    },
    {
      icon: RefreshCw,
      title: "Ongoing Updates",
      description: "Regular content and feature updates",
    },
    {
      icon: Headphones,
      title: "24/7 Live Support",
      description: "Always here to help you",
    },
    {
      icon: Film,
      title: "Movies & TV Shows",
      description: "Extensive VOD library",
    },
    {
      icon: Shield,
      title: "Anonymous Use",
      description: "Private and secure streaming",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - First 4 features */}
          <div className="w-full lg:col-span-1 space-y-4 sm:space-y-6">
            {features.slice(0, 4).map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 sm:gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base mb-0.5 sm:mb-1">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image - Hidden on small screens, shown from md and up */}
          <div className="hidden md:flex lg:col-span-1 items-center justify-center animate-scale-in my-6 lg:my-0">
            <img 
              src={tabletsImage} 
              alt="IPTV on tablets showing content library" 
              className="w-full max-w-xs lg:max-w-md"
              loading="lazy"
            />
          </div>

          {/* Right Column - Last 4 features */}
          <div className="w-full lg:col-span-1 space-y-4 sm:space-y-6">
            {features.slice(4, 8).map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 sm:gap-4 animate-fade-in"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="bg-primary rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base mb-0.5 sm:mb-1">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Image - Only shown on small screens */}
          <div className="md:hidden w-full flex justify-center my-6">
            <img 
              src={tabletsImage} 
              alt="IPTV on tablets showing content library" 
              className="w-full max-w-xs"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
