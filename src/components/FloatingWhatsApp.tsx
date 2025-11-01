import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const message = encodeURIComponent("Hello, I'm interested in your IPTV services. Could you provide me with more information about your offers and subscription plans?");
  
  return (
    <a 
      href={`https://wa.me/212638196267?text=${message}`}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg hover:scale-110 transition-all duration-300 z-40 animate-fade-in group"
      aria-label="Contact us on WhatsApp"
      style={{
        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
      }}
    >
      <div className="relative">
        <MessageCircle className="h-7 w-7 group-hover:opacity-0 transition-opacity absolute" />
        <svg 
          className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M17.498 14.382v-.002c-.301-.196-.797-.5-1.2-.7-.2-.1-.35-.2-.5-.1-.2.1-.3.2-.4.4-.1.2-.3.4-.5.6-.2.1-.3.3-.5.4-.1.1-.2.1-.3.1-.3 0-.5-.1-.7-.3-.2-.1-.4-.1-.6-.1-.2 0-.4 0-.6.1-.2.1-.3.2-.5.3-.2.1-.3.3-.4.4-.2.2-.3.4-.3.7 0 .1 0 .2.1.3.1.2.2.4.3.6.1.2.3.4.5.5.3.2.6.4 1 .5.5.2 1 .3 1.5.3.3 0 .6 0 .9-.1.4-.1.8-.2 1.2-.4.4-.2.8-.5 1.1-.8.3-.3.6-.6.8-1 .2-.4.3-.8.3-1.2 0-.3 0-.6-.1-.8 0-.2-.2-.3-.4-.2zM12 2C6.5 2 2 6.5 2 12c0 1.4.3 2.7.8 3.9L2 22l5.3-1.4c1.2.6 2.5 1 3.9 1 5.5 0 10-4.5 10-10S17.5 2 12 2zm4.9 14.4c-.2.3-.5.5-.9.7-.3.2-.7.3-1.1.4-.3.1-.6.1-1 .2-.4 0-.7.1-1.1.1-.4 0-.7 0-1.1-.1-.3 0-.7-.1-1-.2-.4-.1-.8-.2-1.1-.4-.3-.2-.6-.4-.9-.7-.2-.3-.5-.6-.7-.9-.2-.3-.4-.7-.5-1.1-.1-.4-.2-.7-.2-1.1 0-.4 0-.7.1-1.1.1-.3.2-.7.4-1 .2-.3.4-.6.7-.9.3-.2.5-.5.9-.7.3-.2.7-.3 1.1-.4.3-.1.6-.1 1-.2.4 0 .7-.1 1.1-.1h.1c.4 0 .7 0 1.1.1.3 0 .7.1 1 .2.4.1.8.2 1.1.4.3.2.6.4.9.7.2.3.5.6.7.9.2.3.3.7.4 1.1.1.3.2.7.2 1.1 0 .4 0 .7-.1 1.1 0 .4-.1.8-.3 1.1-.2.4-.4.7-.7 1z" />
        </svg>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
