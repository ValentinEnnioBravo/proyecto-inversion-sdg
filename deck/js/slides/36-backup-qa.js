/* 36 · Backup de preguntas frecuentes (acceso directo discreto) ----
   No interrumpe el recorrido principal (termina en 35-cierre).
   Acceso discreto: clic en "Pág. 1/1" (en el pie de la factura),
   clic en el logo pequeño inferior derecho, o tecla Q / B.
   Dentro de cada pregunta:
     - Paso 0: pregunta centrada + respuesta breve.
     - Paso 1 (clic / →): detalle ampliado por si piden desarrollar.
   ------------------------------------------------------------------ */
(function () {

  var PREGUNTAS = [
    {
      num: '01',
      id: 'bkp-1',
      etiqueta: 'Marco legal y seguridad',
      pregunta: '¿Qué marco legal y de seguridad regula nuestra operación?',
      breve: 'Cumplimos la Ley 25.326 de Protección de Datos Personales y la Res. AAIP 198/2023 (servidores en AWS São Paulo con cláusulas internacionales), junto con la normativa de SAS, Factura de Crédito Electrónica, Firma Digital, Propiedad Intelectual, Marcas y Economía del Conocimiento.',
      detalle: [
        '<b>Datos y seguridad:</b> Ley 25.326 y Res. AAIP 198/2023 (registro de bases y transferencia internacional en AWS sa-east-1), más pentest anual y soporte AWS (USD 4.200/año desde Año 2).',
        '<b>Operación fiscal y trazabilidad:</b> Ley 27.440 (Factura de Crédito Electrónica MiPyME, plazo de 21 días) y Ley 25.506 (Firma Digital e historial inalterable de aprobaciones).',
        '<b>Estructura, software y canales:</b> Ley 27.349 (SAS), Ley 11.723 (Propiedad Intelectual), Ley 22.362 (marca en INPI, clases 9 y 42), Ley 27.506 (Economía del Conocimiento), Código Civil y Comercial y Términos de Meta (WhatsApp Business API).'
      ],
      fuente: 'Fuentes: Comercial (1) — Análisis PEST · Comercial (2) — Marco Legal Aplicable y Análisis de costos'
    },
    {
      num: '02',
      id: 'bkp-2',
      etiqueta: 'Impuestos y beneficios',
      pregunta: '¿Qué impuestos y beneficios fiscales alcanzan al proyecto?',
      breve: 'Sobre las ventas presupuestamos 4,2% (3% de Ingresos Brutos + 1,2% de Débitos y Créditos), sobre resultados la escala progresiva de Ganancias (25% a 35%) con −60% por Ley 27.506 hasta 2029, y sobre pagos al exterior la percepción RG 5617 (30%) a cuenta de Ganancias.',
      detalle: [
        '<b>Impuestos sobre ventas (4,2%):</b> 3% de Ingresos Brutos + 1,2% de Impuesto a los Débitos y Créditos bancarios sobre ventas brutas (flujo proyectado sin IVA).',
        '<b>Ganancias y quebrantos:</b> escala progresiva de sociedades 2026 (25%, 30% y 35%), con arrastre de los quebrantos de los Años 1 y 2.',
        '<b>Ley 27.506 (Economía del Conocimiento):</b> reducción del 60% en Ganancias en Años 1 a 3 (vence 31/12/2029) con aporte al FONPEC (2,5% del beneficio). El bono del 70% sobre contribuciones patronales no se computa por criterio conservador.',
        '<b>Pagos al exterior y cargas laborales:</b> percepción RG 5617 (30%) recuperable contra Ganancias, y 26% de cargas sociales patronales sobre sueldos con SAC.'
      ],
      fuente: 'Fuentes: Flujo de Fondos.docx — Ingresos, Capital de trabajo y Ganancias · Flujo de Fondos.xlsx (Ingresos, Egresos y Cálculos auxiliares)'
    },
    {
      num: '03',
      id: 'bkp-3',
      etiqueta: 'Segmentación y target',
      pregunta: '¿Por qué definimos estos segmentos y a qué empresas apuntamos?',
      breve: 'Apuntamos a empresas formales con más de 10 empleados y más de 150 facturas de compra mensuales (Segmentos B, C y D), con foco principal (core target) en las medianas (Segmento C), y dejamos fuera de foco a las microempresas (Segmento A).',
      detalle: [
        '<b>Segmento A — Microempresas (≤10 emp., <150 fact./mes · 433.991 emp.):</b> fuera de foco; un asistente de IA gratuito resuelve bien su volumen.',
        '<b>Segmento C — Medianas (51–100 emp., 500–1.500 fact./mes · 10.089 emp.):</b> core target (45% de las altas). Requieren integración con ERP local, ciclo corto (2 a 4 semanas), ahorro del 77,5% y LTV/CAC de 12,5x.',
        '<b>Segmento B — Pequeñas (11–50 emp., 150–500 fact./mes · 65.581 emp.):</b> 40% de las altas, adopción en autoservicio con exportación a Excel (LTV/CAC de 3,3x).',
        '<b>Segmento D — Grandes (>100 emp., >1.500 fact./mes · 9.870 emp.):</b> 15% de las altas, alto valor (USD 1.200/mes, LTV/CAC de 37,5x), aunque con ciclos de venta más largos y ERPs globales.'
      ],
      fuente: 'Fuentes: Comercial (1) — Segmentación y Análisis de la Demanda · Comercial (2) — Unit Economics y Proyección de ventas'
    },
    {
      num: '04',
      id: 'bkp-4',
      etiqueta: 'Remuneración de fundadores',
      pregunta: '¿Los socios fundadores trabajamos gratis o nos asignamos un sueldo?',
      breve: 'Nos valorizamos a sueldo de mercado desde el Año 0 como desarrolladores semi senior (USD 1.600 brutos jornada completa): media jornada (USD 800 brutos) en Años 0 a 2 y jornada completa desde el Año 3, con aguinaldo (SAC) y 26% de cargas sociales.',
      detalle: [
        '<b>Años 0, 1 y 2 (media jornada · 50%):</b> USD 800 brutos/mes por fundador → USD 1.092/mes equivalentes con SAC (×13/12) y cargas (×1,26). Son USD 26.208 en los 4 meses del Año 0 y USD 78.624/año entre los 6 en Años 1 y 2.',
        '<b>Años 3 a 5 (jornada completa · 100%):</b> USD 1.600 brutos/mes por fundador → USD 2.184/mes equivalentes (USD 26.208/año cada uno; USD 157.248/año los 6).',
        '<b>Criterio del modelo:</b> se contabiliza como costo de oportunidad real (referencia salarial Coderhouse 2026) aunque no siempre implique retiro efectivo, para no inflar la rentabilidad del flujo.'
      ],
      fuente: 'Fuentes: Comercial (2) — Capital humano · Flujo de Fondos.docx · Flujo de Fondos.xlsx (hoja Egresos, tabla salarial)'
    },
    {
      num: '05',
      id: 'bkp-5',
      etiqueta: 'Origen de la oportunidad',
      pregunta: '¿Cómo surgió la idea de FacturasYa?',
      breve: 'Nace al detectar el cuello de botella que dejó la factura electrónica en Argentina: legalmente ya es digital, pero las empresas siguen recibiendo PDFs y fotos por mail y WhatsApp y cargándolos a mano, sin una solución neutral que funcione sobre el sistema que ya usan.',
      detalle: [
        '<b>Dolor masivo no resuelto:</b> 58,4 millones de facturas de compra por mes en 85.540 empresas formales de más de 10 empleados, con carga manual de USD 1,55 a 2,48 por comprobante, pagos duplicados y multas por vencimientos.',
        '<b>Espacio libre en el mercado local:</b> los ERPs locales (Tango Nexo, Xubio) operan solo dentro de su ecosistema, las soluciones globales (Bill.com, Tipalti) son costosas y no validan ARCA, y la IA genérica no controla duplicados ni trazabilidad.',
        '<b>Propuesta diferenciadora:</b> sumar control integral y validación contra ARCA directamente sobre el ERP, sistema contable o Excel actual del cliente, sin obligarlo a migrar.'
      ],
      fuente: 'Fuentes: Comercial (1) — Evolución Histórica y Contexto Actual · Comercial (2) — Posicionamiento'
    },
    {
      num: '06',
      id: 'bkp-6',
      etiqueta: 'Facturas excedentes',
      pregunta: '¿Por qué las facturas excedentes figuran en la matriz de precios pero no en el flujo de fondos?',
      breve: 'Las tarifas de excedentes están definidas comercialmente (USD 0,30 Inicial · USD 0,22 Pyme · USD 0,15 Empresa), pero se excluyen de la proyección de ventas y del flujo de fondos para proyectar solo con los abonos fijos de cada plan, sin asumir consumos sobre el cupo.',
      detalle: [
        '<b>Tarifas vigentes (Ingresos!C4:E4):</b> USD 0,30 por factura excedente en Plan Inicial (>300), USD 0,22 en Plan Pyme (>900) y USD 0,15 en Plan Empresa (>3.000).',
        '<b>Rol comercial:</b> cubren picos puntuales de volumen sin cortar el servicio y sirven como referencia para evaluar un cambio de plan cuando el cliente supera habitualmente su cupo.',
        '<b>Criterio prudente en el flujo:</b> al no suponer excesos mensuales en las ventas proyectadas, la rentabilidad (VAN y TIR) se sostiene únicamente con los abonos recurrentes de cada plan.'
      ],
      fuente: 'Fuentes: Comercial (2) — Precio (Matriz de precios) y Proyección de ventas · Flujo de Fondos.xlsx (hoja Ingresos, fila 4)'
    }
  ];

  /* --- Índice discreto de preguntas (acceso directo 1 clic) -------- */
  SLIDES.push({
    id: 'bkp-indice',
    zona: 'bkp',
    backup: true,

    html: function () {
      var cards = PREGUNTAS.map(function (q, k) {
        return '<button type="button" class="bkp-card" data-bkp-ir="' + q.id + '" data-paso="0" style="--d:' + (k * 35) + 'ms">' +
                 '<span class="bkp-num">' + q.num + ' · ' + q.etiqueta + '</span>' +
                 '<span class="bkp-q">' + q.pregunta + '</span>' +
               '</button>';
      }).join('');

      return '<div class="slide bkp-slide">' +
               '<div class="bkp-top" data-paso="0">' +
                 '<div>' +
                   '<span class="bkp-tag">Anexo · Preguntas frecuentes</span>' +
                   '<h2 class="t-titulo bkp-titulo">Backup de preguntas</h2>' +
                 '</div>' +
                 '<button type="button" class="bkp-btn" data-bkp-salir>Volver al cierre</button>' +
               '</div>' +
               '<div class="bkp-grid">' + cards + '</div>' +
               '<p class="fuentes"><span data-paso="0">Seleccioná una pregunta (o teclas 1 a 6) · Esc para volver al cierre</span></p>' +
             '</div>';
    },

    clic: function (e) {
      var card = e.target.closest && e.target.closest('[data-bkp-ir]');
      if (card) { Deck.irBkp(card.getAttribute('data-bkp-ir')); return true; }
      var salir = e.target.closest && e.target.closest('[data-bkp-salir]');
      if (salir) { Deck.volverDeBkp(); return true; }
      return true; // en el índice, clics fuera de las tarjetas no avanzan al azar
    }
  });

  /* --- Las 6 láminas individuales (pregunta en el medio + breve + detalle) --- */
  PREGUNTAS.forEach(function (q) {
    SLIDES.push({
      id: q.id,
      zona: 'bkp',
      backup: true,
      pasos: 2,

      html: function () {
        var items = q.detalle.map(function (t) { return '<li><span>' + t + '</span></li>'; }).join('');
        return '<div class="slide qa-slide">' +
                 '<div class="qa-bar" data-paso="0">' +
                   '<span class="bkp-tag">' + q.num + ' · ' + q.etiqueta + '</span>' +
                   '<div class="qa-acciones">' +
                     '<button type="button" class="bkp-btn" data-bkp-ir="bkp-indice">← Preguntas</button>' +
                     '<button type="button" class="bkp-btn" data-bkp-salir>Cerrar</button>' +
                   '</div>' +
                 '</div>' +
                 '<div class="qa-centro">' +
                   '<h2 class="qa-pregunta" data-paso="0">' + q.pregunta + '</h2>' +
                   '<p class="qa-breve" data-paso="0" style="--d:140ms">' + q.breve + '</p>' +
                   '<div class="qa-detalle" data-paso="1">' +
                     '<p class="qa-det-tit">Desarrollo y respaldo</p>' +
                     '<ul class="qa-lista">' + items + '</ul>' +
                   '</div>' +
                 '</div>' +
                 '<p class="fuentes"><span data-paso="0">' + q.fuente + '</span></p>' +
               '</div>';
      },

      clic: function (e) {
        var ir = e.target.closest && e.target.closest('[data-bkp-ir]');
        if (ir) { Deck.irBkp(ir.getAttribute('data-bkp-ir')); return true; }
        var salir = e.target.closest && e.target.closest('[data-bkp-salir]');
        if (salir) { Deck.volverDeBkp(); return true; }
        return false; // clic normal revela Paso 1 (desarrollo)
      }
    });
  });

})();
