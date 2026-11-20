# FacturasYa: contenido de las diapositivas

Nov 19, 2026 · @Valentin Bravo

FacturasYa es una empresa argentina de software que ofrece una plataforma en la nube para ordenar y controlar las facturas que una empresa recibe de sus proveedores. Este documento describe el contenido de cada una de las 37 diapositivas de la presentación del proyecto de inversión. Todos los montos están en dólares (USD), salvo que se indique otra cosa.

## Introducción

### 1 y 2. Inicio y portada

La presentación se construye sobre una factura electrónica argentina: cada diapositiva ocupa una zona de esa factura. La portada presenta la marca FacturasYa, su slogan "Tus facturas, bajo control" y la bajada "Sin cambiar de sistema". El slogan resume el beneficio principal, que es el control de las facturas. La bajada expresa el diferencial del producto: funciona sobre el ERP, el sistema contable o el Excel que la empresa ya utiliza. El trabajo corresponde a la materia Sistemas de Gestión K5572, Grupo 3, 2026.

### 3. Quiénes somos

FacturasYa está dirigida a empresas que reciben más de 150 facturas de compra por mes. La empresa está formada por 6 socios. Su propuesta se resume en tres conceptos: orden, control y confianza en el circuito de cuentas a pagar.

### 4. Socios mayoritarios

Los seis socios mayoritarios son Valentín Ennio Bravo, Juan Cruz Garcia Chiapparo, Matías Alejo Cao, Facundo Cahue, Nicolás Fernandez Ruoff y Leonel Arián Contreras. Son también los desarrolladores del producto y trabajan en forma remota desde Buenos Aires. Cada uno está a cargo de un área: comercial y red de estudios contables, implementación y soporte, administración y finanzas, producto, infraestructura y seguridad, e integraciones con ERP.

### 5. Misión

La misión de FacturasYa es simplificar la gestión de cuentas a pagar de las empresas argentinas, para que cada proveedor reciba el monto correcto en la fecha correcta. La plataforma persigue tres resultados:

- Evitar los pagos duplicados.
- Evitar los intereses por vencimiento.
- Lograrlo sin que la empresa cambie de sistema.

La visión es ser la plataforma de gestión de facturas más simple para las empresas y la más eficiente para conectarse con sus proveedores.

### 6. Operativa argentina

El producto está diseñado para la normativa fiscal argentina y aplica tres controles vinculados con ARCA (Agencia de Recaudación y Control Aduanero, antes AFIP):

- **Validación de CAE y CUIT:** antes de aprobar una factura, el sistema verifica contra ARCA que el Código de Autorización Electrónico exista y que el proveedor esté activo. Así se evita computar facturas apócrifas y perder crédito fiscal.
- **Factura de Crédito Electrónica MiPyME:** es obligatoria desde $5.549.862 (abril de 2026). La empresa receptora tiene 21 días corridos para aceptarla o rechazarla, y el sistema avisa esos plazos.
- **Retenciones y percepciones:** el sistema contempla estos regímenes fiscales locales.

Las soluciones internacionales, como Bill.com, Tipalti, Kofax o ABBYY, no validan contra ARCA ni controlan los plazos de la Factura de Crédito Electrónica.

## Problema

### 7. Cuánto tarda la carga manual

La diapositiva plantea al público la pregunta "¿Cuántas facturas creen que podrían cargar en 1 día?", junto a una factura electrónica de ejemplo. Al avanzar, la diapositiva gira y muestra la respuesta: cargar una factura en forma totalmente manual lleva entre 8 y 15 minutos. Ese tiempo es la base del cálculo de la diapositiva siguiente.

### 8. El costo de la carga manual

La diapositiva dimensiona el problema con tres datos:

- **58,4 millones de facturas de compra por mes** reciben las empresas formales argentinas con más de 10 empleados. Son 85.540 empresas pequeñas, medianas y grandes. Fuente: elaboración propia con datos de UCEMA PyMEs (2026).
- **25 a 40 facturas por día** procesa un empleado de cuentas a pagar, es decir, entre 500 y 800 por mes. Fuente: Lido (2026), con datos de APQC, Ardent Partners e IOFM.
- **67 a 200 horas por mes** es el tiempo que un empleado destina a la carga manual y que FacturasYa permite ahorrar. Surge de multiplicar 500 a 800 facturas por mes por 8 a 15 minutos cada una.

### 9. Un día de trabajo

