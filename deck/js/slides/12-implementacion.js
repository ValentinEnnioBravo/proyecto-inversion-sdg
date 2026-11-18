/* 12 · Implementación — los cinco pasos se encienden en secuencia;
   después los dos datos destacados ---------------------------------- */
SLIDES.push({
  id: 'implementacion',
  zona: 'items',
  pasos: 2,

  html: function () {
    var pasos = ['Alta', 'Casilla y WhatsApp propios', 'Importación de proveedores', 'Configuración de la exportación', 'Soporte'];
    return '<div class="slide impl">' +
             '<ol class="impl-pasos">' +
               pasos.map(function (t, k) {
                 return '<li data-paso="0" style="--d:' + (k * 350) + 'ms">' +
                          '<span class="impl-n"><b>' + (k + 1) + '</b></span>' +
                          '<span class="impl-t">' + t + '</span>' +
                        '</li>';
               }).join('') +
             '</ol>' +
             '<div class="impl-datos">' +
               '<div class="impl-dato" data-paso="1"><span class="impl-et">Primera factura:</span><span class="impl-v">el mismo día del alta</span></div>' +
               '<div class="impl-dato" data-paso="1" style="--d:250ms"><span class="impl-et">Operación completa:</span><span class="impl-v">menos de 2 semanas</span></div>' +
             '</div>' +
           '</div>';
  }
});
