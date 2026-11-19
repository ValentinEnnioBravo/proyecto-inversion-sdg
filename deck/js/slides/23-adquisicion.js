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
        txt: '<b>Google Ads</b> cuando aparece el dolor (factura duplicada, multa, auditoría) y <b>LinkedIn Ads</b> dirigido a jefes de administración y contadores.'
      },
      {
        n: '02',
        titulo: 'Estudios contables e implementadores',
        txt: 'Actúan como <b>prescriptores</b>: usan la plataforma gratis y reciben una comisión única del <b>5%</b> del primer año de abono por cada cliente referido.'
      },
      {
        n: '03',
        titulo: 'Prueba gratis y demostración real',
        txt: '<b>100 facturas gratis</b> y sin costo de implementación. Alta online directa en pymes chicas; demo y prueba con facturas propias en medianas y grandes.'
      },
      {
        n: '04',
        titulo: 'Casos de éxito y boca en boca',
        txt: 'Publicación de horas ahorradas y errores evitados por rubro, junto con webinars con clientes y estudios que aceleran nuevas recomendaciones.'
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
