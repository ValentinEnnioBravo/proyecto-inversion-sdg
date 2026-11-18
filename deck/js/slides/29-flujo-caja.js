/* 29 · Flujo de caja acumulado -------------------------------------
   La curva se dibuja; al cruzar el eje en 2030 aparece un punto azul
   con la etiqueta de recupero.
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'flujo-caja',
  zona: 'importe',

  html: function () {
    var ANIOS = ['2026', '2027', '2028', '2029', '2030', '2031'];
    var V = [-156091, -273186, -256583, -142755, 150719, 674700];
    var X0 = 180, X1 = 1420, MIN = -350000, MAX = 750000, YB = 760, YT = 110;
    var DUR = 1200;
    function px(k) { return X0 + k * (X1 - X0) / 5; }
    function py(v) { return YB - (v - MIN) / (MAX - MIN) * (YB - YT); }

    var d = V.map(function (v, k) { return (k ? 'L' : 'M') + px(k).toFixed(1) + ' ' + py(v).toFixed(1); }).join('');

    // Cruce del cero entre el cierre de 2029 y el de 2030
    var f = -V[3] / (V[4] - V[3]);
    var xc = px(3) + f * (px(4) - px(3)), y0 = py(0);
    var tCruce = Math.round(DUR * (xc - X0 + 20) / (X1 - X0 + 40));

    var s = '<defs><clipPath id="clip-30">' +
              '<rect data-paso="0" data-clip="' + (X1 - X0 + 40) + '" data-ms="' + DUR + '" x="' + (X0 - 20) + '" y="0" width="0" height="900"/>' +
            '</clipPath></defs>';
    s += '<line class="cero" x1="' + X0 + '" y1="' + y0 + '" x2="' + X1 + '" y2="' + y0 + '"/>';
    ANIOS.forEach(function (a, k) {
      s += '<line x1="' + px(k) + '" y1="' + (y0 - 8) + '" x2="' + px(k) + '" y2="' + (y0 + 8) + '" stroke="var(--negro)" stroke-width="2.5"/>';
      s += '<text class="anio" x="' + px(k) + '" y="' + (YB + 70) + '">' + a + '</text>';
    });
    s += '<path class="curva" clip-path="url(#clip-30)" d="' + d + '"/>';

    // Puntos destacados
    s += '<g class="fundido" data-paso="0" style="--d:' + Math.round(DUR * 0.2) + 'ms">' +
           '<circle class="vert" cx="' + px(1) + '" cy="' + py(V[1]) + '" r="9"/>' +
           '<text class="ann" x="' + px(1) + '" y="' + (py(V[1]) + 66) + '" text-anchor="middle">USD ' + U.tn(V[1]) + '</text>' +
         '</g>';
    s += '<g class="rec fundido" data-paso="0" style="--d:' + tCruce + 'ms">' +
           '<circle cx="' + xc + '" cy="' + y0 + '" r="16"/>' +
           '<text x="' + (xc - 30) + '" y="' + (y0 - 34) + '" text-anchor="end">Recupero en 2030</text>' +
         '</g>';
    s += '<g class="fundido" data-paso="0" style="--d:' + DUR + 'ms">' +
           '<circle class="vert" cx="' + px(5) + '" cy="' + py(V[5]) + '" r="9"/>' +
           '<text class="ann" x="' + (px(5) - 26) + '" y="' + (py(V[5]) + 12) + '" text-anchor="end">USD ' + U.tn(V[5]) + '</text>' +
         '</g>';

    return '<div class="slide lleno svg-full caja-g"><svg viewBox="0 0 1600 900">' + s + '</svg></div>';
  }
});