La diapositiva ilustra el problema diario del cliente con el caso de una distribuidora que recibe 900 facturas de compra por mes. Es una empresa mediana con 85 empleados y 3 depósitos, que trabaja con Tango Gestión, Excel, Gmail y WhatsApp. El caso es ficticio y se construyó a partir del perfil del cliente objetivo. La línea de tiempo recorre cuatro momentos:

1. **8:30:** llegan 35 facturas por mail en PDF, algunas repetidas porque el proveedor las reenvió.
2. **Durante el día:** los choferes envían 12 fotos de facturas y remitos por WhatsApp.
3. **A media tarde:** un proveedor reclama una factura vencida hace 10 días, que quedó en WhatsApp y nunca se cargó.
4. **A fin de mes:** cruzar lo cargado con Mis Comprobantes de ARCA lleva 2 días y siempre aparecen diferencias.

El cierre muestra la consecuencia: la empresa pagó dos veces una factura de flete de $1,8 millones y lo detectó tres meses después.

### 10. Avance de los modelos de IA

Los modelos de inteligencia artificial de uso general, como ChatGPT, Gemini y Claude, ya leen facturas con alta precisión, pero no resuelven el proceso completo. La diapositiva lo presenta en dos bloques.

Lo que lograron los modelos:

- 97,6% de precisión en la extracción de datos, según un estudio con facturas reales (arXiv, 2026).
- Superan a servicios especializados como Google Document AI (HackerNoon).
- El costo de extracción es de alrededor de USD 0,01 por página (precios de Amazon Textract y Google Document AI).

Su límite:

- Con 900 facturas de 10 campos cada una quedan unos 200 datos con error, sin forma de saber cuáles son.
- Procesan una factura por vez: alguien debe subir cada imagen, copiar el resultado y pegarlo en el sistema.
- No guardan historial, por lo que no detectan duplicados, no avisan vencimientos ni dejan registro para auditoría.

Por eso la lectura de una factura dejó de ser un diferencial y el valor está en el control del proceso completo.

## Solución

### 11. Propuesta de valor

La propuesta de FacturasYa es que la empresa pague a cada proveedor el monto correcto, en la fecha correcta. La plataforma está pensada para responsables administrativos de empresas que reciben más de 150 facturas de compra por mes, de muchos proveedores y por varios canales. Sus beneficios son cuatro:

- Sin pagos duplicados.
- Sin facturas inválidas.
- Sin intereses por vencimiento.
- Menos horas de carga manual.

A diferencia de los sistemas de gestión, que obligan a migrar, y de las soluciones internacionales, que requieren consultoría, FacturasYa se suma al sistema que la empresa ya usa.

### 12. Video demo

Esta diapositiva da paso a un video de demostración del producto, en el que se muestra el uso real de la plataforma.

### 13. Funcionamiento y control del ciclo de vida

El diagrama muestra el recorrido de una factura dentro de FacturasYa:

1. **Recepción:** la factura llega por mail, WhatsApp o portal de proveedores y queda centralizada. Cada cliente tiene su propia casilla de correo y su propio número de WhatsApp.
2. **Lectura:** un motor propio de reglas y OCR extrae los datos. Cerca del 15% de las facturas, las más complejas, se procesan con un modelo de IA como respaldo.
3. **Validación ARCA y control de duplicados:** el sistema verifica CUIT, CAE, fecha e importe contra ARCA y detecta facturas repetidas aunque lleguen por distintos canales o semanas después.
4. **Envío:** los datos se exportan al sistema del cliente: Tango, otro ERP o Excel.

Debajo del flujo, el control del ciclo de vida asigna a cada factura un estado visible que acompaña su avance:

- **Recibida:** la factura llegó por alguno de los canales.
- **Observada:** ingresó a FacturasYa y está en revisión, o tiene un dato que no coincide.
- **Aprobada:** pasó la validación contra ARCA y el control de duplicados.
- **Pagada:** llegó al sistema del cliente y se registró el pago.

### 14. Implementación

La implementación no tiene costo y no requiere migrar de sistema ni capacitarse en uno nuevo. Consta de cinco pasos:

1. **Alta:** se realiza en la web, con la suscripción en Mercado Pago. En los planes Pyme y Empresa es asistida.
2. **Casilla y WhatsApp propios:** se asignan al cliente una casilla de correo y un número de WhatsApp exclusivos.
3. **Importación de proveedores:** se carga el padrón de proveedores desde el ERP o desde Mis Comprobantes de ARCA.
4. **Configuración de la exportación:** se define el envío de datos hacia el sistema del cliente.
5. **Soporte:** continúa según el plan: por mail en el plan Inicial, prioritario por WhatsApp en el Pyme y con un referente de cuenta en el Empresa.

