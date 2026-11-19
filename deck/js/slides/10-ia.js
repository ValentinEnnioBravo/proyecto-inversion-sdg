/* 09 · Avance de los modelos de IA ---------------------------------
   Paso 0: título. Paso 1: bloque izquierdo, tres ítems con tilde azul
   de a uno. Paso 2: bloque derecho, "900 facturas" y "200 datos con
   error" con conteo y después tres ítems con guión gris.
   Las fuentes aparecen junto con cada número, en la línea del pie.
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'ia',
  zona: 'receptor',
  pasos: 3,

  html: function () {
    function item(paso, d, ico, cuerpo) {
      return '<div class="ia-item" data-paso="' + paso + '" style="--d:' + d + 'ms">' + ico + '<div>' + cuerpo + '</div></div>';
    }
    function sup(n) { return '<sup class="ref">' + n + '</sup>'; }
    return '<div class="slide ia">' +
             '<h2 class="t-titulo" data-paso="0">Avance de los modelos de IA</h2>' +
             '<div class="ia-cols">' +
               '<div class="ia-bloque">' +
                 item(1, 0, U.tilde,
                   '<p class="ia-num">' + U.n(97.6, 1) + '%<sup class="ref">1</sup></p>' +
                   '<p>de precisión en la extracción de datos</p>' +
                   '<div class="medidor"><i class="barra-h" data-paso="1" style="--d:250ms;width:97.6%"></i></div>') +
                 item(1, 350, U.tilde, 'Superan a servicios especializados' + sup(2)) +
                 item(1, 700, U.tilde, 'USD 0,01 por página' + sup(3)) +
               '</div>' +
               '<div class="ia-bloque">' +
                 '<div class="ia-cifras" data-paso="2">' +
                   '<p class="ia-cifra">' + U.n(900) + 'facturas</p>' +
                   '<p class="ia-cifra azul">' + U.n(200) + '<sup class="ref">4</sup>datos con error</p>' +
                 '</div>' +
                 item(2, 950, U.guion, 'Una factura por vez') +
                 item(2, 1150, U.guion, 'Sin historial') +
                 item(2, 1350, U.guion, 'Sin control de duplicados') +
               '</div>' +
             '</div>' +
             '<p class="fuentes">' +
               '<span data-paso="1"><sup>1</sup>Según <em>Information Extraction from Electricity Invoices with General-Purpose LLMs</em> (arXiv, 2026)</span>' +
               '<span data-paso="1" style="--d:350ms"> · <sup>2</sup>Según HackerNoon, <em>The Best AI Models for Invoice Processing</em></span>' +
               '<span data-paso="1" style="--d:700ms"> · <sup>3</sup>Según precios de Amazon Textract y Google Document AI</span>' +
               '<span data-paso="2"> · <sup>4</sup>Elaboración propia sobre arXiv (2026)</span>' +
             '</p>' +
           '</div>';
  }
});
