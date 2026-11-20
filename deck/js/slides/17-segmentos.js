/* 16 · Segmentos ---------------------------------------------------
   Barra horizontal que crece por tramos B, C y D (proporcional al
   ingreso potencial anual). El tramo C, foco comercial, va en el azul del logo y se marca
   como segmento principal.
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'segmentos',
  zona: 'cae',
  pasos: 3,

  html: function () {
    var S = [
      { l: 'B', n: 'Pequeña', emp: 65581, sup: '1', usd: '118,0', m: 118.0, color: '#D5DAE1' },
      { l: 'C', n: 'Mediana', emp: 10089, sup: '1', usd: '49,0',  m: 49.0,  color: 'var(--azul)', principal: true },
      { l: 'D', n: 'Grande',  emp: 9870,  sup: '2', usd: '142,1', m: 142.1, color: '#B3BAC4' }
    ];
    var total = 309.1;
    return '<div class="slide">' +
             '<div class="seg-barra">' +
               S.map(function (s, k) {
                 return '<i class="barra-h' + (s.principal ? ' principal' : '') + '" data-paso="' + k + '" style="width:' + (s.m / total * 100) + '%;background:' + s.color + '"><b>' + s.l + '</b></i>';
               }).join('') +
             '</div>' +
             '<div class="seg-labels">' +
               S.map(function (s, k) {
                 return '<div class="seg-l" data-paso="' + k + '" style="--d:200ms;--c:' + s.color + '">' +
                          '<b>' + s.l + ' · ' + s.n + '</b>' +
                          '<span><span class="num-g">' + U.n(s.emp) + '</span><sup class="ref" style="font-size:.6em">' + s.sup + '</sup> empresas</span>' +
                          '<span>USD ' + s.usd + ' M</span>' +
                          (s.principal ? '<span class="seg-tag">Segmento principal</span>' : '') +
                        '</div>';
               }).join('') +
             '</div>' +
             '<p class="fuentes">' +
               '<span data-paso="0" style="--d:200ms"><sup>1</sup>Estimación propia con datos de UCEMA PyMEs (2026)</span>' +
               '<span data-paso="2" style="--d:200ms"> · <sup>2</sup>Según UCEMA PyMEs (2026)</span>' +
             '</p>' +
           '</div>';
  }
});
