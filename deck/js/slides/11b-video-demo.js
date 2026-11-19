/* 11b · Video demo ---------------------------------------------------
   El video de demostración ocupa la diapositiva, sin sonido y a x1,5.
   Al llegar arranca desde el principio; al salir se frena y vuelve a 0.
   Tiene los controles del navegador (play, barra de tiempo, volumen,
   velocidad, pantalla completa). Los clics sobre el video no avanzan la
   presentación; para seguir: → o Espacio.
   ------------------------------------------------------------------ */
(function () {

  var VELOCIDAD = 1.5;   // reproducción a x1,5, sin sonido

  function video(r) {
    var v = r && r.querySelector('video');
    if (v) {
      v.muted = true;
      v.defaultPlaybackRate = VELOCIDAD;
      v.playbackRate = VELOCIDAD;
    }
    return v;
  }

  SLIDES.push({
    id: 'video-demo',
    zona: 'items',

    html: function () {
      return '<div class="slide lleno demo">' +
               '<video src="' + U.ruta(CONFIG.videoDemo) + '" preload="auto" playsinline muted controls></video>' +
             '</div>';
    },

    entrar: function (r) {
      var v = video(r);
      if (!v) return;
      try { v.currentTime = 0; } catch (e) {}
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    },

    salir: function () {
      var v = video(document.getElementById('marco-video-demo'));
      if (!v) return;
      v.pause();
      try { v.currentTime = 0; } catch (e) {}
    },

    // Los clics sobre el video (y su barra de controles) los maneja el
    // propio video: no avanzan la presentación.
    clic: function (e) {
      return !!(e.target.closest && e.target.closest('.demo video'));
    }
  });
})();
