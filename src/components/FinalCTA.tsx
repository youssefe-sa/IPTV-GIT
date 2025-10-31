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
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[hsl(220,50%,8%)] to-[hsl(260,60%,15%)] bg-fixed">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ 
          backgroundImage: `url(${readyToWatchBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
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
        <div className="text-center mb-16 animate-fade-in">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
              Ready to Watch?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Experience High-Quality IPTV Service With Unlimited Movies And Sports Entertainment In 4K Resolution. Watch On All Your Devices Anytime, Anywhere.
            </p>
            <Button variant="hero" size="lg" onClick={scrollToPricing} className="mt-6">
              Choose Your Plan Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
