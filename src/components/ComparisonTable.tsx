import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const features = [
    {
      name: "Number of Channels",
      connectGlobal: "18,000+",
      others: "5,000 - 10,000",
      icon: true,
    },
    {
      name: "Video on Demand (VOD)",
      connectGlobal: "100,000+",
      others: "10,000 - 50,000",
      icon: true,
    },
    {
      name: "4K & FHD Quality",
      connectGlobal: "✓",
      others: "Limited",
      icon: true,
    },
    {
      name: "24/7 Support",
      connectGlobal: "✓",
      others: "Business Hours",
      icon: true,
    },
    {
      name: "Money-Back Guarantee",
      connectGlobal: "7 Days",
      others: "None",
      icon: true,
    },
    {
      name: "Simultaneous Connections",
      connectGlobal: "Up to 5",
      others: "1-2",
      icon: true,
    },
    {
      name: "Device Compatibility",
      connectGlobal: "All Devices",
      others: "Limited",
      icon: true,
    },
  ];

  return (
    <div className="bg-card rounded-xl shadow-lg border border-border/50 overflow-hidden">
      <div className="grid grid-cols-3 border-b border-border/50">
        <div className="p-4 font-medium text-primary-foreground/80">Features</div>
        <div className="p-4 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Connect Global</div>
        <div className="p-4 text-center font-medium text-primary-foreground/60">Other Providers</div>
      </div>
      
      {features.map((feature, index) => (
        <div 
          key={index} 
          className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-muted/10' : 'bg-card'} hover:bg-muted/20 transition-colors border-t border-border/30`}
        >
          <div className="p-4 text-sm font-medium text-primary-foreground/80">
            {feature.name}
          </div>
          <div className="p-4 flex items-center justify-center">
            {feature.icon ? (
              <div className="flex items-center gap-2 text-primary font-medium">
                <Check className="h-5 w-5" />
                <span>{feature.connectGlobal}</span>
              </div>
            ) : (
              <span className="font-medium">{feature.connectGlobal}</span>
            )}
          </div>
          <div className="p-4 flex items-center justify-center">
            {feature.icon ? (
              <div className="flex items-center gap-2 text-primary-foreground/60">
                <X className="h-5 w-5 text-destructive/80" />
                <span>{feature.others}</span>
              </div>
            ) : (
              <span>{feature.others}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComparisonTable;
