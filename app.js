//Perennial and What We Know intersection for grayscale images

const halfImages = document.querySelectorAll(".half-image");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show"); // Add show class when intersected
            observer.unobserve(entry.target); // Stop observing once shown
        }
    });
}, {
    threshold: 0.5,
});

halfImages.forEach(halfImage => {
    observer.observe(halfImage);
});


//Associated Acts
const intersectRect2 = document.querySelectorAll(".intersect-rect-2");
const slidingBlocks = document.querySelectorAll(".sliding-block");
const halfImages2 = document.querySelectorAll(".half-image-2");


const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            slidingBlocks.forEach(block => {
                block.classList.add("show");
            });
            halfImages2.forEach(image => {
                image.classList.add("show");
            })
            observer2.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.5,
});

intersectRect2.forEach(halfImage2 => {
    observer2.observe(halfImage2);
});
