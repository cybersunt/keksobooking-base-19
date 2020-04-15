'use strict';

(function () {
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

    mainPin.addEventListener('mousedown', onMainPinActivateMapClick);
    mainPin.addEventListener('keydown', onMainPinActivateMapKeyDown);
  };

  var activateMap = function (evt) {
    fieldsForm.forEach(function (el) {
      el.disabled = false;
    });

    window.utils.removeClassName(filtersAds, 'hidden');
    window.utils.removeClassName(map, 'map--faded');
    window.utils.removeClassName(form, 'ad-form--disabled');

    var currentData = window.data.generateMocks();
    window.mapMarks.generatePins(currentData);

    document.removeEventListener('DOMContentLoaded', deactivateMap)
  };

  var onMainPinActivateMapClick = function (evt) {
    if (typeof evt === 'object' && evt.button === window.constants.MOUSE_LEFT_BUTTON) {
      activateMap();
    }
  };

  var onMainPinActivateMapKeyDown = function (evt) {
    window.utils.isEnterEvent(evt, activateMap)
  };

  var onDOMContentLoaded = function () {
    deactivateMap();
  };

  var init = function() {
    document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
  };

  window.map = {
    init: init
  }
})();
