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
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      <div className="grid grid-cols-3 border-b">
        <div className="p-4 font-medium text-muted-foreground">Features</div>
        <div className="p-4 text-center font-bold text-primary">Connect Global</div>
        <div className="p-4 text-center font-medium text-muted-foreground">Other Providers</div>
      </div>
      
      {features.map((feature, index) => (
        <div 
          key={index} 
          className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-muted/30' : 'bg-white'} hover:bg-muted/50 transition-colors`}
        >
          <div className="p-4 text-sm font-medium text-muted-foreground">
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
              <div className="flex items-center gap-2 text-muted-foreground">
                <X className="h-5 w-5 text-destructive" />
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
