'use strict';

(function () {
  var map = document.querySelector('.map');
  var mainPin = map.querySelector('.map__pin--main');
  var filtersAds = map.querySelector('.map__filters-container');
  var filtersAdsCollection = map.querySelectorAll('.map__filter');

  var formAd = document.querySelector('.ad-form');
  var addressFormAd = formAd.querySelector('#address');
  var fieldsFormAdCollection = formAd.querySelectorAll('fieldset');

  var startCoordsMainPin;

  var setAttributeCollection = function (collection, state) {
    collection.forEach(function (el) {
      el.disabled = state;
    });
  };

  var getPinMainCoordinates = function (state) {
    if (state) {
      startCoordsMainPin = {
        x: Math.floor(parseInt(mainPin.style.left) + window.constants.MAIN_PIN_SIZE / 2),
        y: Math.floor(parseInt(mainPin.style.top) - (window.constants.MAIN_PIN_SIZE + window.constants.MAIN_PIN_SIZE_TAIL))
      };
    } else {
      startCoordsMainPin = {
        x: Math.floor(parseInt(mainPin.style.left) + window.constants.MAIN_PIN_SIZE / 2),
        y: Math.floor(parseInt(mainPin.style.top) - window.constants.MAIN_PIN_SIZE)
      };
    }

    return startCoordsMainPin;
  };

  var setInputAddress = function (coords) {
    addressFormAd.value = coords.x + ', ' + coords.y;
  };

  var deactivateMap = function () {
    // module form start
    setInputAddress(getPinMainCoordinates(false));
    setAttributeCollection(fieldsFormAdCollection, true);
    setAttributeCollection(filtersAdsCollection, true);
    // module form end

    window.utils.addClassName(filtersAds, 'hidden');

    if (map.classList.contains('map--faded')) {
      window.utils.addClassName(map, 'map--faded');
    }
    if (formAd.classList.contains('ad-form')) {
      window.utils.addClassName(formAd, 'ad-form--disabled');
    }

    mainPin.addEventListener('mousedown', onMainPinMousedown);
    mainPin.addEventListener('keydown', onMainPinKeydown);
  };

  var activateMap = function () {
    // module form start
    setInputAddress(getPinMainCoordinates(true));
    setAttributeCollection(fieldsFormAdCollection, false);
    setAttributeCollection(fieldsFormAdCollection, false);
    // module form end

    var currentData = window.data.generateMocks();
    window.mapMarks.generatePins(currentData);

    window.utils.removeClassName(filtersAds, 'hidden');
    window.utils.removeClassName(map, 'map--faded');
    window.utils.removeClassName(formAd, 'ad-form--disabled');

    mainPin.removeEventListener('mousedown', onMainPinMousedown);
    mainPin.removeEventListener('keydown', onMainPinKeydown);
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
