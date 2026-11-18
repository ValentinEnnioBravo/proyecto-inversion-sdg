/* 17 · Posicionamiento ---------------------------------------------
   Paso 0: ejes. Paso 1: los competidores en su posición.
   Paso 2: FacturasYa en el cuadrante superior derecho, resaltado con
   un recuadro azul fino.
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'posicionamiento',
  zona: 'cae',
  pasos: 3,

  html: function () {
    var X0 = 300, X1 = 1340, Y0 = 740, Y1 = 90;
    function px(v) { return X0 + v / 10 * (X1 - X0); }
    function py(v) { return Y0 - v / 10 * (Y0 - Y1); }

    // [nombre, facilidad, controles, posición de la etiqueta: [dx, dy, anclaje]]
    var C = [
      ['Soluciones globales', 2, 8, [26, 0, 'start']],
      ['Soluciones a medida', 3, 7, [-26, 0, 'end']],
      ['Módulo del ERP',      5, 5, [26, 0, 'start']],
      ['Mis Comprobantes',    7, 3, [-26, 0, 'end']],
      ['Chat de IA',          8, 3, [26, -4, 'start']],
      ['Carga manual',        8, 2, [26, 4, 'start']]
    ];

    var s = '<g class="fundido" data-paso="0">' +
              '<line class="media" x1="' + px(5) + '" y1="' + Y1 + '" x2="' + px(5) + '" y2="' + Y0 + '"/>' +
              '<line class="media" x1="' + X0 + '" y1="' + py(5) + '" x2="' + X1 + '" y2="' + py(5) + '"/>' +
              '<line class="eje" x1="' + X0 + '" y1="' + Y0 + '" x2="' + (X1 + 20) + '" y2="' + Y0 + '"/>' +
              '<line class="eje" x1="' + X0 + '" y1="' + Y0 + '" x2="' + X0 + '" y2="' + (Y1 - 20) + '"/>' +
              '<path d="M' + (X1 + 40) + ' ' + Y0 + 'l-22 -12v24z" fill="var(--negro)" stroke="var(--negro)" stroke-width="4" stroke-linejoin="round"/>' +
              '<path d="M' + X0 + ' ' + (Y1 - 40) + 'l-12 22h24z" fill="var(--negro)" stroke="var(--negro)" stroke-width="4" stroke-linejoin="round"/>' +
              '<text class="t-eje" x="' + (X1 + 40) + '" y="' + (Y0 + 56) + '" text-anchor="end">facilidad para incorporar al circuito actual</text>' +
              '<text class="t-eje" transform="translate(' + (X0 - 34) + ' ' + (Y1 - 40) + ') rotate(-90)" text-anchor="end">cobertura de controles</text>' +
            '</g>';

    C.forEach(function (c, k) {
      var x = px(c[1]), y = py(c[2]), e = c[3];
      s += '<g class="comp fundido" data-paso="1" style="--d:' + (k * 140) + 'ms">' +
             '<circle cx="' + x + '" cy="' + y + '" r="12"/>' +
             '<text x="' + (x + e[0]) + '" y="' + (y + e[1]) + '" text-anchor="' + e[2] + '">' + c[0] + '</text>' +
           '</g>';
    });

    var fx = px(8), fy = py(8);
    s += '<g class="fy fundido" data-paso="2">' +
           '<rect class="cuadrante" x="' + (px(5) + 20) + '" y="' + (Y1 - 10) + '" width="' + (X1 - px(5) - 10) + '" height="' + (py(5) - Y1 - 10) + '" rx="28"/>' +
           '<circle cx="' + fx + '" cy="' + fy + '" r="20"/>' +
           '<text x="' + fx + '" y="' + (fy - 52) + '" text-anchor="middle">FacturasYa</text>' +
         '</g>';

    return '<div class="slide lleno svg-full mapa"><svg viewBox="0 0 1600 900">' + s + '</svg></div>';
  }
});
