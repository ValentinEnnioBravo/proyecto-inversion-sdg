/* 11 · Funcionamiento ----------------------------------------------
   Todo avanza con clic, paso a paso:
   0  Canales de entrada → FacturasYa
   1  Validación ARCA y Control de duplicados (debajo de FacturasYa)
   2  Salidas (Tango, ERP, Excel) y la fila de estados
   3  Una factura llega por mail            (sin estado)
   4  Entra a FacturasYa                    → Recibida
   5  Pasa la validación                    → Aprobada
   6  Llega al sistema del cliente          → Pagada
   ------------------------------------------------------------------ */
(function () {

  // Centro de la ficha en cada paso (coordenadas del viewBox 1600 × 900).
  var POS = {
    3: [462, 132],    // junto a Mail
    4: [710, 402],    // debajo de FacturasYa, sobre la validación
    5: [960, 530],    // a la salida de la validación
    6: [1468, 132]    // junto a Tango
  };
  var ESTADO = { 4: 'Recibida', 5: 'Aprobada', 6: 'Pagada' };
  var ESTADOS = ['Recibida', 'Observada', 'Aprobada', 'Pagada'];

  function ubicar(g, pos, sinTransicion) {
    if (sinTransicion) g.style.transition = 'none';
    g.style.transform = 'translate(' + (pos[0] - 22) + 'px,' + (pos[1] - 28) + 'px)';
    if (sinTransicion) { g.getBoundingClientRect(); g.style.transition = ''; }
  }

  function caja(x, y, w, h, lineas, paso, d, fy) {
    var t = '';
    var cy = y + h / 2 - (lineas.length - 1) * 18;
    lineas.forEach(function (l, k) {
      t += '<text class="t-caja' + (fy ? ' t-fy' : '') + '" x="' + (x + w / 2) + '" y="' + (cy + k * 36) + '">' + l + '</text>';
    });
    return '<g class="fundido" data-paso="' + paso + '" style="--d:' + d + 'ms">' +
             '<rect class="caja' + (fy ? ' caja-fy' : '') + '" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="22"/>' + t +
           '</g>';
  }
  function flecha(d, paso, ms) {
    return '<path class="flecha trazo" data-paso="' + paso + '" pathLength="1" style="--d:' + ms + 'ms;--t:.45s" d="' + d + '"/>';
  }
  // Punta de flecha hacia la derecha (dir = 'd') o hacia abajo (dir = 'b').
  function punta(x, y, paso, ms, dir) {
    var p = dir === 'b'
      ? 'M' + (x - 11) + ' ' + (y - 16) + 'L' + x + ' ' + y + 'L' + (x + 11) + ' ' + (y - 16) + 'Z'
      : 'M' + (x - 16) + ' ' + (y - 11) + 'L' + x + ' ' + y + 'L' + (x - 16) + ' ' + (y + 11) + 'Z';
    return '<path class="punta fundido" data-paso="' + paso + '" style="--d:' + ms + 'ms" d="' + p + '"/>';
  }

  SLIDES.push({
    id: 'funcionamiento',
    zona: 'items',
    pasos: 7,

    html: function () {
      var s = '';
      // Paso 0: entradas → FacturasYa
      s += caja(50, 90, 370, 84, ['Mail'], 0, 0);
      s += caja(50, 210, 370, 84, ['WhatsApp'], 0, 80);
      s += caja(50, 330, 370, 84, ['Portal de proveedores'], 0, 160);
      s += flecha('M420 132H490V252H560', 0, 350) + flecha('M420 252H560', 0, 350) + flecha('M420 372H490V252H560', 0, 350);
      s += punta(560, 252, 0, 750);
      s += caja(560, 170, 300, 164, ['FacturasYa'], 0, 800, true);

      // Paso 1: validación, debajo de FacturasYa
      s += flecha('M710 334V470', 1, 0) + punta(710, 470, 1, 400, 'b');
      s += caja(490, 470, 440, 120, ['Validación ARCA y', 'Control de duplicados'], 1, 400);

      // Paso 2: salidas y estados
      s += flecha('M930 530H1060V132H1180', 2, 0) + flecha('M1060 252H1180', 2, 300) + flecha('M1060 372H1180', 2, 300);
      s += punta(1180, 132, 2, 700) + punta(1180, 252, 2, 700) + punta(1180, 372, 2, 700);
      s += caja(1180, 90, 240, 84, ['Tango'], 2, 750);
      s += caja(1180, 210, 240, 84, ['ERP'], 2, 830);
      s += caja(1180, 330, 240, 84, ['Excel'], 2, 910);

      var est = '<g class="fundido" data-paso="2" style="--d:1100ms">';
      ESTADOS.forEach(function (e, k) {
        var x = 230 + k * 300;
        if (k > 0) est += '<line class="conector" x1="' + (x - 56) + '" y1="725" x2="' + (x - 4) + '" y2="725"/>';
        est += '<g class="pill" data-estado="' + e + '">' +
                 '<rect x="' + x + '" y="690" width="240" height="70" rx="35"/>' +
                 '<text x="' + (x + 120) + '" y="725">' + e + '</text>' +
               '</g>';
      });
      est += '</g>';

      var ficha = '<g class="ficha" data-ficha>' +
                    '<rect x="0" y="0" width="44" height="56" rx="7"/>' +
                    '<path d="M11 17H33M11 27H33M11 37H25"/>' +
                  '</g>';

      return '<div class="slide lleno flujo">' +
               '<svg viewBox="0 0 1600 900">' + s + est + ficha + '</svg>' +
             '</div>';
    },

    paso: function (n, r, animar) {
      var f = r.querySelector('[data-ficha]');
      var pos = POS[Math.min(n, 6)];
      if (!pos) {
        f.classList.remove('ve');
      } else {
        // Al aparecer (paso 3) se ubica sin desplazarse.
        ubicar(f, pos, !animar || n === 3 || !f.classList.contains('ve'));
        f.classList.add('ve');
      }
      // El estado cambia cuando la factura llega (0,8 s), no antes.
      var nombre = ESTADO[n] || null;
      var tk = r._tkEstado = (r._tkEstado || 0) + 1;
      function pintarEstado() {
        if (r._tkEstado !== tk) return;
        var ps = r.querySelectorAll('[data-estado]');
        for (var k = 0; k < ps.length; k++)
          ps[k].classList.toggle('activo', ps[k].getAttribute('data-estado') === nombre);
      }
      if (animar && nombre) setTimeout(pintarEstado, 800);
      else pintarEstado();
    }
  });
})();
