# FacturasYa — presentación

Deck HTML sin dependencias ni build. Abrí `presentacion.html` en Chrome.

La presentación es un único lienzo con forma de factura electrónica (4000 × 5600 px).
Cada diapositiva es un marco 16:9 ubicado en una zona de la factura, y avanzar mueve
una cámara virtual hasta el marco siguiente.

## Controles

| Acción | Control |
|---|---|
| Avanzar (paso o diapositiva) | Clic izquierdo · → · Espacio · PageDown |
| Volver | Clic derecho · ← · PageUp |
| Cronómetro (diapositiva 5) | Enter o clic sobre el cronómetro: arranca / frena |
| Portada / cierre | Home / End |
| Pantalla completa | F |
| Ir a una diapositiva | `presentacion.html#12` |

Mientras el cronómetro corre, la presentación no avanza. El tiempo se guarda en
`localStorage` y reaparece en las diapositivas 7 y 8 (tiempo ahorrado por empleado).

## Estructura

```
presentacion.html        Esqueleto y orden de las diapositivas
assets/imagenes/         Logo y fotos del equipo
deck/css/deck.css        Estilos (variables en :root)
deck/js/config.js        Textos de marca, rutas de imágenes y equipo
deck/js/utils.js         Registro SLIDES, formato argentino, revelado por pasos
deck/js/factura.js       Lienzo: zonas, grilla de marcos y dibujo de la factura
deck/js/deck.js          Cámara, navegación y controles
deck/js/slides/          Una diapositiva por archivo (01 a 34)
```

## Contrato de una diapositiva

`SLIDES.push({ id, zona, html(), pasos, paso(n, root, animar), entrar(root), salir(adelante) })`

- `zona`: `encabezado`, `receptor`, `items`, `cae`, `subtotales`, `importe`, `total`
  o `vista` (factura completa, sin marco). Los marcos se reparten en la grilla de su
  zona en el orden de `presentacion.html`.
- Los elementos con `data-paso="k"` se revelan solos en el paso `k`
  (fundido de 300 ms con 12 px de desplazamiento). `style="--d:300ms"` agrega retraso.
- `U.n(valor, decimales)` crea un número que cuenta desde 0 al revelarse.
- Clases de animación: `barra-v` / `barra-h` (crecen desde la base), `trazo`
  (path con `pathLength="1"` que se dibuja), `fundido` (solo opacidad), `estado`.
- El marco 1600 × 900 usa `1em = 16px` (1 % del ancho).
