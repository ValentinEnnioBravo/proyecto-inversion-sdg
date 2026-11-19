/* 14 · Tamaño de mercado -------------------------------------------
   Tres círculos concéntricos en azules planos, de afuera hacia adentro:
   TAM (oscuro), SAM (medio), SOM (claro). Uno por paso.
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'mercado',
  zona: 'cae',
  pasos: 3,

  html: function () {
    var cx = 450, cy = 440;
    var C = [
      { r: 390, color: 'var(--azul-osc)',   et: 'TAM', y: 130, val: 519531, sup: '1', extra: '',
        punto: [cx + 230, cy - 230] },
      { r: 260, color: 'var(--azul)',       et: 'SAM', y: 410, val: 85540,  sup: '2', extra: 'USD 309,2 M por año',
        punto: [cx + 195, cy - 30] },
      { r: 130, color: 'var(--azul-claro)', et: 'SOM', y: 700, val: 5346,   sup: '',  extra: '',
        punto: [cx + 55, cy + 55] }
    ];
    var s = '';
    C.forEach(function (c, k) {
      s += '<g class="fundido" data-paso="' + k + '">' +
             '<circle cx="' + cx + '" cy="' + cy + '" r="' + c.r + '" fill="' + c.color + '"/>' +
           '</g>';
    });
    C.forEach(function (c, k) {
      var p = c.punto;
      s += '<g class="fundido" data-paso="' + k + '" style="--d:200ms">' +
             '<polyline class="guia" points="' + p[0] + ',' + p[1] + ' 940,' + c.y + ' 975,' + c.y + '"/>' +
             '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="8" fill="' + (k === 2 ? 'var(--negro)' : '#fff') + '"/>' +
             '<text class="et" x="1000" y="' + (c.y - 44) + '">' + c.et + '</text>' +
             '<text class="val" x="1000" y="' + (c.y + 16) + '">' + U.tn(c.val) +
               (c.sup ? '<tspan class="sup" baseline-shift="super">' + c.sup + '</tspan>' : '') +
               '<tspan class="u"> empresas</tspan></text>' +
             (c.extra ? '<text class="extra" x="1000" y="' + (c.y + 62) + '">' + c.extra + '</text>' : '') +
           '</g>';
    });
    return '<div class="slide lleno mercado">' +
             '<svg viewBox="0 0 1600 900">' + s + '</svg>' +
             '<p class="fuentes" style="left:auto;right:4em;width:auto;bottom:1.6em;text-align:right">' +
               '<span data-paso="0" style="--d:200ms"><sup>1</sup>Según UCEMA PyMEs (2026), datos AFIP-SIPA a dic. 2025</span>' +
               '<span data-paso="1" style="--d:200ms"> · <sup>2</sup>Estimación propia con datos de UCEMA PyMEs (2026)</span>' +
             '</p>' +
           '</div>';
  }
});
