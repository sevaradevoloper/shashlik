// Bars menyu ochib yopish
const bars = document.getElementById("bars");
const menu = document.getElementById("menu");

bars.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Slideshow
let slides = document.querySelectorAll(".hero__image .slide");
let index = 0;

function changeSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
setInterval(changeSlide, 3000);