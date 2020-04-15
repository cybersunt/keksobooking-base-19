'use strict';

(function () {
  var MOUSE_LEFT_BUTTON = 0;

  var map = document.querySelector('.map');
  var mainPin = map.querySelector('.map__pin--main');
  var filtersAds = map.querySelector('.map__filters-container');

  var form = document.querySelector('.ad-form');
  var fieldsForm = form.querySelectorAll('fieldset');

  var deactivateMap = function () {
    fieldsForm.forEach(function (el) {
      el.disabled = true;
    });
    window.utils.addClassName(filtersAds, 'hidden');

    if (map.classList.contains('map--faded')) {
      window.utils.removeClassName(map, 'map--faded');
    }
    if (form.classList.contains('map--faded')) {
      window.utils.removeClassName(form, 'ad-form--disabled');
    }
  };

  var activateMap = function (evt) {
    if (typeof evt === 'object' && evt.button === MOUSE_LEFT_BUTTON) {
      fieldsForm.forEach(function (el) {
        el.disabled = false;
      });

      window.utils.removeClassName(filtersAds, 'hidden');
      window.utils.removeClassName(map, 'map--faded');
      window.utils.removeClassName(form, 'ad-form--disabled');

      var currentData = window.data.generateMocks();
      window.mapMarks.generatePins(currentData);

      document.removeEventListener('DOMContentLoaded', deactivateMap);
    }
  };

  mainPin.addEventListener('mousedown', activateMap);

  document.addEventListener('DOMContentLoaded', deactivateMap);

})();
