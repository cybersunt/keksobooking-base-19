'use strict';

(function () {
  var map = document.querySelector('.map');
  map.classList.remove('map--faded');

  var currentData = window.data.generateMocks();
  window.mapMarks.generatePins(currentData);
})();
