'use strict';

(function () {
  var map = document.querySelector('.map');
  var mapPins = map.querySelector('.map__pins');

  var generatePin = function (pin) {
    var pinTemplate = document.querySelector('#pin').content;
    var pinElement = pinTemplate.querySelector('.map__pin').cloneNode(true);
    var pinUserAvatar = pinElement.querySelector('img');

    var pinLocationX = (pin.location.x - window.constants.PIN_WIDTH) + 'px';
    var pinLocationY = pin.location.y - (window.constants.PIN_HEIGHT / 2) + 'px';

    pinUserAvatar.src = pin.author.avatar;
    pinElement.style.left = pinLocationX;
    pinElement.style.top = pinLocationY;

    return pinElement;
  };

  var generatePins = function (array) {
    var fragment = document.createDocumentFragment();
    array.forEach(function (el) {
      fragment.appendChild(generatePin(el));
    });
    mapPins.appendChild(fragment);
  };

  window.mapMarks = {
    generatePins: generatePins
  };
})();
