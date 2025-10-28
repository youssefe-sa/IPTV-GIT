'use client';

import { MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from 'react';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = '12106343468';
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
        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
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
