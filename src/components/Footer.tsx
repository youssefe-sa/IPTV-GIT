import { Link } from "react-router-dom";
import { Shield, Lock, CreditCard } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="bg-[hsl(220,20%,12%)] text-primary-foreground/80 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center md:text-left whitespace-nowrap">
            © 2025 by Media4Live IPTV
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
            <Link to="/privacy-policy" className="text-xs sm:text-sm hover:text-primary-foreground transition-colors whitespace-nowrap">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-xs sm:text-sm hover:text-primary-foreground transition-colors whitespace-nowrap">
              Terms & Conditions
            </Link>
            <Link to="/disclaimer" className="text-xs sm:text-sm hover:text-primary-foreground transition-colors whitespace-nowrap">
              Disclaimer
            </Link>
          </div>

          <div className="flex items-center gap-2 bg-background/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-primary/20 whitespace-nowrap">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <div className="flex items-center gap-1 sm:gap-2">
              <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary-foreground">Secure Payment</span>
            </div>
            <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
