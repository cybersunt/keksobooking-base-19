'use strict';

(function () {
  var map = document.querySelector('.map');
  var listPins = map.querySelector('.map__pins');

  var generatePin = function(pin) {
    var PIN_WIDTH = 50;
    var PIN_HEIGHT = 70;
    var pinTemplate = document.querySelector('#pin').content;
    var pinElement = pinTemplate.querySelector('.map__pin').cloneNode(true);
    var pinUserAvatar = pinElement.querySelector('img');

    pinUserAvatar.src = pin.author.avatar;
    pinElement.style.left = (pin.location.x - PIN_HEIGHT) + 'px';
    pinElement.style.top = pin.location.y -(PIN_WIDTH / 2) + 'px';

    return pinElement;
  }

  window.mapMarks = {
    generatePins: function (array) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < array.length; i++) {
      fragment.appendChild(generatePin(array[i]));
    }
    listPins.appendChild(fragment);
  };
})();
