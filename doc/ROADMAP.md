# Roadmap de mejora de davidrojo.eu

## Objetivo

Documentar la evolución recomendada de la web personal `davidrojo.eu`, priorizando SEO, rendimiento, accesibilidad, mantenibilidad y experiencia de usuario.

Este documento no implica que las mejoras deban acometerse de una sola vez. La recomendación es abordarlas por fases, con cambios pequeños y verificables.

Este roadmap es una guía de planificación. No sustituye a las instrucciones operativas del repositorio ni debe aplicarse automáticamente en tareas pequeñas o no relacionadas.

## Cambios ya realizados

- Sustituido Universal Analytics por Google Analytics 4 en las páginas actuales.
- Establecido el español como página principal en `/` mediante `index.html`.
- Añadida la versión inglesa en `/en/` mediante `en/index.html`.
- Corregidos `lang`, `title`, `meta description`, canonical y `hreflang` por idioma.
- Añadidos `robots.txt` y `sitemap.xml` mínimos.
- Añadidos Open Graph y Twitter Cards localizados por idioma.
- Añadido JSON-LD mínimo con `ProfilePage` y `Person`.
- Eliminado `meta keywords` vacío de las páginas principales.
- Configurada publicación mediante GitHub Actions para GitHub Pages.
- Actualizada la referencia del favicon a `favicon_dr.ico`.
- Simplificada la sección de contacto eliminando el formulario visible.
- Eliminada la lógica JS de validación/envío de formularios heredados y la carga de `jquery.validate.js`.
- Eliminados `js/jquery.validate.js` y `mailer/` al no usarse en el sitio estático.
- Eliminada la carga de Google Maps JS API, el código `initMap` y el iframe del mapa; la ubicación queda como texto.
- Eliminado YTPlayer al no existir vídeo de fondo ni elemento `#video-bg`.
- Eliminado Owl Carousel al no existir carrusel activo en el HTML.
- Eliminada la página heredada `spanish.html`; el español queda servido desde `/`.
- Corregidos enlaces externos con `target="_blank"` y `rel="noopener noreferrer"`.
- Añadido un `<h1>` principal en las páginas de español e inglés.
- Añadidos nombres accesibles a los enlaces principales con iconos.
- Eliminado el iframe de Google Maps de la sección de contacto.
- Generada versión WebP optimizada de `images/bg/galaxy.png` y usada como fondo principal.
- Reducida la carga de Google Fonts a los pesos de Roboto usados y añadido `display=swap` con `preconnect`.
- Añadida página `404.html` personalizada compatible con GitHub Pages.
- Añadidas dimensiones, textos alternativos y carga diferida a imágenes principales y logos de clientes.
- Añadida estructura semántica básica con `<main>`, `<nav>` y títulos de sección como `<h2>`.
- Convertido el menú hamburguesa en un botón accesible con nombre y estado expandido.
- Eliminado `default.php`, página residual del hosting anterior sin uso en GitHub Pages.
- Eliminada la inicialización JS de `.post-lightbox` al no existir galería/blog activo en las páginas principales.
- Traducidos textos visibles residuales en inglés de la versión española (`All` y `View Web`).
- Eliminada la carpeta `less/` al no existir pipeline de compilación y cargarse directamente los CSS finales.
- Eliminado Magnific Popup: los clientes mantienen filtros y muestran rango temporal y enlace web directamente en la tarjeta.
- Eliminados Masonry, ImagesLoaded y `masonry-filter.js`; los filtros de clientes usan JavaScript propio mínimo.

## Estrategia de idiomas

La web debería tener el español como idioma principal y el inglés como idioma alternativo.

Estructura recomendada:

- Español: `https://davidrojo.eu/`
- Inglés: `https://davidrojo.eu/en/`

No se recomienda tener una única página HTML que cambie todos los textos solo con JavaScript, porque perjudica la indexación, complica las metadatos por idioma y dificulta tener URLs compartibles correctamente.

