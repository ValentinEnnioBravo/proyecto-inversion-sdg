/* 05 · Pregunta: ¿cuántas facturas se pueden cargar en un día? ------
   Frente: la pregunta en grande y, al costado, una factura de ejemplo.
   Paso 1 (clic): la diapositiva gira sobre sí misma (0,8 s) y el reverso
   muestra cuánto tarda cargar una factura a mano.
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'pregunta',
  zona: 'receptor',
  pasos: 2,

  html: function () {
    return '<div class="slide lleno">' +
             '<div class="flip flip-slide"><div class="flip-in">' +
               '<div class="cara frente preg">' +
                 '<h2 class="preg-t">¿Cuántas facturas creen que podrían cargar en 1 día?</h2>' +
                 '<img class="preg-img" src="' + U.ruta(CONFIG.facturaEjemplo) + '" alt="Factura de ejemplo">' +
               '</div>' +
               '<div class="cara reverso preg-rev">' +
                 '<p class="preg-min">~8-15 <span>minutos</span></p>' +
                 '<p class="preg-manual">Totalmente manual</p>' +
               '</div>' +
             '</div></div>' +
           '</div>';
  },

  paso: function (n, r) {
    r.querySelector('.flip').classList.toggle('girado', n >= 1);
  }
});