La primera factura se procesa el mismo día del alta, y la configuración completa demora menos de 2 semanas.

### 15. Protección de datos

FacturasYa procesa documentación fiscal de terceros, por lo que aplica cuatro medidas de protección:

- **Ley 25.326:** cumple la Ley de Protección de Datos Personales y registra sus bases de datos. Los datos se usan solo para la finalidad contratada.
- **Servidores en AWS São Paulo:** es la región más cercana a Argentina. Para la transferencia internacional de datos se firman cláusulas contractuales modelo (Resolución AAIP 198/2023).
- **Política de datos pública:** la política de manejo de datos está disponible para cualquier cliente.
- **Descarga de datos al dar de baja:** el cliente puede descargar toda su información al finalizar el servicio.

Además, cada acción sobre una factura queda en un registro que no se puede modificar.

## Mercado

### 16. Tamaño de mercado

El mercado se presenta en tres niveles, representados como círculos concéntricos:

- **TAM, 519.531 empresas:** todas las empresas empleadoras formales de Argentina, según UCEMA PyMEs (2026) con datos de AFIP-SIPA a diciembre de 2025.
- **SAM, 85.540 empresas y USD 309,2 M por año:** las empresas con más de 10 empleados. La cantidad de empleados se usa como aproximación de las empresas que reciben más de 150 facturas por mes. El mercado mundial de automatización de cuentas a pagar crece un 12,3% anual, y el segmento pyme, un 14,5%.
- **SOM, 5.346 empresas:** la porción del mercado que FacturasYa puede captar en el escenario base.

### 17. Cálculo del SOM

El SOM se obtiene en dos pasos a partir del SAM de 85.540 empresas:

1. **Adopción posible, 50%:** se estima que 42.770 empresas podrían adoptar este tipo de solución. La estimación parte de la encuesta nadIA (2026) sobre adopción de IA en pymes argentinas, y suma un 10% de empresas que ya pagan un ERP y podrían integrar FacturasYa.
2. **Captación, 12,5%:** sobre esas 42.770 empresas, FacturasYa capta 5.346 en el escenario base. El escenario conservador considera un 10% (4.277 empresas) y el optimista, un 15% (6.416 empresas).

El SOM representa un potencial de largo plazo y no una meta a cinco años.

### 18. Segmentos

El SAM se divide en tres segmentos según el tamaño de la empresa:

| Segmento | Empleados | Facturas por mes (promedio) | Empresas | Ingreso potencial anual |
| --- | --- | --- | --- | --- |
| B, pequeña | 11 a 50 | 300 | 65.581 | USD 118,0 M |
| C, mediana (segmento principal) | 51 a 100 | 900 | 10.089 | USD 49,0 M |
| D, grande | más de 100 | 3.000 | 9.870 | USD 142,1 M |

El segmento C es el principal: necesita integración con ERP, tiene un ciclo de venta más corto que el de las grandes empresas y un impacto medible. El segmento B compra por autoservicio, con prueba gratuita. El segmento D tiene el mayor ingreso potencial, aunque con ventas más largas. Las microempresas quedan fuera del foco porque un asistente de IA de uso general resuelve su volumen de facturas.

## Competencia

### 19. Posicionamiento

El mapa de posicionamiento ubica a cada alternativa según dos atributos: la facilidad para incorporarla al circuito actual de la empresa (eje horizontal) y la cobertura de controles (eje vertical).

- **Muchos controles, poca facilidad:** Bill.com / Tipalti y Textract / Document AI. Controlan bien, pero requieren consultoría o desarrollo propio.
- **Posición intermedia:** Tango Nexo / Xubio. Tienen controles medios y solo son fáciles de incorporar si la empresa ya usa ese sistema.
- **Mucha facilidad, pocos controles:** Mis Comprobantes (ARCA), ChatGPT / Gemini y la carga manual.

El cuadrante superior derecho, que combina facilidad de incorporación y controles completos, no está ocupado por ningún competidor. Esa es la posición de FacturasYa.

### 20. Estrategia

