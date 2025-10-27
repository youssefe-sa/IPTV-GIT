import { CreditCard, Mail, Play } from "lucide-react";

const SubscriptionProcess = () => {
  const steps = [
    {
      icon: CreditCard,
      title: "Choose Your Plan",
      description: "Select the subscription duration that suits you best – choose from 1, 3, 6, 12 or 24 months options.",
    },
    {
      icon: Mail,
      title: "Receive Your IPTV Account",
      description: "Wait a few minutes. Please check your email inbox, spam and WhatsApp during this time. For a faster turnaround, get in touch with us through WhatsApp.",
    },
    {
      icon: Play,
      title: "Enjoy Your IPTV Plan",
      description: "Dive into a world of entertainment with access to a vast array of channels, movies, and TV shows from across the globe.",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How To Get An IPTV Subscription
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-all animate-scale-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionProcess;
