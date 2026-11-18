/* ------------------------------------------------------------------
   UTILS — registro de diapositivas y ayudas compartidas
   ------------------------------------------------------------------ */
window.SLIDES = [];

window.U = {

  // Ruta lista para usar en src (maneja acentos y espacios).
  ruta: function (p) { return encodeURI(p); },

  // <img> que, si el archivo no existe, deja un marcador visible.
  imagenOpcional: function (src, alt, marcador) {
    return '<img src="' + U.ruta(src) + '" alt="' + (alt || '') + '" ' +
           'onerror="this.parentNode.innerHTML=\'<p class=&quot;falta&quot;>' +
           String(marcador || 'falta imagen').replace(/'/g, '') + '</p>\'">';
  },

  /* --- números en formato argentino ------------------------------ */

  // 1234567.8 -> "1.234.567,8"  ·  negativos con signo menos tipográfico
  fmt: function (v, dec) {
    dec = dec || 0;
    var neg = v < 0;
    var partes = Math.abs(v).toFixed(dec).split('.');
    var ent = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return (neg ? '−' : '') + ent + (dec ? ',' + partes[1] : '');
  },

  // Número que cuenta desde 0 al revelarse.
  n: function (v, dec, extra) {
    return '<span class="num" data-cuenta="' + v + '" data-dec="' + (dec || 0) + '"' +
           (extra || '') + '>' + U.fmt(v, dec) + '</span>';
  },

  // Igual que n() pero como <tspan> para usar dentro de SVG.
  tn: function (v, dec) {
    return '<tspan data-cuenta="' + v + '" data-dec="' + (dec || 0) + '">' + U.fmt(v, dec) + '</tspan>';
  },

  /* --- animaciones ------------------------------------------------ */

  ms: function (el) {
    var d = el.style ? el.style.getPropertyValue('--d') : '';
    return parseFloat(d) || 0;
  },

  contar: function (el, retraso) {
    var fin = parseFloat(el.getAttribute('data-cuenta'));
    var dec = parseInt(el.getAttribute('data-dec'), 10) || 0;
    var tk = el._tk = (el._tk || 0) + 1;
    var dur = 800, t0 = null;
    el.textContent = U.fmt(0, dec);
    function cuadro(now) {
      if (el._tk !== tk) return;
      if (t0 === null) t0 = now;
      var t = Math.min(1, (now - t0) / dur);
      var e = 1 - Math.pow(1 - t, 3);
      el.textContent = U.fmt(fin * e, dec);
      if (t < 1) requestAnimationFrame(cuadro);
      else el.textContent = U.fmt(fin, dec);
    }
    setTimeout(function () { if (el._tk === tk) requestAnimationFrame(cuadro); }, retraso || 0);
  },

  fijarCuenta: function (el) {
    el._tk = (el._tk || 0) + 1;
    el.textContent = U.fmt(parseFloat(el.getAttribute('data-cuenta')),
                           parseInt(el.getAttribute('data-dec'), 10) || 0);
  },

  // Rectángulo de un <clipPath> que se abre de izquierda a derecha.
  clip: function (el, on, animar, retraso) {
    var full = parseFloat(el.getAttribute('data-clip'));
    var tk = el._tk = (el._tk || 0) + 1;
    if (!on)     { el.setAttribute('width', 0); return; }
    if (!animar) { el.setAttribute('width', full); return; }
    var dur = parseFloat(el.getAttribute('data-ms')) || 1200, t0 = null;
    el.setAttribute('width', 0);
    function cuadro(now) {
      if (el._tk !== tk) return;
      if (t0 === null) t0 = now;
      var t = Math.min(1, (now - t0) / dur);
      el.setAttribute('width', full * t);
      if (t < 1) requestAnimationFrame(cuadro);
    }
    setTimeout(function () { if (el._tk === tk) requestAnimationFrame(cuadro); }, retraso || 0);
  },

  /* Revela los elementos [data-paso="k"] con k <= n.
     Con animar = false deja todo en su estado final, sin transiciones. */
  revelar: function (root, n, animar) {
    var els = root.querySelectorAll('[data-paso]');
    for (var j = 0; j < els.length; j++) {
      var el = els[j];
      var k = parseFloat(el.getAttribute('data-paso'));
      var on = k <= n;
      var era = el.classList.contains('on');
      if (on) el.classList.add('on'); else el.classList.remove('on');

      if (el.hasAttribute('data-clip')) {
        U.clip(el, on, animar && on && !era, U.ms(el));
        continue;
      }

      var cuentas = [];
      if (el.hasAttribute('data-cuenta')) cuentas.push(el);
      var hijos = el.querySelectorAll('[data-cuenta]');
      for (var h = 0; h < hijos.length; h++) cuentas.push(hijos[h]);

      for (var c = 0; c < cuentas.length; c++) {
        if (on && !era && animar) {
          U.contar(cuentas[c], U.ms(el) + (parseFloat(cuentas[c].getAttribute('data-retraso')) || 0));
        } else if (!animar || !on) {
          U.fijarCuenta(cuentas[c]);
        }
      }
    }
  },

  /* --- íconos ----------------------------------------------------- */

  tilde: '<svg class="ico-tilde" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5"/></svg>',
  guion: '<span class="ico-guion" aria-hidden="true"></span>'
};
