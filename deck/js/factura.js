/* ------------------------------------------------------------------
   FACTURA — el lienzo único (4000 × 5600 px) con forma de factura
   electrónica argentina, sus zonas y la grilla de marcos 16:9.
   Cada diapositiva declara `zona`; los marcos se reparten en la
   grilla de su zona en orden de lectura.
   ------------------------------------------------------------------ */
window.Factura = (function () {

  var W = 4000, H = 5600;

  function grilla(x0, y0, w, cols, filas, gx, gy) {
    var h = Math.round(w * 9 / 16), out = [];
    for (var r = 0; r < filas; r++)
      for (var c = 0; c < cols; c++)
        out.push({ x: x0 + c * (w + gx), y: y0 + r * (h + gy), w: w, h: h });
    return out;
  }

  // Zonas: rectángulo de la zona y lugares para los marcos.
  var ZONAS = {
    vista:      { rect: { x: 0,    y: 0,    w: W,    h: H    }, lugares: [] },
    encabezado: { rect: { x: 0,    y: 0,    w: W,    h: 1008 }, lugares: grilla(133, 300, 1191, 3, 1, 80, 0) },
    receptor:   { rect: { x: 0,    y: 1008, w: W,    h: 560  }, lugares: grilla(100, 1120, 720, 5, 1, 50, 0) },
    items:      { rect: { x: 0,    y: 1568, w: W,    h: 1904 }, lugares: grilla(380, 1712, 555, 1, 5, 0, 40) },
    cae:        { rect: { x: 0,    y: 3472, w: 2200, h: 1568 }, lugares: grilla(81, 3653, 666, 3, 3, 40, 40) },
    subtotales: { rect: { x: 2200, y: 3472, w: 1800, h: 1008 }, lugares: grilla(2242, 3496, 539, 3, 3, 30, 25) },
    importe:    { rect: { x: 2200, y: 4480, w: 1800, h: 336  }, lugares: grilla(2253, 4572, 391, 4, 1, 30, 0) },
    total:      { rect: { x: 2200, y: 4816, w: 1800, h: 224  }, lugares: grilla(3290, 4853, 267, 2, 1, 30, 0) }
  };

  // Asigna a cada diapositiva su marco (s.rect) y el rectángulo de su zona.
  function ubicar(slides) {
    var usados = {};
    slides.forEach(function (s) {
      var z = ZONAS[s.zona] || ZONAS.vista;
      s.zonaRect = z.rect;
      if (s.vista) { s.rect = z.rect; return; }
      var k = usados[s.zona] = (usados[s.zona] || 0);
      usados[s.zona]++;
      s.rect = z.lugares[k];
      if (!s.rect) throw new Error('Zona "' + s.zona + '" sin lugar para ' + s.id);
    });
  }

  /* --- decoración de la factura ----------------------------------- */

  function caja(x, y, w, h, css, html) {
    return '<div class="f" style="left:' + x + 'px;top:' + y + 'px;width:' + w + 'px;height:' + h + 'px;' +
           (css || '') + '">' + (html || '') + '</div>';
  }
  function lineaH(x, y, w, g) { return caja(x, y, w, g || 8, 'background:var(--linea);border-radius:6px'); }
  function lineaV(x, y, h, g) { return caja(x, y, g || 8, h, 'background:var(--linea);border-radius:6px'); }
  function texto(x, y, w, css, t) {
    return '<div class="f f-txt" style="left:' + x + 'px;top:' + y + 'px;width:' + w + 'px;' + (css || '') + '">' + t + '</div>';
  }

  // QR decorativo (determinístico), con los tres patrones de posición.
  function qr(tam) {
    var n = 29, c = tam / n, s = '', semilla = 7;
    function rnd() { semilla = (semilla * 9301 + 49297) % 233280; return semilla / 233280; }
    function finder(fx, fy) {
      return '<rect x="' + fx * c + '" y="' + fy * c + '" width="' + 7 * c + '" height="' + 7 * c + '" fill="#111"/>' +
             '<rect x="' + (fx + 1) * c + '" y="' + (fy + 1) * c + '" width="' + 5 * c + '" height="' + 5 * c + '" fill="#fff"/>' +
             '<rect x="' + (fx + 2) * c + '" y="' + (fy + 2) * c + '" width="' + 3 * c + '" height="' + 3 * c + '" fill="#111"/>';
    }
    for (var y = 0; y < n; y++) for (var x = 0; x < n; x++) {
      var enFinder = (x < 8 && y < 8) || (x > n - 9 && y < 8) || (x < 8 && y > n - 9);
      if (!enFinder && rnd() > 0.52) s += '<rect x="' + x * c + '" y="' + y * c + '" width="' + c + '" height="' + c + '" fill="#111"/>';
    }
    return '<svg width="' + tam + '" height="' + tam + '" viewBox="0 0 ' + tam + ' ' + tam + '">' +
           s + finder(0, 0) + finder(n - 7, 0) + finder(0, n - 7) + '</svg>';
  }

  function construir(lienzo) {
    var h = '';
    var L = 'font-size:30px;color:var(--gris-2)';

    // Borde exterior
    h += caja(40, 40, W - 80, H - 80, 'border:8px solid var(--linea);border-radius:70px');

    /* Encabezado (emisor) ------------------------------------------ */
    h += texto(130, 95, 1500, 'font-size:64px;font-weight:700;color:var(--gris)', 'FacturasYa S.A.S.');
    h += texto(130, 185, 1700, L, 'Razón social: FacturasYa S.A.S. · Buenos Aires, Argentina');
    h += caja(1900, 40, 200, 200, 'border:8px solid var(--linea);border-top:none;border-radius:0 0 40px 40px;background:rgba(255,255,255,.6);display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--gris)',
              '<b style="font-size:130px;line-height:1;font-family:var(--body)">A</b><span style="font-size:24px">COD. 01</span>');
    h += lineaV(1998, 240, 40);
    h += texto(2230, 80, 1600, 'font-size:84px;font-weight:700;color:var(--gris);letter-spacing:.06em', 'FACTURA');
    h += texto(2230, 185, 1660, L, 'Punto de venta: 00001 · Comp. Nro: 00000035 · Fecha de emisión: 2026');
    h += lineaH(40, 278, W - 80);

    /* Receptor ------------------------------------------------------ */
    h += lineaH(40, 1006, W - 80);
    h += texto(110, 1040, 3800, L,
      'CUIT: 30-00000000-0 &nbsp;·&nbsp; Apellido y Nombre / Razón Social: Empresa cliente &nbsp;·&nbsp; ' +
      'Condición frente al IVA: IVA Responsable Inscripto &nbsp;·&nbsp; Condición de venta: Cuenta corriente');

    /* Detalle de ítems --------------------------------------------- */
    h += lineaH(40, 1566, W - 80);
    h += caja(44, 1590, W - 88, 84, 'background:var(--gris-claro);border-radius:24px');
    var cols = [['Código', 110], ['Producto / Servicio', 380], ['Cantidad', 1180], ['U. medida', 1560],
                ['Precio unit.', 1980], ['% Bonif.', 2460], ['Subtotal', 2900], ['Subtotal c/IVA', 3380]];
    cols.forEach(function (c) { h += texto(c[1], 1612, 520, L + ';font-weight:600;color:var(--gris)', c[0]); });
    for (var r = 0; r < 5; r++) {
      var y = 1712 + r * 352;
      h += texto(110, y + 140, 200, L, '00' + (r + 1));
      h += texto(1180, y + 140, 300, L, '1,00');
      h += texto(1560, y + 140, 300, L, 'unidades');
      h += texto(1980, y + 140, 300, L, '0,00');
      h += texto(2460, y + 140, 300, L, '0,00');
      h += texto(2900, y + 140, 300, L, '0,00');
      h += texto(3380, y + 140, 300, L, '0,00');
      if (r < 4) h += lineaH(80, y + 332, W - 160, 5);
    }

    /* Bloque CAE y QR ---------------------------------------------- */
    h += lineaH(40, 3470, W - 80);
    h += lineaV(2198, 3470, 1570);
    // Lugar 8 (fila 3, col 2): datos del CAE · Lugar 9: QR
    h += texto(787, 4540, 660,
      'font-size:30px;line-height:1.6;color:var(--gris)',
      '<b style="font-size:34px">CAE Nº: 00000000000000</b><br>Fecha de Vto. de CAE: 2027<br>Comprobante Autorizado');
    h += caja(1493 + 333 - 180, 4483 + 187 - 180, 360, 360, 'opacity:.75', qr(360));

    /* Subtotales ---------------------------------------------------- */
    // Lugares 8 y 9 (fila 3, cols 2 y 3)
    h += texto(2811, 4190, 1100, 'font-size:32px;line-height:2;color:var(--gris)',
      'Subtotal: USD 0,00<br>Importe otros tributos: USD 0,00<br>IVA 21%: USD 0,00');

    /* Importe total ------------------------------------------------- */
    h += lineaH(2200, 4478, 1760);
    h += texto(2253, 4506, 1600, L + ';font-weight:600;color:var(--gris)', 'Importe total');

    /* Total a pagar ------------------------------------------------- */
    h += lineaH(2200, 4814, 1760);
    h += caja(2240, 4836, 1680, 184, 'border:8px solid var(--gris-2);border-radius:36px');
    h += texto(2290, 4892, 960, 'font-size:62px;font-weight:700;color:var(--gris);letter-spacing:.04em', 'TOTAL A PAGAR');

    /* Pie ----------------------------------------------------------- */
    h += lineaH(40, 5038, W - 80);
    h += texto(110, 5120, 2400, 'font-size:44px;font-weight:700;color:var(--gris)', 'Comprobante Autorizado');
    h += texto(110, 5200, 3000, L, 'Sistemas de Gestión K5572 · Grupo 3 · 2026');
    h += texto(3500, 5120, 400, L + ';text-align:right', 'Pág. 1/1');

    /* Etiqueta APROBADA (diapositiva de cierre) --------------------- */
    h += '<div id="aprobada" class="f">APROBADA</div>';

    lienzo.innerHTML = h;
  }

  return { W: W, H: H, ZONAS: ZONAS, ubicar: ubicar, construir: construir };
})();
