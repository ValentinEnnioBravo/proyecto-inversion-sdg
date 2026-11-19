/* 05 · Cronómetro --------------------------------------------------
   Solo el cronómetro en 00:00.0 (mm:ss y décimas), sin texto.
   Enter o clic sobre el cronómetro: arranca / frena.
   Al frenar, el tiempo queda en CRONO.ms y en localStorage.
   Mientras corre, las flechas no avanzan la presentación.
   ------------------------------------------------------------------ */
(function () {

  var CLAVE = 'facturasya.cronometro';
  var guardado = null;
  try {
    var v = window.localStorage.getItem(CLAVE);
    if (v !== null && v !== '' && !isNaN(+v)) guardado = +v;
  } catch (e) {}

  function dos(n) { return (n < 10 ? '0' : '') + n; }

  window.CRONO = {
    ms: guardado,
    formato: function (ms) {
      var dec = Math.floor(ms / 100) % 10;
      var s = Math.floor(ms / 1000);
      return dos(Math.floor(s / 60)) + ':' + dos(s % 60) + '.' + dec;
    },
    guardar: function (ms) {
      CRONO.ms = ms;
      try { window.localStorage.setItem(CLAVE, String(Math.round(ms))); } catch (e) {}
    }
  };

  var root = null, corriendo = false, t0 = 0, raf = null;

  function pintar(ms) {
    var el = root && root.querySelector('[data-crono]');
    if (el) el.textContent = CRONO.formato(ms);
  }
  function tick() {
    pintar(performance.now() - t0);
    raf = requestAnimationFrame(tick);
  }
  function arrancar() {
    corriendo = true;
    t0 = performance.now();
    root.querySelector('.crono').classList.add('corriendo');
    tick();
  }
  function frenar() {
    corriendo = false;
    cancelAnimationFrame(raf);
    var ms = performance.now() - t0;
    pintar(ms);
    CRONO.guardar(ms);
    root.querySelector('.crono').classList.remove('corriendo');
  }
  function alternar() { if (corriendo) frenar(); else arrancar(); }

  SLIDES.push({
    id: 'cronometro',
    zona: 'receptor',

    html: function () {
      return '<div class="slide centro">' +
               '<div class="crono" role="button" aria-label="Cronómetro"><span data-crono>00:00.0</span></div>' +
             '</div>';
    },

    entrar: function (r) { root = r; },

    paso: function (n, r) {
      root = r;
      if (!corriendo) pintar(0);
    },

    ocupado: function () { return corriendo; },

    tecla: function (e) {
      if (e.key !== 'Enter') return false;
      alternar();
      return true;
    },

    clic: function (e) {
      if (e.target.closest && e.target.closest('.crono')) { alternar(); return true; }
      return false;
    },

    salir: function () { if (corriendo) frenar(); }
  });
})();
