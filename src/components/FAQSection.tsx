import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is your refund process?",
      answer: "We offer a 7-day money-back guarantee. If you're not satisfied with our service within the first 7 days, contact our support team for a full refund. No questions asked.",
    },
    {
      question: "What do I need to use IPTV?",
      answer: "You need a stable internet connection (minimum 10 Mbps recommended), a compatible device (Smart TV, Android Box, Firestick, PC, or mobile device), and your IPTV credentials that we'll provide after subscription.",
    },
    {
      question: "How does IPTV work?",
      answer: "IPTV (Internet Protocol Television) delivers television content over the internet instead of traditional cable or satellite. You stream channels and content directly through your internet connection to any compatible device.",
    },
    {
      question: "How often are channels updated?",
      answer: "Our channel list is updated regularly to ensure you have access to the latest content. We add new channels monthly and maintain existing ones to provide the best streaming experience.",
    },
    {
      question: "Can I request specific channels?",
      answer: "Yes! We welcome channel requests from our subscribers. Contact our support team with your request, and we'll do our best to add it to our service if it's available.",
    },
    {
      question: "How many devices can I use simultaneously?",
      answer: "Depending on your subscription plan, you can use 1-3 devices simultaneously. Contact us if you need more connections for a custom plan.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our service
          </p>
        </div>

        <div className="max-w-6xl mx-auto animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Première colonne */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.slice(0, 3).map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card rounded-lg px-6 border border-border shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            {/* Deuxième colonne */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.slice(3).map((faq, index) => (
                  <AccordionItem 
                    key={index + 3} 
                    value={`item-${index + 3}`}
                    className="bg-card rounded-lg px-6 border border-border shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
