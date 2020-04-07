'use strict';

(function () {

  var DataMocks = {
    COUNT_USERS: 8,

    MIN_PRICE: 1000,
    MAX_PRICE: 1000000,

    MIN_ROOMS: 1,
    MAX_ROOMS: 3,

    MIN_GUESTS: 1,
    MAX_GUESTS: 3,

    TYPE_OF_ROOMS: ['palace', 'flat', 'house', 'bungalo'],
    TIME: [12, 13, 14],
    FEATURES: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],

    MIN_PHOTOS: 1,
    MAX_PHOTOS: 3,

    MIN_COORDS_Y: 130,
    MAX_COORDS_Y: 650,
    MIN_COORDS_X: 1,
    MAX_COORDS_X: document.querySelector('.map').offsetWidth
  };

  // Функция, возвращающая случайное число в диапазоне
  var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Функция, возвращающая случайный элемемент массива
  var getRandomElement = function (array) {
    var randomIndex = getRandomNumber(1, array.length - 1);
    var randomElement = array[randomIndex];
    return randomElement;
  };

  // Функция, создающая массив произвольной длины
  var getArrayRandomLength = function (array) {
    var clone = array.slice();
    clone.length = getRandomNumber(1, array.length - 1);
    return clone;
  };

  // Функция, возвращающая массив фотографий к объявлению
  var generatePhotos = function () {
    var photos = [];
    array.length = getRandomNumber(DataMocks.MIN_PHOTOS, DataMocks.MAX_PHOTOS);

    for (var i = 1; i < array.length + 1; i++) {
      var photo = 'http://o0.github.io/assets/images/tokyo/hotel' + i + '.jpg';
      photos.push(photo);
    }
    return photos;
  };

  window.data = {
    generateMocks: function () {
      var mocks = [];
      for (var i = 1; i < DataMocks.COUNT_USERS + 1; i++) {
        var locationX = getRandomNumber(DataMocks.MIN_COORDS_X, DataMocks.MAX_COORDS_X);
        var locationY = getRandomNumber(DataMocks.MIN_COORDS_Y, DataMocks.MAX_COORDS_Y);

        mocks.push({
          author: {
            avatar: 'img/avatars/user0' + i + '.png',
          },
          offer: {
            title: 'Some title',
            address: locationX + ', ' + locationY,
            price: getRandomNumber(DataMocks.MIN_PRICE, DataMocks.MAX_PRICE),
            type: getRandomElement(DataMocks.TYPE_OF_ROOMS),
            rooms: getRandomNumber(DataMocks.MIN_ROOMS, DataMocks.MAX_ROOMS),
            guests: getRandomNumber(DataMocks.MIN_GUESTS, DataMocks.MAX_GUESTS),
            checkin: getRandomElement(DataMocks.TIME) + ':00',
            checkout: getRandomElement(DataMocks.TIME) + ':00',
            features: getArrayRandomLength(DataMocks.FEATURES),
            description: 'Some description',
            photos: generatePhotos(),
          },
          location: {
            x: locationX,
            y: locationY,
          }
        });
      }
      return mocks;
    }
  };
})();
