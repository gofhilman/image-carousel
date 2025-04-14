function createCarousel(frame, frameWidth, frameHeight) {
    frame.style.width = parseFloat(frameWidth) + 'px';
    frame.style.height = parseFloat(frameHeight) + 'px';
    frame.style.overflow = 'hidden';
    frame.firstElementChild.style.width = 'max-content';
    frame.firstElementChild.style.display = 'grid';
    frame.firstElementChild.style.gridAutoFlow = 'column';
    [...frame.firstElementChild.children].forEach(slide => {
        slide.style.width = parseFloat(frameWidth) + 'px';
        slide.style.objectFit = 'cover'; 
    });
}

function chooseSlide(slideContainer, slideNumber) {
    slideContainer.style.transform = `translateX(
        ${-parseFloat(slideContainer.firstElementChild.style.width) * slideNumber + 'px'}
    )`;
    return slideNumber;
}

function handleSwipe(event, slideContainer, slideNumber) {
    let maxSlideNumber = slideContainer.children.length - 1;
    switch(event.target) {
        case event.target.parentElement.firstElementChild:
            if(slideNumber === 0) {
                return chooseSlide(slideContainer, slideNumber = maxSlideNumber);
            } else {
                return chooseSlide(slideContainer, --slideNumber);
            }
        case event.target.parentElement.lastElementChild:
            if(slideNumber === maxSlideNumber) {
                return chooseSlide(slideContainer, slideNumber = 0);
            } else {
                return chooseSlide(slideContainer, ++slideNumber);
            }            
    }
}

export { createCarousel, chooseSlide, handleSwipe }