La mejor opción es mantener una única fuente o plantilla y generar dos HTML estáticos finales:

- `/index.html` para español.
- `/en/index.html` para inglés.

Cada idioma debería tener:

- Atributo `lang` correcto.
- Título propio.
- `meta description` propia.
- URL canonical.
- Enlaces `hreflang` entre idiomas.
- `hreflang="x-default"` apuntando a la home en español.
- Metadatos sociales propios si se añaden Open Graph o Twitter Cards.

Ejemplo para la versión española:

```html
<html lang="es">
  <link rel="canonical" href="https://davidrojo.eu/" />
  <link rel="alternate" hreflang="es" href="https://davidrojo.eu/" />
  <link rel="alternate" hreflang="en" href="https://davidrojo.eu/en/" />
  <link rel="alternate" hreflang="x-default" href="https://davidrojo.eu/" />
</html>
```

Ejemplo para la versión inglesa:

```html
<html lang="en">
  <link rel="canonical" href="https://davidrojo.eu/en/" />
  <link rel="alternate" hreflang="es" href="https://davidrojo.eu/" />
  <link rel="alternate" hreflang="en" href="https://davidrojo.eu/en/" />
  <link rel="alternate" hreflang="x-default" href="https://davidrojo.eu/" />
</html>
```

## Arquitectura actual

El proyecto actual es una web estática clásica basada en una plantilla HTML personalizada.

Componentes principales:

- `index.html`: versión española actual.
- `en/index.html`: versión inglesa actual.
- `css/`: estilos compilados y librerías CSS.
- ✅ Eliminado: `less/`, fuentes LESS heredadas de la plantilla sin pipeline activo.
- `js/`: jQuery, plugins de plantilla y `main.js`.
- `images/`: foto, logos, fondo, banderas y favicon.
- ✅ Eliminado: `fontawesome/`, distribución completa de FontAwesome que ya no se cargaba.
- `fonts/`: fuentes de Ionicons.
- `.htaccess`: reglas para URLs sin extensión y actualización de peticiones inseguras.
- `CNAME`: dominio personalizado.

Problemas estructurales actuales:

- Duplicación casi completa entre los dos HTML.
- Muchas dependencias vendorizadas sin uso claro.
- Sin pipeline de build.
- Sin validación automática de HTML, CSS, accesibilidad o rendimiento.
- Mezcla de contenido, estructura, estilos inline y comportamiento JS.

## Problemas detectados

### SEO

- La versión heredada `spanish.html` se ha eliminado; la URL española principal es `/`.
- Las dos páginas principales comparten el mismo título, aunque tienen `meta description` localizada.
- ✅ Hecho: añadida página `404.html` personalizada compatible con GitHub Pages.
- ✅ Hecho: hay un `<h1>` claro en las páginas principales.
- ✅ Hecho parcial: los títulos principales de sección existentes son `<h2>`.
- ✅ Hecho parcial: las imágenes principales y logos de clientes ya tienen `alt` y dimensiones adecuados.

### Lighthouse y rendimiento

- ✅ Hecho: `images/bg/galaxy.png` se mantiene como original, pero el fondo principal usa `images/bg/galaxy.webp` optimizado.
- ✅ Hecho: las páginas principales ya no cargan FontAwesome completo; sus pocos usos se han sustituido por Ionicons ya cargados.
- ✅ Hecho: Google Fonts carga solo los pesos de Roboto usados y usa `display=swap` con `preconnect`.
- ✅ Hecho: eliminadas librerías heredadas que no se usaban o se han sustituido por código mínimo propio.
- ✅ Hecho: eliminado el iframe de Google Maps; la ubicación queda como texto.
- ✅ Hecho parcial: añadida carga diferida a logos de clientes; debe mantenerse en futuras imágenes no críticas.
- ✅ Hecho parcial: añadidas dimensiones explícitas a la foto principal y logos de clientes.
- El preloader se mantiene por decisión visual; conviene vigilar que no retrase la visualización útil.
- ✅ Hecho parcial: las animaciones y revelados respetan `prefers-reduced-motion`.

