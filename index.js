import { 
    createCarousel, chooseSlide, handleSwipe 
} from "./image-carousel.js";

const frame = document.querySelector('#frame');
const slideContainer = document.querySelector('#slide-container');
const slideSwipe = document.querySelector('#slide-swipe');
const navDots = document.querySelector('#nav-dots');

const state = {
    slideNumber: 0,
    maxSlideNumber: 0,
    carouselWidth: 0
};

createCarousel(frame, state, 1000, 500);
chooseSlide(slideContainer, state, 0);
slideSwipe.addEventListener('click', (event) => {
    handleSwipe(event, slideContainer, state);
});