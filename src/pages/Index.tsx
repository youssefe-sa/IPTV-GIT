import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import HeroSection from "@/components/HeroSection";
import PopularContentAfterHero from "@/components/PopularContentAfterHero";
import ServicePresentation from "@/components/ServicePresentation";
import SubscriptionProcess from "@/components/SubscriptionProcess";
import KeyFeatures from "@/components/KeyFeatures";
import GlobalCoverage from "@/components/GlobalCoverage";
import PricingSection from "@/components/PricingSection";
import InstallationTutorial from "@/components/InstallationTutorial";
import PopularContent from "@/components/PopularContent";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import SalesNotification from "@/components/SalesNotification";
import Testimonials from "@/components/Testimonials";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (!hasVisited) {
      setTimeout(() => {
        toast({
          title: "Welcome to IPTV Connect! 🎉",
          description: "Discover 18,000+ live channels and 100,000+ VOD content. Enjoy premium streaming on all your devices!",
          duration: 6000,
        });
        sessionStorage.setItem("hasVisited", "true");
      }, 1500);
    }
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <SalesNotification />
      <HeroSection />
      <PopularContentAfterHero />
      <ServicePresentation />
      <SubscriptionProcess />
      <KeyFeatures />
      <GlobalCoverage />
      <PricingSection />
      <Testimonials />
      <InstallationTutorial />
      <PopularContent />
      <FAQSection />
      <FinalCTA />
      <FloatingButtons />
    </div>
  );
};

export default Index;
