/* 02 · Equipo — las 6 cards aparecen de a una, cada 120 ms ---------- */
SLIDES.push({
  id: 'equipo',
  zona: 'encabezado',

  html: function () {
    var cards = CONFIG.equipo.map(function (m, k) {
      return '<div class="socio" data-paso="0" style="--d:' + (200 + k * 120) + 'ms">' +
               '<img src="' + U.ruta(m.foto) + '" alt="' + m.nombre + '">' +
               '<div><b>' + m.nombre + '</b></div>' +
             '</div>';
    }).join('');
    return '<div class="slide">' +
             '<h2 class="t-titulo" data-paso="0">Socios mayoritarios</h2>' +
             '<div class="socios">' + cards + '</div>' +
           '</div>';
  }
});
