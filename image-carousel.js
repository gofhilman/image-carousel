function createCarousel(frame, state, frameWidth, frameHeight) {
    state.carouselWidth = parseFloat(frameWidth);
    state.maxSlideNumber = frame.firstElementChild.children.length - 1;
    frame.style.width = state.carouselWidth + 'px';
    frame.style.height = parseFloat(frameHeight) + 'px';
    frame.style.overflow = 'hidden';
    frame.firstElementChild.style.width = 'max-content';
    frame.firstElementChild.style.display = 'grid';
    frame.firstElementChild.style.gridAutoFlow = 'column';
    [...frame.firstElementChild.children].forEach(slide => {
        slide.style.width = state.carouselWidth + 'px';
        slide.style.objectFit = 'cover'; 
    });
}

function chooseSlide(slideContainer, state, imgNumber) {
    state.slideNumber = imgNumber;
    slideContainer.style.transform = `translateX(
        ${-state.carouselWidth * imgNumber + 'px'}
    )`;
}

function handleSwipe(event, slideContainer, state) {
    switch(event.target) {
        case event.target.parentElement.firstElementChild:
            if(state.slideNumber === 0) {
                chooseSlide(slideContainer, state, state.maxSlideNumber);
            } else {
                chooseSlide(slideContainer, state, state.slideNumber - 1);
            }
            break;
        case event.target.parentElement.lastElementChild:
            if(state.slideNumber === state.maxSlideNumber) {
                chooseSlide(slideContainer, state, 0);
            } else {
                chooseSlide(slideContainer, state, state.slideNumber + 1);
            }            
    }
}

function handleNav(event, slideContainer, state) {

}

export { createCarousel, chooseSlide, handleSwipe, handleNav }