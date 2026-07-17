# Vigía Plurilingüe

**Una inteligencia artificial ciudadana, abierta y plurilingüe que fiscaliza, traduce y devuelve cada sesión de la Asamblea Legislativa Departamental de Santa Cruz a la juventud y a los pueblos originarios — en sus propias lenguas y en tiempo real.**

> *"No es un observatorio que mira de lejos: es una herramienta política que obliga al Estado a hablar el idioma de quienes representa."*

Iniciativa de incidencia política · Foro Nacional de Jóvenes (FES Bolivia) · Santa Cruz, Bolivia.

---

## ¿Qué es?

Vigía Plurilingüe es un prototipo que demuestra cómo la inteligencia artificial puede devolver la información pública a la ciudadanía y a los pueblos indígenas **en su propia lengua**. Convierte una sesión legislativa (voz o documento) en texto, lo traduce al **guaraní** y genera un **boletín ciudadano** con voz y PDF, listo para circular por radios, redes y apps.

## Contenido

| Archivo | Qué es |
|---|---|
| [`index.html`](index.html) | **App funcional (MVP)** — asistente de 4 pasos: **① Captura** (graba con micrófono o sube/pega un documento) → **② Transcripción** (voz a texto) → **③ Traducción** al guaraní (con voz) → **④ Devolución** (boletín ciudadano en guaraní y español, con PDF y opción de compartir). |
| [`presentacion.html`](presentacion.html) | **Página de presentación** de la propuesta: contexto, problema, cómo funciona, objetivos, cronograma y glosario. |

## Cómo usarlo

1. Abre **`index.html`** en tu navegador (recomendado **Microsoft Edge** para voz más natural).
2. Graba una intervención, sube un documento (`.txt` / `.pdf`) o pulsa **"Usar un ejemplo"**.
3. Avanza por los 4 pasos: transcripción → traducción → boletín.
4. Escucha en voz, descarga el PDF o comparte el boletín.

> **Requiere conexión a internet** para la transcripción por voz y la traducción. Es un prototipo: la traducción es automática y asistida; en producción se valida con **hablantes nativos** (guaraní, chiquitano y otras lenguas del oriente).

## Los 4 pasos (la lógica de Vigía)

1. **Captura** — el audio/video oficial de las sesiones, amparado en el principio de publicidad de los actos del Estado.
2. **Transcripción** — modelos de IA convierten la voz en texto e identifican cada intervención.
3. **Traducción** — el motor **Yvy.ai** vuelca el debate al guaraní y otras lenguas, con validación de hablantes nativos.
4. **Devolución** — se generan boletines, comparaciones de votos y alertas que circulan por radios comunitarias, redes y apps.

## Tecnología

HTML, CSS y JavaScript vanilla, sin dependencias pesadas. Reconocimiento de voz y síntesis de voz del navegador (Web Speech API), traducción automática en línea y generación de PDF por impresión nativa.

## Autoría

**Cristhian Mathias Vargas Menacho** — Santa Cruz, Bolivia
Co-fundador de [Bookcubers](https://bookcubers.org).
Eje: Democracia · Interculturalidad · Participación Política Juvenil.

*Palabra · Ñe'ẽ · bésiro*
