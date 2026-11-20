/* 24 · Promoción — tres tarjetas, de a una */
SLIDES.push({
  id: 'promocion',
  zona: 'subtotales',
  pasos: 3,

  html: function () {
    return '<div class="slide">' +
             '<div class="promo">' +
               '<div class="promo-card" data-paso="0"><span>Primeras <b>100</b> facturas gratis</span></div>' +
               '<div class="promo-card" data-paso="1"><span>Precio fundador por <b>12</b> meses</span></div>' +
               '<div class="promo-card" data-paso="2"><span>Pago anual con <b>2</b> meses bonificados</span></div>' +
             '</div>' +
           '</div>';
  }
});
