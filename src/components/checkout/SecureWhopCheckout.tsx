import { useEffect, useRef } from "react";
import { WhopCheckoutEmbed } from "@whop/checkout/react";

interface SecureWhopCheckoutProps {
  planId: string;
  theme?: "light" | "dark" | "system";
  fallback?: React.ReactNode;
}

export const SecureWhopCheckout = ({
  planId,
  theme = "system",
  fallback,
}: SecureWhopCheckoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Observer pour détecter quand l'iframe est ajoutée au DOM
    const observer = new MutationObserver(() => {
      const iframe = containerRef.current?.querySelector("iframe");
      if (iframe) {
        iframe.setAttribute("referrerpolicy", "no-referrer");
        observer.disconnect();
      }
    });

    observer.observe(containerRef.current, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      <WhopCheckoutEmbed planId={planId} theme={theme} fallback={fallback} />
    </div>
  );
};
