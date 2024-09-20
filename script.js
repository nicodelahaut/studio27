let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const maxIndex = slides.length;

// Ensure the first image is visible by setting the first slide to "active"
showSlide(currentIndex);

// Function to show the current slide
function showSlide(index) {
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
