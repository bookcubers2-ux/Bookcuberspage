# CLAUDE.md — sitio web de Bookcubers

Instrucciones para trabajar en este repositorio. Léelas antes de tocar nada.

## Qué es esto

El sitio público de la **Asociación Juvenil Bookcubers** (bookcubers.org), una organización boliviana sin fines de lucro que trabaja en educación, acceso a la información, inclusión, lenguas originarias y discapacidad.

Es una SPA en **Vite + React + TypeScript + Tailwind + shadcn/ui (Radix)**. No hay gestor de contenidos: todo se edita en código.

- Repositorio: `bookcubers2-ux/Bookcuberspage` · rama `main`
- Despliegue: **Vercel, automático**. Todo lo que entra a `main` se publica solo.
- Quienes editan: Cristhian Vargas y Carlos Olivera. **Escribe en español al explicar los cambios.**

## Comandos

```bash
npm install
npm run dev      # servidor local
npm run build    # compila a dist/
npm run lint
```

## Lo primero que hay que entender: el contenido está separado del código

**El 90% de los pedidos se resuelven editando solo `src/data/`. No toques componentes si no hace falta.**

| Archivo | Qué contiene |
|---|---|
| `src/data/activities.ts` | Las actividades. Campos: `title`, `date`, `year`, `description`, `category`, `sdgs`, `location`, `partners`, `achievement`, `beneficiaries` |
| `src/data/board.ts` | El directorio. Las fotos se importan desde `src/assets/board/` |
| `src/data/gallery.ts` | ⚠️ **AUTOGENERADO por `build_gallery.js`. Nunca editarlo a mano**, se regenera y se pierden los cambios |
| `src/data/posts.ts` | Publicaciones del feed de la galería. `category` debe coincidir con un id de `galleryCategories` |

**Para agregar una actividad:** copia un bloque existente en `activities.ts`, cambia los valores, respeta el tipo de `category` (es una unión cerrada de strings) y pon los ODS como números.

**Para agregar fotos:** van a `public/gallery/`, luego se corre `build_gallery.js`, y después se agrega el post en `posts.ts`.

## Reglas que no se rompen

1. **No borrar ni modificar el bloque `rewrites` de `vercel.json`.** Es lo que hace que rutas como `/impact` funcionen al recargar. Sin eso, todas las páginas menos la portada dan 404. Lo mismo vale para `public/_redirects`, que se mantiene por si se vuelve a Netlify.
2. **No editar `src/data/gallery.ts` a mano.**
3. **No cambiar la paleta, la tipografía ni la identidad visual** salvo pedido explícito.
4. **No agregar dependencias nuevas** sin que lo pidan. Ya hay 49 y el proyecto usa shadcn/ui: casi todo componente que haga falta ya está en `src/components/ui`.
5. **Correr `npm run build` antes de dar un cambio por terminado.** Si no compila, no se publica, y como el despliegue es automático un error entra directo a producción.
6. **Las 17 rutas están declaradas en `src/App.tsx`.** Si se agrega una página, hay que agregar también su ruta ahí.

## Honestidad de las cifras

Este sitio representa a una organización real ante financiadores e instituciones. **Nunca inventes ni redondees hacia arriba una cifra de impacto.** Si un dato no está en el repositorio o no lo dio Cristhian o Carlos, pregunta en vez de estimar.

Datos verificados, por si hacen falta:
- JOPÓI: **2.230** personas ciegas y con discapacidad visual usuarias. Piloto con la Asamblea Legislativa Departamental de Santa Cruz, **50 documentos legislativos al mes**
- Gengo Academy: la proporción de jóvenes capaces de sostener una conversación básica en guaraní pasó de **3% a 52%**, medido antes y después
- Vigía Plurilingüe: **400 usuarios**, más de **150 documentos** traducidos al guaraní
- Personería jurídica: Resolución Administrativa RA SJ SJD DAJ PJ 2026 N° 229, del 27 de marzo de 2026

⚠️ **7.305 no son usuarios**: es el registro nacional del Instituto Boliviano de la Ceguera. Solo se usa como denominador y citando la fuente.

## Estructura

```
src/
  pages/        17 páginas, una por ruta
  components/
    home/       secciones de la portada
    layout/     header, footer, navegación
    ui/         shadcn/ui, no tocar salvo necesidad
  data/         ← el contenido vive acá
  assets/       imágenes importadas por el código
public/         archivos servidos tal cual: gallery/, art/, videos/, _redirects
```
