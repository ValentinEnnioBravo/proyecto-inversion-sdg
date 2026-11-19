/* 21 · Etapas ------------------------------------------------------
   Paso 0: la línea de tiempo se dibuja y el marcador azul aparece en
   la primera etapa. Pasos 1–4: el marcador avanza por las etapas.
   ------------------------------------------------------------------ */
(function () {

  var ET = [
    ['Sep a dic 2026', 'Desarrollo'],
    ['Ene a jun 2027', 'Pruebas internas'],
    ['Jul 2027',       'Lanzamiento'],
    ['2028',           'Más uso por cliente'],
    ['2029 a 2031',    'Escala']
  ];
  var X = [9, 29.5, 50, 70.5, 91];

  SLIDES.push({
    id: 'etapas',
    zona: 'subtotales',
    pasos: 5,

    html: function () {
      return '<div class="slide">' +
               '<div class="et-linea">' +
                 '<i class="et-raya barra-h" data-paso="0" style="--t:1.2s;left:' + X[0] + '%;width:' + (X[4] - X[0]) + '%"></i>' +
                 ET.map(function (e, k) {
                   return '<div class="et-nodo fundido" data-paso="0" data-nodo="' + k + '" style="left:' + X[k] + '%;--d:' + (150 + k * 240) + 'ms">' +
                            '<span class="et-per">' + e[0] + '</span><i></i>' +
                            '<span class="et-nom">' + e[1] + '</span>' +
                          '</div>';
                 }).join('') +
                 '<div class="et-marca" data-marca></div>' +
               '</div>' +
             '</div>';
    },

    paso: function (n, r, animar) {
      var m = r.querySelector('[data-marca]');
      var nodos = r.querySelectorAll('[data-nodo]');
      for (var k = 0; k < nodos.length; k++) {
        nodos[k].classList.toggle('activo', k <= n);
        nodos[k].classList.toggle('actual', k === n);
      }
      if (n < 0) { m.classList.remove('on'); return; }
      m.style.transitionDelay = (n === 0 && animar) ? '0s, 1.3s' : '0s, 0s';
      m.style.left = X[Math.min(n, X.length - 1)] + '%';
      m.classList.add('on');
    }
  });
})();
