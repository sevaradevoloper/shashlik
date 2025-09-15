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






















// --- Karusel ---
(function(){
  const track = document.getElementById('delish');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  let index = 0;

  function update(){
    const cards = track.querySelectorAll('.dishes__card');
    const gap = 20;
    const cardWidth = cards[0].offsetWidth + gap;
    const visible = Math.floor(track.parentElement.offsetWidth / cardWidth);
    const maxIndex = Math.max(0, cards.length - visible);
    if(index < 0) index = 0;
    if(index > maxIndex) index = maxIndex;
    track.style.transform = translateX($px);
  }
  next.addEventListener('click', ()=>{ index++; update(); });
  prev.addEventListener('click', ()=>{ index--; update(); });
  window.addEventListener('resize', update);
  update();
})();

// --- Menu filter ---
(function(){
  const nav = document.getElementById('menu__nav');
  const links = nav.querySelectorAll('.menu__link');
  const items = document.querySelectorAll('.menu-item');

  nav.addEventListener('click', e=>{
    e.preventDefault();
    const link = e.target.closest('.menu__link');
    if(!link) return;

    // active class
    links.forEach(l=>l.classList.remove('active'));
    link.classList.add('active');

    // filter (hozircha dummy — sen keyin data-category qo‘yib to‘ldirishing mumkin)
    const category = link.textContent.trim().toLowerCase();
    items.forEach(it=>{
      if(category === "all"){
        it.style.display = "";
      }else{
        // Bu joyni sen keyin data-category asosida filterlab qo‘shasan
        it.style.display = "";
      }
    });
  });
})();


















// --- Karusel ---
(function(){
  const track = document.getElementById('delish');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  let index = 0;

  function update(){
    const cards = track.querySelectorAll('.dishes__card');
    // Check if there are any cards to avoid errors
    if (cards.length === 0) return; 

    const gap = 20; // This should match the 'gap' in your CSS for .dishes__menu (25px in your CSS)
    const cardWidth = cards[0].offsetWidth + gap;
    const visible = Math.floor(track.parentElement.offsetWidth / cardWidth);
    const maxIndex = Math.max(0, cards.length - visible);
    
    // Ensure index stays within bounds
    if(index < 0) index = 0;
    if(index > maxIndex) index = maxIndex;
    
    // Calculate the translation value
    const translateValue = -index * cardWidth;
    track.style.transform = `translateX(${translateValue}px)`;
  }

  // Add event listeners to the buttons
  next.addEventListener('click', ()=>{ index++; update(); });
  prev.addEventListener('click', ()=>{ index--; update(); });
  
  // Update on window resize to be responsive
  window.addEventListener('resize', update);
  
  // Initial call to set everything up
  update();
})();