FacturasYa sigue una estrategia de diferenciación y no busca ser la opción más barata. En este mercado el liderazgo en costos no es sostenible, porque los asistentes de IA son gratuitos o casi gratuitos y los ERP incluyen módulos de lectura en sus planes. El precio accesible surge de una operación eficiente: leer una factura cuesta menos de USD 0,001.

### 21. Diferenciadores

Para empresas con más de 150 facturas de compra por mes, FacturasYa se diferencia en cuatro aspectos:

- **Integración con el sistema actual:** no depende de ningún ERP. Recibe por mail, WhatsApp y portal de proveedores, y entrega los datos al ERP, al sistema contable o a Excel.
- **Control de pagos:** detecta duplicados entre canales, valida cada factura contra ARCA antes de aprobarla y avisa vencimientos y plazos de la Factura de Crédito Electrónica.
- **Trazabilidad completa:** cada factura registra quién la aprobó, cuándo y contra qué se validó, lo que prepara a la empresa para una auditoría.
- **Menos carga manual:** el personal administrativo revisa solo las excepciones. La biblioteca de proveedores conoce los formatos habituales, y el lanzamiento incluye 200 proveedores precargados.

### 22. Comparación con alternativas reales

La matriz compara a FacturasYa con cuatro grupos de competidores en cinco capacidades. Fuente: Comercial (1), Análisis de la oferta y cuadro comparativo.

| Capacidad | Tango Nexo / Xubio (ERP locales) | Bill.com / Tipalti (globales) | Textract / Document AI (OCR en la nube) | ChatGPT / Gemini (IA de uso general) | FacturasYa |
| --- | --- | --- | --- | --- | --- |
| Sin cambiar de sistema | No cubre | No cubre | Parcial | Cubre | Cubre |
| Control contra ARCA (CAE/CUIT) | Cubre | No cubre | No cubre | No cubre | Cubre |
| Evita pagos duplicados | Parcial | Cubre | No cubre | No cubre | Cubre |
| Recepción por mail y WhatsApp | Parcial | Parcial | No cubre | No cubre | Cubre |
| Envío abierto al ERP o Excel | No cubre | Parcial | Parcial | No cubre | Cubre |

FacturasYa es la única alternativa que cubre las cinco capacidades.

## Go to market

### 23. Etapas

La estrategia de ingreso al mercado es de penetración: ganar clientes con el producto actual en el mercado definido. Se organiza en cinco etapas:

| Etapa | Período | Contenido | Meta |
| --- | --- | --- | --- |
| Desarrollo | Sep a dic 2026 | Los seis socios construyen la versión inicial: recepción por mail y WhatsApp, lectura, validación contra ARCA, control de duplicados y exportación a Excel y Tango | Versión inicial lista |
| Pruebas internas | Ene a jun 2027 | Pruebas con documentos de ejemplo, ajuste de las integraciones y preparación del alta y el soporte | Proceso completo probado |
| Lanzamiento | Jul 2027 | Suscripciones pagas, prueba gratuita de 100 facturas, onboarding gratuito y 200 proveedores precargados | 3 casos de éxito y al menos 15% de conversión de prueba a pago |
| Más uso por cliente | 2028 | Más canales, usuarios y sucursales por cliente, e incorporación de un ejecutivo comercial | Crecimiento de la cartera |
| Escala | 2029 a 2031 | Marketing de contenidos, búsqueda paga, webinars y una red de 40 a 48 estudios contables | 251 clientes activos al cierre de 2031 |

### 24. Cómo conseguimos nuestros clientes

La adquisición de clientes se apoya en cuatro pilares:

1. **Búsqueda y pauta digital:** anuncios en Google y LinkedIn dirigidos a jefes de administración y contadores que buscan soluciones después de un error costoso.
2. **Estudios contables e implementadores:** actúan como prescriptores. Recomiendan el servicio a sus clientes, que contratan directamente con FacturasYa. Por cada cliente referido, el estudio cobra una comisión única del 5% sobre los primeros doce meses de abono. Se estima que el 60% de las altas llega por este canal.
3. **Prueba gratis y demostración real:** el cliente procesa 100 facturas gratis con sus propios documentos.
4. **Casos de éxito y boca en boca:** se difunden mediante webinars y recomendaciones de clientes.

Fuentes: Comercial (1), Ansoff y sensibilidad; Comercial (2), plaza, promoción y modelo de Bass.

### 25. Promoción

Desde el lanzamiento se ofrecen tres incentivos, pensados para clientes que no quieren pagar antes de ver resultados:

