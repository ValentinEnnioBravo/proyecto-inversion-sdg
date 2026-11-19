/* 02 · Quiénes somos -----------------------------------------------
   Tres datos grandes que definen a FacturasYa.
   Fuentes: Comercial (1).docx y Comercial (2).docx.
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'quienes-somos',
  zona: 'encabezado',
  pasos: 4,

  html: function () {
    return '<div class="slide qs">' +
             '<h2 class="t-titulo" data-paso="0">Quiénes somos</h2>' +
             '<div class="tres">' +
               '<div class="dato azul-top" data-paso="1">' +
                 '<span class="grande">+' + U.n(150) + '</span>' +
                 '<p class="dato-txt">Facturas por mes</p>' +
               '</div>' +
               '<div class="dato azul-top" data-paso="2">' +
                 '<span class="grande">' + U.n(6) + '</span>' +
                 '<p class="dato-txt">Socios</p>' +
               '</div>' +
               '<div class="dato azul-top" data-paso="3">' +
                 '<span class="grande texto">Orden, control y confianza</span>' +
               '</div>' +
             '</div>' +
           '</div>';
  }
});
