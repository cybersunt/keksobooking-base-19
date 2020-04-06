'use strict';

(function () {
  var currentData = window.data.generateMocks();

  var typeOfRooms = {
    'palace': 'Дворец',
    'flat': 'Квартира',
    'house': 'Дом',
    'bungalo': 'Бунгало'
  };

  var removeChilds = function(element) {
    element.innerHTML = '';
  };

  var createDOMElement = function (tagName, className) {
    var element = document.createElement(tagName);
    element.classList.add(className);

    return element;
  };

  var addClassName = function (element, className) {
    element.classList.add(className);
  }

  var generateIconFeature = function (feature) {
    var icon = createDOMElement('li', 'popup__feature');
    addClassName(icon, 'popup__feature--' + feature);
    return icon;
  };

  var generateIconsFeatures = function (arrayFeatures) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < arrayFeatures.length; i++) {
      var feature = generateIconFeature(arrayFeatures[i]);
      fragment.appendChild(feature);
    }
    return fragment;
  };

  var generatePhoto = function (url) {
    var photo = createDOMElement('img', 'popup__photo');
    photo.src = url;
    photo.width = 40;
    photo.height = 45;
    photo.alt = 'Фотография жилья';

    return photo;
  };

  var generatePhotos = function (arrayPhotos) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < arrayPhotos.length; i++) {
      var image = generatePhoto(arrayPhotos[i]);
      fragment.appendChild(image);
    }
    return fragment;
  };

  var generateCardOffer = function (array) {
    var cardOfferTemplate = document.querySelector('#card').content;
    var cardOfferElement = cardOfferTemplate.querySelector('.popup');

    var cardOffer = cardOfferElement.cloneNode(true);

    var cardOfferFeatures = cardOffer.querySelector('.popup__features');
    var cardOfferPhotos  = cardOffer.querySelector('.popup__photos');

    cardOffer.querySelector('.popup__avatar').src = array.author.avatar;

    cardOffer.querySelector('.popup__title').textContent = array.offer.title;
    cardOffer.querySelector('.popup__text--address').textContent = array.offer.address;
    cardOffer.querySelector('.popup__text--price').textContent = array.offer.price + ' ₽/ночь';
    cardOffer.querySelector('.popup__type').textContent = typeOfRooms[array.offer.type];
    cardOffer.querySelector('.popup__text--capacity').textContent = array.offer.rooms +' комнаты для ' + array.offer.guests + ' гостей';
    cardOffer.querySelector('.popup__text--time').textContent = 'Заезд после' + array.offer.checkin + ', выезд до ' + array.offer.checkout;
    cardOffer.querySelector('.popup__description').textContent = array.offer.description;

    removeChilds(cardOfferFeatures);
    cardOfferFeatures.appendChild(generateIconsFeatures(array.offer.features));
    removeChilds(cardOfferPhotos);
    cardOfferPhotos.appendChild(generatePhotos(array.offer.photos));

    cardOffer.querySelector('.popup__photo');

    return cardOffer;
  };

  var openCardOffer = function(array) {
    var map = document.querySelector('.map');
    var adFiltering = map.querySelector('.map__filters-container');

    adFiltering.insertAdjacentElement('beforeBegin', generateCardOffer(array[0]));
  };
  openCardOffer(currentData);
})();
