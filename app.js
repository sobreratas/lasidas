const headerSection = document.querySelector(".header-section");

window.addEventListener("scroll", ()=> {
  let offset = window.scrollY;
  headerSection.style.backgroundPositionY = offset * 0.2 + 'px';
})

function changeHamburgerBackground() {
  const hamburger = document.querySelector(".hamburger-container");
  let scrollValue = window.scrollY;
  if (scrollValue > 800) {
    hamburger.style.backgroundColor = "black";
  } else {
    hamburger.style.backgroundColor = "transparent";
  }
}

window.addEventListener("scroll", changeHamburgerBackground);
const body = document.querySelector("body");

//Click on hamburger and expand menu
const hamburgerContainer = document.querySelector(".hamburger-container");
const menuExpanded = document.querySelector(".menu-expanded");
hamburgerContainer.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("active");
  menuExpanded.classList.toggle("active");
  hamburgerContainer.style.backgroundColor = "transparent";
  body.classList.toggle("no-scroll");
});

//Click X to close menu
const menuLinks = document.querySelectorAll(".menu-link");
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    hamburgerContainer.classList.toggle("active");
    menuExpanded.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });
});

const boxes = document.querySelectorAll(".box");

const boxObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add show class when intersected
        boxObserver.unobserve(entry.target); // Stop observing once shown
      }
    });
  },
  {
    threshold: 0.5,
  }
);

boxes.forEach((box) => {
  boxObserver.observe(box);
});

//Perennial and What We Know intersection for grayscale images

const halfImages = document.querySelectorAll(".half-image");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add show class when intersected
        observer.unobserve(entry.target); // Stop observing once shown
      }
    });
  },
  {
    threshold: 0.5,
  }
);

halfImages.forEach((halfImage) => {
  observer.observe(halfImage);
});

//Associated Acts
const intersectRect2 = document.querySelectorAll(".intersect-rect-2");
const slidingBlocks = document.querySelectorAll(".sliding-block");
const halfImages2 = document.querySelectorAll(".half-image-2");

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        slidingBlocks.forEach((block) => {
          block.classList.add("show");
        });
        halfImages2.forEach((image) => {
          image.classList.add("show");
        });
        observer2.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

intersectRect2.forEach((halfImage2) => {
  observer2.observe(halfImage2);
});

//FOOTER COPYRIGHT TEXT
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();


year.innerHTML = currentYear;
