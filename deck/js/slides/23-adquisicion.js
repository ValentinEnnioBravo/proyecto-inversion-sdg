/* 23 · Cómo conseguimos nuestros clientes --------------------------
   Estrategia de adquisición en 4 pilares claros, paso a paso.
   Fuentes: Comercial (1).docx (Ansoff, Sensibilidad) y
   Comercial (2).docx (Plaza, Promoción, Origen de los clientes).
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'adquisicion',
  zona: 'subtotales',
  pasos: 5,

  html: function () {
    var PILARES = [
      {
        n: '01',
        titulo: 'Búsqueda y pauta digital',
        txt: 'Google y LinkedIn Ads'
      },
      {
        n: '02',
        titulo: 'Estudios contables e implementadores',
        txt: 'Prescriptores'
      },
      {
        n: '03',
        titulo: 'Prueba gratis y demostración real',
        txt: '100 facturas gratis'
      },
      {
        n: '04',
        titulo: 'Casos de éxito y boca en boca',
        txt: 'Webinars y recomendaciones'
      }
    ];

    return '<div class="slide adq-slide">' +
             '<h2 class="t-titulo" data-paso="0">Cómo conseguimos nuestros clientes</h2>' +
             '<div class="adq-grid">' +
               PILARES.map(function (p, k) {
                 return '<div class="adq-card" data-paso="' + (k + 1) + '">' +
                          '<span class="adq-num">' + p.n + '</span>' +
                          '<p class="adq-t">' + p.titulo + '</p>' +
                          '<p class="adq-p">' + p.txt + '</p>' +
                        '</div>';
               }).join('') +
             '</div>' +
             '<p class="fuentes">' +
               '<span data-paso="0">Fuentes: Comercial (1) — Ansoff y Sensibilidad · Comercial (2) — Plaza, Promoción y Modelo de Bass</span>' +
             '</p>' +
           '</div>';
  }
});
