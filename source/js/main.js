import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initCustomSelect} from './modules/form/init-custom-select';
import {initFormValidate} from './modules/form/init-form-validate';
import {initLocomotiveScroll} from './modules/init-locomotive-scroll';
import {initScrollTriggerLs} from './modules/scroll-trigger';
import {initScrollTo} from './modules/scroll-to';
import {initLoader} from './modules/init-loader';
import {initInteriorsSlider} from './modules/init-interiors-slider';
import {initInteriorSliderParallax} from './modules/init-interior-slider-parallax';
import {initVideoPlay} from './modules/init-video-play';
import {initIntroAnimation} from './modules/init-intro-animation';
import {initAnimateSlider} from './modules/init-animate-slider';
import {initContactsParallax} from './modules/init-contacts-parallax';
import {initFormStates} from './modules/init-form-states';

// ---------------------------------

const lozadElements = document.querySelectorAll('.lozad');

lozadElements.forEach((el) => {
  const observer = window.lozad(el);
  observer.observe();
});

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  initLoader();

  initLocomotiveScroll();
  if (window.ls) {
    window.ls.stop();
    initScrollTriggerLs();
  }

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initCustomSelect();
    initFormValidate();
    initInteriorsSlider();
    initInteriorSliderParallax();
    initVideoPlay();
    initIntroAnimation();
    initAnimateSlider();
    initContactsParallax();
    initFormStates();

    if (window.ls) {
      initScrollTo();
    }
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
