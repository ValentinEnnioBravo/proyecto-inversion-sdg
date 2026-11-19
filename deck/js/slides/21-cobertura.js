/* 21 · Comparación con alternativas reales -------------------------
   Paso 0: filas, nombres reales de competidores y leyenda.
   Paso 1: las cuatro columnas de competidores reales (fundido).
   Paso 2: la columna FacturasYa, fila por fila, con fondo azul claro.
   Fuente: Comercial (1).docx — Análisis de la Oferta y Cuadro comparativo.
   ------------------------------------------------------------------ */
(function () {

  var SIM = {
    c: '<svg class="sim" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="var(--azul)"/></svg>',
    p: '<svg class="sim" viewBox="0 0 20 20"><circle cx="10" cy="10" r="7.6" fill="#fff" stroke="var(--azul)" stroke-width="1.8"/><path d="M10 2.4a7.6 7.6 0 0 0 0 15.2z" fill="var(--azul)"/></svg>',
    n: '<svg class="sim" viewBox="0 0 20 20"><circle cx="10" cy="10" r="7.6" fill="#fff" stroke="var(--gris-2)" stroke-width="1.8"/></svg>'
  };

  var COLS = [
    ['Tango Nexo / Xubio',       'ERPs locales'],
    ['Bill.com / Tipalti',       'Globales'],
    ['Textract / Document AI',   'OCR en la nube'],
    ['ChatGPT / Gemini',         'IA de uso general'],
    ['FacturasYa',               '']
  ];

  var FILAS = [
    ['Sin cambiar de sistema',        ['n', 'n', 'p', 'c', 'c']],
    ['Control contra ARCA (CAE/CUIT)',['c', 'n', 'n', 'n', 'c']],
    ['Evita pagos duplicados',        ['p', 'c', 'n', 'n', 'c']],
    ['Recepción por mail y WhatsApp', ['p', 'p', 'n', 'n', 'c']],
    ['Envío abierto al ERP o Excel',  ['n', 'p', 'p', 'n', 'c']]
  ];

  SLIDES.push({
    id: 'cobertura',
    zona: 'cae',
    pasos: 3,

    html: function () {
      var g = '<div class="m-vacia" data-paso="0"></div>';
      COLS.forEach(function (c, k) {
        var fy = k === 4;
        g += '<div class="m-col' + (fy ? ' fy' : '') + '" data-paso="0">' +
               '<span>' + c[0] + (c[1] ? '<small>' + c[1] + '</small>' : '') + '</span>' +
             '</div>';
      });
      FILAS.forEach(function (f, r) {
        g += '<div class="m-fila" data-paso="0">' + f[0] + '</div>';
        f[1].forEach(function (v, k) {
          var fy = k === 4;
          g += '<div class="m-cel fundido' + (fy ? ' fy' : '') + '" data-paso="' + (fy ? 2 : 1) + '"' +
               (fy ? ' style="--d:' + (r * 200) + 'ms"' : '') + '>' + SIM[v] + '</div>';
        });
      });
      return '<div class="slide comp-slide">' +
               '<div class="matriz matriz-5">' + g + '</div>' +
               '<div class="leyenda" data-paso="0">' +
                 '<span>' + SIM.c + 'Cubre</span><span>' + SIM.p + 'Parcial</span><span>' + SIM.n + 'No cubre</span>' +
               '</div>' +
             '</div>';
    }
  });
})();
