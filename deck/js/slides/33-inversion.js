/* 33 · Inversión inicial (Año 0) -----------------------------------
   El monto aparece en la casilla con conteo; después la barra de rubros
   crece por tramos con su importe exacto en USD.
   Fuente: Flujo de Fondos.xlsx (hoja Egresos, Año 0).
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'inversion',
  zona: 'total',
  pasos: 2,

  html: function () {
    var R = [
      ['Desarrollo y organización', 27287, 'var(--azul-osc)'],
      ['Equipos (7 puestos)',       30050, 'var(--azul-med)'],
      ['Capital de trabajo (Año 0)',90667, 'var(--azul)'],
      ['Percepciones (RG 5617)',    8087,  'var(--azul-claro)']
    ];
    var total = 156091;
    return '<div class="slide">' +
             '<div class="casilla" data-paso="0">' +
               '<span class="casilla-t">Total a pagar · Año 0</span>' +
               '<span class="grande"><span class="unidad">USD</span> ' + U.n(total) + '</span>' +
             '</div>' +
             '<div class="inv-barra">' +
               R.map(function (r, k) {
                 return '<i class="barra-h" data-paso="1" style="--d:' + (k * 300) + 'ms;width:' + (r[1] / total * 100) + '%;background:' + r[2] + '"></i>';
               }).join('') +
             '</div>' +
             '<div class="inv-ley">' +
               R.map(function (r, k) {
                 return '<div data-paso="1" style="--d:' + (k * 300 + 180) + 'ms">' +
                          '<i style="background:' + r[2] + '"></i>' +
                          '<span>' + r[0] + '<small>USD ' + U.fmt(r[1]) + '</small></span>' +
                        '</div>';
               }).join('') +
             '</div>' +
           '</div>';
  }
});
