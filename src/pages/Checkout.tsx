import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Shield, Lock, CreditCard, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { NewCustomerForm } from "@/components/checkout/NewCustomerForm";
import { RenewalForm } from "@/components/checkout/RenewalForm";
import { SecureWhopCheckout } from "@/components/checkout/SecureWhopCheckout";
import { supabase } from "@/integrations/supabase/client";
import Footer from "@/components/Footer";

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
      console.log('Received postMessage:', {
        origin: event.origin,
        data: event.data,
        type: typeof event.data
      });

      // Validate message origin for security
      if (!event.origin.includes("whop.com") && !event.origin.includes("whop")) {
        console.log('Message ignored: origin not from Whop');
        return;
      }
      
      // Check various Whop checkout completion event formats
      const isCheckoutCompleted = 
        event.data?.type === 'whop_checkout_completed' || 
        event.data?.event === 'checkout_completed' ||
        event.data?.status === 'completed' ||
        event.data === 'checkout_completed' ||
        event.data === 'whop_checkout_completed' ||
        (typeof event.data === 'object' && event.data?.checkout?.status === 'completed');

      if (isCheckoutCompleted) {
        console.log('Checkout completed! Redirecting to thank-you page...');
        toast({
          title: "Payment Successful!",
          description: "Redirecting to confirmation page...",
        });
        
        // Redirect after a short delay to ensure everything is processed
        setTimeout(() => {
          navigate(`/thank-you?plan=${encodeURIComponent(plan)}`);
        }, 500);
      }
    };

    console.log('Setting up Whop checkout message listener...');
    window.addEventListener('message', handleMessage);
    
    return () => {
      console.log('Cleaning up Whop checkout message listener');
      window.removeEventListener('message', handleMessage);
    };
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
    "19.99": "plan_BJXvptRZOTNCJ",
    "39.99": "plan_MkHtZnwRO9GL4",
    "49.99": "plan_bCyzm4dBtNkmQ",
    "99.98": "plan_uVvq0rP1HuONS",
    "149.99": "plan_I8HqOMhyrLZ3l",
  };
  const planId = planIdParam || planIdMap[price] || "";

  const features = [
    "18,000+ Live TV Channels",
    "VOD & Series Access",
    "4K/FHD/HD/SD Quality",
    "All Device Compatibility",
    "24/7 Customer Support",
  ];

  const submitToGoogleSheets = async (data: any) => {
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzsfHWs1ec9nybz4mhXS9_JR3W8Ac2F572EXULrERQ0rLel1BSOi1EhB_22_Xy8FUWliQ/exec";
    
    try {
      // Créer un objet avec les champs dans le bon ordre pour Google Sheets
      const sheetData = {
        timestamp: data.timestamp,
        fullName: data.fullName || '',
        email: data.email || data.identifier || '',
        phone: data.phone || '',
        device: data.device || '',
        application: data.application || '',
        macAddress: data.macAddress || '',
        adultChannels: data.adultChannels || 'Non',
        plan: data.plan,
        price: data.price,
        customerType: data.customerType,
        status: 'En attente',
        identifier: data.identifier || ''
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheetData)
      });
      
      return { success: true };
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      throw error;
    }
  };

  const handleNewCustomerSubmit = async (data: any) => {
    setIsProcessing(true);

    if (!planId) {
      toast({
        title: "Plan Missing",
        description: "Add ?planId=plan_XXXX to the URL or configure it in the code.",
      });
      setIsProcessing(false);
      return;
    }

    const formData = {
      customerType: 'New Customer',
      timestamp: new Date().toISOString(),
      fullName: data.fullName.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
      device: data.device.trim(),
      application: data.application.trim(),
      macAddress: data.macAddress ? data.macAddress.trim().toUpperCase() : "",
      adultChannels: data.adultChannels ? 'Oui' : 'Non',
      plan: plan,
      price: price,
      identifier: ''
    };

    try {
      // Submit to Google Sheets
      await submitToGoogleSheets(formData);
      
      toast({
        title: "Success!",
        description: "Your information has been saved. Redirecting to payment...",
      });

      // Wait a bit before opening checkout
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setIsCheckoutOpen(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "An error occurred. Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRenewalSubmit = async (data: any) => {
    setIsProcessing(true);

    if (!planId) {
      toast({
        title: "Plan Missing",
        description: "Add ?planId=plan_XXXX to the URL or configure it in the code.",
      });
      setIsProcessing(false);
      return;
    }

    const formData = {
      customerType: 'Renewal',
      timestamp: new Date().toISOString(),
      fullName: '',
      identifier: data.identifier.trim().toLowerCase(),
      plan: plan,
      price: price
    };

    try {
      // Submit to Google Sheets
      await submitToGoogleSheets(formData);
      
      toast({
        title: "Success!",
        description: "Your renewal request has been saved. Redirecting to payment...",
      });

      // Wait a bit before opening checkout
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setIsCheckoutOpen(true);
    } catch (error) {
      console.error('Error submitting renewal:', error);
      toast({
        title: "Error",
        description: "An error occurred. Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };


  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24 pb-12">
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

      {/* Payment Checkout Dialog */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl h-[85vh] p-0 flex flex-col mt-4 sm:mt-8">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="text-2xl">Complete Your Payment</DialogTitle>
            <DialogDescription className="text-base">
              {plan} - ${price}
            </DialogDescription>
          </DialogHeader>
          {planId ? (
            <div className="flex-1 min-h-0 overflow-y-auto px-6 pb-6">
              <SecureWhopCheckout
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
