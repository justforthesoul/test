export const initAnimateSlider = () => {
  const animateImgSlider = document.querySelectorAll('.animate-img-slider');
  const animateTextSlider = document.querySelectorAll('.animate-text-slider');

  animateImgSlider.forEach((slider, index) => {
    const imgSlider = new window.Swiper(slider, {
      speed: 1000,
      spaceBetween: 16,
      allowTouchMove: true,
      slidesPerView: 'auto',
      breakpoints: {
        1024: {
          spaceBetween: 40,
          allowTouchMove: false,
        },

        768: {
          spaceBetween: 30,
          allowTouchMove: false,
        },
      },
      navigation: {
        nextEl: '.slider-button--next',
        prevEl: '.slider-button--prev',
      },
    });

    const textSlider = new window.Swiper(animateTextSlider[index], {
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
  });
};
