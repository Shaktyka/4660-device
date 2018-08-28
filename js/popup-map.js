'use strict';

// Находим все элементы
var mapOpen = document.querySelector('.js-interactive-map');
var mapPopup = document.querySelector('.map-popup');
var mapClose = mapPopup.querySelector('.map-popup__close');

// Обработчики
var clickOpenMapHandler = function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('visually-hidden');
  mapClose.addEventListener('click', clickCloseMapHandler);
};

var clickCloseMapHandler = function () {
  mapPopup.classList.add('visually-hidden');
  mapClose.removeEventListener('click', clickCloseMapHandler);
};

// Вешаем обработчики
mapOpen.addEventListener('click', clickOpenMapHandler);
