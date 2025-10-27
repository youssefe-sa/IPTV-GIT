import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <p className="text-sm text-muted-foreground">Last updated: January 2025</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using IPTV Connect – Connect Global's services, you accept and agree 
              to be bound by these Terms and Conditions. If you do not agree to these terms, please 
              do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p>
              IPTV Connect provides internet protocol television (IPTV) streaming services, including 
              access to live TV channels, sports content, movies, series, and video-on-demand (VOD) 
              content. Service features and availability may vary based on your subscription plan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be at least 18 years old to create an account</li>
              <li>You agree to provide accurate, current, and complete information</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You are responsible for all activities that occur under your account</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Subscription and Payment</h2>
            <h3 className="text-xl font-semibold mb-3">4.1 Subscription Plans</h3>
            <p>
              We offer various subscription plans with different features and pricing. All prices 
              are displayed in applicable currency and may be subject to change with prior notice.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">4.2 Payment Terms</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment is required in advance for the selected subscription period</li>
              <li>We accept various payment methods as displayed during checkout</li>
              <li>All payments are processed securely through third-party payment processors</li>
              <li>Subscription renewals are automatic unless canceled prior to renewal date</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">4.3 Refund Policy</h3>
            <p>
              Refunds are provided on a case-by-case basis and are subject to our refund policy. 
              Please contact our support team to discuss refund requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Share your account credentials with unauthorized users</li>
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Attempt to circumvent any security features or access restrictions</li>
              <li>Redistribute, resell, or commercially exploit our content</li>
              <li>Use automated systems to access the service without permission</li>
              <li>Reverse engineer, decompile, or disassemble any aspect of our service</li>
              <li>Upload or transmit malicious code or viruses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Device Limitations</h2>
            <p>
              Your subscription allows simultaneous streaming on a limited number of devices as 
              specified in your plan. Exceeding device limits may result in service interruption 
              or account suspension.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Content and Availability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Content availability may vary by region and subscription plan</li>
              <li>We reserve the right to add, modify, or remove content at any time</li>
              <li>Content quality depends on your internet connection and device capabilities</li>
              <li>We do not guarantee uninterrupted or error-free service</li>
              <li>Adult/XXX content is optional and requires explicit selection during ordering</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and intellectual property displayed on our service 
              are owned by IPTV Connect or our content providers. You may not use, reproduce, or 
              distribute any content without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Service Modifications and Termination</h2>
            <h3 className="text-xl font-semibold mb-3">9.1 Our Rights</h3>
            <p>We reserve the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify, suspend, or discontinue any aspect of the service</li>
              <li>Update these Terms and Conditions at any time</li>
              <li>Terminate or suspend accounts that violate these terms</li>
              <li>Refuse service to anyone for any reason</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">9.2 Your Rights</h3>
            <p>
              You may cancel your subscription at any time through your account settings or by 
              contacting our support team.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, IPTV Connect shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages, including loss 
              of profits, data, or other intangible losses resulting from your use of our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Disclaimer of Warranties</h2>
            <p>
              Our service is provided "as is" and "as available" without warranties of any kind, 
              either express or implied, including but not limited to warranties of merchantability, 
              fitness for a particular purpose, or non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless IPTV Connect and its affiliates from any 
              claims, damages, losses, or expenses arising from your use of the service or violation 
              of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with 
              applicable laws, without regard to conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms or your use of our service shall be resolved 
              through binding arbitration, except where prohibited by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
            <p>
              For questions about these Terms and Conditions, please contact us through our 24/7 
              live chat support or via WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">16. Severability</h2>
            <p>
              If any provision of these Terms and Conditions is found to be unenforceable, the 
              remaining provisions will continue in full force and effect.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
