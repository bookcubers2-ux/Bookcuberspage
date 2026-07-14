import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLang, t } from "@/contexts/LanguageContext";
import { ArrowRight, Sparkles, Trees, BookOpen, Mail, Phone, MapPin, Users, Globe, Languages, BookMarked } from "lucide-react";
import cristhianImg from "@/assets/board/cristhian-vargas.jpg";
import carlosImg from "@/assets/board/carlos-olivera.jpg";
import teamPhoto from "@/assets/bookcubers-team.jpg";
import communityPhoto from "@/assets/bookcubers-community.jpg";
import innovationImg from "@/assets/programs/innovation.jpg";
import sustainabilityImg from "@/assets/programs/sustainability.jpg";
import educationImg from "@/assets/programs/education.jpg";
import { SocialFeed } from "@/components/SocialFeed";

const Index = () => {
  const { lang } = useLang();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const initiatives = [
    {
      icon: Sparkles,
      image: innovationImg,
      title: "JOPOI / Yvy.ai",
      subtitle: t(lang,
        "AI Translation for Indigenous Democratic Participation",
        "Traducción con IA para la Participación Democrática Indígena"),
      desc: t(lang,
        "An artificial intelligence platform that allows indigenous communities to read, understand, and consent to public consultations, contracts, and legal processes in their own languages — currently Guaraní, Quechua, and Aymara. JOPOI / Yvy.ai turns the legal principle of Free, Prior and Informed Consent (FPIC) into operational practice. Piloted in partnership with the Asamblea del Pueblo Guaraní (APG) in the Bolivian Chaco.",
        "Plataforma de inteligencia artificial que permite a las comunidades indígenas leer, comprender y consentir consultas públicas, contratos y procesos legales en sus propias lenguas — actualmente guaraní, quechua y aimara. JOPOI / Yvy.ai convierte el principio legal del Consentimiento Libre, Previo e Informado (CLPI) en práctica operativa. En piloto con la Asamblea del Pueblo Guaraní (APG) en el Chaco boliviano."),
      tags: ["#AI", "#IndigenousRights", "#DigitalDemocracy"],
      featured: true,
    },
    {
      icon: Trees,
      image: sustainabilityImg,
      title: "Nande Yvy",
      subtitle: t(lang,
        "Territorial Initiative with Guaraní Communities",
        "Iniciativa Territorial con Comunidades Guaraníes"),
      desc: t(lang,
        "A community-led initiative articulated with the Asamblea del Pueblo Guaraní (APG) in the Bolivian Chaco. We document ancestral knowledge, map biodiversity, and accompany communities in defending their territories against unregulated extractive concessions — operating within the framework of the UN Declaration on the Rights of Indigenous Peoples (UNDRIP).",
        "Iniciativa comunitaria articulada con la Asamblea del Pueblo Guaraní (APG) en el Chaco boliviano. Documentamos conocimiento ancestral, mapeamos biodiversidad y acompañamos a las comunidades en la defensa de sus territorios frente a concesiones extractivas no reguladas — en el marco de la Declaración de Naciones Unidas sobre los Derechos de los Pueblos Indígenas (UNDRIP)."),
      tags: ["#IndigenousRights", "#Biodiversity", "#Territory"],
    },
    {
      icon: BookOpen,
      image: educationImg,
      title: "Bookcubers Network",
      subtitle: t(lang,
        "Critical Reading & Civic Deliberation",
        "Lectura Crítica y Deliberación Cívica"),
      desc: t(lang,
        "A Latin American network of more than 1,000 young readers active across 8 countries, with 60+ self-organized reading circles. We promote critical thinking, public deliberation, and civic education through literature, debate, and peer-led discussions — the foundation of all our civic work.",
        "Una red latinoamericana de más de 1.000 jóvenes lectores activos en 8 países, con más de 60 círculos de lectura autoorganizados. Promovemos el pensamiento crítico, la deliberación pública y la formación ciudadana a través de la literatura, el debate y las discusiones entre pares — la base de todo nuestro trabajo cívico."),
      tags: ["#CivicEngagement", "#YouthLeadership", "#Education"],
    },
  ];

  const metrics = [
    { value: "1,000+", icon: Users, label: t(lang, "Active young readers", "Jóvenes lectores activos") },
    { value: "8", icon: Globe, label: t(lang, "Latin American countries", "Países latinoamericanos") },
    { value: "60+", icon: BookMarked, label: t(lang, "Reading circles & community spaces", "Círculos de lectura y espacios comunitarios") },
    { value: "3", icon: Languages, label: t(lang, "Indigenous languages reached through JOPOI / Yvy.ai", "Lenguas indígenas alcanzadas por JOPOI / Yvy.ai") },
  ];

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
  ];

  return (
    <Layout>
      {/* HERO — full-bleed editorial (Cambridge-style) */}
      <section className="relative">
        <div className="absolute top-0 inset-x-0 h-1.5 bg-accent z-20" />
        <div className="relative h-[66vh] min-h-[520px] w-full overflow-hidden">
          <img
            src={communityPhoto}
            alt={t(lang,
              "The Bookcubers community gathered in Santa Cruz de la Sierra, Bolivia",
              "La comunidad Bookcubers reunida en Santa Cruz de la Sierra, Bolivia")}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/92 via-navy-900/55 to-navy-900/25" />
          <div className="relative container-wide h-full flex flex-col justify-center pt-24 pb-12">
            <div className="max-w-3xl animate-fade-up">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/90 mb-5">
                <span className="h-px w-8 bg-accent inline-block" />
                {t(lang, "Bookcubers · Youth-led since 2019", "Bookcubers · Liderado por jóvenes desde 2019")}
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[4.2rem] leading-[1.05] font-semibold text-white mb-6">
                {t(lang,
                  "Reading, understanding, and shaping democracy — together.",
                  "Leer, comprender y construir democracia — juntos.")}
              </h1>
              <p className="text-lg sm:text-xl text-white/85 max-w-2xl mb-8 leading-relaxed">
                {t(lang,
                  "A Latin American youth-led civic organization advancing democratic participation, indigenous inclusion, and educational access through technology and community.",
                  "Organización juvenil latinoamericana que impulsa la participación democrática, la inclusión indígena y el acceso educativo a través de la tecnología y la comunidad.")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" onClick={() => scrollTo("initiatives")} className="flex items-center gap-2 text-base px-8 py-6">
                  {t(lang, "Our Initiatives", "Nuestras iniciativas")}
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  onClick={() => scrollTo("contact")}
                  className="text-base px-8 py-6 bg-white/10 text-white border-2 border-white/40 hover:bg-white/20 hover:border-white/60"
                >
                  {t(lang, "Get Involved", "Involúcrate")}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick stats strip */}
        <div className="bg-background border-b border-border">
          <div className="container-wide py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((m) => (
                <div key={m.label} className="text-center md:text-left">
                  <div className="text-3xl sm:text-4xl font-heading font-semibold text-accent">{m.value}</div>
                  <div className="text-sm text-muted-foreground leading-snug mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIVE SOCIAL FEED — the first thing visitors see */}
      <section className="pt-10 pb-2 bg-background">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-1 w-12 bg-accent rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              {t(lang, "From the field", "Desde el territorio")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-2">
            {t(lang, "Our work, in real time", "Nuestro trabajo, en tiempo real")}
          </h2>
          <p className="text-muted-foreground">
            {t(lang, "Every post is a real moment of our work — newest first.", "Cada publicación es un momento real de nuestro trabajo — lo más nuevo primero.")}
          </p>
        </div>
      </section>
      <SocialFeed />

      {/* ABOUT */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-8 text-foreground">
            {t(lang, "Who We Are", "Quiénes Somos")}
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              {t(lang,
                "Bookcubers is a youth-led civic organization founded in 2019 in Santa Cruz de la Sierra, Bolivia. We began as a Latin American network of critical reading and civic deliberation among young people — and have grown into a multi-initiative platform that incubates innovative projects at the intersection of democracy, indigenous rights, technology, and education.",
                "Bookcubers es una organización civil liderada por jóvenes, fundada en 2019 en Santa Cruz de la Sierra, Bolivia. Comenzamos como una red latinoamericana de lectura crítica y deliberación cívica juvenil — y hoy somos una plataforma multi-iniciativa que incuba proyectos innovadores en la intersección entre democracia, derechos indígenas, tecnología y educación.")}
            </p>
            <p>
              {t(lang,
                "We believe that the strongest democracies are those where young people, indigenous communities, and historically excluded voices can read, understand, and shape the public conversation in their own languages. Every initiative we develop serves that conviction.",
                "Creemos que las democracias más fuertes son aquellas donde la juventud, los pueblos indígenas y las voces históricamente excluidas pueden leer, entender y moldear la conversación pública en sus propias lenguas. Cada iniciativa que desarrollamos sirve a esa convicción.")}
            </p>
          </div>

          {/* Belief statements */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              t(lang, "Young people should lead.", "La juventud debe liderar."),
              t(lang, "Communities own their own stories.", "Las comunidades son dueñas de sus historias."),
              t(lang, "Everyone deserves to understand the rules that govern them.", "Todos merecen entender las reglas que los rigen."),
            ].map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-xl bg-secondary/50 border border-border px-4 py-4">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                <span className="font-heading text-foreground leading-snug">{b}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button variant="outline" asChild>
              <Link to="/about">{t(lang, "Read our story", "Conoce nuestra historia")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section id="initiatives" className="section-padding bg-navy-800 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-1 w-12 bg-accent rounded-full" />
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                {t(lang, "What we build", "Lo que construimos")}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
              {t(lang, "Our Initiatives", "Nuestras Iniciativas")}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {initiatives.map((it) => (
              <Card
                key={it.title}
                className={`overflow-hidden bg-card border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col ${
                  it.featured ? "ring-1 ring-accent/40" : ""
                }`}
              >
                <div className="relative h-44 overflow-hidden group">
                  <img
                    src={it.image}
                    alt={it.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/65 to-transparent" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center shadow-md">
                    <it.icon className="w-5 h-5" />
                  </div>
                  {it.featured && (
                    <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-navy-900 rounded-full px-2.5 py-1">
                      {t(lang, "Flagship", "Insignia")}
                    </span>
                  )}
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1.5" style={{ fontFamily: '"Source Serif 4", Georgia, serif' }}>{it.title}</h3>
                  <p className="text-accent font-semibold text-sm mb-4">{it.subtitle}</p>
                  <p className="text-foreground/80 leading-relaxed mb-6 flex-1 text-[0.95rem]">{it.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {it.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
              {t(lang, "Our Impact", "Nuestro Impacto")}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="bg-card border border-border/50 rounded-2xl p-8 text-center hover:border-accent/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <m.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-2">
                  {m.value}
                </div>
                <div className="text-sm text-muted-foreground leading-snug">{m.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-12 text-lg leading-relaxed">
            {t(lang,
              "Since 2019, Bookcubers has built a youth-led civic infrastructure that connects literacy, indigenous rights, and democratic technology across Latin America.",
              "Desde 2019, Bookcubers ha construido una infraestructura cívica liderada por jóvenes que conecta la literacidad, los derechos indígenas y la tecnología democrática en toda América Latina.")}
          </p>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section-padding bg-navy-800">
        <div className="container-wide max-w-5xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-12 text-foreground text-center">
            {t(lang, "Our Team & Leadership", "Nuestro Equipo y Liderazgo")}
          </h2>

          {/* Team group photo */}
          <figure className="mb-12 rounded-2xl overflow-hidden border border-border/50 shadow-lg">
            <img
              src={teamPhoto}
              alt={t(lang,
                "The Bookcubers team at the Departmental Government of Santa Cruz, Bolivia",
                "El equipo de Bookcubers en el Gobierno Autónomo Departamental de Santa Cruz, Bolivia")}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <figcaption className="bg-card/60 px-5 py-3 text-sm text-muted-foreground text-center">
              {t(lang,
                "The Bookcubers team — Santa Cruz de la Sierra, Bolivia",
                "El equipo de Bookcubers — Santa Cruz de la Sierra, Bolivia")}
            </figcaption>
          </figure>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-8">
            {t(lang, "Co-Founders", "Co-Fundadores")}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Cristhian */}
            <Card className="p-6 sm:p-7 bg-card border-border/50">
              <div className="flex flex-col items-center text-center gap-5">
                <img
                  src={cristhianImg}
                  alt="Cristhian Mathías Vargas Menacho"
                  className="w-28 h-28 rounded-2xl object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    Cristhian Mathías Vargas Menacho
                  </h3>
                  <p className="text-accent font-medium mb-3">
                    {t(lang, "Co-Founder & Director", "Co-Fundador y Director")}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {t(lang,
                      "Economics student at Universidad Autónoma Gabriel René Moreno (UAGRM). Advisor on Economics and Finance to the Departmental Youth Council of Santa Cruz. Coordinator of Students For Liberty Bolivia. U.S. Department of State Youth Ambassador alumnus (2022).",
                      "Estudiante de Economía en la Universidad Autónoma Gabriel René Moreno (UAGRM). Asesor en Economía y Finanzas del Consejo Departamental de la Juventud de Santa Cruz. Coordinador de Students For Liberty Bolivia. Alumnus del programa Youth Ambassadors del Departamento de Estado de los EE.UU. (2022).")}
                  </p>
                </div>
              </div>
            </Card>
            {/* Carlos */}
            <Card className="p-6 sm:p-7 bg-card border-border/50">
              <div className="flex flex-col items-center text-center gap-5">
                <img
                  src={carlosImg}
                  alt="Carlos Andrés Olivera Caballero"
                  className="w-28 h-28 rounded-2xl object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    Carlos Andrés Olivera Caballero
                  </h3>
                  <p className="text-accent font-medium mb-3">
                    {t(lang, "Co-Founder & President", "Co-Fundador y Presidente")}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {t(lang,
                      "Founder of Bookcubers and U.S. Embassy Youth Ambassador alumnus. UNESCO World Champion in audiovisual production (2025), co-chair of the 4th UNODC Global Youth Forum in Tokyo, and Bolivia's delegate to the UN LDC3 conference in Turkmenistan. The youngest Honorable Son of Santa Cruz in 200 years.",
                      "Fundador de Bookcubers y alumnus del programa Youth Ambassadors de la Embajada de EE.UU. Campeón Mundial UNESCO en producción audiovisual (2025), co-chair del 4º Global Youth Forum de la UNODC en Tokio y delegado de Bolivia ante la ONU (LDC3, Turkmenistán). El Hijo Predilecto más joven de Santa Cruz en 200 años.")}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
              {t(lang, "Partners & Recognition", "Aliados y Reconocimientos")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {partners.map((p) => (
              <div
                key={p}
                className="bg-card border border-border/50 rounded-xl px-5 py-6 text-center text-sm font-medium text-foreground/90 hover:border-accent/40 hover:bg-card/80 transition-all"
              >
                {p}
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-12 leading-relaxed">
            {t(lang,
              "Bookcubers has been supported, recognized, or partnered with international organizations, indigenous representative bodies, and academic institutions across Latin America and beyond.",
              "Bookcubers ha sido apoyada, reconocida o ha trabajado con organizaciones internacionales, organismos representativos indígenas e instituciones académicas en toda América Latina y más allá.")}
          </p>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="rounded-3xl bg-navy-900 text-white p-8 md:p-14 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold mb-3">
              {t(lang, "Want to build this with us?", "¿Quieres construir esto con nosotros?")}
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              {t(lang,
                "There's a place for everyone — give your time, partner with us, or help fund the work.",
                "Hay un lugar para cada quien — dona tu tiempo, alíate con nosotros o ayuda a financiar el trabajo.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" asChild>
                <Link to="/volunteer">{t(lang, "Volunteer with us", "Sé voluntario")}</Link>
              </Button>
              <Button asChild className="bg-white text-navy-900 hover:bg-white/90">
                <Link to="/partners">{t(lang, "Partner with us", "Alíate con nosotros")}</Link>
              </Button>
              <Button asChild className="bg-white/10 text-white border-2 border-white/40 hover:bg-white/20">
                <Link to="/donate">{t(lang, "Donate", "Dona")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-padding bg-navy-800">
        <div className="container-wide max-w-5xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-12 text-foreground text-center">
            {t(lang, "Contact", "Contacto")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-5">
              <a href="mailto:cristhianvargasmenacho@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <span className="break-all">cristhianvargasmenacho@gmail.com</span>
              </a>
              <a href="tel:+59169176200" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <span>+591 69176200</span>
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span>Santa Cruz de la Sierra, Bolivia</span>
              </div>
            </div>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = fd.get("name");
                const email = fd.get("email");
                const message = fd.get("message");
                const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
                window.location.href = `mailto:cristhianvargasmenacho@gmail.com?subject=Bookcubers%20Contact&body=${body}`;
              }}
            >
              <div>
                <Label htmlFor="name">{t(lang, "Name", "Nombre")}</Label>
                <Input id="name" name="name" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">{t(lang, "Email", "Correo")}</Label>
                <Input id="email" name="email" type="email" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="message">{t(lang, "Message", "Mensaje")}</Label>
                <Textarea id="message" name="message" required rows={5} className="mt-1.5" />
              </div>
              <Button type="submit" variant="accent" className="w-full">
                {t(lang, "Send Message", "Enviar Mensaje")}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
