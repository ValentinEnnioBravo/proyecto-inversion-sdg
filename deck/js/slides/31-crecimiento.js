/* 31 · Crecimiento futuro — tres íconos, de a uno ------------------ */
SLIDES.push({
  id: 'crecimiento',
  zona: 'importe',
  pasos: 3,

  html: function () {
    var ICO = {
      acciones: '<svg viewBox="0 0 64 64"><rect x="10" y="8" width="34" height="44"/><path d="M18 20h18M18 28h18M18 36h10"/><circle cx="46" cy="46" r="11" fill="#fff"/><path d="M41 46h10M46 41v10"/></svg>',
      adquisicion: '<svg viewBox="0 0 64 64"><rect x="6" y="20" width="22" height="34"/><rect x="36" y="10" width="22" height="44"/><path d="M12 28h10M12 36h10M42 18h10M42 26h10M42 34h10"/><path d="M22 12c6-6 14-6 20-2M38 6l4 4-5 3"/></svg>',
      region: '<svg viewBox="0 0 64 64"><circle cx="30" cy="34" r="22"/><path d="M8 34h44M30 12c-8 8-8 36 0 44M30 12c8 8 8 36 0 44M12 22h36M12 46h36"/><path d="M50 4c-5 0-8 4-8 8 0 6 8 13 8 13s8-7 8-13c0-4-3-8-8-8z" fill="#fff"/><circle cx="50" cy="12" r="2.5"/></svg>'
    };
    var C = [['acciones', 'Emisión de acciones'], ['adquisicion', 'Adquisición'], ['region', 'Expansión regional']];
    return '<div class="slide">' +
             '<div class="crec">' +
               C.map(function (c, k) {
                 return '<div class="crec-col" data-paso="' + k + '">' + ICO[c[0]] + '<p>' + c[1] + '</p></div>';
               }).join('') +
             '</div>' +
           '</div>';
  }
});
