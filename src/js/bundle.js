// Setup Swipper
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
Swiper.use([Navigation, Pagination]);
window.swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 1,
  simulateTouch: false,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 530px
    530: {
      slidesPerView: 3,
      spaceBetween: 1,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Setup zenScroll
import zenScroll from 'zenscroll';
zenScroll.setup(null, 0); // setting top offset to zero

// Setup styles
import '../styles/bundle.scss';

// Setup modals
import './modal';
