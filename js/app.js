const hamburgerIcon = document.querySelector("#hamburger-icon");
const mobileContainer = document.querySelector("#mobile-container");
const images = document.querySelectorAll(".responsive-image");

hamburgerIcon.addEventListener("click", () => {
    mobileContainer.classList.toggle("invisible");
})


const mobileSources = [
    "images/mobile/image-gallery-milkbottles.jpg",
    "images/mobile/image-gallery-orange.jpg",
    "images/mobile/image-gallery-cone.jpg",
    "images/mobile/image-gallery-sugar-cubes.jpg"
];

const desktopSources = [
    "images/desktop/image-gallery-milkbottles.jpg",
    "images/desktop/image-gallery-orange.jpg",
    "images/desktop/image-gallery-cone.jpg",
    "images/desktop/image-gallery-sugarcubes.jpg"
];

function isMobile() {
  return window.innerWidth <= 1440;
}

function updateImages() {
    const sources = isMobile() ? mobileSources : desktopSources;
    images.forEach((img, index) => {
    if (sources[index]) {
        img.src = sources[index];
    }
    });
}

window.addEventListener("DOMContentLoaded", updateImages);

window.addEventListener("resize", updateImages);
