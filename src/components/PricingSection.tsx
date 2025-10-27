import PricingCard from "./PricingCard";

const PricingSection = () => {
  const plans = [
    { duration: "1 Month", price: "19.99", isPopular: false },
    { duration: "3 Months", price: "39.99", isPopular: false },
    { duration: "6 Months", price: "49.99", isPopular: false },
    { duration: "12 Months", price: "59.99", isPopular: true },
    { duration: "24 Months", price: "99.99", isPopular: false },
  ];

  return (
    <section id="pricing" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Plan – Best IPTV Service Providers
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              duration={plan.duration}
              price={plan.price}
              isPopular={plan.isPopular}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
