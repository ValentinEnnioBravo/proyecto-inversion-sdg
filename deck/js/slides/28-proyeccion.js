/* 28 · Proyección 2027–2031 — tres diapositivas, un gráfico cada una:
   Clientes activos, Ventas anuales y Costos operativos.
   Clientes y Ventas muestran Mejor caso (optimista), Escenario base y
   Peor caso (conservador). Costos muestra solo el escenario base (único
   modelado en Comercial 2 y Flujo de Fondos.xlsx).
   Bajo el eje, una fila con el valor del escenario base de cada año.
   ------------------------------------------------------------------ */
(function () {

  var ANIOS = ['2027', '2028', '2029', '2030', '2031'];
  var FUENTE = 'Fuentes: Comercial (2) — Proyección de ventas y Análisis de costos · ' +
               'Flujo de Fondos.xlsx (hojas Ingresos y Cálculos auxiliares)';

  function grafico(id, datos, max, fmt) {
    var W = 1400, H = 560, x0 = 190, x1 = 1180, y0 = 420, y1 = 40;
    function px(k) { return x0 + k * (x1 - x0) / 4; }
    function py(v) { return y0 - v / max * (y0 - y1); }
    function linea(vals) {
      return vals.map(function (v, k) { return (k ? 'L' : 'M') + px(k).toFixed(1) + ' ' + py(v).toFixed(1); }).join('');
    }
    var s = '<defs><clipPath id="clip-' + id + '">' +
              '<rect data-paso="0" data-clip="' + (W + 40) + '" x="-20" y="-40" width="0" height="' + (H + 80) + '"/>' +
            '</clipPath></defs>';
    s += '<line class="grilla" x1="' + x0 + '" y1="' + py(max / 2) + '" x2="' + x1 + '" y2="' + py(max / 2) + '"/>';
    s += '<line class="eje" x1="' + x0 + '" y1="' + y0 + '" x2="' + x1 + '" y2="' + y0 + '"/>';

    // Años y fila de valores del escenario base
    ANIOS.forEach(function (a, k) {
      s += '<text class="anio" x="' + px(k) + '" y="' + (y0 + 48) + '">' + a + '</text>';
      s += '<text class="fila-v fundido" data-paso="0" style="--d:' + (300 + k * 200) + 'ms" x="' + px(k) + '" y="' + (y0 + 108) + '">' +
             fmt(datos.base[k]) + '</text>';
    });

    s += '<g clip-path="url(#clip-' + id + ')">';
    if (datos.optimista) s += '<path class="alt opt" d="' + linea(datos.optimista) + '"/>';
    if (datos.conservador) s += '<path class="alt cons" d="' + linea(datos.conservador) + '"/>';
    s += '<path class="base" d="' + linea(datos.base) + '"/>';
    s += '</g>';

    // Puntos del escenario base
    datos.base.forEach(function (v, k) {
      s += '<circle class="pt fundido" data-paso="0" style="--d:' + (300 + k * 200) + 'ms" cx="' + px(k) + '" cy="' + py(v) + '" r="9"/>';
    });

    // Valor final de cada escenario, a la derecha del último punto
    var fin = [];
    if (datos.optimista) fin.push(['opt', 'Mejor caso', datos.optimista[4]]);
    fin.push(['base', 'Base', datos.base[4]]);
    if (datos.conservador) fin.push(['cons', 'Peor caso', datos.conservador[4]]);
    s += '<g class="fundido" data-paso="0" style="--d:1150ms">';
    fin.forEach(function (f) {
      var y = py(f[2]);
      if (f[0] !== 'base') s += '<circle class="pt-' + f[0] + '" cx="' + px(4) + '" cy="' + y + '" r="8"/>';
      s += '<text class="fin fin-' + f[0] + '" x="' + (px(4) + 24) + '" y="' + (y + 10) + '">' + fmt(f[2]) +
             '<tspan class="fin-et" x="' + (px(4) + 24) + '" dy="-36">' + f[1] + '</tspan></text>';
    });
    s += '</g>';

    return '<svg viewBox="0 0 ' + W + ' ' + H + '">' + s + '</svg>';
  }

  function usd(v) {
    if (v >= 1000000) return 'USD ' + U.fmt(v / 1000000, 2) + ' M';
    return 'USD ' + U.fmt(Math.round(v / 1000)) + 'k';
  }
  function cant(v) { return U.fmt(v); }

  var LEY3 = '<div class="proy-ley">' +
               '<span><i class="l-opt"></i>Mejor caso (optimista)</span>' +
               '<span><i class="l-base"></i>Escenario base</span>' +
               '<span><i class="l-cons"></i>Peor caso (conservador)</span>' +
             '</div>';
  var LEY1 = '<div class="proy-ley"><span><i class="l-base"></i>Escenario base</span></div>';

  function diapositiva(id, titulo, ley, svg) {
    SLIDES.push({
      id: id,
      zona: 'importe',
      html: function () {
        return '<div class="slide proy-slide">' +
                 '<div class="proy-head" data-paso="0">' +
                   '<div><p class="proy-sup">Proyección 2027–2031</p>' +
                   '<h2 class="t-titulo proy-titulo">' + titulo + '</h2></div>' +
                   ley +
                 '</div>' +
                 '<div class="graf graf-1" data-paso="0">' + svg() + '</div>' +
                 '<p class="fuentes"><span data-paso="0">' + FUENTE + '</span></p>' +
               '</div>';
      }
    });
  }

  diapositiva('proyeccion-clientes', 'Clientes activos', LEY3, function () {
    return grafico('29a', {
      conservador: [18, 50, 77, 101, 122],
      base:        [28, 85, 139, 194, 251],
      optimista:   [52, 165, 287, 423, 579]
    }, 620, cant);
  });

  diapositiva('proyeccion-ventas', 'Ventas anuales', LEY3, function () {
    return grafico('29b', {
      conservador: [25704, 175029, 311000, 429478, 538006],
      base:        [40881, 290035, 545859, 801972, 1071421],
      optimista:   [74865, 552856, 1099483, 1710416, 2414753]
    }, 2600000, usd);
  });

  diapositiva('proyeccion-costos', 'Costos operativos', LEY1, function () {
    return grafico('29c', {
      base: [121417, 254666, 406054, 460728, 507776]
    }, 560000, usd);
  });
})();
