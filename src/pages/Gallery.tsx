import { Layout } from "@/components/layout/Layout";
import { useLang, t } from "@/contexts/LanguageContext";
import { SocialFeed } from "@/components/SocialFeed";

const Gallery = () => {
  const { lang } = useLang();

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary/60 via-background to-background pt-32 pb-10 md:pt-40 md:pb-12">
        <div className="container-wide">
          <span className="eyebrow mb-5">
            <span className="h-px w-8 bg-accent inline-block" />
            {t(lang, "Our story in pictures · Since 2019", "Nuestra historia en imágenes · Desde 2019")}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mt-4 mb-5">
            {t(lang, "Gallery", "Galería")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {t(
              lang,
              "Every post below is a real moment of our work — from Guaraní communities in the Chaco to the United Nations.",
              "Cada publicación es un momento real de nuestro trabajo — desde las comunidades guaraníes del Chaco hasta las Naciones Unidas."
            )}
          </p>
        </div>
      </section>

      <SocialFeed />
    </Layout>
  );
};

export default Gallery;
