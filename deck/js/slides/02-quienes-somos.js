/* 02 · Quiénes somos -----------------------------------------------
   Presentación de FacturasYa con el logo en alta resolución en grande
   a la izquierda y la definición de la empresa a la derecha.
   Fuentes: Comercial (1).docx y Comercial (2).docx.
   ------------------------------------------------------------------ */
SLIDES.push({
  id: 'quienes-somos',
  zona: 'encabezado',
  pasos: 4,

  html: function () {
    return '<div class="slide qs">' +
             '<div class="qs-logo" data-paso="0">' +
               '<img src="' + U.ruta(CONFIG.logo) + '" alt="' + CONFIG.titulo + '">' +
               '<p class="qs-slogan">' + CONFIG.slogan + '</p>' +
               '<p class="qs-bajada">' + CONFIG.bajada + '</p>' +
             '</div>' +
             '<div class="qs-col">' +
               '<h2 class="t-titulo" data-paso="0">Quiénes somos</h2>' +
               '<p class="qs-lead" data-paso="0" style="--d:150ms"><b>FacturasYa S.A.S.</b> — plataforma SaaS B2B en la nube que ordena y controla las facturas de proveedores de empresas argentinas.</p>' +
               '<ul class="lista qs-lista">' +
                 '<li data-paso="1">Para empresas con más de 150 facturas de compra por mes</li>' +
                 '<li data-paso="2">Equipo de 6 socios fundadores desarrolladores · 100% remoto desde Buenos Aires</li>' +
                 '<li data-paso="3">Orden, control y confianza — sin obligar a cambiar el ERP ni Excel</li>' +
               '</ul>' +
             '</div>' +
           '</div>';
  }
});
