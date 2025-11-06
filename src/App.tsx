import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
          <Route path="/" element={
            <Layout>
              <Index />
            </Layout>
          } />
          <Route path="/checkout" element={
            <Layout>
              <Checkout />
            </Layout>
          } />
          <Route path="/thank-you" element={
            <Layout>
              <ThankYou />
            </Layout>
          } />
          <Route path="/privacy-policy" element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          } />
          <Route path="/terms-conditions" element={
            <Layout>
              <TermsConditions />
            </Layout>
          } />
          <Route path="/disclaimer" element={
            <Layout>
              <Disclaimer />
            </Layout>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={
            <Layout>
              <NotFound />
            </Layout>
          } />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
);

export default App;
