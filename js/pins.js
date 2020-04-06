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

  window.map = {
    generatePins: function (array) {
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < array.length; i++) {
        fragment.appendChild(generatePin(array[i]));
      }
      mapPins.appendChild(fragment);
    }
  };
})();
