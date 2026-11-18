/* 26 · Ahorro del cliente — dos barras que crecen; después "77,5%" -- */
SLIDES.push({
  id: 'ahorro',
  zona: 'subtotales',
  pasos: 2,

  html: function () {
    var ALTO = 30; // em para USD 1.800
    function barra(nom, v, color, d, fuente) {
      return '<div class="b2">' +
               '<p class="b2-val" data-paso="0" style="--d:' + d + 'ms">USD ' + U.n(v, 0, ' data-retraso="200"') + ' <small>por mes</small></p>' +
               '<i class="b2-barra barra-v" data-paso="0" style="--d:' + d + 'ms;height:' + (ALTO * v / 1800) + 'em;background:' + color + '"></i>' +
               '<p class="b2-nom">' + nom + '</p>' +
               '<p class="fuente" style="--d:' + d + 'ms;min-height:2.8em"' + (fuente ? ' data-paso="0"' : '') + '>' + (fuente || '') + '</p>' +
             '</div>';
    }
    return '<div class="slide">' +
             '<div class="ahorro">' +
               '<div class="barras2">' +
                 barra('Carga manual', 1800, 'var(--gris-2)', 0, 'Elaboración propia con datos de Lido (2026) e iProfesional (2026)') +
                 barra('FacturasYa', 405, 'var(--azul)', 250) +
               '</div>' +
               '<div class="ahorro-dato" data-paso="1">' +
                 '<p class="grande">' + U.n(77.5, 1) + '%</p>' +
                 '<p class="t">de ahorro</p>' +
               '</div>' +
             '</div>' +
           '</div>';
  }
});
