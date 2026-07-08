import { useState, useEffect, useCallback, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { useLang, t } from "@/contexts/LanguageContext";
import { galleryCategories } from "@/data/gallery";
import { galleryPosts, type GalleryPost, type PostMedia } from "@/data/posts";
import bookcubersLogo from "@/assets/bookcubers-logo.png";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  BadgeCheck,
  MapPin,
  Images,
  Play,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Media carousel (Instagram-style)                                    */
/* ------------------------------------------------------------------ */
const Carousel = ({
  media,
  alt,
  onOpen,
}: {
  media: PostMedia[];
  alt: string;
  onOpen: (index: number) => void;
}) => {
  const { lang } = useLang();
  const [idx, setIdx] = useState(0);
  const many = media.length > 1;
  const item = media[idx];

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + media.length) % media.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % media.length);
  };

  const imageCount = media.filter((m) => m.type === "image").length;
  const isLast = idx === media.length - 1;

  return (
    <div className="relative bg-navy-900 group/car select-none">
      <div className="aspect-square overflow-hidden">
        {item.type === "video" ? (
          <video
            key={item.src}
            src={item.src}
            controls
            preload="metadata"
            playsInline
            className="w-full h-full object-contain bg-navy-900"
          />
        ) : (
          <button
            type="button"
            onClick={() => onOpen(idx)}
            className="block w-full h-full focus-visible:outline-none"
            aria-label={t(lang, "Open photo", "Abrir foto")}
          >
            <img
              src={item.src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </button>
        )}
      </div>

      {/* counter pill */}
      {many && (
        <span className="absolute top-3 right-3 rounded-full bg-navy-900/70 text-white text-xs font-semibold px-2.5 py-1 backdrop-blur-sm pointer-events-none">
          {idx + 1}/{media.length}
        </span>
      )}

      {/* arrows */}
      {many && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label={t(lang, "Previous", "Anterior")}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 hover:bg-white text-navy-900 flex items-center justify-center shadow-md transition-opacity sm:opacity-0 sm:group-hover/car:opacity-100 focus-visible:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={t(lang, "Next", "Siguiente")}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 hover:bg-white text-navy-900 flex items-center justify-center shadow-md transition-opacity sm:opacity-0 sm:group-hover/car:opacity-100 focus-visible:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* last-slide overlay: view all photos */}
      {many && isLast && imageCount > 1 && item.type === "image" && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen(idx);
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-navy-900/75 hover:bg-navy-900/90 text-white text-xs font-semibold px-3.5 py-1.5 backdrop-blur-sm transition-colors"
        >
          {t(lang, `View all ${imageCount} photos →`, `Ver las ${imageCount} fotos →`)}
        </button>
      )}

      {/* dots */}
      {many && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
          {media.map((m, i) => (
            <span
              key={m.src}
              className={`rounded-full transition-all ${
                i === idx ? "w-2 h-2 bg-white" : "w-1.5 h-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* One feed post                                                       */
/* ------------------------------------------------------------------ */
const PostCard = ({
  post,
  onOpenLightbox,
}: {
  post: GalleryPost;
  onOpenLightbox: (post: GalleryPost, index: number) => void;
}) => {
  const { lang } = useLang();
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const cat = galleryCategories.find((c) => c.id === post.category);
  const photoCount = post.media.filter((m) => m.type === "image").length;
  const videoCount = post.media.length - photoCount;
  const caption = t(lang, post.caption_en, post.caption_es);
  const isLong = caption.length > 180;

  const share = async () => {
    const url = `${window.location.origin}/gallery#${post.id}`;
    const title = t(lang, post.title_en, post.title_es);
    try {
      if (navigator.share) {
        await navigator.share({ title: `Bookcubers — ${title}`, url });
      } else {
        await navigator.clipboard.writeText(url);
      }
    } catch {
      /* user cancelled */
    }
  };

  return (
    <article
      id={post.id}
      className="rounded-2xl overflow-hidden bg-card border border-border shadow-sm scroll-mt-40"
    >
      {/* header */}
      <header className="flex items-center gap-3 px-4 py-3">
        <img
          src={bookcubersLogo}
          alt="Bookcubers"
          className="w-10 h-10 rounded-full object-contain bg-white ring-1 ring-border p-0.5 flex-shrink-0"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-sm text-foreground">Bookcubers</span>
            <BadgeCheck className="w-4 h-4 text-accent flex-shrink-0" aria-label={t(lang, "Verified organization", "Organización verificada")} />
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground truncate">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">
              {t(lang, post.location_en, post.location_es)} · {t(lang, post.date_en, post.date_es)}
            </span>
          </div>
        </div>
        {post.pinned ? (
          <span className="text-[0.7rem] font-bold uppercase tracking-wide text-accent-foreground bg-accent rounded-full px-2.5 py-1 flex-shrink-0">
            {t(lang, "Featured", "Destacado")}
          </span>
        ) : (
          cat && (
            <span className="hidden sm:inline-block text-[0.7rem] font-semibold uppercase tracking-wide text-accent bg-accent/10 rounded-full px-2.5 py-1 flex-shrink-0">
              {t(lang, cat.title_en, cat.title_es).split("—")[0].trim()}
            </span>
          )
        )}
      </header>

      {/* media */}
      <Carousel
        media={post.media}
        alt={t(lang, post.title_en, post.title_es)}
        onOpen={(i) => onOpenLightbox(post, i)}
      />

      {/* actions */}
      <div className="flex items-center gap-4 px-4 pt-3">
        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-pressed={liked}
          aria-label={t(lang, "Like", "Me gusta")}
          className="transition-transform active:scale-125"
        >
          <Heart
            className={`w-6 h-6 transition-colors ${
              liked ? "fill-red-500 text-red-500" : "text-foreground hover:text-muted-foreground"
            }`}
          />
        </button>
        <button
          type="button"
          onClick={share}
          aria-label={t(lang, "Share", "Compartir")}
          className="text-foreground hover:text-muted-foreground transition-colors"
        >
          <Share2 className="w-6 h-6" />
        </button>
        <span className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground">
          <Images className="w-4 h-4" />
          {photoCount > 0 && `${photoCount} ${t(lang, photoCount === 1 ? "photo" : "photos", photoCount === 1 ? "foto" : "fotos")}`}
          {photoCount > 0 && videoCount > 0 && " · "}
          {videoCount > 0 && (
            <>
              <Play className="w-3.5 h-3.5" />
              {videoCount} {t(lang, videoCount === 1 ? "video" : "videos", videoCount === 1 ? "video" : "videos")}
            </>
          )}
        </span>
      </div>

      {/* caption */}
      <div className="px-4 pb-4 pt-2">
        <h3 className="font-heading font-semibold text-foreground leading-snug mb-1">
          {t(lang, post.title_en, post.title_es)}
        </h3>
        <p className={`text-sm text-muted-foreground leading-relaxed ${!expanded && isLong ? "line-clamp-3" : ""}`}>
          <span className="font-semibold text-foreground">Bookcubers</span>{" "}
          {caption}
        </p>
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="text-sm font-semibold text-accent mt-1 hover:underline"
          >
            {expanded ? t(lang, "See less", "Ver menos") : t(lang, "See more", "Ver más")}
          </button>
        )}
        {post.credit !== null && (
          <p className="text-xs italic text-muted-foreground mt-2">
            {t(lang, "Photos", "Fotos")}: © Bookcubers
          </p>
        )}
      </div>
    </article>
  );
};

/* ------------------------------------------------------------------ */
/* Gallery page — social feed                                          */
/* ------------------------------------------------------------------ */
const Gallery = () => {
  const { lang } = useLang();
  const [activeCat, setActiveCat] = useState<string>("all");
  const [lightbox, setLightbox] = useState<{ post: GalleryPost; idx: number } | null>(null);

  const cats = galleryCategories.filter((c) => galleryPosts.some((p) => p.category === c.id));

  const posts = useMemo(
    () => (activeCat === "all" ? galleryPosts : galleryPosts.filter((p) => p.category === activeCat)),
    [activeCat]
  );

  // lightbox images = images of the active post only
  const lbImages = useMemo(
    () => (lightbox ? lightbox.post.media.filter((m) => m.type === "image") : []),
    [lightbox]
  );

  const openLightbox = (post: GalleryPost, mediaIdx: number) => {
    // translate media index -> image index (skip videos)
    const images = post.media.filter((m) => m.type === "image");
    const clicked = post.media[mediaIdx];
    const idx = Math.max(0, images.findIndex((m) => m.src === clicked.src));
    setLightbox({ post, idx });
  };
  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((s) => (s ? { ...s, idx: (s.idx - 1 + lbImages.length) % lbImages.length } : s)),
    [lbImages.length]
  );
  const next = useCallback(
    () => setLightbox((s) => (s ? { ...s, idx: (s.idx + 1) % lbImages.length } : s)),
    [lbImages.length]
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, prev, next]);

  const active = lightbox ? lbImages[lightbox.idx] : null;

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

      {/* Sticky category tabs */}
      <div className="sticky top-24 z-30 bg-background/95 backdrop-blur-md border-y border-border">
        <div className="container-wide py-3 flex gap-2 overflow-x-auto">
          {[{ id: "all", label: t(lang, "All", "Todas") }, ...cats.map((c) => ({ id: c.id, label: t(lang, c.title_en, c.title_es).split("—")[0].trim() }))].map(
            (tab) => (
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
            )
          )}
        </div>
      </div>

      {/* Feed */}
      <section className="section-padding bg-background">
        <div className="mx-auto w-full max-w-xl px-4 sm:px-0 flex flex-col gap-8">
          <p className="text-xs uppercase tracking-[0.15em] font-semibold text-muted-foreground text-center">
            {posts.length} {t(lang, posts.length === 1 ? "post" : "posts", posts.length === 1 ? "publicación" : "publicaciones")}
          </p>
          {posts.map((p) => (
            <PostCard key={p.id} post={p} onOpenLightbox={openLightbox} />
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {active && lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-navy-900/92 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={t(lang, lightbox.post.title_en, lightbox.post.title_es)}
        >
          <button
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            onClick={close}
            aria-label={t(lang, "Close", "Cerrar")}
          >
            <X className="w-6 h-6" />
          </button>
          {lbImages.length > 1 && (
            <>
              <button
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label={t(lang, "Previous", "Anterior")}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label={t(lang, "Next", "Siguiente")}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
          <figure className="max-w-5xl max-h-[88vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={t(lang, lightbox.post.title_en, lightbox.post.title_es)} className="max-h-[78vh] w-auto rounded-xl shadow-lg" />
            <figcaption className="text-white/90 text-sm text-center mt-4 max-w-2xl">
              <span className="font-semibold">{t(lang, lightbox.post.title_en, lightbox.post.title_es)}</span>
              <span className="text-white/60"> · {lightbox.idx + 1}/{lbImages.length}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
