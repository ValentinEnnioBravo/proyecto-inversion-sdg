/* 22 · Venta por segmento — tres columnas, de a una ---------------- */
SLIDES.push({
  id: 'venta',
  zona: 'subtotales',
  pasos: 3,

  html: function () {
    var C = [['B', 'Autoservicio'], ['C', 'Venta consultiva corta'], ['D', 'Venta consultiva']];
    return '<div class="slide">' +
             '<div class="venta">' +
               C.map(function (c, k) {
                 return '<div class="venta-col' + (c[0] === 'C' ? ' principal' : '') + '" data-paso="' + k + '">' +
                          '<span class="venta-letra">' + c[0] + '</span>' +
                          '<p class="venta-txt">' + c[1] + '</p>' +
                        '</div>';
               }).join('') +
             '</div>' +
           '</div>';
  }
});
