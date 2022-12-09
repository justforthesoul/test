export const initContactsParallax = () => {
  const contactsImg = document.querySelectorAll('.contacts__img img');

  window.gsap
      .timeline({
        scrollTrigger: {
          trigger: '.contacts',
          scroller: '[data-scroll-container]',
          start: 'top 90%',
          end: 'top -90%',
          scrub: true,
        },
      })
      .fromTo(contactsImg, {yPercent: 0}, {yPercent: -10}, 0);
};
