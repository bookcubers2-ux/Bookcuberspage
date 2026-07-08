import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLang, t } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

const Partners = () => {
  const { lang } = useLang();

  const partners = [
    "Asamblea del Pueblo Guaraní (APG)",
    "U.S. Embassy in Bolivia",
    "Centro Boliviano Americano (CBA)",
    "American Spaces",
    "Alumni Engagement Innovation Fund (AEIF)",
    "Rotary International / Rotaract Urbarí",
    "Students For Liberty",
    "Universidad Autónoma Gabriel René Moreno (UAGRM)",
    "Amazon Economic Inclusion Forum",
    "UNODC — Global Youth Forum",
    "UNESCO — International Youth Forum",
  ];

  return (
    <Layout>
      <section className="relative pt-32 pb-14 md:pt-40 md:pb-16 bg-gradient-to-b from-secondary/60 to-background border-b border-border">
        <div className="container-wide">
          <span className="eyebrow mb-4">
            <span className="h-px w-8 bg-accent inline-block" />
            {t(lang, "Alliances & Recognition", "Alianzas y Reconocimientos")}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mt-4 mb-5">
            {t(lang, "Partner With Us", "Alía con Nosotros")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {t(lang,
              "Bookcubers works hand in hand with indigenous bodies, embassies, universities and international organizations. Together we turn democratic participation into something every community can reach.",
              "Bookcubers trabaja de la mano con organismos indígenas, embajadas, universidades y organizaciones internacionales. Juntos convertimos la participación democrática en algo que toda comunidad puede alcanzar.")}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-1 w-12 bg-accent rounded-full" />
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
              {t(lang, "Our partners & supporters", "Nuestros aliados y apoyos")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((p) => (
              <div
                key={p}
                className="bg-card border border-border rounded-xl px-5 py-6 text-center text-sm font-medium text-foreground/90 hover:border-accent/50 hover:shadow-md transition-all"
              >
                {p}
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-navy-900 text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-2">
                {t(lang, "Become a partner", "Conviértete en aliado")}
              </h3>
              <p className="text-white/80 max-w-xl">
                {t(lang,
                  "Foundations, universities, embassies and indigenous organizations — let's build the next initiative together.",
                  "Fundaciones, universidades, embajadas y organizaciones indígenas — construyamos juntos la próxima iniciativa.")}
              </p>
            </div>
            <Button variant="accent" asChild className="flex-shrink-0">
              <Link to="/contact" className="flex items-center gap-2">
                {t(lang, "Get in touch", "Conversemos")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
