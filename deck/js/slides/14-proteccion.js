/* 13 · Protección de datos — candado; después los cuatro ítems ----- */
SLIDES.push({
  id: 'proteccion',
  zona: 'items',
  pasos: 5,

  html: function () {
    var items = ['Ley 25.326', 'Servidores en AWS São Paulo', 'Política de datos pública', 'Descarga de datos al dar de baja'];
    return '<div class="slide dos-col">' +
             '<svg class="candado" data-paso="0" viewBox="0 0 64 64" aria-hidden="true">' +
               '<rect x="12" y="28" width="40" height="30"/>' +
               '<path d="M20 28V19a12 12 0 0 1 24 0v9"/>' +
               '<circle cx="32" cy="41" r="4"/><path d="M32 45v6"/>' +
             '</svg>' +
             '<ul class="lista">' +
               items.map(function (t, k) { return '<li data-paso="' + (k + 1) + '">' + t + '</li>'; }).join('') +
             '</ul>' +
           '</div>';
  }
});