### Accesibilidad

- ✅ Hecho: añadir un `<h1>` principal claro en las páginas principales.
- ✅ Hecho parcial: añadidos `<main>`, `<nav>` y `<h2>` para títulos principales de sección.
- ✅ Hecho: el botón de menú es un `<button>` con nombre accesible y `aria-expanded`.
- 🟡 Hecho parcial: los enlaces principales con iconos ya tienen nombre accesible.
- El iframe de Google Maps se ha eliminado; conviene mantener `title` en futuros iframes.
- ✅ Hecho: corregir enlaces externos con `target="_blank"` y `rel="noopener noreferrer"`.
- ✅ Hecho: las barras de progreso incluyen semántica accesible con `role="progressbar"` y valores ARIA.
- ✅ Hecho: los filtros de clientes tienen `fieldset`, `legend` accesible y opción inicial marcada.
- ✅ Hecho: añadidos enlaces de salto al contenido principal para navegación por teclado.
- Debe revisarse contraste y estados de foco visibles.
- ✅ Hecho: las animaciones respetan mejor `prefers-reduced-motion`.

### Diseño y experiencia de usuario

- ✅ Hecho: el selector de idioma es visible como acceso fijo `ES`/`EN` sin depender de banderas.
- La navegación lateral puede resultar poco evidente en escritorio.
- ✅ Hecho: el mapa se ha eliminado porque ocupaba espacio y añadía carga externa con poco valor práctico.
- ✅ Hecho: la sección de clientes ya no usa popups; la información útil se muestra en tarjetas.
- Los porcentajes de habilidades pueden parecer arbitrarios.
- ✅ Hecho: traducidos textos visibles residuales en inglés de la versión española como `All` y `View Web`.
- Hay contenido repetido entre experiencia y clientes.
- El diseño conserva rasgos de plantilla antigua.

### Código muerto, duplicado o innecesario

- La duplicación entre `index.html` y `spanish.html` se ha eliminado retirando la página heredada.
- El código de YTPlayer se ha eliminado al no existir elemento `#video-bg`.
- ✅ Hecho: eliminado el código de Google Maps para `#map` y el iframe embebido.
- Código de `#blog-form` sin formulario de blog aparente.
- ✅ Hecho parcial: eliminada la inicialización JS de `.post-lightbox` al no existir galería activa en el HTML.
- La inicialización y assets de Owl Carousel se han eliminado al no existir carrusel real.
- ✅ Hecho: eliminado `js/ionicons.js`, que estaba presente pero comentado y no se cargaba.
- ✅ Hecho: `default.php`, residual del hosting anterior, se ha eliminado.
- ✅ Hecho: eliminada la carpeta vendorizada de FontAwesome tras sustituir sus usos por Ionicons.
- ✅ Hecho: `less/` se ha eliminado al no existir recompilación CSS.
- ✅ Hecho: eliminados los scripts condicionales para IE9 cargados por HTTP.

### Riesgos técnicos

- jQuery 2.1.4 es antiguo.
- Dependencias vendorizadas sin versiones ni proceso de actualización claro.
- Posible falta de efecto de `.htaccess` si el despliegue es GitHub Pages.
- Google Analytics usa GA4, pero queda pendiente revisar privacidad, cookies y consentimiento si se mantiene tracking.
- Uso de servicios de terceros sin documentación de privacidad o consentimiento.
- Duplicar contenido entre idiomas aumenta el riesgo de cambios inconsistentes.

## Roadmap por fases

### Fase 1: SEO e idiomas

Objetivo: que la web tenga una estructura correcta para buscadores y usuarios.

Tareas recomendadas:

