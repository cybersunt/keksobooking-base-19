'use strict';

(function () {
  var typeOfRooms = {
    'palace': 'Дворец',
    'flat': 'Квартира',
    'house': 'Дом',
    'bungalo': 'Бунгало'
  };

  var getRoomsAndGuests = function (rooms, guests) {
    return rooms + ' комнаты для ' + guests + ' гостей';
  };

  var getTime = function (checkin, checkout) {
    return 'Заезд после ' + checkin + ', выезд до' + checkout;
  };

  var getPrice = function (price) {
    return price + ' ₽/ночь';
  };

  var generateIconFeature = function (feature) {
    var icon = window.utils.createDOMElement('li', 'popup__feature');
    window.utils.addClassName(icon, 'popup__feature--' + feature);
    return icon;
  };

  var generateIconsFeatures = function (arrayFeatures) {
    var fragment = document.createDocumentFragment();
    arrayFeatures.forEach(function (el) {
      fragment.appendChild(generateIconFeature(el));
    });

    return fragment;
  };

  var generatePhoto = function (url) {
    var photo = window.utils.createDOMElement('img', 'popup__photo');
    photo.src = url;
    photo.width = window.constants.OFFER_PHOTO_WIDTH;
    photo.height = window.constants.OFFER_PHOTO_HEIGHT;
    photo.alt = window.constants.OFFER_PHOTO_ALT;

    return photo;
  };

  var generatePhotos = function (arrayPhotos) {
    var fragment = document.createDocumentFragment();
    arrayPhotos.forEach(function (el) {
      fragment.appendChild(generatePhoto(el));
    });

    return fragment;
  };

  var generateTextContentCard = function (cardOffer, array) {
    var offer = array.offer;

    cardOffer.querySelector('.popup__title').textContent = offer.title;
    cardOffer.querySelector('.popup__text--address').textContent = offer.address;
    cardOffer.querySelector('.popup__description').textContent = offer.description;
    cardOffer.querySelector('.popup__type').textContent = typeOfRooms[offer.type];
    cardOffer.querySelector('.popup__text--price').textContent = getPrice(offer.price);
    cardOffer.querySelector('.popup__text--capacity').textContent = getRoomsAndGuests(offer.rooms, offer.guests);
    cardOffer.querySelector('.popup__text--time').textContent = getTime(offer.checkin, offer.checkout);
  };

  var generateImagesCard = function (cardOffer, array) {
    var offer = array.offer;
    var author = array.author;

    cardOffer.querySelector('.popup__avatar').src = author.avatar;

    var cardOfferFeatures = cardOffer.querySelector('.popup__features');
    var cardOfferPhotos = cardOffer.querySelector('.popup__photos');
    var cardOfferListFeatures = generateIconsFeatures(offer.features);
    var cardOfferListPhotos = generatePhotos(offer.photos);

    window.utils.removeChilds(cardOfferFeatures);
    window.utils.removeChilds(cardOfferPhotos);

    cardOfferFeatures.appendChild(cardOfferListFeatures);
    cardOfferPhotos.appendChild(cardOfferListPhotos);
  };

  var generateCardOffer = function (array) {
    var cardOfferTemplate = document.querySelector('#card').content;
    var cardOfferElement = cardOfferTemplate.querySelector('.popup');

    var cardOffer = cardOfferElement.cloneNode(true);

    generateTextContentCard(cardOffer, array);
    generateImagesCard(cardOffer, array);

    return cardOffer;
  };

  var openCardOffer = function (array) {
    var map = document.querySelector('.map');
    var adFiltering = map.querySelector('.map__filters-container');
    var cardOffer = generateCardOffer(array[0]);

    adFiltering.insertAdjacentElement('beforeBegin', cardOffer);
  };

  window.card = {
    openCardOffer: openCardOffer
  };

})();
