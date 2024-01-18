function initBestsellersSwiper() {

  let bestsellersSwiper = new Swiper('.bestsellers__swiper', {
    // Стрелки переключения слайдов
    navigation: {
      nextEl: '.bestsellers__button--next',
      prevEl: '.bestsellers__button--prev',
    },

    watchSlidesProgress: true,
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    spacebetween: 50,
    allowTouchMove: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        allowTouchMove: false,
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  return bestsellersSwiper;
}

export {initBestsellersSwiper};
