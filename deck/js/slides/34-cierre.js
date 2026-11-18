/* 34 · Cierre ------------------------------------------------------
   La cámara se aleja hasta la factura completa, vuelve el bloque de
   marca y aparece la etiqueta APROBADA con un fundido (200 ms).
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'cierre',
  zona: 'vista',
  vista: true,

  paso: function (n, root) {
    var a = root.querySelector('#aprobada');
    if (a) a.classList.toggle('on', n >= 0);
  }
});
