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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-center max-w-7xl mx-auto">
          <div className="lg:col-span-1 space-y-6">
            {features.slice(0, 4).map((feature, index) => (
              <div 
                key={index} 
                className="flex gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1 flex items-center justify-center animate-scale-in">
            <img 
              src={tabletsImage} 
              alt="IPTV on tablets showing content library" 
              className="max-w-md w-full"
            />
          </div>

          <div className="lg:col-span-1 space-y-6">
            {features.slice(4, 8).map((feature, index) => (
              <div 
                key={index} 
                className="flex gap-4 animate-fade-in"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="bg-primary rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
