import { Button } from "./ui/button";

const FinalCTA = () => {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(217,91%,25%)] to-[hsl(217,91%,35%)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Watch?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Experience High-Quality IPTV Service With Unlimited Movies And Sports Entertainment In 4K Resolution. Watch On All Your Devices Anytime, Anywhere.
          </p>
          <Button variant="hero" size="xl" onClick={scrollToPricing} className="animate-glow">
            Choose Your Plan Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
