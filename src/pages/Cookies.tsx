import { Layout } from "@/components/layout/Layout";
import { useLang, t } from "@/contexts/LanguageContext";

const Cookies = () => {
  const { lang } = useLang();

  return (
    <Layout>
      <section className="relative pt-32 pb-14 md:pt-40 md:pb-16 bg-gradient-to-b from-secondary/60 to-background border-b border-border">
        <div className="container-wide">
          <span className="eyebrow mb-4">
            <span className="h-px w-8 bg-accent inline-block" />
            {t(lang, "Legal", "Legal")}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mt-4">
            {t(lang, "Cookie Policy", "Política de Cookies")}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <p>
            {t(lang,
              "This website uses a minimal set of cookies needed to remember your language preference and to understand, in aggregate, how visitors use the site.",
              "Este sitio usa un conjunto mínimo de cookies necesarias para recordar tu preferencia de idioma y para entender, de forma agregada, cómo se usa el sitio.")}
          </p>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
              {t(lang, "Essential cookies", "Cookies esenciales")}
            </h2>
            <p>
              {t(lang,
                "Used to keep the site working — such as remembering whether you are reading in English or Spanish. These cannot be turned off.",
                "Se usan para que el sitio funcione — como recordar si lees en inglés o español. No pueden desactivarse.")}
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
              {t(lang, "Analytics", "Analítica")}
            </h2>
            <p>
              {t(lang,
                "We may use privacy-respecting, aggregated analytics to improve our content. No personal data is sold or shared.",
                "Podemos usar analítica agregada y respetuosa de la privacidad para mejorar nuestro contenido. No vendemos ni compartimos datos personales.")}
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
              {t(lang, "Managing cookies", "Gestionar cookies")}
            </h2>
            <p>
              {t(lang,
                "You can clear or block cookies at any time through your browser settings. For anything else, contact us at bookcubers2@gmail.com.",
                "Puedes borrar o bloquear cookies en cualquier momento desde la configuración de tu navegador. Para cualquier otra consulta, escríbenos a bookcubers2@gmail.com.")}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
