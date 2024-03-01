

function changeHamburgerBackground(){
    const hamburger = document.querySelector(".hamburger-container")
    let scrollValue = window.scrollY;
    if(scrollValue > 800){
        hamburger.style.backgroundColor = "black";
    } else {
        hamburger.style.backgroundColor = "transparent";
    }
}

window.addEventListener('scroll', changeHamburgerBackground);


//Click on hamburger and expand menu
const hamburgerContainer = document.querySelector(".hamburger-container");
const menuExpanded = document.querySelector(".menu-expanded")
hamburgerContainer.addEventListener("click", () => {
    hamburgerContainer.classList.toggle("active");
    menuExpanded.classList.toggle("active");
    hamburgerContainer.style.backgroundColor = "transparent"
})

//Click X to close menu
const menuLinks = document.querySelectorAll(".menu-link");
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", ()=> {
        hamburgerContainer.classList.toggle("active");
        menuExpanded.classList.toggle("active");  
    })
})







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
