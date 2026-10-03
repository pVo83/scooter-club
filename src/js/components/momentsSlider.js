import Swiper, { Navigation, Keyboard, Mousewheel } from "swiper";
Swiper.use([Navigation, Keyboard, Mousewheel]);
const swiper = new Swiper(".momentsSlider", {
  slidesPerView: 1,
  spaceBetween: 32,
  centeredSlides: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
    forceToAxis: true,
  },
  freeMode: true,
  speed: 800,
  navigation: {
    prevEl: ".moments-btn-prev",
    nextEl: ".moments-btn-next",
  },
});