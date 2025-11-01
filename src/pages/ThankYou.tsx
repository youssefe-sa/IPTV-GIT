import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CheckCircle, Mail, MessageSquare, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const plan = searchParams.get("plan") || "IPTV Subscription";

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">

      <main className="flex-1 container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
              <CheckCircle className="h-20 w-20 md:h-24 md:w-24 text-primary relative" />
            </div>
          </div>

          {/* Main Message */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Payment Successful!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-2">
              Thank you for your subscription to {plan}
            </p>
            <p className="text-muted-foreground">
              Your IPTV service is being activated
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-card rounded-lg shadow-sm border p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What Happens Next?
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    1. Check Your Email & WhatsApp
                  </h3>
                  <p className="text-muted-foreground">
                    You will receive your login credentials and activation instructions via email and WhatsApp within the next few minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Tv className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    2. Activate Your Service
                  </h3>
                  <p className="text-muted-foreground">
                    Follow the simple instructions in the email to set up your IPTV service on your preferred device.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    3. Get Support
                  </h3>
                  <p className="text-muted-foreground">
                    For assistance, contact our customer support:
                  </p>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>👉 <a href="https://wa.me/212638196267" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Direct WhatsApp Link</a></li>
                    <li>👉 WhatsApp only: <a href="https://wa.me/212638196267" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+212 6 38 19 62 67</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Features Reminder */}
          <div className="bg-muted/50 rounded-lg p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Your Subscription Includes:
            </h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>18,000+ Live TV Channels</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>VOD & Series Access</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>4K/FHD/HD/SD Quality</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>All Device Compatibility</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>24/7 Customer Support</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Money-Back Guarantee</span>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/")}
              className="w-full sm:w-auto"
            >
              Back to Home
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://wa.me/212638196267', '_blank')}
              className="w-full sm:w-auto"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;
