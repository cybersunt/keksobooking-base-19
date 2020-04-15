'use strict';

(function () {
  var map = document.querySelector('.map');
  var mainPin = map.querySelector('.map__pin--main');
  var filtersAds = map.querySelector('.map__filters-container');
  var filtersAdsCollection = map.querySelectorAll('.map__filter');

  var formAd = document.querySelector('.ad-form');
  var fieldsFormAdCollection = formAd.querySelectorAll('fieldset');

  var setAttributeCollection = function (collection, state) {
    collection.forEach(function (el) {
      el.disabled = state;
    });
  };

  var deactivateMap = function () {
    setAttributeCollection(fieldsFormAdCollection, true);
    setAttributeCollection(filtersAdsCollection, true);

    window.utils.addClassName(filtersAds, 'hidden');

    if (map.classList.contains('map--faded')) {
      window.utils.removeClassName(map, 'map--faded');
    }
    if (formAd.classList.contains('map--faded')) {
      window.utils.removeClassName(formAd, 'ad-form--disabled');
    }

    mainPin.addEventListener('mousedown', onMainPinMousedown);
    mainPin.addEventListener('keydown', onMainPinKeydown);
  };

  var activateMap = function () {
    setAttributeCollection(fieldsFormAdCollection, false);
    setAttributeCollection(fieldsFormAdCollection, false);

    window.utils.removeClassName(filtersAds, 'hidden');
    window.utils.removeClassName(map, 'map--faded');
    window.utils.removeClassName(formAd, 'ad-form--disabled');

    var currentData = window.data.generateMocks();
    window.mapMarks.generatePins(currentData);

    document.removeEventListener('DOMContentLoaded', deactivateMap)
  };

  var onMainPinMousedown = function (evt) {
    if (typeof evt === 'object' && evt.button === window.constants.MOUSE_LEFT_BUTTON) {
      activateMap();
    }
  };

  var onMainPinKeydown = function (evt) {
    window.utils.isEnterEvent(evt, activateMap)
  };

  var init = function() {
    deactivateMap();
  };

  window.map = {
    init: init
  }
})();
