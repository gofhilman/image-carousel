import { 
    createCarousel, createSlideSwipe, createNavDots, chooseSlide, cycleSlides
} from "./image-carousel.js";

const imageCarousel = document.querySelector('.image-carousel');
const frame = document.querySelector('#frame');

createCarousel(frame, 1000, 500);
createSlideSwipe(imageCarousel, "slide-swipe", "left-swipe", "right-swipe");
createNavDots(imageCarousel, "nav-dots", "dot", "current-slide");
chooseSlide(0);
setInterval(cycleSlides, 5000);