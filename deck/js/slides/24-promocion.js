/* 24 · Promoción — tres tarjetas, de a una; después el dato de pauta */
SLIDES.push({
  id: 'promocion',
  zona: 'subtotales',
  pasos: 4,

  html: function () {
    var PAUTA = [['Año 1', 1400], ['Año 2', 2400], ['Año 3', 3400]];
    return '<div class="slide">' +
             '<div class="promo">' +
               '<div class="promo-card" data-paso="0"><span>Primeras <b>100</b> facturas gratis</span></div>' +
               '<div class="promo-card" data-paso="1"><span>Precio fundador por <b>12</b> meses</span></div>' +
               '<div class="promo-card" data-paso="2"><span>Pago anual con <b>2</b> meses bonificados</span></div>' +
             '</div>' +
             '<div class="pauta" data-paso="3">' +
               '<p class="pauta-t">Google Ads · LinkedIn Ads</p>' +
               '<div class="pauta-barras">' +
                 PAUTA.map(function (p, k) {
                   return '<div class="pauta-f"><span class="mono">' + p[0] + '</span>' +
                            '<span class="b barra-h" data-paso="3" style="--d:' + (200 + k * 150) + 'ms;width:' + (p[1] / 3400 * 100) + '%">USD ' + U.fmt(p[1]) + '</span>' +
                          '</div>';
                 }).join('') +
               '</div>' +
             '</div>' +
           '</div>';
  }
});
