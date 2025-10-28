import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Disclaimer = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <p className="text-sm text-muted-foreground">Last updated: January 2025</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. General Information</h2>
            <p>
              The information provided by IPTV Connect – Connect Global ("we," "our," or "us") 
              on our website and through our services is for general informational purposes only. 
              All information is provided in good faith; however, we make no representation or 
              warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, 
              reliability, availability, or completeness of any information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Service Availability</h2>
            <p>
              While we strive to provide consistent and reliable IPTV streaming services, we do 
              not guarantee:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Uninterrupted access to our services</li>
              <li>Error-free operation of our platform</li>
              <li>That defects will be corrected immediately</li>
              <li>That the service is free from viruses or other harmful components</li>
              <li>Specific channel or content availability at all times</li>
              <li>Consistent streaming quality across all devices and networks</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Content Disclaimer</h2>
            <h3 className="text-xl font-semibold mb-3">3.1 Third-Party Content</h3>
            <p>
              Our service provides access to content from various sources and providers. We do not 
              create, upload, or manage most of the content available through our service. We are 
              not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The accuracy, legality, or appropriateness of third-party content</li>
              <li>Content that may be offensive, inaccurate, or objectionable</li>
              <li>Copyright or intellectual property issues related to third-party content</li>
              <li>Changes in content availability by third-party providers</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">3.2 Adult Content</h3>
            <p>
              Adult/XXX content is available as an optional feature. By selecting this option during 
              the ordering process, you confirm that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are at least 18 years of age or the age of majority in your jurisdiction</li>
              <li>Accessing such content is legal in your location</li>
              <li>You will not allow minors to access adult content through your account</li>
              <li>You assume full responsibility for accessing and viewing adult content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Technical Requirements</h2>
            <p>
              The quality and performance of our IPTV service depend on various factors outside 
              our control, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your internet connection speed and stability</li>
              <li>Your device capabilities and specifications</li>
              <li>Your network configuration and equipment</li>
              <li>Geographic location and local infrastructure</li>
              <li>Concurrent users on your network</li>
            </ul>
            <p className="mt-3">
              We recommend a minimum internet speed and compatible devices for optimal performance, 
              but we cannot guarantee service quality under all circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Legal Compliance</h2>
            <p>
              You are solely responsible for ensuring that your use of our IPTV service complies 
              with all applicable laws and regulations in your jurisdiction. We make no 
              representations regarding the legality of our service in specific locations. It is 
              your responsibility to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verify that IPTV services are legal in your country or region</li>
              <li>Comply with local content access and copyright laws</li>
              <li>Obtain any necessary permissions or licenses</li>
              <li>Use the service only for lawful purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Financial Disclaimer</h2>
            <p>
              All pricing information is subject to change without notice. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify subscription prices at any time</li>
              <li>Change features included in subscription plans</li>
              <li>Introduce new pricing tiers or payment options</li>
              <li>Discontinue specific subscription plans</li>
            </ul>
            <p className="mt-3">
              Existing subscribers will be notified of significant pricing changes in accordance 
              with our Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. External Links Disclaimer</h2>
            <p>
              Our service may contain links to external websites or services that are not provided 
              or maintained by us. We have no control over the content, privacy policies, or 
              practices of third-party sites and assume no responsibility for them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Professional Advice Disclaimer</h2>
            <p>
              Information provided through our service, website, or customer support is for 
              general informational purposes only and should not be considered as professional 
              advice. We recommend consulting with qualified professionals for specific technical, 
              legal, or financial advice related to IPTV services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Geographic Restrictions</h2>
            <p>
              Content availability varies by geographic location due to licensing agreements and 
              legal restrictions. Some channels, programs, or features may not be accessible in 
              certain regions. We cannot guarantee access to specific content from all locations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Device Compatibility</h2>
            <p>
              While we strive to support a wide range of devices, we cannot guarantee compatibility 
              with all devices, operating systems, or software versions. Device compatibility 
              information is provided as guidance only and may not reflect all possible scenarios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Data Usage</h2>
            <p>
              Streaming video content consumes significant amounts of data. You are responsible 
              for monitoring your data usage and any associated costs from your internet service 
              provider. We are not responsible for any data overage charges or bandwidth limitations 
              imposed by your ISP.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Service Modifications</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of our service 
              at any time without prior notice. This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Channel lineups and content libraries</li>
              <li>Features and functionality</li>
              <li>User interface and experience</li>
              <li>Supported devices and platforms</li>
              <li>API access and integration capabilities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Customer Support</h2>
            <p>
              While we provide 24/7 live chat support, response times may vary based on volume 
              and complexity of inquiries. We strive to address all customer concerns promptly 
              but cannot guarantee immediate resolution of all issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Limitation of Liability</h2>
            <p>
              Under no circumstances shall IPTV Connect – Connect Global be liable for any direct, 
              indirect, incidental, consequential, special, or exemplary damages arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use or inability to use our service</li>
              <li>Unauthorized access to your account or data</li>
              <li>Service interruptions or technical issues</li>
              <li>Content accuracy or availability</li>
              <li>Third-party actions or content</li>
              <li>Lost profits, data, or business opportunities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">15. Changes to This Disclaimer</h2>
            <p>
              We reserve the right to update or modify this disclaimer at any time without prior 
              notice. Changes will be effective immediately upon posting. Your continued use of 
              our service after any changes constitutes acceptance of the updated disclaimer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">16. Contact Us</h2>
            <p>
              If you have any questions about this disclaimer or require clarification on any 
              points, please contact us through our 24/7 live chat support or via WhatsApp.
            </p>
          </section>

          <section className="bg-muted/50 p-6 rounded-lg mt-8">
            <p className="font-semibold">
              By using IPTV Connect – Connect Global's services, you acknowledge that you have 
              read, understood, and agree to be bound by this disclaimer.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Disclaimer;
