const popupBuy = document.querySelector('.popup');
const buttonHeroOpen = document.querySelector('.hero__button');
const buttonCtaOpen = document.querySelector('.cta__button-choose');
const buttonHeaderOpen = document.querySelector('.header__button');
const buttonPopupClose = document.querySelector('.popup__close');

function openPopup (popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closePopupESC);
}

function closePopup (popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupESC);
}

function closePopupESC(event) {
  const activePopup = document.querySelector('.popup_active');
   if (event.key === 'Escape') {
    closePopup(activePopup);
  }
}



buttonHeroOpen.addEventListener('click', () => openPopup(popupBuy));
buttonCtaOpen.addEventListener('click', () => openPopup(popupBuy));
buttonHeaderOpen.addEventListener('click', () => openPopup(popupBuy));
buttonPopupClose.addEventListener('click', () => closePopup(popupBuy));
