/* ------------------------------------------------------------------
   MEDIA — audio, video y volumen global
   API: prepararVideo, reproducirVideo, frenarVideo, elementoVideo,
        sonar, pausar, frenar, frenarTodo, sonando,
        setVolumen, getVolumen, precargar
   ------------------------------------------------------------------ */
window.Media = (function () {

  var vol = CONFIG.volumen;
  var pistas = {};          // nombre -> HTMLAudioElement
  var video = null;
  var onVideoEnd = null;

  function terminarVideo() {
    if (onVideoEnd) { var f = onVideoEnd; onVideoEnd = null; f(); }
  }

  /* --- video ------------------------------------------------------- */

  function prepararVideo() {
    if (!CONFIG.video) return null;
    if (video) return video;

    video = document.createElement('video');
    video.src = encodeURI(CONFIG.video.src);
    video.preload = 'auto';
    video.playsInline = true;
    video.volume = vol;

    // Deja el cabezal listo en el punto de inicio.
    video.addEventListener('loadedmetadata', function () {
      try { video.currentTime = CONFIG.video.desde || 0; } catch (e) {}
    });

    // Corte duro en `hasta`, si está definido.
    video.addEventListener('timeupdate', function () {
      if (CONFIG.video.hasta != null && video.currentTime >= CONFIG.video.hasta) {
        video.pause();
        terminarVideo();
      }
    });

    video.addEventListener('ended', terminarVideo);
    return video;
  }

  function reproducirVideo(alTerminar) {
    var v = prepararVideo();
    if (!v) return null;
    onVideoEnd = alTerminar || null;
    v.volume = vol;
    var desde = CONFIG.video.desde || 0;
    if (Math.abs(v.currentTime - desde) > 1) {
      try { v.currentTime = desde; } catch (e) {}
    }
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
    return v;
  }

  function frenarVideo() {
    if (!video) return;
    video.pause();
    onVideoEnd = null;
    try { video.currentTime = CONFIG.video.desde || 0; } catch (e) {}
  }

  /* --- pistas de audio -------------------------------------------- */

  function pista(key) {
    if (!CONFIG.audio[key]) return null;
    if (!pistas[key]) {
      var a = new window.Audio();
      a.src = encodeURI(CONFIG.audio[key]);
      a.preload = 'auto';
      a.volume = vol;
      pistas[key] = a;
    }
    return pistas[key];
  }

  // sonar(nombre, [segundoInicial], [volumenInicial])
  function sonar(key, desde, volumenInicial) {
    if (typeof volumenInicial === 'number') setVolumen(volumenInicial);

    var a = pista(key);
    if (!a) return null;
    a.volume = vol;
    if (typeof desde === 'number' && Math.abs(a.currentTime - desde) > 0.5) {
      try { a.currentTime = desde; } catch (e) {}
    }
    var p = a.play();
    if (p && p.catch) p.catch(function () {});
    return a;
  }

  function pausar(key) { if (pistas[key]) pistas[key].pause(); }

  function frenar(key) {
    if (!pistas[key]) return;
    pistas[key].pause();
    try { pistas[key].currentTime = 0; } catch (e) {}
  }

  function frenarTodo() {
    Object.keys(pistas).forEach(frenar);
    frenarVideo();
  }

  function sonando(key) {
    var a = pistas[key];
    return !!(a && !a.paused);
  }

  /* --- volumen ----------------------------------------------------- */

  function setVolumen(v) {
    vol = Math.max(0, Math.min(1, v));
    Object.keys(pistas).forEach(function (k) { pistas[k].volume = vol; });
    if (video) video.volume = vol;
    return vol;
  }

  function getVolumen() { return vol; }

  /* --- precarga (llamala desde la portada) ------------------------- */

  function precargar() {
    prepararVideo();
    Object.keys(CONFIG.audio).forEach(pista);
  }

  return {
    prepararVideo: prepararVideo,
    reproducirVideo: reproducirVideo,
    frenarVideo: frenarVideo,
    elementoVideo: prepararVideo,
    sonar: sonar,
    pausar: pausar,
    frenar: frenar,
    frenarTodo: frenarTodo,
    sonando: sonando,
    setVolumen: setVolumen,
    getVolumen: getVolumen,
    precargar: precargar
  };
})();
