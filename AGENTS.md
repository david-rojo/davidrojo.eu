# AGENTS.md

## Contexto del proyecto

Este repositorio contiene la web personal estática de `davidrojo.eu`.

Actualmente es un proyecto HTML/CSS/JS estático basado en una plantilla personalizada. La web tiene una única URL pública y dos idiomas:

- Español como idioma principal y fallback HTML visible sin JavaScript.
- Inglés como idioma alternativo mediante i18n en cliente.

La estrategia actual es:

- `https://davidrojo.eu/` como única URL pública.
- No mantener `/en/` como URL pública.
- No usar parámetros tipo `?lang=en`.
- Mantener una única página HTML principal con contenido español como fallback.
- Usar `js/i18n.js` para cambiar a inglés en cliente y guardar preferencia en `localStorage`.

## Publicación y hosting

- La web se publica mediante GitHub Pages usando GitHub Actions.
- El workflow de publicación está en `.github/workflows/deploy.yml`.
- En GitHub Pages, la fuente debe estar configurada como `GitHub Actions`, no `Deploy from a branch`.
- El dominio `davidrojo.eu` se gestiona en Hostinger.
- No asumir que el servidor de producción ejecuta PHP.
- No asumir que `.htaccess` tiene efecto en producción si el tráfico se sirve desde GitHub Pages.
- Las rutas deben funcionar como sitio estático compatible con GitHub Pages.
- Para redirecciones en GitHub Pages, preferir soluciones compatibles con HTML estático o configuración propia de GitHub Pages, no reglas Apache.
- La estructura principal esperada es una única página pública: `https://davidrojo.eu/`.
- Si se visita una ruta inexistente como `/en/`, debe resolverse mediante la `404.html` del sitio.

## Reglas generales

- No introducir frameworks salvo petición explícita.
- Priorizar cambios pequeños, claros e incrementales.
- Mantener la web como sitio estático salvo que se apruebe otra arquitectura.
- Evitar añadir dependencias nuevas.
- Antes de cambiar estructura, SEO, scripts o idiomas, revisar el HTML base y `js/i18n.js`.
- No eliminar contenido existente salvo petición explícita.
- No modificar ficheros no relacionados con la tarea.
- Mantener el código simple y legible.

## Idiomas y SEO

- El español es el idioma principal por defecto.
- El inglés es el idioma alternativo.
- La web usa una única URL pública: `https://davidrojo.eu/`.
- El contenido base de `index.html` debe estar en español y ser visible sin depender de JavaScript.
- El cambio a inglés se realiza en cliente mediante `js/i18n.js`.
- La preferencia de idioma se guarda en `localStorage`.
- No crear `en/index.html` ni restaurar `/en/` salvo decisión explícita.
- Evitar URLs tipo `?lang=es` o `?lang=en`.
- La URL canonical debe apuntar a `https://davidrojo.eu/`.
- No usar `hreflang`, porque no hay URLs separadas por idioma.
- `js/i18n.js` debe actualizar dinámicamente `<html lang>`, `<title>`, `meta description`, Open Graph, Twitter Cards y JSON-LD cuando cambie el idioma.
- Si se añaden metadatos Open Graph o Twitter Cards, deben tener claves traducidas en `js/i18n.js`.
- Si se añaden datos estructurados, preferir JSON-LD con `Person` y/o `ProfilePage`, manteniendo URL única.

## Accesibilidad

- Usar HTML semántico siempre que sea posible.
- La página debe tener un único `<h1>` claro.
- Las secciones principales deben seguir una jerarquía correcta de encabezados.
- Los controles interactivos deben ser `<button>` cuando ejecuten acciones.
- Los enlaces que abren nueva pestaña deben incluir `rel="noopener noreferrer"`.
- Los enlaces solo con icono deben tener nombre accesible mediante texto o `aria-label`.
- Las imágenes informativas deben tener `alt` descriptivo.
- Las imágenes decorativas deben usar `alt=""`.
- Los formularios deben tener etiquetas `<label>` asociadas.
- No usar placeholders como única etiqueta del campo.
- Los iframes deben tener atributo `title`.
- Mantener navegación por teclado.
- Mantener estados de foco visibles.
- Respetar `prefers-reduced-motion` al añadir o modificar animaciones.

## Rendimiento

