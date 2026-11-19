/* 06 · Un día de trabajo -------------------------------------------
   Paso 0: la línea de tiempo se dibuja hasta el último punto.
   Pasos 1–4: cada punto se enciende, baja una línea (cada vez más
   larga) y el texto aparece abajo, a su derecha.
   Paso 5: "$1,8 millones" con conteo.
   ------------------------------------------------------------------ */
(function () {

  var PUNTOS = [
    { hora: '8:30',           txt: '35 facturas por mail' },
    { hora: 'Durante el día', txt: '12 fotos de facturas por WhatsApp' },
    { hora: 'A media tarde',  txt: 'Una factura vencida hace 10 días' },
    { hora: 'A fin de mes',   txt: '2 días para controlar el mes' }
  ];
  var X = [5, 29, 53, 77];            // % del ancho
  var BAJADA = [40, 106, 172, 238];   // px de cada línea vertical

  SLIDES.push({
    id: 'dia-de-trabajo',
    zona: 'receptor',
    pasos: 6,

    html: function () {
      var pts = PUNTOS.map(function (pt, k) {
        var paso = k + 1, h = BAJADA[k];
        return '<div class="lt-punto" style="left:' + X[k] + '%">' +
                 '<i class="lt-dot fundido" data-paso="0" style="--d:' + (300 + k * 300) + 'ms"></i>' +
                 '<i class="lt-dot azul fundido" data-paso="' + paso + '"></i>' +
                 '<span class="lt-hora" data-paso="' + paso + '">' + pt.hora + '</span>' +
                 '<i class="lt-baja barra-v desde-arriba" data-paso="' + paso + '" style="--t:.4s;height:' + h + 'px"></i>' +
                 '<p class="lt-txt" data-paso="' + paso + '" style="--d:300ms;top:' + (21 + h - 6) + 'px">' + pt.txt + '</p>' +
               '</div>';
      }).join('');

      return '<div class="slide dia">' +
               '<p class="dia-caso" data-paso="0"><b>Distribuidora con 900 facturas de compra por mes</b> <span>· Caso ilustrativo</span></p>' +
               '<div class="lt">' +
                 '<i class="lt-linea barra-h" data-paso="0" style="--t:1.2s;left:' + X[0] + '%;width:' + (X[3] - X[0]) + '%"></i>' +
                 pts +
               '</div>' +
               '<p class="dia-final" data-paso="5">' +
                 '<span class="grande azul">$' + U.n(1.8, 1) + ' millones</span>' +
                 '<span class="resto">pagados dos veces</span>' +
               '</p>' +
             '</div>';
    }
  });
})();
