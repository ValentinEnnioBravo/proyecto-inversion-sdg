/* 29 · Flujo de caja acumulado -------------------------------------
   La curva del proyecto puro se dibuja año a año (2026–2031). Todos
   los puntos muestran su valor en USD y al cruzar el eje en 2030
   aparece el punto azul de recupero.
   Fuente: Flujo de Fondos.xlsx (Egresos, fila 121) y Flujo de Fondos.docx.
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'flujo-caja',
  zona: 'importe',

  html: function () {
    var ANIOS = ['2026', '2027', '2028', '2029', '2030', '2031'];
    var V = [-156091, -273186, -256583, -142755, 150719, 674700];
    var X0 = 175, X1 = 1425, MIN = -350000, MAX = 760000, YB = 740, YT = 135;
    var DUR = 1200;
    function px(k) { return X0 + k * (X1 - X0) / 5; }
    function py(v) { return YB - (v - MIN) / (MAX - MIN) * (YB - YT); }

    var d = V.map(function (v, k) { return (k ? 'L' : 'M') + px(k).toFixed(1) + ' ' + py(v).toFixed(1); }).join('');

    // Cruce del cero entre el cierre de 2029 y el de 2030 (3,49 años)
    var f = -V[3] / (V[4] - V[3]);
    var xc = px(3) + f * (px(4) - px(3)), y0 = py(0);
    var tCruce = Math.round(DUR * (xc - X0 + 20) / (X1 - X0 + 40));

    var s = '<defs><clipPath id="clip-30">' +
              '<rect data-paso="0" data-clip="' + (X1 - X0 + 40) + '" data-ms="' + DUR + '" x="' + (X0 - 20) + '" y="0" width="0" height="900"/>' +
            '</clipPath></defs>';

    s += '<text class="caja-titulo fundido" data-paso="0" x="' + X0 + '" y="95">Flujo de caja acumulado · Proyecto puro</text>';
    s += '<line class="cero" x1="' + X0 + '" y1="' + y0 + '" x2="' + X1 + '" y2="' + y0 + '"/>';
    s += '<text class="caja-cero-lbl" x="' + (X0 - 16) + '" y="' + (y0 + 8) + '" text-anchor="end">USD 0</text>';

    ANIOS.forEach(function (a, k) {
      s += '<line x1="' + px(k) + '" y1="' + (y0 - 8) + '" x2="' + px(k) + '" y2="' + (y0 + 8) + '" stroke="var(--negro)" stroke-width="2.5"/>';
      s += '<text class="anio" x="' + px(k) + '" y="' + (YB + 75) + '">' + a + '</text>';
    });
    s += '<path class="curva" clip-path="url(#clip-30)" d="' + d + '"/>';

    // Etiquetas de los 6 puntos: [indice, dx, dy, anchor, grande, retraso]
    var PTS = [
      [0,  0,  -26, 'middle', false, Math.round(DUR * 0.05)],
      [1,  0,   52, 'middle', true,  Math.round(DUR * 0.22)],
      [2,  0,  -28, 'middle', false, Math.round(DUR * 0.42)],
      [3,  16,  38, 'start',  false, Math.round(DUR * 0.62)],
      [4,  20,   8, 'start',  false, Math.round(DUR * 0.84)],
      [5, -24,  12, 'end',    true,  DUR]
    ];

    PTS.forEach(function (p) {
      var k = p[0], x = px(k), y = py(V[k]);
      var cls = p[4] ? 'ann' : 'ann-sm';
      var r = p[4] ? 9 : 7;
      s += '<g class="fundido" data-paso="0" style="--d:' + p[5] + 'ms">' +
             '<circle class="vert" cx="' + x + '" cy="' + y + '" r="' + r + '"/>' +
             '<text class="' + cls + '" x="' + (x + p[1]) + '" y="' + (y + p[2]) + '" text-anchor="' + p[3] + '">USD ' + U.tn(V[k]) + '</text>' +
           '</g>';
    });

    // Punto de recupero
    s += '<g class="rec fundido" data-paso="0" style="--d:' + tCruce + 'ms">' +
           '<circle cx="' + xc + '" cy="' + y0 + '" r="15"/>' +
           '<text x="' + (xc - 28) + '" y="' + (y0 - 32) + '" text-anchor="end">Recupero en 2030 (3,49 años)</text>' +
         '</g>';

    return '<div class="slide lleno svg-full caja-g">' +
             '<svg viewBox="0 0 1600 900">' + s + '</svg>' +
             '<p class="fuentes" style="bottom:1.2em">' +
               '<span data-paso="0">Fuente: Flujo de Fondos.xlsx (hoja Egresos, flujo acumulado del proyecto puro)</span>' +
             '</p>' +
           '</div>';
  }
});
