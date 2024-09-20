// Array of image filenames in your slideshow folder
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg',
    'image11.jpg',
    'image12.jpg',
    'image13.jpg',
    'image14.jpg',
    'image15.jpg',
    'image16.jpg',
    'image17.jpg',
    'image18.jpg',
    'image19.jpg',
    'image20.jpg',
    'image21.jpg',
    'image22.jpg',
    'image23.jpg',
    'image24.jpg',
    'image25.jpg',
    'image26.jpg',
    'image27.jpg'
];

let currentIndex = 0;
const maxIndex = images.length;  // Automatically detect the number of images
const slideshowContainer = document.getElementById('slideshow');

// Dynamically create slides for images
images.forEach((image, index) => {
    const slide = document.createElement('div');
    slide.classList.add('slide');

    // Check if image exists and log its path
    const imagePath = `./images/slideshow/${image}`;
    console.log(`Attempting to load: ${imagePath}`);

    slide.style.backgroundImage = `url(${imagePath})`;

    // Make the first slide active
    if (index === 0) slide.classList.add('active');

    slideshowContainer.appendChild(slide);
});

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
