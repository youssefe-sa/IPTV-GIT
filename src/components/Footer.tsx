import { Link } from "react-router-dom";
import { Shield, Lock, CreditCard } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="bg-[hsl(220,20%,12%)] text-primary-foreground/80 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm">
              © 2025 by IPTV Connect – Connect Global
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/privacy-policy" className="text-sm hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-sm hover:text-primary-foreground transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/disclaimer" className="text-sm hover:text-primary-foreground transition-colors">
              Disclaimer
            </Link>
          </div>

          <div className="flex items-center gap-3 bg-background/10 px-4 py-2 rounded-lg border border-primary/20">
            <Shield className="w-5 h-5 text-primary" />
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-foreground">Secure Payment</span>
            </div>
            <CreditCard className="w-5 h-5 text-primary" />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
