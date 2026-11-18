/* ------------------------------------------------------------------
   DECK — lienzo único con cámara virtual
   Todas las diapositivas viven en un lienzo con forma de factura.
   Avanzar mueve una cámara (escala + traslación) hasta el marco
   siguiente. Controles: clic izq. / → / Espacio avanzan,
   clic der. / ← vuelven, Home portada, End cierre, F pantalla completa,
   ruedita / ↑ ↓ volumen.

   Contrato de cada diapositiva (SLIDES.push):
     id, zona, html(), pasos, paso(n, root, animar), entrar(root),
     salir(adelante), vista (sin marco: vista completa de la factura),
     ocupado() bloquea el avance, tecla(e) y clic(e) devuelven true
     si consumen el evento.
   Los elementos con data-paso="k" se revelan solos en el paso k.
   ------------------------------------------------------------------ */
(function () {

  var frame   = document.getElementById('frame');
  var lienzo  = document.getElementById('lienzo');
  var marca   = document.getElementById('marca');
  var logo    = document.getElementById('logo-fijo');
  var barra   = document.getElementById('progreso');
  var volHud  = document.getElementById('vol');
  var volFill = volHud.querySelector('.fill');
  var volNum  = volHud.querySelector('.num');

  var N = SLIDES.length;
  var BASE = 1600;           // ancho nativo de un marco (1em = 16 px)
  var MARGEN = 1.1;          // 5 % de margen por lado

  var i = 0, p = 0;
  var cam = null;
  var moviendo = false;

  function pasosDe(s) { return s.pasos || 1; }

  /* --- armado ------------------------------------------------------ */

  Factura.construir(lienzo);
  Factura.ubicar(SLIDES);

  marca.innerHTML =
    '<img src="' + U.ruta(CONFIG.logo) + '" alt="' + CONFIG.titulo + '">' +
    '<p class="m-slogan">' + CONFIG.slogan + '</p>' +
    '<p class="m-bajada">' + CONFIG.bajada + '</p>' +
    '<p class="m-materia">' + CONFIG.materia + '</p>';
  logo.src = U.ruta(CONFIG.logo);

  SLIDES.forEach(function (s) {
    if (s.vista) { s.root = lienzo; return; }
    var m = document.createElement('div');
    m.className = 'marco';
    m.id = 'marco-' + s.id;
    m.style.left = s.rect.x + 'px';
    m.style.top = s.rect.y + 'px';
    m.style.width = s.rect.w + 'px';
    m.style.height = s.rect.h + 'px';
    var inn = document.createElement('div');
    inn.className = 'marco-in';
    inn.style.transform = 'scale(' + (s.rect.w / BASE) + ')';
    inn.innerHTML = s.html();
    m.appendChild(inn);
    lienzo.appendChild(m);
    s.root = inn;
    s.marco = m;
  });

  /* --- estados de una diapositiva --------------------------------- */

  function pintarPaso(s, n, animar) {
    if (!s.vista) U.revelar(s.root, n, animar);
    if (s.paso) s.paso(n, s.root, animar);
  }

  // Pinta un paso sin transiciones (n = -1: todo oculto).
  function quieto(s, n) {
    if (s.vista) { if (s.paso) s.paso(n, s.root, false); return; }
    s.marco.classList.add('quieto');
    pintarPaso(s, n, false);
    void s.marco.offsetWidth;
    s.marco.classList.remove('quieto');
  }

  /* --- cámara ------------------------------------------------------ */

  function vw() { return frame.clientWidth; }
  function vh() { return frame.clientHeight; }

  function encuadre(r) {
    return Math.min(vw() / (r.w * MARGEN), vh() / (r.h * MARGEN));
  }

  function vistaDe(s) {
    var Vw = vw(), Vh = vh();
    if (s.vista) {
      // Factura completa a la izquierda (≈45 % del ancho), marca a la derecha.
      var sc = Math.min(0.45 * Vw / Factura.W, 0.92 * Vh / Factura.H);
      var centroX = Vw * 0.06 + Factura.W * sc / 2;
      return { cx: Factura.W / 2 + (Vw / 2 - centroX) / sc, cy: Factura.H / 2, s: sc };
    }
    var r = s.rect;
    return { cx: r.x + r.w / 2, cy: r.y + r.h / 2, s: encuadre(r) };
  }

  function aplicar(c) {
    lienzo.style.transform =
      'translate(' + (vw() / 2 - c.cx * c.s) + 'px,' + (vh() / 2 - c.cy * c.s) + 'px) scale(' + c.s + ')';
  }

  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

  function union(a, b) {
    var x = Math.min(a.x, b.x), y = Math.min(a.y, b.y);
    return { x: x, y: y,
             w: Math.max(a.x + a.w, b.x + b.w) - x,
             h: Math.max(a.y + a.h, b.y + b.h) - y };
  }

  /* Movimiento entre zonas: aleja hasta ver las dos zonas, se desplaza
     y acerca, en un solo movimiento continuo. La escala se interpola en
     escala logarítmica con una "joroba" que la lleva al encuadre de
     ambas zonas en la mitad del recorrido. Es simétrico: al volver hace
     el mismo camino al revés. */
  function moverCamara(dest, zonaA, zonaB, cambio, dur, fin) {
    var c0 = cam;
    var la = Math.log(c0.s), lb = Math.log(dest.s), k = 0;
    if (cambio) {
      var lm = Math.log(encuadre(union(zonaA, zonaB)));
      if (lm < Math.min(la, lb) - 0.05) k = (la + lb) / 2 - lm;
    }
    var t0 = null;
    function cuadro(now) {
      if (t0 === null) t0 = now;
      var t = Math.min(1, (now - t0) / dur);
      var e = ease(t);
      var ep = k > 0 ? ease(e) : e;   // con alejamiento, el desplazamiento se concentra en el medio
      cam = {
        cx: c0.cx + (dest.cx - c0.cx) * ep,
        cy: c0.cy + (dest.cy - c0.cy) * ep,
        s: Math.exp(la + (lb - la) * e - k * Math.sin(Math.PI * e))
      };
      aplicar(cam);
      if (t < 1) requestAnimationFrame(cuadro);
      else { cam = dest; aplicar(cam); fin(); }
    }
    requestAnimationFrame(cuadro);
  }

  /* --- mobiliario fijo -------------------------------------------- */

  function fijos(s) {
    barra.style.width = ((i + 1) / N * 100) + '%';
    logo.classList.toggle('oculto', !!s.vista);
    try { history.replaceState(null, '', '#' + (i + 1)); } catch (e) {}
  }

  /* --- navegación -------------------------------------------------- */

  function ir(nuevo, pasoInicial) {
    if (moviendo || nuevo === i || nuevo < 0 || nuevo >= N) return;
    var a = SLIDES[i], b = SLIDES[nuevo];
    if (a.salir) a.salir(nuevo > i);

    quieto(b, -1);                      // el destino arranca oculto
    i = nuevo;
    p = typeof pasoInicial === 'number' ? pasoInicial : 0;
    fijos(b);
    moviendo = true;

    var cambio = a.zona !== b.zona;
    var demora = 0;
    if (a.vista) {
      pintarPaso(a, -1, true);          // ej.: APROBADA se desvanece
      marca.classList.add('oculta');    // la marca se va antes del zoom
      demora = 400;
    }

    setTimeout(function () {
      moverCamara(vistaDe(b), a.zonaRect, b.zonaRect, cambio, cambio ? 1400 : 700, function () {
        moviendo = false;
        if (!a.vista) quieto(a, pasosDe(a) - 1);   // de lejos, la factura se ve llena
        if (b.vista) marca.classList.remove('oculta');
        if (b.entrar) b.entrar(b.root);
        pintarPaso(b, p, true);
      });
    }, demora);
  }

  function avanzar() {
    if (moviendo) return;
    var s = SLIDES[i];
    if (s.ocupado && s.ocupado()) return;
    if (p < pasosDe(s) - 1) { p++; pintarPaso(s, p, true); return; }
    ir(i + 1, 0);
  }

  function volver() {
    if (moviendo) return;
    var s = SLIDES[i];
    if (s.ocupado && s.ocupado()) return;
    if (p > 0) { p--; pintarPaso(s, p, true); return; }
    if (i === 0) return;
    ir(i - 1, pasosDe(SLIDES[i - 1]) - 1);
  }

  /* --- volumen ----------------------------------------------------- */

  var volTimer = null;
  function ajustarVol(delta) {
    Media.setVolumen(Media.getVolumen() + delta);
    var v = Media.getVolumen();
    volFill.style.height = Math.round(v * 100) + '%';
    volNum.textContent = Math.round(v * 100);
    volHud.classList.add('show');
    clearTimeout(volTimer);
    volTimer = setTimeout(function () { volHud.classList.remove('show'); }, 1100);
  }

  /* --- controles --------------------------------------------------- */

  document.addEventListener('mousedown', function (e) {
    if (e.button !== 0 || moviendo) return;
    var s = SLIDES[i];
    if (s.clic && s.clic(e)) return;
    avanzar();
  });

  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    volver();
  });

  document.addEventListener('wheel', function (e) {
    e.preventDefault();
    ajustarVol(e.deltaY > 0 ? -0.05 : 0.05);
  }, { passive: false });

  document.addEventListener('keydown', function (e) {
    var s = SLIDES[i];
    if (e.key === 'Enter') {
      if (!moviendo && s.tecla && s.tecla(e)) e.preventDefault();
      return;
    }
    switch (e.key) {
      case 'ArrowRight': case 'PageDown': case ' ': avanzar(); break;
      case 'ArrowLeft':  case 'PageUp':            volver();  break;
      case 'ArrowUp':    ajustarVol(0.05);  break;
      case 'ArrowDown':  ajustarVol(-0.05); break;
      case 'Home': if (!(s.ocupado && s.ocupado())) ir(0, 0); break;
      case 'End':  if (!(s.ocupado && s.ocupado())) ir(N - 1, 0); break;
      case 'f': case 'F':
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen();
        break;
      default: return;
    }
    e.preventDefault();
  });

  document.addEventListener('dragstart', function (e) { e.preventDefault(); });

  window.addEventListener('resize', function () {
    if (!moviendo) { cam = vistaDe(SLIDES[i]); aplicar(cam); }
  });

  /* --- arranque ---------------------------------------------------- */

  Media.setVolumen(CONFIG.volumen);

  SLIDES.forEach(function (s) { quieto(s, s.vista ? -1 : pasosDe(s) - 1); });

  var ini = parseInt(String(location.hash).slice(1), 10);
  i = ini >= 1 && ini <= N ? ini - 1 : 0;
  p = 0;
  var s0 = SLIDES[i];
  cam = vistaDe(s0);
  aplicar(cam);
  fijos(s0);
  marca.classList.toggle('oculta', !s0.vista);
  quieto(s0, -1);
  requestAnimationFrame(function () {
    if (s0.entrar) s0.entrar(s0.root);
    pintarPaso(s0, 0, true);
  });

  // Acceso para pruebas desde la consola.
  window.Deck = { ir: ir, avanzar: avanzar, volver: volver, estado: function () { return { i: i, p: p, moviendo: moviendo }; } };
})();
