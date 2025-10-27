import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const message = encodeURIComponent("Hello, I'm interested in your IPTV services. Could you provide me with more information about your offers and subscription plans?");
  
  return (
    <a 
      href={`https://wa.me/12106343468?text=${message}`}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full p-4 shadow-lg hover:scale-110 transition-all z-40 animate-fade-in"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default FloatingWhatsApp;
