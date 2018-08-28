'use strict';

var logotypes = document.querySelectorAll('.logotype__image');

var LOGO_CLASS = {
  dji: 'logotype__image--dji',
  spgadgets: 'logotype__image--spgadgets',
  gopro: 'logotype__image--gopro',
  vive: 'logotype__image--vive'
};

var LOGO_SRC_COLORED = {
  dji: 'img/partner-1.jpg',
  spgadgets: 'img/partner-2.jpg',
  gopro: 'img/partner-3.jpg',
  vive: 'img/partner-4.jpg'
};

var LOGO_SRC_GRAY = {
  dji: 'img/partner-1.png',
  spgadgets: 'img/partner-2.png',
  gopro: 'img/partner-3.png',
  vive: 'img/partner-4.png'
};

var mouseoverChangeLogoHandler = function (evt) {
  var logo = evt.target;

  if (logo.classList.contains(LOGO_CLASS.dji)) {
    logo.src = LOGO_SRC_COLORED.dji;
  } else if (logo.classList.contains(LOGO_CLASS.spgadgets)) {
    logo.src = LOGO_SRC_COLORED.spgadgets;
  } else if (logo.classList.contains(LOGO_CLASS.gopro)) {
    logo.src = LOGO_SRC_COLORED.gopro;
  } else if (logo.classList.contains(LOGO_CLASS.vive)) {
    logo.src = LOGO_SRC_COLORED.vive;
  }
  logo.style.opacity = '1.0';
};

var mouseoutChangeLogoHandler = function (evt) {
  var logo = evt.target;

  if (logo.classList.contains(LOGO_CLASS.dji)) {
    logo.src = LOGO_SRC_GRAY.dji;
  } else if (logo.classList.contains(LOGO_CLASS.spgadgets)) {
    logo.src = LOGO_SRC_GRAY.spgadgets;
  } else if (logo.classList.contains(LOGO_CLASS.gopro)) {
    logo.src = LOGO_SRC_GRAY.gopro;
  } else if (logo.classList.contains(LOGO_CLASS.vive)) {
    logo.src = LOGO_SRC_GRAY.vive;
  }
  logo.style.opacity = '';
  logo.removeAttribute('style');

};

logotypes.forEach(function(logotype) {
  logotype.addEventListener('mouseover', mouseoverChangeLogoHandler);
  logotype.addEventListener('mouseout', mouseoutChangeLogoHandler);
});
