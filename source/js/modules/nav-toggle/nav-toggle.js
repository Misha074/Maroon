let header = document.querySelector('.header');
let headerNav = header.querySelector('.header__nav');
let navToggle = document.querySelector('.nav__toggle');
// let navWpapper = document.querySelector('.nav__wrapper');
let navList = document.querySelector('.nav__list');
let untouchableBlock = document.querySelector('.header__untouchable-block');
let body = document.getElementById('body');


function openMenu() {
  header.classList.add('header__main-header--opened');
  headerNav.classList.remove('nav--closed');
  headerNav.classList.add('nav--opened');
  // navWpapper.classList.remove('nav__wrapper--closed');
  navList.classList.remove('nav__list--closed');
  navList.classList.add('nav__list--opened');
  body.classList.add('unscrolling');
  untouchableBlock.classList.add('header__untouchable-block--show');
}

function closeMenu() {
  header.classList.remove('header__main-header--opened');
  headerNav.classList.add('nav--closed');
  headerNav.classList.remove('nav--opened');
  // navWpapper.classList.add('nav__wrapper--closed');
  navList.classList.add('nav__list--closed');
  navList.classList.remove('nav__list--opened');
  body.classList.remove('unscrolling');
  untouchableBlock.classList.remove('header__untouchable-block--show');
}

navToggle.addEventListener('click', function () {
  if (headerNav.classList.contains('nav--closed')) {
    openMenu();
    untouchableBlock.addEventListener('click', () => {
      closeMenu();
      untouchableBlock.removeEventListener('click', () => {});
    });
  } else {
    closeMenu();
  }
});


export {closeMenu};
