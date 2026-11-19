/* 32 · En qué se va el capital de trabajo (WC) ---------------------
   Desglose de egresos operativos de los meses 1 a 18 (hasta el déficit
   acumulado máximo en junio 2028), total a pagar, cobranzas acumuladas
   y capital de trabajo neto a financiar.
   Fuentes: Flujo de Fondos.xlsx (hoja WC) y Flujo de Fondos.docx.
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'capital-trabajo',
  zona: 'total',
  pasos: 2,

  html: function () {
    var RUBROS = [
      ['Capital humano (sueldos, SAC y cargas 26%)',                  152032, 64.9, 'var(--azul)'],
      ['Pauta digital (Google Ads y LinkedIn Ads)',                    31200, 13.3, 'var(--azul-osc)'],
      ['Infraestructura, SaaS y canales (AWS, Twilio, WA, Claude)',    18331,  7.8, 'var(--azul-med)'],
      ['Comisiones (estudios contables y Mercado Pago)',               15471,  6.6, '#7BB1E8'],
      ['Percepción RG 5617 (30% pagos al exterior)',                   14370,  6.1, 'var(--azul-claro)'],
      ['Contador externo y otros gastos operativos',                    2882,  1.2, '#CBD5E1']
    ];
    var MAX = 152032;

    return '<div class="slide wc-slide">' +
             '<div class="wc-head" data-paso="0">' +
               '<h2 class="t-titulo">En qué se va el capital de trabajo (WC)</h2>' +
               '<p class="wc-sub">Egresos operativos acumulados hasta el equilibrio mensual (meses 1 a 18 · ene 2027 – jun 2028)</p>' +
             '</div>' +
             '<div class="wc-body">' +
               '<div class="wc-lista">' +
                 RUBROS.map(function (r, k) {
                   var w = Math.max(4, r[1] / MAX * 100);
                   return '<div class="wc-fila" data-paso="0" style="--d:' + (k * 90) + 'ms">' +
                            '<div class="wc-lbl"><span>' + r[0] + '</span><b>USD ' + U.fmt(r[1]) + ' <small>(' + U.fmt(r[2], 1) + '%)</small></b></div>' +
                            '<div class="wc-pista"><i class="barra-h" data-paso="0" style="--d:' + (120 + k * 90) + 'ms;width:' + w.toFixed(1) + '%;background:' + r[3] + '"></i></div>' +
                          '</div>';
                 }).join('') +
               '</div>' +
               '<div class="wc-resumen" data-paso="1">' +
                 '<div class="wc-box">' +
                   '<span class="wc-et">Total a pagar (egresos meses 1–18)</span>' +
                   '<p class="wc-val">USD ' + U.n(234286) + '</p>' +
                 '</div>' +
                 '<div class="wc-box cobro">' +
                   '<span class="wc-et">Menos cobranzas acumuladas</span>' +
                   '<p class="wc-val gris">−USD ' + U.n(122778) + '</p>' +
                 '</div>' +
                 '<div class="wc-box neto">' +
                   '<span class="wc-et">Capital de trabajo neto (WC)</span>' +
                   '<p class="wc-val azul">USD ' + U.n(111508) + '</p>' +
                   '<p class="wc-nota"><b>USD 90.667</b> en Año 0 + <b>USD 20.841</b> en Año 1.<br>Saldo mensual positivo desde el mes 19 y recupero en Año 5.</p>' +
                 '</div>' +
               '</div>' +
             '</div>' +
             '<p class="fuentes">' +
               '<span data-paso="0">Fuente: Flujo de Fondos.xlsx (hoja WC, meses 1 a 18) y Flujo de Fondos.docx</span>' +
             '</p>' +
           '</div>';
  }
});
