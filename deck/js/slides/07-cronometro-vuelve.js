/* 07 · Cronómetro (vuelve) -----------------------------------------
   Frente: el tiempo registrado en la diapositiva 5.
   Paso 1: la tarjeta gira 180° (0,8 s) y muestra el reverso.
   Sin tiempo guardado, el reverso muestra solo la frase.
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'cronometro-vuelve',
  zona: 'receptor',
  pasos: 2,

  html: function () {
    return '<div class="slide centro">' +
             '<div class="flip"><div class="flip-in">' +
               '<div class="cara frente"><span class="crono-txt" data-t1>00:00.0</span></div>' +
               '<div class="cara reverso">' +
                 '<span class="crono-txt" data-t2></span>' +
                 '<p class="flip-frase">Esto es lo que tarda un empleado promedio en cargar una factura</p>' +
               '</div>' +
             '</div></div>' +
           '</div>';
  },

  paso: function (n, r) {
    var t = (window.CRONO && CRONO.ms != null) ? CRONO.formato(CRONO.ms) : null;
    r.querySelector('[data-t1]').textContent = t || '00:00.0';
    var t2 = r.querySelector('[data-t2]');
    t2.textContent = t || '';
    t2.style.display = t ? '' : 'none';
    r.querySelector('.flip').classList.toggle('girado', n >= 1);
  }
});