- ✅ Hecho: hacer que el español sea la página principal en `/`.
- ✅ Hecho: mover o generar la versión inglesa en `/en/`.
- ✅ Hecho: corregir `lang` en cada idioma.
- ✅ Hecho: añadir `title` y `meta description` específicos por idioma.
- ✅ Hecho: añadir canonical y `hreflang`.
- ✅ Hecho: añadir `robots.txt`.
- ✅ Hecho: añadir `sitemap.xml`.
- ✅ Hecho: añadir una página 404 personalizada compatible con GitHub Pages.
- ✅ Hecho: añadir Open Graph y Twitter Cards.
- ✅ Hecho: añadir JSON-LD con `Person` o `ProfilePage`.
- ✅ Hecho: normalizar enlaces del selector de idioma.

### Fase 2: Rendimiento

Objetivo: reducir peso, mejorar Lighthouse y hacer la carga más rápida.

Tareas recomendadas:

- ✅ Hecho: optimizar `images/bg/galaxy.png` generando `images/bg/galaxy.webp`.
- Convertir imágenes grandes a WebP o AVIF.
- ✅ Hecho parcial: añadir dimensiones a imágenes.
- ✅ Hecho parcial: añadir `loading="lazy"` a imágenes e iframe no críticos.
- ✅ Hecho: eliminar Google Maps JS API si se mantiene solo el iframe.
- ✅ Hecho: eliminar el mapa embebido y dejar la ubicación como texto.
- ✅ Hecho: reducir Google Fonts a pesos estrictamente necesarios.
- ✅ Hecho: añadir `display=swap` y `preconnect` si se mantienen Google Fonts.
- ✅ Hecho: sustituir FontAwesome completo por iconos mínimos ya disponibles en Ionicons.
- Eliminar librerías no usadas.

### Fase 3: Accesibilidad

Objetivo: mejorar navegación, semántica y compatibilidad con tecnologías de asistencia.

Tareas recomendadas:

- ✅ Hecho: añadir un `<h1>` principal.
- ✅ Hecho: convertir títulos de sección a `<h2>`.
- 🟡 Hecho parcial: usar `<main>`, `<nav>`, `<section>` y `<footer>` correctamente.
- ✅ Hecho: convertir el menú hamburguesa en botón accesible.
- 🟡 Hecho parcial: añadir nombres accesibles a enlaces con iconos principales.
- ✅ Hecho: corregir `target="_blank"` con `rel="noopener noreferrer"`.
- ✅ Hecho: eliminado el iframe de Google Maps en las páginas principales.
- Revisar foco visible y navegación por teclado.
- Revisar contraste.
- ✅ Hecho: respetar `prefers-reduced-motion`.

### Fase 4: Limpieza técnica

Objetivo: eliminar código y dependencias heredadas que no aportan valor.

Tareas recomendadas:

- ✅ Hecho: eliminar YTPlayer si no hay vídeo.
- ✅ Hecho: eliminar Owl Carousel si no hay carrusel.
- ✅ Hecho: eliminar Google Maps JS API y código `initMap` si no se usa.
- 🟡 Hecho parcial: eliminar código de blog si no hay blog.
- ✅ Hecho: eliminados Magnific Popup, Masonry, ImagesLoaded y `masonry-filter.js`.
- ✅ Hecho: eliminar `mailer/` al no haber backend PHP real.
- ✅ Hecho: eliminar `default.php` si no tiene función en producción.
- ✅ Hecho: eliminar assets de FontAwesome no usados.
- ✅ Hecho: revisar si `less/` debe mantenerse o eliminarse.

### Fase 5: Mantenibilidad e i18n

Objetivo: dejar de mantener dos HTML manualmente.

Opciones:

- Script de build mínimo con una plantilla HTML y ficheros de datos por idioma.
- Astro como generador estático ligero.
- Eleventy como generador estático simple.
- Mantener dos HTML manuales temporalmente, pero solo como solución provisional.

Opción recomendada a medio plazo:

```text
src/
  data/
    es.json
    en.json
  template.html
  build.js

dist/
  index.html
  en/
    index.html
```

Alternativa con Astro:

```text
src/
  pages/
    index.astro
    en/index.astro
  components/
    Layout.astro
    Hero.astro
    Skills.astro
    Experience.astro
  i18n/
    es.ts
    en.ts
```

