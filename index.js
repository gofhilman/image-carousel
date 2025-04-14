import { createCarousel, chooseSlide, handleSwipe } from "./image-carousel.js";

const frame = document.querySelector('#frame');
const slideContainer = document.querySelector('#slide-container');
const slideSwipe = document.querySelector('#slide-swipe');

let slideNumber = 0;

createCarousel(frame, 1000, 500);
slideNumber = chooseSlide(slideContainer, slideNumber);
slideSwipe.addEventListener('click', (event) => {
    slideNumber = handleSwipe(event, slideContainer, slideNumber);
});