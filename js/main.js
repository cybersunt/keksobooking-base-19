'use strict';

var map = document.querySelector('.map');
map.classList.remove('map--faded');

var COUNT_USERS = 8;
var MIN_PRICE = 1000;
var MAX_PRICE = 1000000;
var MIN_ROOMS = 1;
var MAX_ROOMS = 3;
var MIN_GUESTS = 1;
var MAX_GUESTS = 3;
var TYPE_OF_ROOMS= ['palace', 'flat', 'house', 'bungalo'];
var TIME = [12, 13, 14];
var FEATURES =  ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var MIN_PHOTOS = 1;
var MAX_PHOTOS = 3;
var MIN_COORDS_Y = 130;
var MAX_COORDS_Y = 650;
var MIN_COORDS_X = 1;
var MAX_COORDS_X = map.offsetWidth;

// Функция, возвращающая случайное число в диапазоне
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция, возвращающая случайный элемемент массива
var getRandomElement = function (array) {
  var randomIndex = getRandomNumber(1, array.length - 1);
  var randomElement = array[randomIndex];
  return randomElement;
}

// Функция, создающая массив произвольной длины
var getArrayRandomLength = function (array) {
  var clone = array.slice();
  clone.length = getRandomNumber(1, array.length - 1);
  return clone;
}

// Функция, возвращающая массив фотографий к объявлению
var generatePhotos = function () {
  var photos = [];
  for (var i = 1; i < getRandomNumber(MIN_PHOTOS, MAX_PHOTOS) + 1; i++) {
    var photo = 'http://o0.github.io/assets/images/tokyo/hotel' + i + '.jpg';
    photos.push({
      photo
    });
  }
  return photos;
}

var locationX = getRandomNumber(MIN_COORDS_X, MAX_COORDS_X);
var locationY = getRandomNumber(MIN_COORDS_Y, MAX_COORDS_Y);

var generateMocks = function () {
  var mocks = [];
  for (var i = 1; i < COUNT_USERS + 1; i++) {
    mocks.push({
      author: {
        avatar: 'img/avatars/user0' + i + '.png',
      },
      offer: {
        title: 'Some title',
        address: locationX + ', ' + locationY,
        price: getRandomNumber(MIN_PRICE, MAX_PRICE),
        type: getRandomElement(TYPE_OF_ROOMS),
        rooms: getRandomNumber(MIN_ROOMS, MAX_ROOMS),
        guests: getRandomNumber(MIN_GUESTS, MAX_GUESTS),
        checkin: getRandomElement(TIME) + ':00',
        checkout: getRandomElement(TIME) + ':00',
        features: getArrayRandomLength(FEATURES),
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

var mocks = generateMocks();
console.log(mocks);
