/* 08 · El costo de la carga manual — tres números, uno por paso -----
   El tercero es el tiempo ahorrado por empleado por mes:
   25 a 40 facturas por día (500 a 800 por mes, 20 días hábiles)
   × 8 a 15 minutos por factura (diapositiva anterior).
   ------------------------------------------------------------------ */
(function () {

  var POR_MES = [500, 800];     // facturas por mes (25 a 40 por día × 20 días)
  var MINUTOS = [8, 15];        // minutos por factura, carga manual
  var H = [POR_MES[0] * MINUTOS[0] / 60, POR_MES[1] * MINUTOS[1] / 60];   // ≈ 67 y 200 horas

  SLIDES.push({
    id: 'costo',
    zona: 'receptor',
    pasos: 3,

    html: function () {
      return '<div class="slide">' +
               '<div class="tres">' +
                 '<div class="dato" data-paso="0">' +
                   '<p class="grande">' + U.n(58.4, 1) + ' <span class="unidad">millones</span><sup class="ref">1</sup></p>' +
                   '<p class="dato-txt">de facturas de compra por mes en <b>empresas formales con más de 10 empleados</b></p>' +
                   '<p class="dato-sub">85.540 empresas pequeñas, medianas y grandes en Argentina</p>' +
                 '</div>' +
                 '<div class="dato" data-paso="1">' +
                   '<p class="grande">' + U.n(25) + '<span class="a">a</span>' + U.n(40) + '<sup class="ref">2</sup></p>' +
                   '<p class="dato-txt">facturas por día por empleado</p>' +
                 '</div>' +
                 '<div class="dato azul-top" data-paso="2">' +
                   '<p class="grande azul">' + U.n(Math.round(H[0])) + '<span class="a">a</span>' + U.n(Math.round(H[1])) +
                     ' <span class="unidad">horas</span></p>' +
                   '<p class="dato-txt">ahorradas por empleado por mes</p>' +
                   '<p class="dato-sub">' + POR_MES[0] + ' a ' + POR_MES[1] + ' facturas por mes × ' +
                     MINUTOS[0] + ' a ' + MINUTOS[1] + ' minutos cada una</p>' +
                 '</div>' +
               '</div>' +
               '<p class="fuentes">' +
                 '<span data-paso="0"><sup>1</sup>Elaboración propia con datos de UCEMA PyMEs (2026)</span>' +
                 '<span data-paso="1"> · <sup>2</sup>Según Lido (2026), con datos de APQC, Ardent Partners e IOFM</span>' +
               '</p>' +
             '</div>';
    }
  });
})();