- **Primeras 100 facturas gratis:** la prueba elimina el costo inicial.
- **Precio fundador por 12 meses:** los primeros clientes mantienen su precio durante un año.
- **Pago anual con 2 meses bonificados:** el abono anual cubre doce meses y cobra diez.

## Modelo de negocio

### 26. Planes

El ingreso de FacturasYa proviene de suscripciones mensuales o anuales, sin costo de implementación ni permanencia mínima. Los precios se fijan en dólares, se facturan en pesos al tipo de cambio oficial y se cobran con Mercado Pago Suscripciones.

| Plan | Segmento | Abono mensual | Facturas incluidas | Incluye |
| --- | --- | --- | --- | --- |
| Inicial | B | USD 150 | 300 | Recepción por mail y WhatsApp, control de duplicados, validación con ARCA, exportación a Excel y soporte por mail |
| Pyme | C | USD 405 | 900 | Lo anterior, más integración con el ERP, aprobaciones por monto y soporte prioritario por WhatsApp |
| Empresa | D | USD 1.200 | 3.000 | Lo anterior, más API, aprobaciones multinivel, alertas de Factura de Crédito Electrónica y un referente de cuenta |

El precio se fija según el valor que percibe el cliente: queda muy por debajo del costo de la carga manual.

### 27. Unit economics

La diapositiva compara, para cada plan, la relación entre el valor de vida del cliente (LTV) y el costo de adquirirlo (CAC), junto con el tiempo de recupero de ese costo. Una relación LTV/CAC mayor a 3x, marcada como referencia en cada medidor, indica que el negocio recupera bien lo que invierte en conseguir clientes.

| Plan | LTV/CAC | Recupero del CAC |
| --- | --- | --- |
| Inicial | 3,3x | 9,3 meses |
| Pyme | 12,5x | 3,8 meses |
| Empresa | 37,5x | 1,6 meses |

El CAC incluye la pauta, el tiempo del socio comercial y la comisión a estudios contables. El LTV es el margen que deja un cliente durante todo el tiempo que paga el servicio. El plan Pyme combina buena rentabilidad y recupero rápido, lo que respalda la elección del segmento C como principal.

## Finanzas

### 28 a 30. Proyección 2027 a 2031

La proyección se presenta en tres diapositivas, una por variable: clientes activos, ventas anuales y costos operativos. Clientes y ventas se muestran en tres escenarios (mejor caso u optimista, escenario base y peor caso o conservador); los costos, solo en el escenario base. La proyección usa el modelo de difusión de Bass, que representa una adopción gradual: los primeros clientes llegan por publicidad y acciones comerciales, y luego ganan peso las recomendaciones. El año 2027 incluye solo seis meses de ventas, porque el lanzamiento es en julio.

| Variable | Escenario | 2027 | 2028 | 2029 | 2030 | 2031 |
| --- | --- | --- | --- | --- | --- | --- |
| Clientes activos | Peor caso | 18 | 50 | 77 | 101 | 122 |
| Clientes activos | Base | 28 | 85 | 139 | 194 | 251 |
| Clientes activos | Mejor caso | 52 | 165 | 287 | 423 | 579 |
| Ventas anuales (USD) | Peor caso | 25.704 | 175.029 | 311.000 | 429.478 | 538.006 |
| Ventas anuales (USD) | Base | 40.881 | 290.035 | 545.859 | 801.972 | 1.071.421 |
| Ventas anuales (USD) | Mejor caso | 74.865 | 552.856 | 1.099.483 | 1.710.416 | 2.414.753 |
| Costos operativos (USD) | Base | 121.417 | 254.666 | 406.054 | 460.728 | 507.776 |

Fuentes: Comercial (2), proyección de ventas y análisis de costos; Flujo de Fondos.xlsx, hojas Ingresos y Cálculos auxiliares.

### 31. Flujo de caja acumulado

La diapositiva muestra la caja acumulada del proyecto puro, en dólares constantes y sin IVA. Parte de una inversión inicial de USD 156.091 a fines de 2026 y alcanza su punto más bajo al cierre de 2027, con USD −273.186, porque ese año tiene gastos durante doce meses y ventas durante seis.

| 2026 | 2027 | 2028 | 2029 | 2030 | 2031 |
| --- | --- | --- | --- | --- | --- |
| −156.091 | −273.186 | −256.583 | −142.755 | 150.719 | 674.700 |