### Fase 6: Diseño y experiencia de usuario

Objetivo: modernizar la experiencia sin perder la identidad profesional.

Tareas recomendadas:

- Hacer el selector de idioma más visible.
- Mejorar navegación en escritorio y móvil.
- Replantear la sección inicial para destacar perfil, especialidad y contacto.
- Simplificar o eliminar popups de clientes.
- Sustituir porcentajes de habilidades por categorías, experiencia o niveles más claros.
- Reducir el peso visual de elementos heredados de plantilla.
- Revisar copy y consistencia entre idiomas.
- ✅ Hecho: eliminar el mapa si no aporta valor claro.

## Top 20 mejoras priorizadas

|   # | Estado           | Mejora                                                                | Impacto    | Esfuerzo   |
| --: | ---------------- | --------------------------------------------------------------------- | ---------- | ---------- |
|   1 | ✅ Hecho         | Poner español en `/` e inglés en `/en/`                               | Alto       | Medio      |
|   2 | ✅ Hecho         | Añadir `meta description`, canonical, `hreflang` y `lang` correcto    | Alto       | Bajo       |
|   3 | ✅ Hecho         | Optimizar `images/bg/galaxy.png`                                      | Alto       | Bajo       |
|   4 | ✅ Hecho         | Eliminar Google Maps JS API y código asociado si no se usa            | Alto       | Bajo       |
|   5 | ✅ Hecho         | Sustituir FontAwesome completo por iconos mínimos                     | Alto       | Medio      |
|   6 | ✅ Hecho         | Eliminar formulario                                                   | Alto       | Medio      |
|   7 | 🟡 Hecho parcial | Añadir estructura semántica con `<h1>`, `<h2>`, `<main>` y `<nav>`    | Alto       | Bajo       |
|   8 | ✅ Hecho         | Corregir enlaces externos con `rel="noopener noreferrer"`             | Alto       | Bajo       |
|   9 | 🟡 Hecho parcial | Añadir labels, botones reales y nombres accesibles                    | Alto       | Medio      |
|  10 | ✅ Hecho         | Eliminar librerías no usadas                                          | Alto       | Bajo       |
|  11 | ✅ Hecho         | Reducir Google Fonts y añadir `display=swap`                          | Medio-Alto | Bajo       |
|  12 | 🟡 Hecho parcial | Añadir lazy loading a imágenes e iframe                               | Medio-Alto | Bajo       |
|  13 | 🟡 Hecho parcial | Añadir dimensiones y `alt` adecuados en imágenes                      | Medio-Alto | Bajo       |
|  14 | ✅ Hecho         | Añadir JSON-LD `Person` o `ProfilePage`                               | Medio-Alto | Bajo       |
|  15 | ✅ Hecho         | Crear `robots.txt` y `sitemap.xml`                                    | Medio      | Bajo       |
|  16 | ✅ Hecho         | Añadir página 404 personalizada compatible con GitHub Pages           | Medio      | Bajo       |
|  17 | 🟡 Hecho parcial | Eliminar `default.php`, LESS no usado y assets residuales             | Medio      | Bajo-Medio |
|  18 | ⏳ Pendiente     | Normalizar rutas y enlaces internos                                   | Medio      | Medio      |
|  19 | ✅ Hecho         | Reemplazar popups complejos por tarjetas más simples                  | Medio      | Medio      |
|  20 | ⏳ Pendiente     | Introducir una plantilla o generador estático para evitar duplicación | Medio      | Alto       |

## Criterio de ejecución recomendado

No acometer todo a la vez. La secuencia más razonable es:

1. Corregir SEO e idiomas.
2. Optimizar assets y eliminar scripts claramente innecesarios.
3. Mejorar accesibilidad básica.
4. Limpiar dependencias y ficheros residuales.
5. Introducir generación estática si se quiere reducir duplicación.
6. Rediseñar o modernizar UX cuando la base técnica esté más limpia.
