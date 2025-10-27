import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";

const SalesNotification = () => {
  useEffect(() => {
    const names = [
      "John", "Michael", "Sarah", "Jessica", "David", "Emily", "James", "Ashley", 
      "Robert", "Jennifer", "Daniel", "Amanda", "Matthew", "Samantha", "Christopher", "Lauren",
      "William", "Brittany", "Joshua", "Nicole", "Andrew", "Stephanie", "Brandon", "Rachel"
    ];
    
    const subscriptions = [
      { type: "1 Month", price: "$19.99" },
      { type: "3 Months", price: "$39.99" },
      { type: "6 Months", price: "$49.99" },
      { type: "12 Months", price: "$59.99" },
      { type: "24 Months", price: "$99.99" }
    ];

    const showSalesNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomSub = subscriptions[Math.floor(Math.random() * subscriptions.length)];
      
      toast({
        title: "🎉 New Sale!",
        description: `${randomName} just purchased a ${randomSub.type} subscription for ${randomSub.price}`,
        duration: 4000,
      });
    };

    // First notification after 10 seconds
    const firstTimeout = setTimeout(() => {
      showSalesNotification();
    }, 10000);

    // Recurring notifications every 10-20 seconds
    const intervalId = setInterval(() => {
      const randomDelay = Math.floor(Math.random() * 10000) + 10000; // 10-20 seconds
      setTimeout(showSalesNotification, randomDelay);
    }, 15000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(intervalId);
    };
  }, []);

  return null;
};

export default SalesNotification;
