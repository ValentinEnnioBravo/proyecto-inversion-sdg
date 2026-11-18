/* 15 · Cálculo del SOM — cascada de tres bloques, con conteo -------- */
SLIDES.push({
  id: 'som',
  zona: 'cae',
  pasos: 3,

  html: function () {
    var B = [
      { v: 85540, sup: '1', pie: '',                                          color: 'var(--azul)' },
      { v: 42770, sup: '',  pie: '50%<sup>2</sup> de adopción posible:',      color: 'var(--azul-med)' },
      { v: 5346,  sup: '',  pie: '12,5% de captación:',                       color: 'var(--azul-claro)' }
    ];
    var ALTO = 28; // em para 85.540
    return '<div class="slide">' +
             '<div class="cascada">' +
               B.map(function (b, k) {
                 var h = Math.max(0.9, ALTO * b.v / 85540);
                 return '<div class="cas-col">' +
                          '<p class="cas-pie" data-paso="' + k + '">' + b.pie + '</p>' +
                          '<p class="cas-val" data-paso="' + k + '">' + U.n(b.v) +
                            (b.sup ? '<sup class="ref">' + b.sup + '</sup>' : '') + 'empresas</p>' +
                          '<i class="cas-barra barra-v" data-paso="' + k + '" style="height:' + h + 'em;background:' + b.color + '"></i>' +
                        '</div>';
               }).join('') +
             '</div>' +
             '<p class="fuentes">' +
               '<span data-paso="0"><sup>1</sup>Estimación propia con datos de UCEMA PyMEs (2026)</span>' +
               '<span data-paso="1"> · <sup>2</sup>Estimación propia con datos de la encuesta nadIA (2026)</span>' +
             '</p>' +
           '</div>';
  }
});
