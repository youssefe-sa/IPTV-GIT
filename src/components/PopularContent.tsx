import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import logoSerieA from "@/assets/logo-serie-a.png";
import logoLegaCalcio from "@/assets/logo-lega-calcio.png";
import logoEuropaLeague from "@/assets/logo-europa-league.png";
import logoEredivisie from "@/assets/logo-eredivisie.png";
import logoMotoGP from "@/assets/logo-motogp.webp";
import logoSport1 from "@/assets/logo-sport1.webp";
import logoESPN from "@/assets/logo-espn.webp";
import logoSkySport from "@/assets/logo-sky-sport.webp";
import logoBeINSports from "@/assets/logo-bein-sports.webp";
import logoFoxSports from "@/assets/logo-fox-sports.webp";
import logoBundesliga from "@/assets/logo-bundesliga.png";
import logoNBCSports from "@/assets/logo-nbc-sports.webp";
const PopularContent = () => {
  const logos = [{
    src: logoSerieA,
    alt: "Serie A"
  }, {
    src: logoLegaCalcio,
    alt: "Lega Calcio"
  }, {
    src: logoEuropaLeague,
    alt: "UEFA Europa League"
  }, {
    src: logoEredivisie,
    alt: "Eredivisie"
  }, {
    src: logoMotoGP,
    alt: "MotoGP"
  }, {
    src: logoSport1,
    alt: "Sport1"
  }, {
    src: logoESPN,
    alt: "ESPN"
  }, {
    src: logoSkySport,
    alt: "Sky Sport"
  }, {
    src: logoBeINSports,
    alt: "beIN Sports"
  }, {
    src: logoFoxSports,
    alt: "Fox Sports"
  }, {
    src: logoBundesliga,
    alt: "Bundesliga"
  }, {
    src: logoNBCSports,
    alt: "NBC Sports"
  }];
  return <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <h3 className="font-bold text-foreground mb-2 text-2xl">
            Popular Content Available Now
          </h3>
          <p className="text-muted-foreground">
            Watch trending shows and movies in premium quality
          </p>
        </div>

        <Carousel opts={{
        align: "start",
        loop: true
      }} plugins={[Autoplay({
        delay: 2000
      })]} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {logos.map((logo, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="bg-background rounded-lg p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow">
                  <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain" />
                </div>
              </CarouselItem>)}
          </CarouselContent>
        </Carousel>
      </div>
    </section>;
};
export default PopularContent;