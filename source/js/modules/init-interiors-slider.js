export const initInteriorsSlider = () => {
  const interiorImgSlider = document.querySelector('.interiors__img-slider');
  const interiorTextSlider = document.querySelector('.interiors__text-slider');

  const imgSlider = new window.Swiper(interiorImgSlider, {
    speed: 1000,
    spaceBetween: 40,
    allowTouchMove: true,
    slidesPerView: 'auto',
    breakpoints: {
      1024: {
        allowTouchMove: false,
      },

      768: {
        allowTouchMove: false,
      },
    },
    pagination: {
      el: '.interiors__slider-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },
  });

  const textSlider = new window.Swiper(interiorTextSlider, {
    speed: 1000,
    effect: 'fade',
    allowTouchMove: false,
    fadeEffect: {
      crossFade: true,
    },
  });

  imgSlider.on('slideChange', () => {
    textSlider.slideTo(imgSlider.activeIndex);
  });
};
