/* 20 · Cobertura por caso de uso -----------------------------------
   Paso 0: filas, títulos de columna y leyenda.
   Paso 1: las cuatro columnas de sustitutos, todas a la vez (fundido).
   Paso 2: la columna FacturasYa, fila por fila, con fondo azul claro.
   ------------------------------------------------------------------ */
(function () {

  var SIM = {
    c: '<svg class="sim" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="var(--azul)"/></svg>',
    p: '<svg class="sim" viewBox="0 0 20 20"><circle cx="10" cy="10" r="7.6" fill="#fff" stroke="var(--azul)" stroke-width="1.8"/><path d="M10 2.4a7.6 7.6 0 0 0 0 15.2z" fill="var(--azul)"/></svg>',
    n: '<svg class="sim" viewBox="0 0 20 20"><circle cx="10" cy="10" r="7.6" fill="#fff" stroke="var(--gris-2)" stroke-width="1.8"/></svg>'
  };

  var COLS = ['Carga manual', 'IA general', 'APIs', 'Mis Comprobantes', 'FacturasYa'];
  var FILAS = [
    ['Duplicados entre canales',     ['p', 'n', 'n', 'p', 'c']],
    ['Vencimientos y plazos de FCE', ['n', 'n', 'n', 'n', 'c']],
    ['Aprobaciones y trazabilidad',  ['n', 'n', 'n', 'n', 'c']]
  ];

  SLIDES.push({
    id: 'cobertura',
    zona: 'cae',
    pasos: 3,

    html: function () {
      var g = '<div class="m-vacia" data-paso="0"></div>';
      COLS.forEach(function (c, k) {
        g += '<div class="m-col' + (k === 4 ? ' fy' : '') + '" data-paso="0">' + c + '</div>';
      });
      FILAS.forEach(function (f, r) {
        g += '<div class="m-fila" data-paso="0">' + f[0] + '</div>';
        f[1].forEach(function (v, k) {
          var fy = k === 4;
          g += '<div class="m-cel fundido' + (fy ? ' fy' : '') + '" data-paso="' + (fy ? 2 : 1) + '"' +
               (fy ? ' style="--d:' + (r * 280) + 'ms"' : '') + '>' + SIM[v] + '</div>';
        });
      });
      return '<div class="slide">' +
               '<div class="matriz">' + g + '</div>' +
               '<div class="leyenda" data-paso="0">' +
                 '<span>' + SIM.c + 'Cubre</span><span>' + SIM.p + 'Parcial</span><span>' + SIM.n + 'No cubre</span>' +
               '</div>' +
             '</div>';
    }
  });
})();
