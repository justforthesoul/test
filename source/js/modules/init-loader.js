import {initSimpleAnimation} from './init-simple-animation';

export const initLoader = () => {
  const header = document.querySelector('.header');
  const loader = document.querySelector('.loader');

  if (!header || !loader) {
    return;
  }

  document.body.classList.add('no-pointer');

  setTimeout(() => {
    loader.classList.add('is-ending');
  }, 2500);

  setTimeout(() => {
    header.classList.add('is-shown');
  }, 4200);

  setTimeout(() => {
    initSimpleAnimation();
  }, 5200);

  setTimeout(() => {
    window.ls.start();
    header.classList.remove('is-hidden');
    header.classList.remove('is-shown');
    document.body.classList.remove('no-pointer');
    loader.classList.add('no-animation');
  }, 6000);
};
