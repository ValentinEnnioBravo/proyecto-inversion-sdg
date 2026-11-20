/* 34b · Retorno para el accionista ----------------------------------
   Zona "Total a pagar". Última diapositiva antes del cierre.
   Paso 0: título y los tres datos de arriba (conteo 800 ms).
   Paso 1: barras de aporte 2026–2028, hacia abajo, 500 ms cada una.
   Paso 2: barras de recupero 2029–2031, hacia arriba, 500 ms cada una.
   Paso 3: línea del acumulado (1,2 s) y su valor final.
   Paso 4: fila inferior con conteo (TIR en azul) y el pie.
   Escenario base. Fuente: flujo de fondos del accionista del proyecto.
   ------------------------------------------------------------------ */
(function () {

  var FLUJO = [
    ['2026', -46827],
    ['2027', -163121],
    ['2028', -29424],
    ['2029', 67802],
    ['2030', 245201],
    ['2031', 523981]
  ];

  function grafico() {
    var W = 1400, H = 430;
    var MAXV = 620000, MINV = -250000, YT = 30, YB = 370;   // rango de valores → alto en px
    function y(v) { return YT + (MAXV - v) / (MAXV - MINV) * (YB - YT); }
    var Y0 = y(0), X0 = 90, X1 = 1180, PASO = (X1 - X0) / FLUJO.length, ANCHO = 104;
    function cx(k) { return X0 + PASO * (k + .5); }
    var s = '';

    // Barras: aportes hacia abajo (paso 1), recuperos hacia arriba (paso 2)
    var nNeg = 0, nPos = 0;
    FLUJO.forEach(function (f, k) {
      var v = f[1], neg = v < 0, x = cx(k) - ANCHO / 2;
      var d = (neg ? nNeg++ : nPos++) * 500, paso = neg ? 1 : 2;
      var top = neg ? Y0 : y(v), alto = Math.abs(y(v) - Y0);
      s += '<rect class="ac-barra ' + (neg ? 'ac-aporte desde-arriba' : 'ac-recupero') + ' barra-v" data-paso="' + paso + '" ' +
             'style="--d:' + d + 'ms;--t:.5s" x="' + x + '" y="' + top.toFixed(1) + '" width="' + ANCHO + '" height="' + alto.toFixed(1) + '"/>';
      // Monto: arriba de la barra en los recuperos; en los aportes, del otro lado del eje
      // (así no se cruza con la línea del acumulado, que pasa por debajo). En la última
      // barra va adentro, al medio, porque encima queda el valor final del acumulado.
      var adentro = k === FLUJO.length - 1;
      s += '<text class="ac-monto fundido' + (neg ? ' neg' : '') + (adentro ? ' adentro' : '') + '" data-paso="' + paso + '" style="--d:' + (d + 350) + 'ms" ' +
             'x="' + cx(k) + '" y="' + (adentro ? (y(v) + Y0) / 2 + 9 : (neg ? Y0 : y(v)) - 14).toFixed(1) + '">' + (neg ? '−' : '') + U.fmt(Math.abs(v)) + '</text>';
      s += '<text class="ac-anio" x="' + cx(k) + '" y="' + (H - 6) + '">' + f[0] + '</text>';
    });

    // Eje en cero
    s += '<line class="ac-eje" x1="' + (X0 - 20) + '" y1="' + Y0.toFixed(1) + '" x2="' + (X1 + 20) + '" y2="' + Y0.toFixed(1) + '"/>';

    // Acumulado
    var acc = 0, pts = FLUJO.map(function (f, k) { acc += f[1]; return [cx(k), y(acc)]; });
    var fin = pts[pts.length - 1];
    s += '<path class="ac-linea trazo" data-paso="3" pathLength="1" style="--t:1.2s" d="' +
           pts.map(function (p, k) { return (k ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join('') + '"/>';
    s += '<g class="fundido" data-paso="3" style="--d:1150ms">' +
           '<circle class="ac-punto" cx="' + fin[0].toFixed(1) + '" cy="' + fin[1].toFixed(1) + '" r="8"/>' +
           '<text class="ac-fin" x="' + (fin[0] + 22).toFixed(1) + '" y="' + (fin[1] + 9).toFixed(1) + '">USD ' + U.fmt(acc) + '</text>' +
         '</g>';

    return '<svg class="ac-graf" viewBox="0 0 ' + W + ' ' + H + '">' + s + '</svg>';
  }

  SLIDES.push({
    id: 'retorno-accionista',
    zona: 'total',
    pasos: 5,

    html: function () {
      return '<div class="slide ac-slide">' +
               '<div class="ac-head" data-paso="0">' +
                 '<h2 class="t-titulo">Retorno para el accionista</h2>' +
                 '<div class="ac-fila">' +
                   '<p>Aporte total · <b>USD ' + U.n(239372) + '</b></p>' +
                   '<p>Recupero total · <b>USD ' + U.n(836984) + '</b></p>' +
                   '<p>Resultado neto · <b>USD ' + U.n(597612) + '</b></p>' +
                 '</div>' +
               '</div>' +
               grafico() +
               '<div class="ac-fila ac-abajo">' +
                 '<p data-paso="4">Tasa exigida <b>' + U.n(17.63, 2) + '%</b></p>' +
                 '<p data-paso="4" style="--d:150ms">TIR <b class="azul">' + U.n(41.65, 2) + '%</b></p>' +
                 '<p data-paso="4" style="--d:300ms">VAN <b>USD ' + U.n(195564) + '</b></p>' +
               '</div>' +
             '</div>';
    }
  });
})();
