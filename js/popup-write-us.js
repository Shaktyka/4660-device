'use strict';

// Находим нужные переменные
var openPopupButton = document.querySelector('.js-write-us');
var popup = document.querySelector('.write-us');
var closeWriteUsButton = popup.querySelector('.write-us__close');

// Обработчики событий
var clickOpenPopupHandler = function (evt) {
  evt.preventDefault();
  popup.classList.remove('visually-hidden');
};

var clickClosePopupHandler = function () {
  console.log('Нажата кнопка закрытия попапа');
  popup.classList.add('visually-hidden');
  closeWriteUsButton.removeEventListener('click', clickClosePopupHandler);
};

// Вешаем обработчики
openPopupButton.addEventListener('click', clickOpenPopupHandler);
closeWriteUsButton.addEventListener('click', clickClosePopupHandler);
