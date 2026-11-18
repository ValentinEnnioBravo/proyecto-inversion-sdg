/* 27 · Unit economics ----------------------------------------------
   Tres medidores (escala 0 a 40x) que se llenan hasta su valor, con
   una línea de referencia en 3x.
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'unit-economics',
  zona: 'subtotales',

  html: function () {
    var MAX = 40, R = 150, CX = 200, CY = 190;
    var P = [
      { n: 'Inicial', v: 3.3,  rec: 9.3 },
      { n: 'Pyme',    v: 12.5, rec: 3.8 },
      { n: 'Empresa', v: 37.5, rec: 1.6 }
    ];
    function punto(frac, r) {
      var a = Math.PI * (1 - frac);
      return [CX + r * Math.cos(a), CY - r * Math.sin(a)];
    }
    var arco = 'M' + (CX - R) + ' ' + CY + 'A' + R + ' ' + R + ' 0 0 1 ' + (CX + R) + ' ' + CY;
    var r1 = punto(3 / MAX, R - 32), r2 = punto(3 / MAX, R + 32), rt = punto(3 / MAX, R + 52);

    return '<div class="slide">' +
             '<div class="medidores">' +
               P.map(function (p, k) {
                 var d = k * 300;
                 return '<div class="med" data-paso="0" style="--d:' + d + 'ms">' +
                          '<svg viewBox="0 0 400 230">' +
                            '<path class="pista" d="' + arco + '"/>' +
                            '<path class="lleno" pathLength="1" data-paso="0" style="--d:' + (d + 150) + 'ms;--f:' + (1 - p.v / MAX) + '" d="' + arco + '"/>' +
                            '<line class="ref" x1="' + r1[0] + '" y1="' + r1[1] + '" x2="' + r2[0] + '" y2="' + r2[1] + '"/>' +
                            '<text class="t-ref" x="' + (rt[0] - 6) + '" y="' + rt[1] + '" text-anchor="end">3x</text>' +
                            '<text class="t-val" x="' + CX + '" y="' + (CY - 6) + '">' + U.tn(p.v, 1) + 'x</text>' +
                          '</svg>' +
                          '<p class="med-plan">' + p.n + '</p>' +
                          '<p class="med-lbl">LTV/CAC</p>' +
                          '<p class="med-rec">Recupero en ' + U.fmt(p.rec, 1) + ' meses</p>' +
                        '</div>';
               }).join('') +
             '</div>' +
           '</div>';
  }
});
