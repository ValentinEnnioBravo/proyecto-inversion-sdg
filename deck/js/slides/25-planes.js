/* 25 · Planes — tres tarjetas; la de Pyme aparece última, con borde azul */
SLIDES.push({
  id: 'planes',
  zona: 'subtotales',
  pasos: 3,

  html: function () {
    var P = [
      { n: 'Inicial', p: 150,  f: '300 facturas',   paso: 0 },
      { n: 'Pyme',    p: 405,  f: '900 facturas',   paso: 2, destacado: true },
      { n: 'Empresa', p: 1200, f: '3.000 facturas', paso: 1 }
    ];
    return '<div class="slide">' +
             '<div class="planes">' +
               P.map(function (p) {
                 return '<div class="plan' + (p.destacado ? ' destacado' : '') + '" data-paso="' + p.paso + '">' +
                          '<p class="plan-n">' + p.n + '</p>' +
                          '<p class="plan-p"><span>USD</span><b class="grande">' + U.fmt(p.p) + '</b><span>por mes</span></p>' +
                          '<p class="plan-f">' + p.f + '</p>' +
                        '</div>';
               }).join('') +
             '</div>' +
           '</div>';
  }
});
