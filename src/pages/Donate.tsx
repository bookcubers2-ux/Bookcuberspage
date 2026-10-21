import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone, Handshake, Users } from "lucide-react";

// Online payments are not enabled yet. This page used to show a donation form
// that thanked the visitor without charging anything, plus "Tax Deductible"
// badges that do not apply to a Bolivian association. Until a real payment
// method exists, support is arranged directly by email or phone.

const waysToSupport = [
  {
    icon: Heart,
    title: "Fund a program",
    description:
      "Support JOPÓI, Gengo Academy or Vigía Plurilingüe. Write to us and we will share the project budget and how funds are reported.",
  },
  {
    icon: Handshake,
    title: "Partner with us",
    description:
      "Foundations, embassies, universities and companies can co-design projects or provide in-kind support.",
  },
  {
    icon: Users,
    title: "Volunteer",
    description: "All our work is volunteer-led. Share your time and skills with a program.",
  },
];

export default function Donate() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-up">
              Support Our Mission
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up animation-delay-100">
              Bookcubers is a non-profit youth association in Santa Cruz, Bolivia. We do not accept
              online payments yet: to support a program, contact us directly and we will tell you how
              to contribute and how the funds are reported.
            </p>
          </div>
        </div>
      </section>

      {/* Contact to give */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                How to Give
              </h2>
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:bookcubers2@gmail.com?subject=Support%20for%20Bookcubers"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-foreground">bookcubers2@gmail.com</div>
                    <p className="text-sm text-muted-foreground">Write to us about the program you want to support</p>
                  </div>
                </a>
                <a
                  href="tel:+59178104355"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-foreground">+591 78104355</div>
                    <p className="text-sm text-muted-foreground">Phone and WhatsApp</p>
                  </div>
                </a>
              </div>
              <Button variant="accent" size="xl" className="w-full" asChild>
                <a href="mailto:bookcubers2@gmail.com?subject=Support%20for%20Bookcubers">
                  <Heart className="w-5 h-5 mr-2" />
                  Contact us to give
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Legal personality: Resolución Administrativa RA SJ SJD DAJ PJ 2026 N° 229, Gobierno
                Autónomo Departamental de Santa Cruz. See{" "}
                <Link to="/about#transparency" className="text-accent underline">
                  Transparency
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Ways to Support
              </h2>
              <div className="space-y-4">
                {waysToSupport.map((way) => (
                  <div key={way.title} className="p-4 rounded-lg border border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                        <way.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-foreground">{way.title}</div>
                        <p className="text-sm text-muted-foreground">{way.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
