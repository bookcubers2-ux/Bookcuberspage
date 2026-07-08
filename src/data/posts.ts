// Bookcubers — social-feed posts for the Gallery page.
// Each post groups gallery media from one real event/activity, newest first.
import type { GalleryType } from "./gallery";

export interface PostMedia {
  src: string;
  type: GalleryType;
}

export interface GalleryPost {
  id: string;
  category: string; // must match a galleryCategories id
  title_en: string;
  title_es: string;
  caption_en: string;
  caption_es: string;
  location_en: string;
  location_es: string;
  date_en: string;
  date_es: string;
  media: PostMedia[];
  credit?: string | null;
  pinned?: boolean;
}

const img = (src: string): PostMedia => ({ src, type: "image" });
const vid = (src: string): PostMedia => ({ src, type: "video" });

export const galleryPosts: GalleryPost[] = [
  {
    id: "ylf-japan-2026",
    category: "global",
    pinned: true,
    title_en: "Carlos represents Bolivia at the UN Youth Leader Fund in Japan",
    title_es: "Carlos representa a Bolivia en el Youth Leader Fund de la ONU en Japón",
    caption_en:
      "Our president Carlos Andrés Olivera completed the UN Youth Leader Fund for a World without Nuclear Weapons (UNODA–UNITAR), working in Hiroshima and Nagasaki with young leaders from around the world. He is also co-author of the official Disarmament Handbook — his chapter brings AI and offline civic technology into peace advocacy.",
    caption_es:
      "Nuestro presidente Carlos Andrés Olivera culminó el Youth Leader Fund for a World without Nuclear Weapons de la ONU (UNODA–UNITAR), trabajando en Hiroshima y Nagasaki junto a jóvenes líderes de todo el mundo. Además es coautor del Manual Oficial de Desarme — su capítulo lleva la IA y la tecnología cívica offline a la incidencia por la paz.",
    location_en: "Hiroshima & Nagasaki, Japan",
    location_es: "Hiroshima y Nagasaki, Japón",
    date_en: "July 2026",
    date_es: "Julio 2026",
    media: [
      img("/gallery/co-japan-21.jpg"),
      img("/gallery/co-japan-16.jpg"),
      img("/gallery/co-japan-09.jpg"),
      img("/gallery/co-japan-10.jpg"),
      img("/gallery/co-japan-06.jpg"),
      img("/gallery/co-japan-07.jpg"),
      img("/gallery/co-japan-08.jpg"),
      img("/gallery/co-japan-12.jpg"),
      img("/gallery/co-japan-14.jpg"),
      img("/gallery/co-japan-17.jpg"),
      img("/gallery/co-japan-23.jpg"),
      img("/gallery/co-japan-27.jpg"),
      img("/gallery/co-japan-29.jpg"),
    ],
  },
  {
    id: "toyp-2026",
    category: "global",
    title_en: "TOYP Santa Cruz 2026 — Ten Outstanding Young Persons",
    title_es: "Premios TOYP Santa Cruz 2026 — Diez Jóvenes Sobresalientes",
    caption_en:
      "Carlos Olivera was honored at the TOYP Santa Cruz 2026 Awards (JCI Oriente) in the category Contribution to Children, World Peace or Human Rights — recognition of the impact our volunteers create every day.",
    caption_es:
      "Carlos Olivera fue galardonado en los Premios TOYP Santa Cruz 2026 (JCI Oriente) en la categoría Contribución a la Niñez, la Paz Mundial o los Derechos Humanos — un testimonio del impacto que nuestros voluntarios generan todos los días.",
    location_en: "UAGRM Mahatma Gandhi Auditorium, Santa Cruz",
    location_es: "Auditorio Mahatma Gandhi de la UAGRM, Santa Cruz",
    date_en: "July 3, 2026",
    date_es: "3 de julio de 2026",
    media: [
      img("/gallery/co-toyp-25.jpg"),
      img("/gallery/co-toyp-22.jpg"),
      img("/gallery/co-toyp-20.jpg"),
      img("/gallery/co-toyp-13.jpg"),
      img("/gallery/co-toyp-26.jpg"),
    ],
  },
  {
    id: "cjial-2026",
    category: "ai-governance",
    title_en: "CJIAL is born — Latin America's youth AI-governance council",
    title_es: "Nace el CJIAL — Consejo Juvenil de Inteligencia Artificial Latinoamericano",
    caption_en:
      "We officially launched CJIAL, a pioneering Latin American initiative for AI development and governance with human rights at its core. At the launch — hosted by UAGRM International Relations — we presented the first Youth Declaration on Artificial Intelligence, written entirely by our council.",
    caption_es:
      "Lanzamos oficialmente el CJIAL, una propuesta pionera en Latinoamérica para el desarrollo y la gobernanza de la IA con enfoque innegociable en Derechos Humanos. En la inauguración — en Relaciones Internacionales de la UAGRM — presentamos la primera Declaración Juvenil sobre Inteligencia Artificial, creada íntegramente por nuestro Consejo.",
    location_en: "UAGRM, Santa Cruz, Bolivia",
    location_es: "UAGRM, Santa Cruz, Bolivia",
    date_en: "2026",
    date_es: "2026",
    media: [
      img("/gallery/co-cjial-18.jpg"),
      img("/gallery/co-cjial-05.jpg"),
      img("/gallery/co-cjial-15.jpg"),
      img("/gallery/co-cjial-03.jpg"),
      img("/gallery/co-cjial-24.jpg"),
      img("/gallery/co-cjial-19.jpg"),
      img("/gallery/co-cjial-28.jpg"),
    ],
  },
  {
    id: "jopoi-2026",
    category: "accessibility",
    title_en: "JOPÓI — legislators experience accessibility barriers firsthand",
    title_es: "JOPÓI — asambleístas viven en carne propia las barreras de accesibilidad",
    caption_en:
      "First Mirror Session of the JOPÓI Project: we turned the Departmental Legislative Assembly into a space of democratic empathy. Legislators were blindfolded to experience the system's barriers, while 10 young people with visual disabilities and neurodivergent youth took the official seats. Broadcast live to 24,000+ people. Every insight feeds the Departmental Youth Declaration we aim to raise into law.",
    caption_es:
      "Primera Sesión Espejo del Proyecto JOPÓI: convertimos la Asamblea Legislativa Departamental en un espacio de empatía democrática. Los asambleístas fueron vendados para experimentar las barreras del sistema, mientras 10 jóvenes con discapacidad visual y jóvenes neurodivergentes ocuparon los curules oficiales. Transmitido en vivo a más de 24.000 personas. Cada aporte alimenta la Declaración Juvenil Departamental que buscamos elevar a rango de ley.",
    location_en: "Departmental Legislative Assembly, Santa Cruz",
    location_es: "Asamblea Legislativa Departamental, Santa Cruz",
    date_en: "2026",
    date_es: "2026",
    media: [
      img("/gallery/co-jopoi-01.jpg"),
      img("/gallery/co-jopoi-02.jpg"),
      img("/gallery/co-jopoi-04.jpg"),
    ],
  },
  {
    id: "cosp19-2026",
    category: "global",
    title_en: "Cristhian speaks at the United Nations — COSP19, New York",
    title_es: "Cristhian habla en las Naciones Unidas — COSP19, Nueva York",
    caption_en:
      "Our co-founder Cristhian Vargas represented Bolivia at the 19th Conference of States Parties to the CRPD (COSP19) at UN Headquarters in New York — bringing the voices of indigenous communities and persons with disabilities to the world's highest human-rights stage.",
    caption_es:
      "Nuestro co-founder Cristhian Vargas representó a Bolivia en la 19ª Conferencia de los Estados Parte de la CDPD (COSP19) en la sede de la ONU en Nueva York — llevando las voces de las comunidades indígenas y de las personas con discapacidad al máximo escenario de derechos humanos del mundo.",
    location_en: "United Nations Headquarters, New York",
    location_es: "Sede de las Naciones Unidas, Nueva York",
    date_en: "June 2026",
    date_es: "Junio 2026",
    media: [
      vid("/gallery/cristhian-vargas-cosp19-speech-united-nations.mp4"),
      img("/gallery/cristhian-vargas-cosp19-general-assembly-hall.jpg"),
      img("/gallery/cristhian-vargas-cosp19-united-nations-session.jpg"),
      img("/gallery/cristhian-vargas-cosp19-un-emblem-new-york.jpg"),
      img("/gallery/bookcubers-delegation-cosp19-united-nations-new-york.jpg"),
      img("/gallery/cristhian-vargas-cosp19-general-assembly-new-york.jpg"),
    ],
  },
  {
    id: "unesco-2025",
    category: "global",
    title_en: "UNESCO world champion in audiovisual production",
    title_es: "Campeón mundial UNESCO en producción audiovisual",
    caption_en:
      "Carlos Olivera was awarded as UNESCO world champion in audiovisual production — proof that stories told from Bolivia can win on the world stage.",
    caption_es:
      "Carlos Olivera fue premiado como campeón mundial UNESCO en producción audiovisual — prueba de que las historias contadas desde Bolivia pueden ganar en el escenario mundial.",
    location_en: "UNESCO Global Forum",
    location_es: "Foro Global de la UNESCO",
    date_en: "2025",
    date_es: "2025",
    media: [
      img("/gallery/carlos-olivera-siendo-premiado-campeon-mundial-unesco-en-produccion-au.jpg"),
      img("/gallery/carlos-olivera-siendo-premiado-campeon-mundial-unesco-en-produccion-au-2.jpg"),
      img("/gallery/carlos-olivera-siendo-premiado-campeon-mundial-unesco-en-produccion-au-3.jpg"),
    ],
  },
  {
    id: "unodc-tokyo",
    category: "global",
    title_en: "Co-chairing the 4th UNODC Global Youth Forum in Tokyo",
    title_es: "Co-chair en el 4º Global Youth Forum de la UNODC en Tokio",
    caption_en:
      "Carlos Olivera served as co-chair at the 4th UNODC Global Youth Forum in Tokyo, Japan — representing Latin American youth in global conversations on justice and crime prevention.",
    caption_es:
      "Carlos Olivera fue co-chair en el 4º Global Youth Forum de la UNODC en Tokio, Japón — representando a la juventud latinoamericana en las conversaciones globales sobre justicia y prevención del delito.",
    location_en: "Tokyo, Japan",
    location_es: "Tokio, Japón",
    date_en: "UNODC Global Youth Forum",
    date_es: "Global Youth Forum de la UNODC",
    media: [
      img("/gallery/carlos-olivera-fundador-de-bookcubers-como-co-chair-en-el-4-global-you.jpg"),
      img("/gallery/carlos-olivera-fundador-de-bookcubers-en-el-4-global-youth-forum-de-la.jpg"),
      img("/gallery/carlos-olivera-fundador-de-bookcubers-en-el-4-global-youth-forum-de-la-2.jpg"),
    ],
  },
  {
    id: "ldc3-un",
    category: "global",
    title_en: "Bolivia's delegate at the UN LDC3 Conference",
    title_es: "Delegado de Bolivia en la Conferencia LDC3 de la ONU",
    caption_en:
      "Carlos Olivera addressed the plenary session as Bolivia's delegate at the UN Conference on Least Developed Countries (LDC3) — watch his speech.",
    caption_es:
      "Carlos Olivera habló en la sesión plenaria como delegado de Bolivia en la Conferencia de la ONU sobre Países Menos Adelantados (LDC3) — mira su discurso.",
    location_en: "United Nations — LDC3",
    location_es: "Naciones Unidas — LDC3",
    date_en: "UN Plenary Session",
    date_es: "Sesión Plenaria de la ONU",
    media: [
      vid("/gallery/un-plenary-session-speech-ldc3-carlos-andres-olivera-caballero-bookcub.mp4"),
      img("/gallery/carlos-fundador-de-bookcubers-delegado-de-bolivia-en-ldc3-de-naciones-.jpg"),
    ],
  },
  {
    id: "youth-democracy",
    category: "global",
    title_en: "Indigenous digital sovereignty at the Youth Democracy Network",
    title_es: "Soberanía digital indígena en la Youth Democracy Network",
    caption_en:
      "Carlos took our flag to the Youth Democracy Network: technology governed by and for communities — including indigenous ones — is a democratic right.",
    caption_es:
      "Carlos llevó nuestra bandera a la Youth Democracy Network: la tecnología gobernada por y para las comunidades — incluidas las indígenas — es un derecho democrático.",
    location_en: "Youth Democracy Network",
    location_es: "Youth Democracy Network",
    date_en: "International forum",
    date_es: "Foro internacional",
    media: [
      img("/gallery/carlos-fundador-de-bookcubers-en-la-youth-democracy-network-promoviend.jpg"),
      img("/gallery/carlos-fundador-de-bookcubers-en-la-youth-democracy-network-promoviend-2.jpg"),
      img("/gallery/carlos-fundador-de-bookcubers-en-la-youth-democracy-network-promoviend-3.jpg"),
      img("/gallery/carlos-fundador-de-bookcubers-en-la-youth-democracy-network-promoviend-4.jpg"),
    ],
  },
  {
    id: "premio-joven",
    category: "global",
    title_en: "Premio Joven — Santa Cruz Government's highest youth honor",
    title_es: "Premio Joven — el galardón más importante de la Gobernación",
    caption_en:
      "Carlos and Fernando received the Premio Joven, the Santa Cruz Government's most important award, for their work in environment and youth development.",
    caption_es:
      "Carlos y Fernando recibieron el Premio Joven, el galardón más importante de la Gobernación de Santa Cruz, por su trabajo en medio ambiente y desarrollo juvenil.",
    location_en: "Santa Cruz, Bolivia",
    location_es: "Santa Cruz, Bolivia",
    date_en: "Gobernación de Santa Cruz",
    date_es: "Gobernación de Santa Cruz",
    media: [img("/gallery/carlos-y-fernando-miembros-de-bookcubers-recibiendo-el-premio-joven-ga.jpg")],
  },
  {
    id: "gengo-academy",
    category: "sovereignty",
    title_en: "Gengo Academy in action — AI and digital rights in Guaraní",
    title_es: "Gengo Academy en acción — IA y derechos digitales en guaraní",
    caption_en:
      "Gengo Academy brings technology, AI and digital rights to Guaraní communities in their own language, funded by a U.S. State Department AEIF grant. Recognized publicly by the U.S. Embassy and the Municipal Government.",
    caption_es:
      "Gengo Academy lleva tecnología, IA y derechos digitales a las comunidades guaraníes en su propia lengua, con el financiamiento de un grant AEIF del Departamento de Estado de EE.UU. Reconocida públicamente por la Embajada de EE.UU. y el Gobierno Municipal.",
    location_en: "Charagua, Bolivia",
    location_es: "Charagua, Bolivia",
    date_en: "Ongoing program",
    date_es: "Programa en curso",
    media: [
      vid("/gallery/video-de-gengo-academy-en-accion-bookcubers.mp4"),
      vid("/gallery/video-de-gengo-academy-en-accion-bookcubers-2.mp4"),
      vid("/gallery/video-de-gengo-academy-en-accion-bookcubers-3.mp4"),
      img("/gallery/u-s-embassy-post-on-gengo-academy.jpg"),
      img("/gallery/municipal-government-post-on-gengo-academy-bookcubers.jpg"),
    ],
    credit: null,
  },
  {
    id: "soberania-lomerio",
    category: "sovereignty",
    title_en: "Indigenous digital sovereignty in San Antonio de Lomerío",
    title_es: "Soberanía digital indígena en San Antonio de Lomerío",
    caption_en:
      "Our Indigenous Digital Sovereignty workshops reached the community of San Antonio de Lomerío (Zapocó) — because no community should be a spectator of the digital age.",
    caption_es:
      "Nuestros talleres de Soberanía Digital Indígena llegaron a la comunidad de San Antonio de Lomerío (Zapocó) — porque ninguna comunidad debería ser espectadora de la era digital.",
    location_en: "San Antonio de Lomerío, Bolivia",
    location_es: "San Antonio de Lomerío, Bolivia",
    date_en: "Community workshop",
    date_es: "Taller comunitario",
    media: [
      img("/gallery/actividad-de-soberania-digital-indigena-bookcubers-en-la-comunidad-san.jpg"),
      img("/gallery/actividad-de-soberania-digital-indigena-bookcubers-en-la-comunidad-san-2.jpg"),
    ],
  },
  {
    id: "zamuco-protocol",
    category: "territory",
    title_en: "The Zamuco Protocol — walking the Ayoreode Corridor",
    title_es: "The Zamuco Protocol — recorriendo el Corredor Ayoreode",
    caption_en:
      "With The Zamuco Protocol we accompany Ayoreode communities in defending their territory: field visits along the Ayoreode Corridor, community consultations on the TEJIDO, refurbished classrooms with UAGRM, and university recognition for our coordinator Fernando Aireyú Chajtur.",
    caption_es:
      "Con The Zamuco Protocol acompañamos a las comunidades ayoreode en la defensa de su territorio: recorridos por el Corredor Ayoreode, consultas comunitarias sobre el TEJIDO, salas refaccionadas junto a la UAGRM y el reconocimiento universitario a nuestro coordinador Fernando Aireyú Chajtur.",
    location_en: "Ayoreode Corridor, Bolivian Chaco",
    location_es: "Corredor Ayoreode, Chaco boliviano",
    date_en: "Ongoing program",
    date_es: "Programa en curso",
    media: [
      img("/gallery/fernando-y-voluntarios-de-bookcubers-recorriendo-el-corredor-ayoreode-.jpg"),
      img("/gallery/fernando-y-voluntarios-de-bookcubers-recorriendo-el-corredor-ayoreode--2.jpg"),
      img("/gallery/fernando-y-voluntarios-de-bookcubers-consultando-con-con-las-comunidad.jpg"),
      img("/gallery/fernando-y-voluntarios-de-bookcubers-consultando-con-con-las-comunidad-2.jpg"),
      img("/gallery/fernando-y-voluntarios-de-bookcubers-consultando-con-con-las-comunidad-3.jpg"),
      img("/gallery/fernando-chajtur-inaugurando-salas-refaccionadas-en-conjunto-con-la-ua.jpg"),
      img("/gallery/fernando-aireyu-chajtur-recibiendo-un-reconocimiento-de-la-uagrm-por-s.jpg"),
    ],
  },
  {
    id: "huertos-aula",
    category: "territory",
    title_en: "Classroom gardens — where ecology is learned by planting",
    title_es: "Huertos-aula — donde la ecología se aprende sembrando",
    caption_en:
      "Our classroom-garden program turns schoolyards into living labs: students learn ecology, food sovereignty and teamwork by planting. The community response made it to local media and social networks.",
    caption_es:
      "Nuestro programa de huertos-aula convierte los patios escolares en laboratorios vivos: los estudiantes aprenden ecología, soberanía alimentaria y trabajo en equipo sembrando. La respuesta de la comunidad llegó a medios locales y redes.",
    location_en: "Santa Cruz, Bolivia",
    location_es: "Santa Cruz, Bolivia",
    date_en: "Ongoing program",
    date_es: "Programa en curso",
    media: [
      img("/gallery/actividad-huertos-aula-bookcubers.jpg"),
      img("/gallery/actividad-huertos-aula-bookcubers-2.jpg"),
      img("/gallery/actividad-huertos-aula-bookcubers-3.jpg"),
      img("/gallery/post-en-redes-sobre-nuestros-huertos-aula-bookcubers.jpg"),
      img("/gallery/post-en-redes-sobre-nuestros-huertos-aula-bookcubers-2.jpg"),
    ],
  },
  {
    id: "escuela-aguarague",
    category: "education",
    title_en: "Itinerant School of the Aguaragüe",
    title_es: "Escuela Itinerante del Aguaragüe",
    caption_en:
      "Our Itinerant School travels to where the classroom doesn't reach: critical reading, environment and leadership for youth in the communities of the Aguaragüe.",
    caption_es:
      "Nuestra Escuela Itinerante viaja hasta donde el aula no llega: lectura crítica, medio ambiente y liderazgo para jóvenes en las comunidades del Aguaragüe.",
    location_en: "Aguaragüe, Bolivian Chaco",
    location_es: "Aguaragüe, Chaco boliviano",
    date_en: "Field program",
    date_es: "Programa de campo",
    media: [
      img("/gallery/actividad-escuela-itinerante-aguarague-bookcubers.jpg"),
      img("/gallery/actividad-escuela-itinerante-aguarague-bookcubers-2.jpg"),
      img("/gallery/actividad-escuela-itinerante-aguarague-bookcubers-3.jpg"),
      img("/gallery/actividad-escuela-itinerante-aguarague-bookcubers-4.jpg"),
    ],
  },
  {
    id: "media-literacy-lede",
    category: "education",
    title_en: "Media literacy with the LEDE method",
    title_es: "Alfabetización mediática con el método LEDE",
    caption_en:
      "Training young people to detect misinformation with our LEDE method — because critical reading is self-defense in the digital age.",
    caption_es:
      "Capacitamos a jóvenes para detectar desinformación con nuestro método LEDE — porque la lectura crítica es defensa personal en la era digital.",
    location_en: "Santa Cruz, Bolivia",
    location_es: "Santa Cruz, Bolivia",
    date_en: "Training workshop",
    date_es: "Taller de capacitación",
    media: [
      img("/gallery/actividad-de-capacitacion-en-media-literacy-y-el-metodo-lede-bookcuber.jpg"),
      img("/gallery/actividad-de-capacitacion-en-media-literacy-y-el-metodo-lede-bookcuber-2.jpg"),
      img("/gallery/actividad-de-capacitacion-en-media-literacy-y-el-metodo-lede-bookcuber-3.jpg"),
    ],
  },
  {
    id: "doble-helice",
    category: "education",
    title_en: "Creative double helix in the Deguí and Garay communities",
    title_es: "Doble hélice creativa en las comunidades Deguí y Garay",
    caption_en:
      "Creative workshops in the Deguí and Garay communities: art and science woven together so children create — not just repeat.",
    caption_es:
      "Talleres creativos en las comunidades Deguí y Garay: arte y ciencia entrelazados para que los niños creen — no solo repitan.",
    location_en: "Deguí & Garay communities, Bolivia",
    location_es: "Comunidades Deguí y Garay, Bolivia",
    date_en: "Community workshop",
    date_es: "Taller comunitario",
    media: [
      img("/gallery/actividad-de-doble-helice-creativa-bookcubers-en-la-comunidad-degui-y-.jpg"),
      img("/gallery/actividad-de-doble-helice-creativa-bookcubers-en-la-comunidad-degui-y--2.jpg"),
      img("/gallery/actividad-de-doble-helice-creativa-bookcubers-en-la-comunidad-degui-y--3.jpg"),
    ],
  },
  {
    id: "creatividad-estructural",
    category: "education",
    title_en: "Structural creativity workshops",
    title_es: "Talleres de creatividad estructural",
    caption_en:
      "Our structural-creativity workshops teach youth to build ideas the way engineers build bridges: with imagination and method.",
    caption_es:
      "Nuestros talleres de creatividad estructural enseñan a los jóvenes a construir ideas como los ingenieros construyen puentes: con imaginación y método.",
    location_en: "Santa Cruz, Bolivia",
    location_es: "Santa Cruz, Bolivia",
    date_en: "Workshop series",
    date_es: "Serie de talleres",
    media: [
      img("/gallery/actividad-de-creatividad-estructural-bookcubers-bookcubers.jpg"),
      img("/gallery/actividad-de-creatividad-estructural-bookcubers-bookcubers-2.jpg"),
      img("/gallery/actividad-de-creatividad-estructural-bookcubers-bookcubers-3.jpg"),
      img("/gallery/actividad-de-creatividad-estructural-bookcubers-bookcubers-4.jpg"),
    ],
  },
  {
    id: "jovenes-drafters",
    category: "education",
    title_en: "Training the Youth Drafters Platform",
    title_es: "Entrenando a la Plataforma de Jóvenes Drafters",
    caption_en:
      "Bookcubers trains the Youth Drafters Platform: young people learning to draft the documents, declarations and proposals that shape public decisions.",
    caption_es:
      "Bookcubers entrena a la Plataforma de Jóvenes Drafters: jóvenes que aprenden a redactar los documentos, declaraciones y propuestas que moldean las decisiones públicas.",
    location_en: "Santa Cruz, Bolivia",
    location_es: "Santa Cruz, Bolivia",
    date_en: "Training program",
    date_es: "Programa de formación",
    media: [
      img("/gallery/bookcubers-entrena-a-la-plataforma-de-jovenes-drafters-bookcubers.jpg"),
      img("/gallery/bookcubers-entrena-a-la-plataforma-de-jovenes-drafters-bookcubers-2.jpg"),
      img("/gallery/bookcubers-entrena-a-la-plataforma-de-jovenes-drafters-bookcubers-3.jpg"),
      img("/gallery/bookcubers-entrena-a-la-plataforma-de-jovenes-drafters-bookcubers-4.jpg"),
    ],
  },
  {
    id: "voluntarios-camiri",
    category: "community",
    title_en: "Growing our volunteer network in Camiri and Charagua",
    title_es: "Creciendo nuestra red de voluntarios en Camiri y Charagua",
    caption_en:
      "Bookcubers members recruiting new volunteers in the indigenous communities of Camiri and Charagua — the network that makes every program possible.",
    caption_es:
      "Miembros de Bookcubers captando nuevos voluntarios en las comunidades indígenas de Camiri y Charagua — la red que hace posible cada programa.",
    location_en: "Camiri & Charagua, Bolivia",
    location_es: "Camiri y Charagua, Bolivia",
    date_en: "Community outreach",
    date_es: "Trabajo comunitario",
    media: [
      img("/gallery/miembros-de-bookcubers-captando-nuevos-voluntarios-en-las-comunidades-.jpg"),
      img("/gallery/miembros-de-bookcubers-captando-nuevos-voluntarios-en-las-comunidades--2.jpg"),
      img("/gallery/miembros-de-bookcubers-captando-nuevos-voluntarios-en-las-comunidades--3.jpg"),
    ],
  },
];
