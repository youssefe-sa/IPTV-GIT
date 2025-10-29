import { useEffect, useState } from 'react';
import { X, Share2 } from 'lucide-react';
import { Button } from './ui/button';

export function DiscountPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Vérifier si le popup a déjà été affiché pendant cette session
    const hasSeenPopup = sessionStorage.getItem('hasSeenDiscountPopup');
    
    if (!hasSeenPopup) {
      // Afficher le popup après 3 secondes
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('hasSeenDiscountPopup', 'true');
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    if (isClosing) return; // Évite les fermetures multiples
    
    setIsClosing(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      clearTimeout(timer);
    }, 300);
  };

  if (!isVisible && !isClosing) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
      style={{
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(5px)',
        pointerEvents: isClosing ? 'none' : 'auto'
      }}
      onClick={(e) => {
        // Fermer la popup si on clique en dehors du contenu
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div 
        className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl"
        style={{
          background: 'linear-gradient(to bottom, #1e293b, #0f172a)'
        }}
      >
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-1 rounded-full text-sm font-bold">
            10% OFF
          </div>
        </div>

        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="text-center pt-4">
          <h3 className="text-2xl font-bold text-white mb-2">GET 10% OFF</h3>
          <p className="text-gray-300 mb-6">on your first order with code:</p>
          
          <div 
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-3 px-6 rounded-lg mb-6 inline-block"
            style={{
              boxShadow: '0 0 20px rgba(234, 179, 8, 0.5)'
            }}
          >
            <span className="text-2xl">WELCOME10</span>
          </div>
          
          <p className="text-gray-300 text-sm mb-4">* Valid for first-time customers only</p>
          
          {/* Share Section */}
          <div className="text-center mb-4">
            <p className="text-white text-sm mb-3">Share code with family and friends</p>
            <div className="flex justify-center">
              <button 
                onClick={() => {
                  const shareText = encodeURIComponent("Get 10% OFF on your first order with code: WELCOME10");
                  window.open(`https://wa.me/?text=${shareText}`, '_blank');
                }}
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition-colors"
              >
                <Share2 className="h-4 w-4" />
                <span>WELCOME10</span>
              </button>
            </div>
          </div>
          
          <div className="flex flex-col space-y-3">
            <Button 
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  handleClose();
                }
              }}
            >
              SHOP NOW
            </Button>
            
            <button 
              className="text-yellow-400 hover:text-yellow-300 text-sm font-medium mt-2"
              onClick={handleClose}
            >
              No thanks, I don't want to save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;
