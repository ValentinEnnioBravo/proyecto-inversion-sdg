/* 04 · Operativa argentina — primero el círculo de ARCA; después los
   tres ítems, de a uno ----------------------------------------------- */
SLIDES.push({
  id: 'operativa',
  zona: 'encabezado',
  pasos: 4,

  html: function () {
    return '<div class="slide dos-col">' +
             '<div class="arca-circ" data-paso="0"><span>ARCA</span></div>' +
             '<div class="col">' +
               '<h2 class="t-titulo" data-paso="0">Operativa argentina</h2>' +
               '<ul class="lista">' +
                 '<li data-paso="1">Validación de CAE y CUIT</li>' +
                 '<li data-paso="2">Factura de Crédito Electrónica MiPyME</li>' +
                 '<li data-paso="3">Retenciones y percepciones</li>' +
               '</ul>' +
             '</div>' +
           '</div>';
  }
});
