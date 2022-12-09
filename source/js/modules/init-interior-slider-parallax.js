export const initInteriorSliderParallax = () => {
  const interiorSlideImages = document.querySelectorAll('.interiors__slide-img img');
  interiorSlideImages.forEach((image) => {
    window.gsap
        .timeline({
          scrollTrigger: {
            trigger: '.interiors__img-slider',
            scroller: '[data-scroll-container]',
            start: 'top 90%',
            end: 'top -90%',
            scrub: true,
          },
        })
        .fromTo(
            image,
            {yPercent: 0},
            {yPercent: -10},
            0);
  });
};
