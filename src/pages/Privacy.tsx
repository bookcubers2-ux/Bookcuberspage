import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="section-padding bg-navy-800">
        <div className="container-wide">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last updated: December 2024</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl prose prose-invert">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">1. Information We Collect</h2>
                <p>
                  Bookcubers collects information that you provide directly to us, including when you:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Sign up for our newsletter</li>
                  <li>Make a donation</li>
                  <li>Apply to volunteer</li>
                  <li>Contact us through our website</li>
                  <li>Participate in our programs</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Process donations and send receipts</li>
                  <li>Communicate with you about our programs and activities</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send newsletters and updates (with your consent)</li>
                  <li>Improve our services and website</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties. 
                  We may share information with trusted service providers who assist us in operating our 
                  website and conducting our organization's activities.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. 
                  However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">5. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">6. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at:<br />
                  <a href="mailto:privacy@bookcubers.org" className="text-accent hover:underline">
                    privacy@bookcubers.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
