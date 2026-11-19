/* 28 · Proyección --------------------------------------------------
   Tres gráficos: Clientes activos, Ventas y Costos operativos e imp.
   Clientes y Ventas muestran explícitamente: Mejor caso (optimista),
   Escenario base y Peor caso (conservador). Costos muestra el escenario
   base (único modelado en Comercial 2 y Flujo de Fondos.xlsx).
   ------------------------------------------------------------------ */
(function () {

  var ANIOS = ['2027', '2028', '2029', '2030', '2031'];

  function grafico(id, datos, max, notas, etiquetasAlt) {
    var W = 500, H = 440, x0 = 24, x1 = 468, y0 = 385, y1 = 42;
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
    ANIOS.forEach(function (a, k) {
      s += '<text class="anio" x="' + px(k) + '" y="' + (y0 + 34) + '">' + a + '</text>';
    });
    s += '<g clip-path="url(#clip-' + id + ')">';
    if (datos.optimista) s += '<path class="alt opt" d="' + linea(datos.optimista) + '"/>';
    if (datos.conservador) s += '<path class="alt cons" d="' + linea(datos.conservador) + '"/>';
    s += '<path class="base" d="' + linea(datos.base) + '"/>';
    s += '</g>';

    if (etiquetasAlt) {
      var yo = py(datos.optimista[4]);
      var yc = py(datos.conservador[4]);
      s += '<g class="fundido" data-paso="0" style="--d:1050ms">' +
             '<circle class="pt-opt" cx="' + px(4) + '" cy="' + yo + '" r="6"/>' +
             '<text class="ann-opt" x="' + (px(4) - 6) + '" y="' + (yo - 18) + '" text-anchor="end">Mejor caso: ' + etiquetasAlt.opt + '</text>' +
             '<circle class="pt-cons" cx="' + px(4) + '" cy="' + yc + '" r="6"/>' +
             '<text class="ann-cons" x="' + (px(4) - 2) + '" y="' + Math.min(y0 - 12, yc + 38) + '" text-anchor="end">Peor caso: ' + etiquetasAlt.cons + '</text>' +
           '</g>';
    }

    notas.forEach(function (n) {
      var k = n[0], x = px(k), y = py(datos.base[k]);
      var anchor = n[4] || (k === 0 ? 'start' : (k === 4 ? 'end' : 'middle'));
      var dx = n[3] !== undefined ? n[3] : (k === 0 ? -4 : (k === 4 ? 4 : 0));
      var dy = n[2] !== undefined ? n[2] : -18;
      s += '<g class="fundido" data-paso="0" style="--d:' + (300 + k * 200) + 'ms">' +
             '<circle class="pt" cx="' + x + '" cy="' + y + '" r="7"/>' +
             '<text class="ann" x="' + (x + dx) + '" y="' + (y + dy) + '" text-anchor="' + anchor + '">' + n[1] + '</text>' +
           '</g>';
    });
    return '<svg viewBox="0 0 ' + W + ' ' + H + '">' + s + '</svg>';
  }

  SLIDES.push({
    id: 'proyeccion',
    zona: 'importe',

    html: function () {
      var clientes = {
        conservador: [18, 50, 77, 101, 122],
        base:        [28, 85, 139, 194, 251],
        optimista:   [52, 165, 287, 423, 579]
      };
      var ventas = {
        conservador: [25704, 175029, 311000, 429478, 538006],
        base:        [40881, 290035, 545859, 801972, 1071421],
        optimista:   [74865, 552856, 1099483, 1710416, 2414753]
      };
      var costos = {
        base:        [121417, 254666, 406054, 460728, 507776]
      };
      return '<div class="slide proy-slide">' +
               '<div class="proy-head" data-paso="0">' +
                 '<h2 class="t-titulo proy-titulo">Proyección 2027–2031</h2>' +
                 '<div class="proy-ley">' +
                   '<span><i class="l-opt"></i>Mejor caso (optimista)</span>' +
                   '<span><i class="l-base"></i>Escenario base</span>' +
                   '<span><i class="l-cons"></i>Peor caso (conservador)</span>' +
                 '</div>' +
               '</div>' +
               '<div class="proy proy-3">' +
                 '<div class="graf" data-paso="0">' +
                   '<p class="graf-t">Clientes activos</p>' +
                   grafico('29a', clientes, 650, [[0, '28', -30, -4], [2, '139', -20, 0], [4, '251', -20, 4]], { opt: '579', cons: '122' }) +
                 '</div>' +
                 '<div class="graf" data-paso="0" style="--d:120ms">' +
                   '<p class="graf-t">Ventas anuales</p>' +
                   grafico('29b', ventas, 2700000, [[0, 'USD 41k', -48, -4], [2, 'USD 546k', -22, 0], [4, 'USD 1,07 M', -20, 4]], { opt: 'USD 2,41 M', cons: 'USD 538k' }) +
                 '</div>' +
                 '<div class="graf" data-paso="0" style="--d:240ms">' +
                   '<p class="graf-t">Costos operativos <small>(base)</small></p>' +
                   grafico('29c', costos, 620000, [[0, 'USD 121k', 36, -4, 'start'], [1, 'USD 255k', 36, 12, 'start'], [2, 'USD 406k', -22, -6, 'end'], [3, 'USD 461k', 34, 6, 'middle'], [4, 'USD 508k', -22, 4, 'end']], null) +
                 '</div>' +
               '</div>' +
               '<p class="fuentes">' +
                 '<span data-paso="0">Fuentes: Comercial (2) — Proyección de ventas y Análisis de costos · Flujo de Fondos.xlsx (hojas Ingresos y Cálculos auxiliares)</span>' +
               '</p>' +
             '</div>';
    }
  });
})();