La caja acumulada se vuelve positiva durante 2030, lo que da un recupero de la inversión en 3,49 años. Al cierre de 2031 llega a USD 674.700. Fuente: Flujo de Fondos.xlsx, hoja Egresos.

### 32. Indicadores

Los indicadores del proyecto puro confirman su viabilidad:

- **VAN, USD 212.172:** el valor actual neto es positivo, descontado a una tasa del 17,63% anual calculada con el modelo CAPM más la prima de riesgo país.
- **TIR, 37,5%:** la tasa interna de retorno supera la tasa de descuento.
- **Payback, 3,5 años:** es el plazo de recupero de la inversión.
- **Margen EBITDA 2031, 52,6%:** el margen pasa de negativo en 2027 a 52,6% en 2031.

Como empresa de software, FacturasYa accede a la Ley de Economía del Conocimiento, que reduce un 60% el impuesto a las ganancias hasta 2029.

## Inversión y retorno

### 33. En qué se va el capital de trabajo

El capital de trabajo cubre los egresos operativos de los meses 1 a 18 (enero de 2027 a junio de 2028), hasta que los ingresos mensuales superan a los gastos. Esos egresos suman USD 234.286 y se distribuyen así:

| Rubro | Detalle | Monto | Proporción |
| --- | --- | --- | --- |
| Capital humano | Sueldos, SAC y cargas (26%) | USD 152.032 | 64,9% |
| Pauta digital | Google Ads y LinkedIn Ads | USD 31.200 | 13,3% |
| Infraestructura y canales | AWS, Twilio, WhatsApp y Claude | USD 18.331 | 7,8% |
| Comisiones | Estudios contables y Mercado Pago | USD 15.471 | 6,6% |
| Percepción RG 5617 | 30% de los pagos al exterior | USD 14.370 | 6,1% |
| Contador y otros gastos | Contador externo y gastos operativos | USD 2.882 | 1,2% |

Fuente: Flujo de Fondos.xlsx, hoja WC, meses 1 a 18, y Flujo de Fondos.docx.

### 34. Inversión inicial

La inversión inicial, en el año 0, es de USD 156.091 y se compone de cuatro rubros:

| Rubro | Contenido | Monto |
| --- | --- | --- |
| Desarrollo y organización | Cuatro meses de trabajo de los socios, infraestructura de pruebas, constitución de la SAS, registro de marca y contador | USD 27.287 |
| Equipos | Siete puestos de trabajo, cada uno con notebook y monitor | USD 30.050 |
| Capital de trabajo (año 0) | Primera parte del financiamiento del déficit de caja inicial | USD 90.667 |
| Percepciones (RG 5617) | 30% a cuenta de Ganancias sobre pagos de servicios del exterior | USD 8.087 |

### 35. Objetivos

La diapositiva fija tres hitos:

- **Julio de 2027:** lanzamiento de las suscripciones pagas y publicación de 3 casos de éxito con métricas reales, como horas ahorradas, duplicados detectados e intereses evitados.
- **Diciembre de 2029:** 139 clientes activos y USD 0,67 M de ingresos anuales recurrentes.
- **2030:** recupero de la inversión, cuando la caja acumulada se vuelve positiva.

### 36. Retorno para el accionista

La diapositiva presenta el flujo de fondos del accionista en el escenario base. El accionista aporta un total de USD 239.372 entre 2026 y 2028 y recupera USD 836.984 entre 2029 y 2031, con un resultado neto de USD 597.612.

| Año | 2026 | 2027 | 2028 | 2029 | 2030 | 2031 |
| --- | --- | --- | --- | --- | --- | --- |
| Flujo anual (USD) | −46.827 | −163.121 | −29.424 | 67.802 | 245.201 | 523.981 |
| Acumulado (USD) | −46.827 | −209.948 | −239.372 | −171.570 | 73.631 | 597.612 |

El acumulado alcanza su punto más bajo en 2028 y se vuelve positivo durante 2030. Los indicadores del accionista son:

- **Tasa exigida:** 17,63%.
- **TIR:** 41,65%, superior a la tasa exigida.
- **VAN:** USD 195.564.

Fuente: flujo de fondos del accionista del proyecto.

### 37. Cierre

La presentación termina con la vista completa de la factura sobre la que se construyó el recorrido, marcada con la etiqueta "APROBADA", junto a la marca FacturasYa, el slogan "Tus facturas, bajo control" y la bajada "Sin cambiar de sistema".
