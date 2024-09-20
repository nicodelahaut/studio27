let currentIndex = 0;
const maxIndex = 10;  // Set this to the number of images in your folder
const slideshowContainer = document.getElementById('slideshow');

// Dynamically create slides for images
for (let i = 1; i <= maxIndex; i++) {
    const slide = document.createElement('div');
    slide.classList.add('slide');

    // Set the background image for each slide (Assumes images are named image1.jpg, image2.jpg, etc.)
    slide.style.backgroundImage = `url('./images/slideshow/image${i}.jpg')`;

    // Make the first slide active
    if (i === 1) slide.classList.add('active');

    slideshowContainer.appendChild(slide);
}

// Function to show the current slide
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Function to change the slide automatically every 5 seconds
function changeSlide() {
    currentIndex = (currentIndex + 1) % maxIndex;  // Loop back to the first slide after the last one
    showSlide(currentIndex);
}

// Event listeners for manual navigation using arrows
document.querySelector('.left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + maxIndex) % maxIndex;  // Loop backwards
    showSlide(currentIndex);
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % maxIndex;  // Loop forwards
    showSlide(currentIndex);
});

// Automatically change slides every 5 seconds
setInterval(changeSlide, 5000);
