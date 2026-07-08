import { useState, useEffect, useCallback, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { useLang, t } from "@/contexts/LanguageContext";
import { galleryCategories, galleryItems, type GalleryItem } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const creditFor = (caption: string) =>
  /U\.S\. Embassy|Municipal Government|post en redes|post on/i.test(caption) ? null : "© Bookcubers";

const Gallery = () => {
  const { lang } = useLang();
  const [activeCat, setActiveCat] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // categories actually present, in defined order
  const cats = galleryCategories.filter((c) => galleryItems.some((it) => it.category === c.id));

  // items to show given the active filter
  const shownItems = useMemo(
    () => (activeCat === "all" ? galleryItems : galleryItems.filter((it) => it.category === activeCat)),
    [activeCat]
  );

  // flat list of images (for lightbox navigation), in display order
  const images = useMemo(() => shownItems.filter((it) => it.type === "image"), [shownItems]);

  const openLightbox = (item: GalleryItem) => {
    const idx = images.findIndex((im) => im.src === item.src);
    if (idx >= 0) setLightboxIndex(idx);
  };
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)), [images.length]);
  const next = useCallback(() => setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length)), [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, prev, next]);

  const active = lightboxIndex !== null ? images[lightboxIndex] : null;

  // group shown items by category for rendering
  const groups = cats
    .map((c) => ({ cat: c, items: shownItems.filter((it) => it.category === c.id) }))
    .filter((g) => g.items.length > 0);

  const Tile = ({ it }: { it: GalleryItem }) => {
    const credit = creditFor(it.caption);
    return (
      <figure className="rounded-2xl overflow-hidden bg-card border border-border shadow-sm group flex flex-col">
        {it.type === "video" ? (
          <video src={it.src} controls preload="metadata" className="w-full aspect-[4/3] object-cover bg-navy-900" />
        ) : (
          <button
            type="button"
            onClick={() => openLightbox(it)}
            className="block w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-label={it.caption}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={it.src}
                alt={it.caption}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </button>
        )}
        <figcaption className="px-4 py-3 flex-1 flex flex-col">
          <div className="flex items-start gap-2">
            {it.year && (
              <span className="text-xs font-semibold text-accent bg-accent/10 rounded-full px-2 py-0.5 flex-shrink-0">
                {it.year}
              </span>
            )}
            <span className="font-heading text-[0.95rem] text-foreground leading-snug">{it.caption}</span>
          </div>
          {credit && <span className="text-xs italic text-muted-foreground mt-1.5">{t(lang, "Photo", "Foto")}: {credit}</span>}
        </figcaption>
      </figure>
    );
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary/60 via-background to-background pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-wide">
          <span className="eyebrow mb-5">
            <span className="h-px w-8 bg-accent inline-block" />
            {t(lang, "Our story in pictures · Since 2019", "Nuestra historia en imágenes · Desde 2019")}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mt-4 mb-5">
            {t(lang, "Gallery", "Galería")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {t(lang,
              "Real moments from our work across Bolivia and the world — the people, programs and milestones that make Bookcubers.",
              "Momentos reales de nuestro trabajo en Bolivia y el mundo — las personas, los programas y los hitos que hacen a Bookcubers.")}
          </p>
        </div>
      </section>

      {/* Sticky category tabs */}
      <div className="sticky top-24 z-30 bg-background/95 backdrop-blur-md border-y border-border">
        <div className="container-wide py-3 flex gap-2 overflow-x-auto">
          {[{ id: "all", label: t(lang, "All", "Todas") }, ...cats.map((c) => ({ id: c.id, label: t(lang, c.title_en, c.title_es) }))].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCat(tab.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                activeCat === tab.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category sections */}
      {groups.map((g, idx) => (
        <section key={g.cat.id} className={`section-padding ${idx % 2 === 1 ? "bg-navy-800" : "bg-background"}`}>
          <div className="container-wide">
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-1 w-12 bg-accent rounded-full" />
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  {g.items.length} {t(lang, "items", "elementos")}
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-3">
                {t(lang, g.cat.title_en, g.cat.title_es)}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{t(lang, g.cat.desc_en, g.cat.desc_es)}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {g.items.map((it) => (
                <Tile key={it.src} it={it} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-navy-900/92 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
        >
          <button
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            onClick={close}
            aria-label={t(lang, "Close", "Cerrar")}
          >
            <X className="w-6 h-6" />
          </button>
          {images.length > 1 && (
            <>
              <button
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label={t(lang, "Previous", "Anterior")}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label={t(lang, "Next", "Siguiente")}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
          <figure className="max-w-5xl max-h-[88vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.caption} className="max-h-[80vh] w-auto rounded-xl shadow-lg" />
            <figcaption className="text-white/90 text-sm text-center mt-4 max-w-2xl">
              {active.year ? `${active.year} — ` : ""}{active.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
