import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface PricingCardProps {
  duration: string;
  price: string;
  isPopular?: boolean;
  delay?: number;
}
const PricingCard = ({
  duration,
  price,
  isPopular = false,
  delay = 0
}: PricingCardProps) => {
  const navigate = useNavigate();
  const features = ["18,000+ Live TV Channels", "VOD & Series Access", "4K/FHD/HD/SD Quality", "All Device Compatibility", "NBA, NHL, NFL, PPV", "Top sport channels", "Adult (optional)", "TV Guide (EPG)", "100% Fast & Stable", "Free Updates", "24/7 Customer Support"];
  
  const handleChoosePlan = () => {
    navigate(`/checkout?plan=${encodeURIComponent(duration)}&price=${encodeURIComponent(price)}`);
  };
  
  return <div className={`bg-card rounded-xl shadow-md hover:shadow-xl transition-all p-8 relative animate-scale-in ${isPopular ? "border-2 border-primary scale-105" : "border border-border"}`} style={{
    animationDelay: `${delay}s`
  }}>
      {isPopular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground rounded-full text-sm font-semibold px-4 py-[5px] whitespace-nowrap">Most Popular</div>}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{duration}</h3>
        <h3 className="text-foreground mb-2 text-base font-normal">Plans & Packages</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-primary">${price}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="bg-primary/10 rounded-full p-1">
              <Check className="h-4 w-4 text-primary" />
            </div>
            {feature}
          </li>)}
      </ul>

      <Button 
        variant={isPopular ? "hero" : "default"} 
        size="lg" 
        className="w-full"
        onClick={handleChoosePlan}
      >
        Choose Plan
      </Button>
    </div>;
};
export default PricingCard;