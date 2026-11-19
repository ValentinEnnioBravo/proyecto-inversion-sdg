/* 10 · Propuesta de valor — frase; después los cuatro ítems, de a uno */
SLIDES.push({
  id: 'propuesta',
  zona: 'items',
  pasos: 5,

  html: function () {
    var items = ['Sin pagos duplicados', 'Sin facturas inválidas', 'Sin intereses por vencimiento', 'Menos horas de carga manual'];
    return '<div class="slide">' +
             '<p class="t-frase" data-paso="0">Pagar a cada proveedor el monto correcto, en la fecha correcta.</p>' +
             '<div class="cuatro">' +
               items.map(function (t, k) {
                 return '<div data-paso="' + (k + 1) + '">' + U.tilde + '<span>' + t + '</span></div>';
               }).join('') +
             '</div>' +
           '</div>';
  }
});
