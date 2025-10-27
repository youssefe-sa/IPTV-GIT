import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Shield, Lock, CreditCard, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { WhopCheckoutEmbed } from "@whop/checkout/react";
import { NewCustomerForm } from "@/components/checkout/NewCustomerForm";
import { RenewalForm } from "@/components/checkout/RenewalForm";
import { supabase } from "@/integrations/supabase/client";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isNewCustomer, setIsNewCustomer] = useState(true);

  const plan = searchParams.get("plan") || "1 Month";
  const price = searchParams.get("price") || "19.99";

  // Listen for Whop checkout completion events
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Valider l'origine du message pour la sécurité
      if (!event.origin.includes("whop.com") && !event.origin.includes("whop")) {
        return;
      }
      
      // Check if message is from Whop checkout
      if (event.data?.type === 'whop_checkout_completed' || 
          event.data?.event === 'checkout_completed' ||
          event.data === 'checkout_completed' ||
          event.data === 'whop_checkout_completed') {
        // Rediriger après un court délai pour s'assurer que tout est traité
        setTimeout(() => {
          navigate(`/thank-you?plan=${encodeURIComponent(plan)}`);
        }, 500);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [navigate, plan]);

  // Map prices to checkout URLs
  const checkoutUrls: Record<string, string> = {
    "59.99": "https://whop.com/checkout/plan_bYzL9eEr0Q2s1?d2c=true",
    "99.99": "https://whop.com/checkout/plan_bYzL9eEr0Q2s1?d2c=true", // Replace with actual URL
    "19.99": "https://whop.com/checkout/plan_bYzL9eEr0Q2s1?d2c=true", // Replace with actual URL
  };

  const checkoutUrl = checkoutUrls[price] || checkoutUrls["59.99"];

  // Whop Checkout Embed: planId selection (prefer query param ?planId=)
  const planIdParam = searchParams.get("planId") || "";
  const planIdMap: Record<string, string> = {
    "19.99": "plan_cWyyAd1ZmO7Oe",
    "39.99": "plan_gds8DWoABTvWK",
    "49.99": "plan_VNq1sYgYJlhX7",
    "59.99": "plan_rcG2lwNKvbdSB",
    "99.99": "plan_ESKN3ggSa6kOq",
  };
  const planId = planIdParam || planIdMap[price] || "";

  const features = [
    "18,000+ Live TV Channels",
    "VOD & Series Access",
    "4K/FHD/HD/SD Quality",
    "All Device Compatibility",
    "24/7 Customer Support",
  ];

  const handleNewCustomerSubmit = async (data: any) => {
    setIsProcessing(true);

    if (!planId) {
      toast({
        title: "Plan manquant",
        description: "Ajoutez ?planId=plan_XXXX dans l'URL ou configurez-le dans le code.",
      });
      setIsProcessing(false);
      return;
    }

    // Send data to backend
    try {
      const payload = {
        customerType: "New Customer",
        timestamp: new Date().toISOString(),
        fullName: data.fullName.trim(),
        phone: data.phone.trim(),
        email: data.email.trim().toLowerCase(),
        device: data.device.trim(),
        application: data.application.trim(),
        macAddress: data.macAddress ? data.macAddress.trim().toUpperCase() : "",
        adultChannels: data.adultChannels,
        plan: plan,
        price: price,
      };

      const { data: result, error } = await supabase.functions.invoke('submit-order', {
        body: payload,
      });

      if (error) {
        throw error;
      }
      
      toast({
        title: "Succès!",
        description: "Vos informations ont été enregistrées. Redirection vers le paiement...",
      });

      // Attendre un peu avant d'ouvrir le checkout
      await new Promise(resolve => setTimeout(resolve, 300));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer ou contacter le support.",
        variant: "destructive",
      });
      setIsProcessing(false);
      return;
    }

    setIsCheckoutOpen(true);
    setIsProcessing(false);
  };

  const handleRenewalSubmit = async (data: any) => {
    setIsProcessing(true);

    if (!planId) {
      toast({
        title: "Plan manquant",
        description: "Ajoutez ?planId=plan_XXXX dans l'URL ou configurez-le dans le code.",
      });
      setIsProcessing(false);
      return;
    }

    // Send data to backend
    try {
      const payload = {
        customerType: "Renewal",
        timestamp: new Date().toISOString(),
        identifier: data.identifier.trim().toLowerCase(),
        plan: plan,
        price: price,
      };

      const { data: result, error } = await supabase.functions.invoke('submit-order', {
        body: payload,
      });

      if (error) {
        throw error;
      }
      
      toast({
        title: "Succès!",
        description: "Votre demande de renouvellement a été enregistrée. Redirection vers le paiement...",
      });

      // Attendre un peu avant d'ouvrir le checkout
      await new Promise(resolve => setTimeout(resolve, 300));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer ou contacter le support.",
        variant: "destructive",
      });
      setIsProcessing(false);
      return;
    }

    setIsCheckoutOpen(true);
    setIsProcessing(false);
  };


  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Billing Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-sm border p-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Complete Your Order
              </h1>
              <p className="text-muted-foreground mb-6">
                Fill in your details to activate your IPTV subscription
              </p>

              {/* Customer Type Toggle */}
              <div className="flex items-center gap-4 mb-8 p-4 bg-muted/50 rounded-lg">
                <button
                  type="button"
                  onClick={() => setIsNewCustomer(true)}
                  className={`flex-1 py-3 px-4 rounded-md font-medium transition-all ${
                    isNewCustomer
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  New Customer
                </button>
                <button
                  type="button"
                  onClick={() => setIsNewCustomer(false)}
                  className={`flex-1 py-3 px-4 rounded-md font-medium transition-all ${
                    !isNewCustomer
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Renewal
                </button>
              </div>

              {/* Forms */}
              {isNewCustomer ? (
                <NewCustomerForm
                  price={price}
                  isProcessing={isProcessing}
                  onSubmit={handleNewCustomerSubmit}
                />
              ) : (
                <RenewalForm
                  price={price}
                  isProcessing={isProcessing}
                  onSubmit={handleRenewalSubmit}
                />
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-sm border p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <h3 className="font-semibold text-foreground">{plan}</h3>
                    <p className="text-sm text-muted-foreground">IPTV Subscription</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">${price}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3">Included Features:</h4>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">${price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="text-foreground">$0.00</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Total</span>
                  <span className="text-primary">${price}</span>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">All Payment Methods</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Payment Checkout Dialog */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl h-[85vh] p-0 flex flex-col">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="text-2xl">Complete Your Payment</DialogTitle>
            <DialogDescription className="text-base">
              {plan} - ${price}
            </DialogDescription>
          </DialogHeader>
          {planId ? (
            <div className="flex-1 min-h-0 overflow-y-auto px-6 pb-6">
              <WhopCheckoutEmbed
                planId={planId}
                theme="system"
                fallback={<>Loading checkout...</>}
              />
            </div>
          ) : (
            <div className="bg-muted/50 rounded-lg p-6 mx-6 mb-6">
              <p className="text-sm text-muted-foreground">
                PlanId manquant. Ajoutez ?planId=plan_XXXX dans l'URL, ou configurez-le dans le code.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Checkout;
