/* 28 · Proyección --------------------------------------------------
   Líneas de los tres escenarios que se dibujan de izquierda a derecha
   (1,2 s): base en azul sólido; conservador y optimista en gris
   punteado. Clientes activos y ventas.
   ------------------------------------------------------------------ */
(function () {

  var ANIOS = ['2027', '2028', '2029', '2030', '2031'];

  function grafico(id, datos, max, notas) {
    var W = 700, H = 470, x0 = 20, x1 = 660, y0 = 420, y1 = 30;
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
    ANIOS.forEach(function (a, k) { s += '<text class="anio" x="' + px(k) + '" y="' + (y0 + 34) + '">' + a + '</text>'; });
    s += '<g clip-path="url(#clip-' + id + ')">' +
           '<path class="alt" d="' + linea(datos.optimista) + '"/>' +
           '<path class="alt" d="' + linea(datos.conservador) + '"/>' +
           '<path class="base" d="' + linea(datos.base) + '"/>' +
         '</g>';
    notas.forEach(function (n) {
      var k = n[0], x = px(k), y = py(datos.base[k]);
      var anchor = k === 0 ? 'start' : (k === 4 ? 'end' : 'middle');
      var dx = k === 0 ? -8 : (k === 4 ? 8 : 0);
      s += '<g class="fundido" data-paso="0" style="--d:' + (300 + k * 240) + 'ms">' +
             '<circle class="pt" cx="' + x + '" cy="' + y + '" r="8"/>' +
             '<text class="ann" x="' + (x + dx) + '" y="' + (y - 22) + '" text-anchor="' + anchor + '">' + n[1] + '</text>' +
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
      return '<div class="slide">' +
               '<div class="proy">' +
                 '<div class="graf" data-paso="0">' +
                   '<p class="graf-t">Clientes activos</p>' +
                   grafico('29a', clientes, 600, [[0, '28'], [2, '139'], [4, '251']]) +
                 '</div>' +
                 '<div class="graf" data-paso="0" style="--d:150ms">' +
                   '<p class="graf-t">Ventas</p>' +
                   grafico('29b', ventas, 2500000, [[0, 'USD 40.881'], [2, 'USD 545.859'], [4, 'USD 1,07 M']]) +
                 '</div>' +
               '</div>' +
             '</div>';
    }
  });
})();
