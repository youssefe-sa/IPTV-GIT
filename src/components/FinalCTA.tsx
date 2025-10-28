import { Button } from "./ui/button";
import readyToWatchBg from "@/assets/ready-to-watch-bg.jpg";

const FinalCTA = () => {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[hsl(217,91%,20%)] to-[hsl(217,91%,30%)]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ 
          backgroundImage: `url(${readyToWatchBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} 
      />
      
      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', 
          backgroundSize: '40px 40px', 
          opacity: 0.1, 
          color: 'hsl(0, 0%, 100%)' 
        }} 
      />

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
