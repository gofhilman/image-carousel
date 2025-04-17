const state = {
    slideNumber: 0,
    maxSlideNumber: 0,
    carouselWidth: 0,
    slideContainer: null,
    navDotContainer: null,
    currentSlideClass: ''
};

function createCarousel(frame, frameWidth, frameHeight) {
    state.carouselWidth = parseFloat(frameWidth);
    state.slideContainer = frame.firstElementChild;
    state.maxSlideNumber = frame.firstElementChild.children.length - 1;
    frame.style.width = state.carouselWidth + 'px';
    frame.style.height = parseFloat(frameHeight) + 'px';
    frame.style.overflow = 'hidden';
    state.slideContainer.style.width = 'max-content';
    state.slideContainer.style.display = 'grid';
    state.slideContainer.style.gridAutoFlow = 'column';
    [...state.slideContainer.children].forEach(slide => {
        slide.style.width = state.carouselWidth + 'px';
        slide.style.objectFit = 'cover'; 
    });
}

function createSlideSwipe(imageCarousel, parentId, leftSwipeId, rightSwipeId) {
    const slideSwipe = document.createElement('div');
    const leftSwipe = document.createElement('div');
    const rightSwipe = document.createElement('div');
    slideSwipe.setAttribute('id', parentId);
    leftSwipe.setAttribute('id', leftSwipeId);
    rightSwipe.setAttribute('id', rightSwipeId);
    slideSwipe.append(leftSwipe, rightSwipe);
    slideSwipe.addEventListener('click', event => handleSwipe(event));
    imageCarousel.appendChild(slideSwipe);
} 

function createNavDots(imageCarousel, navDotsId, dotClass, markedDotClass) {
    const navDots = document.createElement('div');
    navDots.setAttribute('id', navDotsId);
    for(let iter = 0; iter <= state.maxSlideNumber; iter++) {
        const dot = document.createElement('div');
        dot.classList.add(dotClass);
        navDots.appendChild(dot);
    }
    navDots.addEventListener('click', event => handleNav(event));
    imageCarousel.appendChild(navDots);
    state.navDotContainer = navDots;
    state.currentSlideClass = markedDotClass;
}

function chooseSlide(imgNumber) {
    state.slideNumber = imgNumber;
    state.slideContainer.style.transform = `translateX(
        ${-state.carouselWidth * imgNumber + 'px'}
    )`;
    markNavDot();
}

function cycleSlides() {
    if(state.slideNumber === state.maxSlideNumber) {
        chooseSlide(0);
    } else {
        chooseSlide(state.slideNumber + 1);
    }
}

function handleSwipe(event) {
    switch(event.target) {
        case event.target.parentElement.firstElementChild:
            if(state.slideNumber === 0) {
                chooseSlide(state.maxSlideNumber);
            } else {
                chooseSlide(state.slideNumber - 1);
            }
            break;
        case event.target.parentElement.lastElementChild:
            cycleSlides();           
    }
}

function handleNav(event) {
    if(event.target.children.length === 0) {
        let imgNumber = [...event.target.parentElement.children].findIndex(child => {
            return child === event.target;
        });
        chooseSlide(imgNumber);
    }
}

function markNavDot() {
    [...state.navDotContainer.children].forEach(child => {
        child.classList.remove(state.currentSlideClass);
    });
    state.navDotContainer.children[state.slideNumber].classList.add(state.currentSlideClass);
}

export { createCarousel, createSlideSwipe, createNavDots, chooseSlide, cycleSlides };