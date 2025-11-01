'use client';

import { MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from 'react';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = '212638196267';
  const message = encodeURIComponent("Hello, I'm interested in your IPTV services. Could you provide me with more information about your offers and subscription plans?");
  
  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3">
      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
        aria-label="Contact us on WhatsApp"
        style={{
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
        }}
      >
        <div className="relative">
          <MessageCircle className="h-6 w-6 group-hover:opacity-0 transition-opacity" />
          <svg 
            className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity absolute top-0 left-0" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M17.498 14.382v-.002c-.301-.196-.797-.5-1.2-.7-.2-.1-.35-.2-.5-.1-.2.1-.3.2-.4.4-.1.2-.3.4-.5.6-.2.1-.3.3-.5.4-.1.1-.2.1-.3.1-.3 0-.5-.1-.7-.3-.2-.1-.4-.1-.6-.1-.2 0-.4 0-.6.1-.2.1-.3.2-.5.3-.2.1-.3.3-.4.4-.2.2-.3.4-.3.7 0 .1 0 .2.1.3.1.2.2.4.3.6.1.2.3.4.5.5.3.2.6.4 1 .5.5.2 1 .3 1.5.3.3 0 .6 0 .9-.1.4-.1.8-.2 1.2-.4.4-.2.8-.5 1.1-.8.3-.3.6-.6.8-1 .2-.4.3-.8.3-1.2 0-.3 0-.6-.1-.8 0-.2-.2-.3-.4-.2zM12 2C6.5 2 2 6.5 2 12c0 1.4.3 2.7.8 3.9L2 22l5.3-1.4c1.2.6 2.5 1 3.9 1 5.5 0 10-4.5 10-10S17.5 2 12 2zm4.9 14.4c-.2.3-.5.5-.9.7-.3.2-.7.3-1.1.4-.3.1-.6.1-1 .2-.4 0-.7.1-1.1.1-.4 0-.7 0-1.1-.1-.3 0-.7-.1-1-.2-.4-.1-.8-.2-1.1-.4-.3-.2-.6-.4-.9-.7-.2-.3-.5-.6-.7-.9-.2-.3-.4-.7-.5-1.1-.1-.4-.2-.7-.2-1.1 0-.4 0-.7.1-1.1.1-.3.2-.7.4-1 .2-.3.4-.6.7-.9.3-.2.5-.5.9-.7.3-.2.7-.3 1.1-.4.3-.1.6-.1 1-.2.4 0 .7-.1 1.1-.1h.1c.4 0 .7 0 1.1.1.3 0 .7.1 1 .2.4.1.8.2 1.1.4.3.2.6.4.9.7.2.3.5.6.7.9.2.3.3.7.4 1.1.1.3.2.7.2 1.1 0 .4 0 .7-.1 1.1 0 .4-.1.8-.3 1.1-.2.4-.4.7-.7 1z" />
          </svg>
        </div>
      </a>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
