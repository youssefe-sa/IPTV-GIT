import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Catégories de chaînes
const channelCategories = [
  {
    name: "Sports",
    channels: [
      "ESPN", "ESPN 2", "ESPN U", "ESPN News",
      "Fox Sports 1", "Fox Sports 2", "NBC Sports",
      "CBS Sports Network", "NFL Network", "NBA TV",
      "MLB Network", "NHL Network", "Tennis Channel",
      "Golf Channel", "beIN SPORTS", "DAZN"
    ]
  },
  {
    name: "Entertainment",
    channels: [
      "HBO", "HBO 2", "HBO Family", "Showtime",
      "Cinemax", "Starz", "Starz Encore", "FX",
      "AMC", "TNT", "TBS", "USA Network",
      "Bravo", "E! Entertainment", "Lifetime", "A&E"
    ]
  },
  {
    name: "News & Documentaries",
    channels: [
      "CNN", "Fox News", "MSNBC", "CNBC",
      "BBC World News", "Al Jazeera", "Bloomberg",
      "National Geographic", "Discovery Channel", 
      "History Channel", "A&E", "Investigation Discovery"
    ]
  },
  {
    name: "PPV & Événements",
    channels: [
      "PPV 1-10", "UFC PPV", "WWE Network", "Boxing PPV",
      "DAZN PPV", "Showtime PPV", "FITE TV", "Triller PPV",
      "Premier Boxing Champions", "Top Rank Boxing"
    ]
  },
  {
    name: "International & Cinéma",
    channels: [
      "HBO Latino", "Cinecanal", "TNT Series", "TCM",
      "Sony Channel", "Warner Channel", "FXM", "IFC",
      "SundanceTV", "Lifetime Movies", "Hallmark Channel"
    ]
  }
];

// Créer une liste plate de toutes les chaînes
const allChannels = channelCategories.flatMap(category => 
  category.channels.map(channel => ({
    name: channel,
    category: category.name
  }))
);

const PopularContentAfterHero = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-2 sm:px-4">
        <Carousel 
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 2,
            breakpoints: {
              640: { slidesToScroll: 3 },
              1024: { slidesToScroll: 4 }
            }
          }} 
          plugins={[Autoplay({
            delay: 3000,
            stopOnInteraction: false
          })]} 
          className="w-full relative"
        >
          <CarouselContent className="-ml-1">
            {allChannels.map((channel, index) => (
              <CarouselItem key={index} className="pl-1 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-3 mx-1 flex items-center justify-center h-16 hover:bg-primary/20 transition-all duration-300 border border-primary/10 hover:border-primary/30 shadow-sm">
                  <span className="text-sm sm:text-base font-medium text-center text-foreground/90 hover:text-primary transition-colors">
                    {channel.name}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Légende des catégories */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {channelCategories.map((category, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary/80 border border-primary/20"
            >
              {category.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularContentAfterHero;
