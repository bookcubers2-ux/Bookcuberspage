import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="section-padding bg-navy-800">
        <div className="container-wide">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
            Terms of Use
          </h1>
          <p className="text-muted-foreground">Last updated: December 2024</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl prose prose-invert">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the Bookcubers website, you accept and agree to be bound by 
                  these Terms of Use. If you do not agree to these terms, please do not use our website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">2. Use of Website</h2>
                <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Infringe on the rights of others</li>
                  <li>Restrict or inhibit anyone else's use of the website</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Transmit any harmful or malicious content</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">3. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and images, is the 
                  property of Bookcubers or its content suppliers and is protected by intellectual 
                  property laws.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">4. Donations</h2>
                <p>
                  All donations made through our website are voluntary and non-refundable unless 
                  otherwise required by law. Bookcubers is committed to using all donations in 
                  accordance with our stated mission and programs.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">5. Disclaimer</h2>
                <p>
                  This website and its content are provided "as is" without warranties of any kind. 
                  Bookcubers does not guarantee the accuracy, completeness, or usefulness of any 
                  information on the website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                <p>
                  Bookcubers shall not be liable for any damages arising from the use or inability 
                  to use this website or any content therein.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">7. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting to the website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">8. Contact</h2>
                <p>
                  For questions about these Terms of Use, please contact us at:<br />
                  <a href="mailto:legal@bookcubers.org" className="text-accent hover:underline">
                    legal@bookcubers.org
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
