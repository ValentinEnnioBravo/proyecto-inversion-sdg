/* 32 · Inversión requerida -----------------------------------------
   El monto aparece en la casilla con conteo; después la barra de rubros
   crece por tramos.
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'inversion',
  zona: 'total',
  pasos: 2,

  html: function () {
    var R = [
      ['Desarrollo y organización', 27287, 'var(--azul-osc)'],
      ['Equipos',                   30050, 'var(--azul-med)'],
      ['Capital de trabajo',        90667, 'var(--azul)'],
      ['Percepciones',              8087,  'var(--azul-claro)']
    ];
    var total = 156090;
    return '<div class="slide">' +
             '<div class="casilla" data-paso="0">' +
               '<span class="casilla-t">Total a pagar</span>' +
               '<span class="grande"><span class="unidad">USD</span> ' + U.n(total) + '</span>' +
             '</div>' +
             '<div class="inv-barra">' +
               R.map(function (r, k) {
                 return '<i class="barra-h" data-paso="1" style="--d:' + (k * 350) + 'ms;width:' + (r[1] / total * 100) + '%;background:' + r[2] + '"></i>';
               }).join('') +
             '</div>' +
             '<div class="inv-ley">' +
               R.map(function (r, k) {
                 return '<div data-paso="1" style="--d:' + (k * 350 + 200) + 'ms"><i style="background:' + r[2] + '"></i>' + r[0] + '</div>';
               }).join('') +
             '</div>' +
           '</div>';
  }
});
