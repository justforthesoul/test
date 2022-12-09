export const initVideoPlay = () => {
  const video = document.querySelector('.perspective__video video');
  const videoPlayBtn = document.querySelector('.perspective__play-btn');
  const breakpoint = window.matchMedia('(min-width:768px)');
  const breakpointChecker = () => {
    if (breakpoint.matches) {
      video.addEventListener('canplay', () => video.play());
      video.play();
      video.muted = true;
    } else {
      video.pause();
      video.muted = false;
      videoPlayBtn.addEventListener('click', () => {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};
