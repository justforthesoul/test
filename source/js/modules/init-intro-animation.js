export const initIntroAnimation = () => {
  const introImgBlock = document.querySelector('.intro__img-block');
  const introImgBlockImg = document.querySelector('.intro__img-block-wrapper img');
  const exclusiveBlock = document.querySelector('.exclusive');

  const animateIntro = () => {
    if (introImgBlock.classList.contains('is-rotated')) {
      return;
    }

    introImgBlock.classList.add('is-rotated');
    exclusiveBlock.classList.add('is-up');

    window.gsap
        .timeline({
          scrollTrigger: {
            trigger: '.intro__img-block',
            scroller: '[data-scroll-container]',
            start: 'top 100%',
            end: 'top -50%',
            scrub: true,
          },
        })
        .fromTo(introImgBlockImg, {yPercent: 0}, {yPercent: -15}, 0);
    setTimeout(() => {
      window.ls.update();
    }, 1200);
  };

  window.ls.on('scroll', animateIntro);
};
