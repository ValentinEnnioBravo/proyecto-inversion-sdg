/* 23 · Red de estudios contables -----------------------------------
   Paso 0: "60%" con conteo y diez casitas: 6 azules (estudios
           contables) y 4 grises (otros canales).
   Paso 1: los estudios de la red crecen de 15 a 48, columna por columna.
   ------------------------------------------------------------------ */
(function () {

  var CASA = '<svg viewBox="0 0 24 24"><path d="M3.5 20.5V9.6L12 3.5l8.5 6.1v10.9h-5.6v-5.8H9.1v5.8z" stroke-linejoin="round"/></svg>';
  var SERIE = [[15, '2027'], [28, '2028'], [40, '2029'], [48, '2030 en adelante']];

  SLIDES.push({
    id: 'estudios',
    zona: 'subtotales',
    pasos: 2,

    html: function () {
      var casas = '';
      for (var k = 0; k < 10; k++) {
        casas += '<i class="casa fundido ' + (k < 6 ? 'si' : 'no') + '" data-paso="0" style="--d:' + (300 + k * 90) + 'ms">' + CASA + '</i>';
      }
      return '<div class="slide">' +
               '<div class="red">' +
                 '<div class="red-izq">' +
                   '<p class="grande" data-paso="0">' + U.n(60) + '%</p>' +
                   '<div class="casas">' + casas + '</div>' +
                   '<p class="red-txt" data-paso="0" style="--d:200ms">de las altas por estudios contables</p>' +
                 '</div>' +
                 '<div class="red-der">' +
                   '<div class="red-barras">' +
                     SERIE.map(function (s, k) {
                       var d = k * 450;
                       return '<div class="rb">' +
                                '<b data-paso="1" style="--d:' + (d + 300) + 'ms">' + s[0] + '</b>' +
                                '<i class="barra-v" data-paso="1" style="--d:' + d + 'ms;height:' + (17 * s[0] / 48) + 'em"></i>' +
                                '<span data-paso="1" style="--d:' + d + 'ms">' + s[1] + '</span>' +
                              '</div>';
                     }).join('') +
                   '</div>' +
                   '<p class="red-pie" data-paso="1">estudios</p>' +
                 '</div>' +
               '</div>' +
             '</div>';
    }
  });
})();
