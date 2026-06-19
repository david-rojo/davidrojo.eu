# AGENTS.md

## Contexto del proyecto

Este repositorio contiene la web personal estática de `davidrojo.eu`.

Actualmente es un proyecto HTML/CSS/JS estático basado en una plantilla personalizada. La web tiene dos versiones de idioma:

- Español como idioma principal.
- Inglés como idioma alternativo.

La estrategia recomendada a futuro es:

- `https://davidrojo.eu/` para español.
- `https://davidrojo.eu/en/` para inglés.
- Mantener una única fuente o plantilla siempre que sea posible.
- Generar dos páginas HTML estáticas finales para conservar buen SEO.

## Publicación y hosting

- La web se publica mediante GitHub Pages usando GitHub Actions.
- El workflow de publicación está en `.github/workflows/deploy.yml`.
- En GitHub Pages, la fuente debe estar configurada como `GitHub Actions`, no `Deploy from a branch`.
- El dominio `davidrojo.eu` se gestiona en Hostinger.
- No asumir que el servidor de producción ejecuta PHP.
- No asumir que `.htaccess` tiene efecto en producción si el tráfico se sirve desde GitHub Pages.
- Las rutas deben funcionar como sitio estático compatible con GitHub Pages.
- Para redirecciones en GitHub Pages, preferir soluciones compatibles con HTML estático o configuración propia de GitHub Pages, no reglas Apache.
- La estructura principal esperada es:
  - Español: `https://davidrojo.eu/`
  - Inglés: `https://davidrojo.eu/en/`

## Reglas generales

- No introducir frameworks salvo petición explícita.
- Priorizar cambios pequeños, claros e incrementales.
- Mantener la web como sitio estático salvo que se apruebe otra arquitectura.
- Evitar añadir dependencias nuevas.
- Antes de cambiar estructura, SEO, scripts o idiomas, revisar ambas versiones.
- No eliminar contenido existente salvo petición explícita.
- No modificar ficheros no relacionados con la tarea.
- Mantener el código simple y legible.

## Idiomas y SEO

- El español es el idioma principal por defecto.
- El inglés es el idioma alternativo.
- No implementar el cambio de idioma únicamente con JavaScript de cliente.
- Cada idioma debe tener una URL propia e indexable.
- Estructura preferida:
  - Español: `https://davidrojo.eu/`
  - Inglés: `https://davidrojo.eu/en/`
- Evitar URLs tipo `?lang=es` o `?lang=en`.
- Cada página de idioma debe tener:
  - `<html lang="es">` o `<html lang="en">`
  - `<title>` específico
  - `meta description` específica
  - URL canonical
  - enlaces `hreflang`
  - `hreflang="x-default"` apuntando a la home en español
- No duplicar títulos ni descripciones entre idiomas.
- Si se añaden metadatos Open Graph o Twitter Cards, deben estar traducidos por idioma.
- Si se añaden datos estructurados, preferir JSON-LD con `Person` y/o `ProfilePage`.

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
- No añadir traducción dinámica en cliente como estrategia principal de i18n.
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
  - FontAwesome completo
  - Google Maps JS
  - LESS sin pipeline
  - scripts o estilos de blog/portfolio no usados

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

- La versión española renderiza correctamente.
- La versión inglesa renderiza correctamente.
- Los enlaces de cambio de idioma apuntan a URLs correctas.
- `lang`, canonical y `hreflang` son correctos.
- No hay errores evidentes en consola.
- No hay rutas rotas a assets locales.
- La sección de contacto mantiene enlaces funcionales y el mapa carga correctamente.
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