- No añadir scripts pesados para interacciones simples.
- Evitar cargar librerías no utilizadas.
- Optimizar imágenes antes de añadirlas.
- Preferir WebP o AVIF cuando sea apropiado.
- Añadir dimensiones `width` y `height` a imágenes relevantes.
- Usar `loading="lazy"` en imágenes e iframes no críticos.
- No añadir scripts de terceros salvo aprobación explícita.
- Si se usan fuentes externas, limitar pesos y variantes.
- Evitar bundles grandes de iconos.
- Preferir SVG inline o subconjuntos mínimos de iconos.

## JavaScript

- El JavaScript actual depende de jQuery y plugins heredados de plantilla.
- No añadir nuevos plugins de jQuery salvo necesidad clara.
- Antes de modificar `js/main.js`, comprobar que los elementos del DOM relacionados existen realmente.
- El i18n actual vive en `js/i18n.js` y funciona en cliente sobre una única URL pública.
- Mantener `js/i18n.js` simple, sin dependencias nuevas y basado en `data-i18n`, `data-i18n-attr` y `data-i18n-html`.
- Usar `data-i18n-html` solo para contenido estático controlado del repositorio que necesite enlaces o marcado HTML.
- Preferir mejora progresiva: el contenido principal debería ser visible sin depender de JavaScript.
- Eliminar o desactivar código muerto solo después de verificar que no se usa.

## CSS

- Preservar la identidad visual existente salvo petición de rediseño.
- Evitar cambios CSS globales que puedan afectar a muchas secciones.
- Preferir selectores concretos.
- No añadir resets globales ni sistemas de utilidades sin aprobación.
- Si se modifica responsive, revisar escritorio y móvil.
- Evitar animaciones nuevas salvo que mejoren claramente la experiencia.
- Las animaciones deben respetar reducción de movimiento.

## Formularios y contacto

- La sección de contacto actual no muestra formulario; usa enlaces directos como `mailto:` y LinkedIn.
- No asumir soporte PHP en producción: la publicación principal se realiza como sitio estático en GitHub Pages.
- No reintroducir formularios que dependan de PHP en GitHub Pages.
- Si se mejora el contacto, preferir una solución simple y fiable:
  - enlace `mailto:`
  - servicio externo aprobado
  - backend explícitamente definido
- Nunca añadir credenciales SMTP, API keys ni secretos al repositorio.
- Si se añade un formulario en el futuro, debe usar una solución compatible con sitio estático o un backend explícito.

## Dependencias y ficheros vendorizados

El repositorio contiene librerías y assets heredados de plantilla.

- No actualizar librerías vendorizadas sin necesidad clara.
- No eliminar ficheros vendorizados sin comprobar primero su uso.
- Posibles áreas de limpieza:
  - Ionicons si se sustituyen sus usos restantes por SVG mínimo.
  - scripts o estilos de blog/portfolio no usados.
  - librerías heredadas que no aparezcan referenciadas por `index.html` o `js/main.js`.

## Roadmap

`doc/ROADMAP.md` es un documento de referencia y planificación. No debe tratarse como una instrucción obligatoria para cualquier cambio pequeño.

Consultarlo cuando se vayan a tomar decisiones no triviales sobre arquitectura, SEO, idiomas, rendimiento, accesibilidad, limpieza técnica o experiencia de usuario.

Orden recomendado de prioridad:

1. SEO e idiomas.
2. Rendimiento y optimización de assets.
3. Accesibilidad.
4. Limpieza técnica.
5. Mantenibilidad e i18n.
6. Diseño y experiencia de usuario.

## Checklist de verificación

Después de realizar cambios, comprobar según aplique:

- La página renderiza correctamente en español por defecto.
- El cambio a inglés funciona desde el selector de idioma.
- La preferencia de idioma se guarda y restaura desde `localStorage`.
- `/en/` devuelve 404.
- `lang`, canonical y metadatos dinámicos son correctos.
- No hay `hreflang` ni enlaces internos a rutas de idioma separadas.
- No hay errores evidentes en consola.
- No hay rutas rotas a assets locales.
- La sección de contacto mantiene enlaces funcionales.
- La navegación por teclado sigue funcionando.
- Los enlaces con `target="_blank"` incluyen `rel="noopener noreferrer"`.
- Las imágenes tienen `alt` adecuado.
- El layout móvil sigue siendo usable.

## Git

- No hacer commits salvo petición explícita.
- Antes de hacer commit, revisar `git status` y `git diff`.
- No revertir cambios del usuario salvo petición explícita.
- Mantener commits pequeños y enfocados.
- Usar mensajes de commit claros y descriptivos.
