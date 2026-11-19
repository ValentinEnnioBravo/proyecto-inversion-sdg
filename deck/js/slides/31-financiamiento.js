/* 31 · Qué necesitamos de los inversores (Financiamiento) ----------
   Monto solicitado (70%) vs. capital propio (30%), devolución anual
   y equivalente mensual, condiciones del préstamo y cuadro de
   amortización a 3 años.
   Fuentes: Flujo de Fondos.docx y Flujo de Fondos.xlsx (Financiacion).
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'financiamiento',
  zona: 'importe',
  pasos: 3,

  html: function () {
    var CUOTAS = [
      ['Año 1', '46.026', '32.169', '13.857'],
      ['Año 2', '46.026', '36.249', '9.778'],
      ['Año 3', '46.026', '40.846', '5.180']
    ];
    return '<div class="slide fin-slide">' +
             '<h2 class="t-titulo" data-paso="0">Financiamiento requerido</h2>' +
             '<div class="fin-top" data-paso="0">' +
               '<div class="fin-card principal">' +
                 '<span class="fin-et">Solicitado a inversores / préstamo (70%)</span>' +
                 '<p class="grande azul"><span class="unidad">USD</span> ' + U.n(109263) + '</p>' +
               '</div>' +
               '<div class="fin-card">' +
                 '<span class="fin-et">Capital propio de los socios (30%)</span>' +
                 '<p class="grande"><span class="unidad">USD</span> ' + U.n(46827) + '</p>' +
               '</div>' +
               '<div class="fin-card total-ini">' +
                 '<span class="fin-et">Inversión inicial (Año 0)</span>' +
                 '<p class="grande"><span class="unidad">USD</span> ' + U.n(156091) + '</p>' +
               '</div>' +
             '</div>' +
             '<div class="fin-mid">' +
               '<div class="fin-dev" data-paso="1">' +
                 '<span class="fin-et">Devolución estimada</span>' +
                 '<p class="fin-mes"><span class="unidad">USD</span> ' + U.n(3836) + ' <small>/ mes equivalente</small></p>' +
                 '<p class="fin-anual">3 cuotas anuales de <b>USD 46.026</b> (planilla financiera)</p>' +
                 '<div class="fin-conds">' +
                   '<span><b>Plazo:</b> 3 años</span>' +
                   '<span><b>Sistema:</b> Francés en USD</span>' +
                   '<span><b>Tasa:</b> TNA 12% · TEA 12,68%</span>' +
                   '<span><b>Total devuelto:</b> USD 138.079 (USD 28.815 de intereses)</span>' +
                 '</div>' +
               '</div>' +
               '<div class="fin-tabla-wrap" data-paso="2">' +
                 '<p class="fin-et">Cuadro de amortización (USD)</p>' +
                 '<table class="fin-tabla">' +
                   '<thead><tr><th>Año</th><th>Cuota</th><th>Capital</th><th>Intereses</th></tr></thead>' +
                   '<tbody>' +
                     CUOTAS.map(function (c) {
                       return '<tr><td>' + c[0] + '</td><td>' + c[1] + '</td><td>' + c[2] + '</td><td>' + c[3] + '</td></tr>';
                     }).join('') +
                     '<tr class="fin-tot"><td>Total</td><td>138.079</td><td>109.263</td><td>28.815</td></tr>' +
                   '</tbody>' +
                 '</table>' +
               '</div>' +
             '</div>' +
             '<p class="fuentes">' +
               '<span data-paso="0">Fuente: Flujo de Fondos.xlsx (hoja Financiacion) y Flujo de Fondos.docx · Equivalente mensual calculado como cuota anual ÷ 12</span>' +
             '</p>' +
           '</div>';
  }
});
