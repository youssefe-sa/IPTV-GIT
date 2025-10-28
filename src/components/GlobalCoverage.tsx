import { MapPin } from "lucide-react";
import globalCoverageBg from "@/assets/global-coverage-bg.jpg";

const GlobalCoverage = () => {
  const regions = [{
    name: "America",
    color: "bg-primary",
    left: "20%",
    top: "40%"
  }, {
    name: "Europe",
    color: "bg-secondary",
    left: "50%",
    top: "30%"
  }, {
    name: "Asia",
    color: "bg-accent",
    left: "70%",
    top: "35%"
  }, {
    name: "Africa",
    color: "bg-destructive",
    left: "48%",
    top: "55%"
  }, {
    name: "Australia",
    color: "bg-primary",
    left: "80%",
    top: "65%"
  }];
  return (
    <>
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[hsl(217,91%,20%)] to-[hsl(217,91%,30%)] bg-fixed">
      {/* Image d'arrière-plan avec opacité */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{
          backgroundImage: `url(${globalCoverageBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }} 
      />
      
      {/* Motif de points */}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Channels From Every Corner Of The World
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Our IPTV service offers an array of amazing features that make it stand out from the rest. With access to Live TV channels, including Adult/XXX channels (which can be selected during the ordering process), Live sports channels, Movies, Series, and VOD, there's no shortage of entertainment options for our users. Plus, our 24/7 LIVE chat support ensures that any questions or concerns can be quickly addressed. Our subscription packages have been designed to provide users with exceptional value, making them an attractive choice for anyone looking to enjoy high-quality entertainment at an affordable price.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto relative h-[400px] md:h-[500px] animate-fade-in-up">
          {/* World Map Visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl backdrop-blur-sm border border-border/50">
              <svg viewBox="0 0 1000 500" className="w-full h-full opacity-40 stroke-primary" fill="none">
                <ellipse cx="500" cy="250" rx="450" ry="220" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="50" y1="250" x2="950" y2="250" strokeWidth="1" strokeDasharray="10,10" />
                <line x1="500" y1="30" x2="500" y2="470" strokeWidth="1" strokeDasharray="10,10" />
                <ellipse cx="500" cy="250" rx="350" ry="150" strokeWidth="1" opacity="0.3" />
                <ellipse cx="500" cy="250" rx="250" ry="100" strokeWidth="1" opacity="0.2" />
              </svg>
              
              {regions.map((region, index) => <div key={index} className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-scale-in" style={{
              left: region.left,
              top: region.top,
              animationDelay: `${index * 0.15}s`
            }}>
                  <div className="relative group cursor-pointer">
                    <div className={`${region.color} rounded-full p-4 shadow-2xl hover:scale-125 transition-all duration-300 animate-glow border-2 border-background`}>
                      <MapPin className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 -top-12 bg-card px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-border">
                      <span className="text-sm font-semibold text-primary-foreground">{region.name}</span>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {regions.map((region, index) => <div key={index} className="flex items-center gap-3 animate-fade-in px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-primary/50 transition-all" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className={`${region.color} w-3 h-3 rounded-full shadow-lg`} />
              <span className="text-white font-medium text-sm">{region.name}</span>
            </div>)}
        </div>
      </div>
    </section>

    {/* Le bouton de retour en haut est maintenant géré par le composant FloatingButtons */}
  </>
  );
};
export default GlobalCoverage;