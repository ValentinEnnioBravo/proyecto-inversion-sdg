/* 30 · Indicadores — cuatro tarjetas con conteo, de a una ---------- */
SLIDES.push({
  id: 'indicadores',
  zona: 'importe',
  pasos: 4,

  html: function () {
    return '<div class="slide">' +
             '<div class="indic">' +
               '<div class="ind" data-paso="0"><p class="ind-n">VAN</p><p class="grande"><span class="unidad">USD</span> ' + U.n(212172) + '</p></div>' +
               '<div class="ind" data-paso="1"><p class="ind-n">TIR</p><p class="grande">' + U.n(37.5, 1) + '%</p></div>' +
               '<div class="ind" data-paso="2"><p class="ind-n">Payback</p><p class="grande">' + U.n(3.5, 1) + ' <span class="unidad">años</span></p></div>' +
               '<div class="ind" data-paso="3"><p class="ind-n">Margen EBITDA 2031</p><p class="grande azul">' + U.n(52.6, 1) + '%</p></div>' +
             '</div>' +
           '</div>';
  }
});
