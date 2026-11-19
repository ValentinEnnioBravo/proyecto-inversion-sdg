/* 08 · El costo de la carga manual — tres números, uno por paso -----
   El tercero es el tiempo ahorrado por empleado: el tiempo medido con
   el cronómetro (diapositiva 5) × 500 a 800 facturas por mes
   (25 a 40 por día). Sin tiempo medido muestra un guión.
   ------------------------------------------------------------------ */
(function () {

  var POR_MES = [500, 800];

  function horas(ms, n) { return ms * n / 3600000; }

  function actualizar(r) {
    var ms = window.CRONO && CRONO.ms;
    var els = [r.querySelector('[data-h0]'), r.querySelector('[data-h1]')];
    els.forEach(function (el, k) {
      if (!ms) {
        el.removeAttribute('data-cuenta');
        el.textContent = '—';
        return;
      }
      var h = horas(ms, POR_MES[k]);
      var dec = h < 10 ? 1 : 0;
      el.setAttribute('data-cuenta', h.toFixed(dec));
      el.setAttribute('data-dec', dec);
      el.textContent = U.fmt(h, dec);
    });
    r.querySelector('[data-h-a]').style.display = ms ? '' : 'none';
    r.querySelector('[data-h1]').style.display = ms ? '' : 'none';
  }

  SLIDES.push({
    id: 'costo',
    zona: 'receptor',
    pasos: 3,

    html: function () {
      return '<div class="slide">' +
               '<div class="tres">' +
                 '<div class="dato" data-paso="0">' +
                   '<p class="grande">' + U.n(58.4, 1) + ' <span class="unidad">millones</span><sup class="ref">1</sup></p>' +
                   '<p class="dato-txt">de facturas de compra por mes en <b>empresas formales con más de 10 empleados</b></p>' +
                   '<p class="dato-sub">85.540 empresas pequeñas, medianas y grandes en Argentina</p>' +
                 '</div>' +
                 '<div class="dato" data-paso="1">' +
                   '<p class="grande">' + U.n(25) + '<span class="a">a</span>' + U.n(40) + '<sup class="ref">2</sup></p>' +
                   '<p class="dato-txt">facturas por día por empleado</p>' +
                 '</div>' +
                 '<div class="dato azul-top" data-paso="2">' +
                   '<p class="grande azul"><span class="num" data-h0>—</span><span class="a" data-h-a>a</span><span class="num" data-h1></span> <span class="unidad">horas</span></p>' +
                   '<p class="dato-txt">ahorradas por empleado por mes</p>' +
                 '</div>' +
               '</div>' +
               '<p class="fuentes">' +
                 '<span data-paso="0"><sup>1</sup>Elaboración propia con datos de UCEMA PyMEs (2026)</span>' +
                 '<span data-paso="1"> · <sup>2</sup>Según Lido (2026), con datos de APQC, Ardent Partners e IOFM</span>' +
               '</p>' +
             '</div>';
    },

    entrar: actualizar,

    paso: function (n, r, animar) {
      if (!animar) actualizar(r);
    }
  });
})();
