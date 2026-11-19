/* 32 · En qué se va el capital de trabajo (WC) ---------------------
   Gráfico de torta de los egresos operativos de los meses 1 a 18 (hasta
   el déficit acumulado máximo en junio 2028). Cada porción tiene su
   etiqueta a la izquierda o a la derecha, unida con una guía (mismo
   estilo que la diapositiva de TAM / SAM / SOM).
   Fuentes: Flujo de Fondos.xlsx (hoja WC) y Flujo de Fondos.docx.
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'capital-trabajo',
  zona: 'total',

  html: function () {
    var CX = 800, CY = 495, R = 200, INICIO = -75;   // grados, 0 = arriba
    // [nombre, detalle, USD, %, color, lado, y de la etiqueta, ángulo de la guía (opcional)]
    var RUBROS = [
      ['Pauta digital',           'Google Ads y LinkedIn Ads',            31200, 13.3, 'var(--azul-osc)',   'izq', 480],
      ['Infraestructura y canales','AWS, Twilio, WhatsApp y Claude',      18331,  7.8, 'var(--azul-med)',   'izq', 300],
      ['Comisiones',              'Estudios contables y Mercado Pago',    15471,  6.6, '#7BB1E8',           'der', 300],
      ['Percepción RG 5617',      '30% de los pagos al exterior',         14370,  6.1, 'var(--azul-claro)', 'der', 480],
      ['Contador y otros gastos', 'Contador externo y gastos operativos',  2882,  1.2, '#CBD5E1',           'der', 660],
      ['Capital humano',          'Sueldos, SAC y cargas (26%)',         152032, 64.9, 'var(--azul)',       'izq', 660, 232]
    ];
    var TOTAL = RUBROS.reduce(function (a, r) { return a + r[2]; }, 0);

    function pt(grados, r) {
      var a = grados * Math.PI / 180;
      return [CX + r * Math.sin(a), CY - r * Math.cos(a)];
    }
    function f(n) { return n.toFixed(1); }

    var porciones = '', etiquetas = '', a0 = INICIO;
    RUBROS.forEach(function (r, k) {
      var ang = r[2] / TOTAL * 360, a1 = a0 + ang;
      var p0 = pt(a0, R), p1 = pt(a1, R);
      porciones += '<path class="fundido" data-paso="0" style="--d:' + (k * 120) + 'ms" fill="' + r[4] + '" ' +
                   'd="M' + CX + ' ' + CY + 'L' + f(p0[0]) + ' ' + f(p0[1]) +
                   'A' + R + ' ' + R + ' 0 ' + (ang > 180 ? 1 : 0) + ' 1 ' + f(p1[0]) + ' ' + f(p1[1]) + 'Z"/>';

      var izq = r[5] === 'izq', y = r[6];
      var aG = r[7] !== undefined ? r[7] : a0 + ang / 2;
      var ancla = pt(aG, R - 34), sale = pt(aG, R + 28);
      var codo = izq ? 500 : 1100, fin = izq ? 470 : 1130, tx = izq ? 450 : 1150;
      var anchor = izq ? 'end' : 'start';
      etiquetas +=
        '<g class="fundido" data-paso="0" style="--d:' + (700 + k * 120) + 'ms">' +
          '<polyline class="guia" points="' + f(ancla[0]) + ',' + f(ancla[1]) + ' ' + f(sale[0]) + ',' + f(sale[1]) + ' ' + codo + ',' + y + ' ' + fin + ',' + y + '"/>' +
          '<circle cx="' + f(ancla[0]) + '" cy="' + f(ancla[1]) + '" r="8" fill="' + (k === 5 || k === 0 ? '#fff' : 'var(--negro)') + '"/>' +
          '<text class="wc-n" x="' + tx + '" y="' + (y - 34) + '" text-anchor="' + anchor + '">' + r[0] + '</text>' +
          '<text class="wc-v" x="' + tx + '" y="' + (y + 16) + '" text-anchor="' + anchor + '">USD ' + U.fmt(r[2]) +
            '<tspan class="wc-p"> · ' + U.fmt(r[3], 1) + '%</tspan></text>' +
          '<text class="wc-d" x="' + tx + '" y="' + (y + 52) + '" text-anchor="' + anchor + '">' + r[1] + '</text>' +
        '</g>';
      a0 = a1;
    });

    return '<div class="slide wc-slide">' +
             '<svg class="wc-torta" viewBox="0 0 1600 900">' +
               '<g class="wc-porciones">' + porciones + '</g>' + etiquetas +
             '</svg>' +
             '<div class="wc-head" data-paso="0">' +
               '<h2 class="t-titulo">En qué se va el capital de trabajo (WC)</h2>' +
               '<p class="wc-sub">Egresos operativos de los meses 1 a 18 (ene 2027 – jun 2028): <b>USD ' + U.n(234286) + '</b></p>' +
             '</div>' +
             '<p class="fuentes">' +
               '<span data-paso="0">Fuente: Flujo de Fondos.xlsx (hoja WC, meses 1 a 18) y Flujo de Fondos.docx</span>' +
             '</p>' +
           '</div>';
  }
});
