import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialisation de la couche de données Google
    window.dataLayer = window.dataLayer || [];
    
    // Fonction de base gtag
    if (!window.gtag) {
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      
      // Configuration initiale de gtag
      window.gtag('js', new Date());
      window.gtag('config', 'AW-17697651273');
    }

    // Fonction pour suivre une conversion
    const trackConversion = () => {
      try {
        // Événement de conversion standard
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17697651273/UNIQUE_CONVERSION_ID', // À remplacer par votre ID de conversion
          'value': 1.0,
          'currency': 'USD',
          'transaction_id': `TXN_${Date.now()}`
        });
        
        // Événement d'achat (e-commerce)
        window.gtag('event', 'purchase', {
          'transaction_id': `TXN_${Date.now()}`,
          'value': 19.99,
          'currency': 'USD',
          'items': [{
            'id': 'IPTV_SUBSCRIPTION',
            'name': 'Abonnement IPTV',
            'category': 'IPTV',
            'price': 19.99,
            'quantity': 1
          }]
        });

        console.log('Conversion tracked successfully');
      } catch (error) {
        console.error('Error tracking conversion:', error);
      }
    };

    // Vérification de la page de remerciement
    const isThankYouPage = location.pathname === '/thank-you';
    
    if (isThankYouPage) {
      trackConversion();
    }
  }, [location.pathname]); // Se réexécute quand l'URL change
};

export default useGoogleAnalytics;
          'transaction_id': `TXN_${Date.now()}`,
          'value': 19.99,
          'currency': 'USD',
          'items': [{
            'id': 'IPTV_SUBSCRIPTION',
            'name': 'Abonnement IPTV',
            'category': 'IPTV',
            'price': 19.99,
            'quantity': 1
          }]
        });

        console.log('Conversion tracked successfully');
      } catch (error) {
        console.error('Error tracking conversion:', error);
      }
    };

  }, [location.pathname]); // Se réexécute quand l'URL change
};

export default useGoogleAnalytics;
