const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const imageDisplay = document.getElementById("imageDisplay");

let images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg"
];

let index = 0;

function update(){
    imageDisplay.src = images[index];
    imageDisplay.style.opacity = "0";   
    setTimeout(() => {
        imageDisplay.src = images[index];
        imageDisplay.style.opacity = "1";
    }, 150);
}

update();

next.addEventListener("click", () => {
    index = (index + 1) % images.length;
    update();
    resetAutoSlide();
});

prev.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    update();
    resetAutoSlide();
});

let autoSlide = setInterval(() => next.click(), 5000);

function resetAutoSlide(){
    clearInterval(autoSlide);
    autoSlide = setInterval(() => next.click(), 5000);
}

update();