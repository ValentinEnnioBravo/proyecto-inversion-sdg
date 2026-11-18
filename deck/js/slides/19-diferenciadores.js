/* 19 · Diferenciadores ---------------------------------------------
   Cuatro renglones; cada uno recibe un tilde azul en orden.
   La etiqueta del público objetivo queda fija desde el inicio.
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'diferenciadores',
  zona: 'cae',
  pasos: 5,

  html: function () {
    var filas = ['Integración con el sistema actual', 'Control de pagos', 'Trazabilidad completa', 'Menos carga manual'];
    return '<div class="slide">' +
             '<span class="pub">más de 150 facturas de compra por mes</span>' +
             '<div class="dif">' +
               filas.map(function (t, k) {
                 return '<div class="dif-fila" data-paso="0">' +
                          '<span class="dif-caja"><svg viewBox="0 0 24 24"><path class="trazo" data-paso="' + (k + 1) + '" style="--t:.45s" pathLength="1" d="M4 12.5l5 5L20 6.5"/></svg></span>' +
                          '<span>' + t + '</span>' +
                        '</div>';
               }).join('') +
             '</div>' +
           '</div>';
  }
});
