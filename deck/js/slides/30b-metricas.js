/* 30b · Métricas de crecimiento — tres tarjetas con conteo, de a una ---
   CAGR de ventas (desde 2027 y desde 2028), ARR de cierre y Regla del 40.
   Solo cifras y rótulos; las explicaciones van en la exposición oral.
   El CAGR desde 2027 parte de un año con solo seis meses de ventas (la
   captación empieza en julio de 2027); el de 2028 compara años completos.
   Valores: Flujo de Fondos.docx (CAGR, ARR y EBITDA) y Comercial (2) (ventas).
   Regla del 40 = crecimiento anual de ventas + margen EBITDA, 2031:
   33,6% + 52,6% = 86,2%.
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'metricas-crecimiento',
  zona: 'importe',
  pasos: 3,

  html: function () {
    return '<div class="slide">' +
             '<div class="metr">' +

               '<div class="ind" data-paso="0">' +
                 '<p class="ind-n">CAGR de ventas</p>' +
                 '<div class="mt-sub">' +
                   '<p class="mt-e">Desde 2027</p>' +
                   '<p class="mt-n">' + U.n(126.3, 1) + '%</p>' +
                 '</div>' +
                 '<div class="mt-sub">' +
                   '<p class="mt-e">Desde 2028</p>' +
                   '<p class="mt-n azul">' + U.n(54.6, 1) + '%</p>' +
                 '</div>' +
               '</div>' +

               '<div class="ind" data-paso="1">' +
                 '<p class="ind-n">ARR de cierre 2031</p>' +
                 '<p class="grande"><span class="unidad">USD</span> ' + U.n(1.21, 2) + ' M</p>' +
               '</div>' +

               '<div class="ind" data-paso="2">' +
                 '<p class="ind-n">Regla del 40 · 2031</p>' +
                 '<p class="grande azul">' + U.n(86.2, 1) + '%</p>' +
               '</div>' +

             '</div>' +
           '</div>';
  }
});
