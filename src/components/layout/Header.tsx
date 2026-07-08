import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart, ChevronDown, Images, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLang, t } from "@/contexts/LanguageContext";
import bookcubersLogo from "@/assets/bookcubers-logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggle } = useLang();

  const menus = [
    {
      label: t(lang, "Our Work", "Nuestro Trabajo"),
      items: [
        { name: t(lang, "Programs", "Programas"), href: "/programs" },
        { name: t(lang, "Art", "Arte"), href: "/art" },
        { name: t(lang, "Impact", "Impacto"), href: "/impact" },
        { name: t(lang, "Gallery", "Galería"), href: "/gallery", featured: true },
      ],
    },
    {
      label: t(lang, "About", "Nosotros"),
      items: [
        { name: t(lang, "Who we are", "Quiénes somos"), href: "/about" },
        { name: t(lang, "Youth Ambassadors", "Jóvenes Embajadores"), href: "/ambassadors" },
        { name: t(lang, "Partners", "Aliados"), href: "/partners" },
        { name: t(lang, "News", "Noticias"), href: "/news" },
      ],
    },
    {
      label: t(lang, "Get Involved", "Involúcrate"),
      items: [
        { name: t(lang, "Volunteer", "Voluntariado"), href: "/volunteer" },
        { name: t(lang, "Partner with us", "Alíate con nosotros"), href: "/partners" },
        { name: t(lang, "Contact", "Contacto"), href: "/#contact" },
      ],
    },
  ];

  const LangToggle = ({ className }: { className?: string }) => (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className={cn(
        "flex items-center text-sm font-semibold px-3 py-1.5 rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:border-accent/50 transition-colors",
        className
      )}
    >
      <span className={cn(lang === "en" && "text-accent")}>EN</span>
      <span className="mx-1.5 text-muted-foreground/50">|</span>
      <span className={cn(lang === "es" && "text-accent")}>ES</span>
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <nav className="container-wide" aria-label="Main navigation">
        <div className="flex h-24 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3.5 group flex-shrink-0">
            <img
              src={bookcubersLogo}
              alt="Bookcubers Logo"
              className="w-16 h-16 object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-heading font-bold text-3xl text-foreground">Bookcubers</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            >
              {t(lang, "Home", "Inicio")}
            </Link>

            {menus.map((menu) => (
              <div key={menu.label} className="relative group">
                <button
                  className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 group-focus-within:text-foreground transition-colors"
                >
                  {menu.label}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-150">
                  <div className="min-w-60 rounded-xl border border-border bg-card shadow-lg p-2">
                    {menu.items.map((it: { name: string; href: string; featured?: boolean }) =>
                      it.featured ? (
                        <Link
                          key={it.name}
                          to={it.href}
                          className="mt-1 flex items-center justify-between gap-2 rounded-lg bg-accent text-accent-foreground px-3 py-3 text-base font-semibold hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
                        >
                          <span className="flex items-center gap-2"><Images className="w-5 h-5" />{it.name}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      ) : (
                        <Link
                          key={it.name}
                          to={it.href}
                          className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
                        >
                          {it.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-2">
            <LangToggle />
            <Button variant="accent" asChild className="rounded-full px-6">
              <Link to="/donate" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                {t(lang, "Donate", "Dona")}
              </Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in max-h-[75vh] overflow-y-auto">
            <Link
              to="/"
              className="block px-4 py-3 text-base font-semibold rounded-full text-foreground hover:bg-secondary/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t(lang, "Home", "Inicio")}
            </Link>
            {menus.map((menu) => (
              <div key={menu.label} className="mt-3">
                <p className="px-4 pb-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent">{menu.label}</p>
                {menu.items.map((it: { name: string; href: string; featured?: boolean }) =>
                  it.featured ? (
                    <Link
                      key={it.name}
                      to={it.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="mx-4 my-1 flex items-center justify-between gap-2 rounded-full bg-accent text-accent-foreground px-4 py-3 text-base font-semibold"
                    >
                      <span className="flex items-center gap-2"><Images className="w-5 h-5" />{it.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link
                      key={it.name}
                      to={it.href}
                      className="block px-4 py-2.5 text-base font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {it.name}
                    </Link>
                  )
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between gap-2 px-4">
              <LangToggle />
              <Button variant="accent" asChild className="flex-1 rounded-full">
                <Link to="/donate" onClick={() => setMobileMenuOpen(false)}>
                  <Heart className="w-4 h-4 mr-2" />
                  {t(lang, "Donate", "Dona")}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
