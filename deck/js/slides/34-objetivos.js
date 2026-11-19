/* 33 · Objetivos — tres hitos, de a uno --------------------------- */
SLIDES.push({
  id: 'objetivos',
  zona: 'total',
  pasos: 3,

  html: function () {
    var H = [
      ['Julio 2027',     'Lanzamiento y 3 casos de éxito'],
      ['Diciembre 2029', '139 clientes y USD 0,67 M de ingresos anuales recurrentes'],
      ['2030',           'Recupero de la inversión']
    ];
    return '<div class="slide">' +
             '<div class="hitos">' +
               H.map(function (h, k) {
                 return '<div class="hito" data-paso="' + k + '"><p class="hito-f">' + h[0] + '</p><p class="hito-t">' + h[1] + '</p></div>';
               }).join('') +
             '</div>' +
           '</div>';
  }
});
