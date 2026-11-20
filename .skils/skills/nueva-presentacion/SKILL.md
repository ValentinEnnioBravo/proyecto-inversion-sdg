---
name: nueva-presentacion
description: Arma o edita una presentación HTML (deck 16:9 sin dependencias, controlada con clic izquierdo/derecho y ruedita de volumen) usando la estructura de esta plantilla. Usala cuando el usuario pida crear una presentación nueva, agregar/quitar/reordenar diapositivas, sumar video o audio, o cambiar el diseño visual.
---

# Nueva presentación

Esta carpeta es una plantilla **sin contenido ni diseño propio**: solo estructura y controles. Tu trabajo es llenarla con el contenido y el estilo que pida el usuario.

## Antes de empezar

Si el usuario no lo dio, preguntale (de una vez, en un solo mensaje):

1. Tema y duración aproximada (define la cantidad de diapositivas; ~1 por 20–30 s).
2. Contenido o guion de cada diapositiva, si ya lo tiene.
3. Estilo visual: paleta, tipografías, referencias (imágenes en una carpeta tipo `estilo/`).
4. Multimedia: videos (con segundo de inicio/fin), audios, imágenes.
5. Si necesita pasos dentro de una diapositiva (revelar ideas con clic) o sonido encadenado entre diapositivas.

## Estructura

```
presentacion.html        # Esqueleto + lista ordenada de <script> de diapositivas
assets/                  # imagenes/ audio/ video/  (archivos del usuario)
deck/
  css/deck.css           # Estilos base. Variables en :root; diseño = acá
  js/config.js           # Datos y rutas de archivos (título, autor, media, volumen)
  js/utils.js            # SLIDES (registro) y helpers U.*
  js/media.js            # Audio/video/volumen global (objeto Media)
  js/deck.js             # Navegación y controles. NO tocar salvo pedido explícito
  js/slides/NN-nombre.js # Una diapositiva por archivo
```

## Controles (ya implementados en deck.js)

- Clic izquierdo / → / Espacio / PageDown: avanzar (paso a paso y luego diapositiva).
- Clic derecho / ← / PageUp: volver.
- Ruedita / ↑ ↓: volumen. `F`: pantalla completa. `Home` / `End`: primera / última.

## Contrato de una diapositiva

Cada archivo en `deck/js/slides/` hace `SLIDES.push({...})` con:

| Campo | Obligatorio | Descripción |
|---|---|---|
| `id` | sí | Identificador único. |
| `html()` | sí | Devuelve el HTML (string) de la lámina, dentro de `<div class="slide ...">`. |
| `tag` | no | Etiqueta del mobiliario superior. |
| `sinMobiliario` | no | `true` oculta etiqueta, contador y riel (portada, cierre, video). |
| `pasos` | no | Cantidad de clics internos antes de pasar a la siguiente (default 1). |
| `paso(n, root)` | no | Pinta el paso `n`. Se llama al entrar y en cada avance **y retroceso**: debe poder pintar cualquier paso. |
| `entrar(root)` | no | Al mostrarse (arrancar audio/video, precargar). |
| `salir(adelante)` | no | Al abandonarla; `adelante` es `true` si se avanza, `false` si se vuelve. |

Ejemplos listos para copiar: `00-portada` (precarga), `01-contenido` (título + lista), `02-pasos` (pasos), `03-imagen` (imagen opcional), `04-video`, `05-audio`, `99-cierre`.

## Flujo de trabajo

1. **config.js**: completá `titulo`, `autor`, `video`, `audio`, `imagenes`. Rutas relativas a `presentacion.html`, archivos dentro de `assets/`.
2. **Diapositivas**: copiá el ejemplo más parecido a `deck/js/slides/NN-nombre.js` (numeración con 2 dígitos que refleje el orden) y editalo. Borrá los ejemplos que no uses.
3. **presentacion.html**: la lista de `<script src="deck/js/slides/...">` define el orden. Mantenela sincronizada con los archivos (agregar, quitar, reordenar). Actualizá el `<title>` y agregá `<link>` de fuentes si hace falta.
4. **Diseño**: editá las variables de `:root` en `deck.css` y agregá clases por diapositiva. Mantené: escenario 16:9, tipografía en `em` (1em = 1% del ancho, así escala en cualquier pantalla), `.slide` como contenedor absoluto. Si el usuario da imágenes de referencia de estilo, leelas y derivá de ahí paleta, tipografía y recursos gráficos.
5. **Mobiliario**: si el diseño lleva logo/marca fija, agregalo dentro de `.furniture` en `presentacion.html` y ocultalo con `.sin-mobiliario` si corresponde.
6. **Verificar**: abrí `presentacion.html` en el navegador (el repositorio no necesita servidor; si el video/audio no carga por `file://`, probá con `python -m http.server`). Revisá: pasar todas las láminas hacia adelante y atrás, que los pasos retrocedan bien, que el audio/video no se pisen y que el contador total sea correcto.

## Reglas y trampas

- Sin dependencias ni build: JS plano (ES5 con `var`, igual que el resto), un `<script>` por archivo.
- Textos con acentos dentro de strings JS están bien (archivo UTF-8); en HTML inline podés usar entidades (`&iquest;`).
- Las rutas con espacios o acentos pasan por `U.ruta()` / `encodeURI` (ya lo hace `Media`).
- Los navegadores bloquean audio hasta que haya un clic: la primera música debe arrancar tras al menos un clic del usuario (la portada ya lo garantiza porque se avanza con clic).
- Una diapositiva con sonido que debe continuar en la siguiente: usá `salir(adelante)` para cortar solo al volver y no al avanzar.
- Para varias imágenes reutilizables, listalas en `CONFIG.imagenes` y recorrelas en `html()`.
- No hardcodees rutas de archivos en las diapositivas si pueden vivir en `config.js`.
- No agregues contenido o estilos que el usuario no pidió: la plantilla es intencionalmente neutra.
