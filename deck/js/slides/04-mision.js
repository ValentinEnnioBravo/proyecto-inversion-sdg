/* 03 · Misión — primero la frase; después los tres ítems, de a uno -- */
SLIDES.push({
  id: 'mision',
  zona: 'encabezado',
  pasos: 4,

  html: function () {
    return '<div class="slide">' +
             '<p class="t-frase" data-paso="0">Simplificamos la gestión de cuentas a pagar de las empresas argentinas.</p>' +
             '<ul class="lista">' +
               '<li data-paso="1">Sin pagos duplicados</li>' +
               '<li data-paso="2">Sin intereses por vencimiento</li>' +
               '<li data-paso="3">Sin cambiar de sistema</li>' +
             '</ul>' +
           '</div>';
  }
});
