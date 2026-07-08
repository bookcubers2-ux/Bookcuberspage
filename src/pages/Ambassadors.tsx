import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLang, t } from "@/contexts/LanguageContext";
import { ArrowRight, Globe, Award, Users } from "lucide-react";

const Ambassadors = () => {
  const { lang } = useLang();

  const highlights = [
    {
      icon: Globe,
      title: t(lang, "Global representation", "Representación global"),
      desc: t(lang,
        "Bookcubers founders have represented Bolivia at the UN, UNESCO, and UNODC youth forums in Tokyo, Panama, China and Turkmenistan.",
        "Los fundadores de Bookcubers han representado a Bolivia ante la ONU, UNESCO y UNODC en foros juveniles en Tokio, Panamá, China y Turkmenistán."),
    },
    {
      icon: Award,
      title: t(lang, "Youth Ambassadors alumni", "Alumni Youth Ambassadors"),
      desc: t(lang,
        "Both co-founders are alumni of the U.S. Department of State Youth Ambassadors Program — the spark that launched Bookcubers in 2019.",
        "Ambos co-fundadores son alumni del programa Youth Ambassadors del Departamento de Estado de EE.UU. — la chispa que lanzó Bookcubers en 2019."),
    },
    {
      icon: Users,
      title: t(lang, "Training the next generation", "Formando la próxima generación"),
      desc: t(lang,
        "We train young drafters, validators and community leaders so that ambassadorship becomes a pipeline, not a privilege.",
        "Formamos jóvenes drafters, validadores y líderes comunitarios para que ser embajador sea un camino abierto, no un privilegio."),
    },
  ];

  return (
    <Layout>
      <section className="relative pt-32 pb-14 md:pt-40 md:pb-16 bg-gradient-to-b from-secondary/60 to-background border-b border-border">
        <div className="container-wide">
          <span className="eyebrow mb-4">
            <span className="h-px w-8 bg-accent inline-block" />
            {t(lang, "Leadership on the world stage", "Liderazgo en el escenario mundial")}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mt-4 mb-5">
            {t(lang, "Youth Ambassadors", "Jóvenes Embajadores")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {t(lang,
              "Bookcubers was born from the Youth Ambassadors Program — and ambassadorship remains at the heart of how we carry Bolivian youth voices to the world.",
              "Bookcubers nació del programa Youth Ambassadors — y ser embajadores sigue siendo el corazón de cómo llevamos la voz de la juventud boliviana al mundo.")}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="bg-card border border-border rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <h.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{h.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{h.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <Button variant="accent" asChild>
              <Link to="/gallery" className="flex items-center gap-2">
                {t(lang, "See it in the gallery", "Míralo en la galería")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/volunteer">{t(lang, "Join as a volunteer", "Únete como voluntario")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ambassadors;
