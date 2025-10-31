// let slideIndex = 0;
// const slides = document.querySelectorAll(".slides img");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");

// // Show the current slide
// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.remove("active");
//     if (i === index) slide.classList.add("active");
//   });
// }

// // Next slide
// function nextSlide() {
//   slideIndex = (slideIndex + 1) % slides.length;
//   showSlide(slideIndex);
// }

// // Previous slide
// function prevSlide() {
//   slideIndex = (slideIndex - 1 + slides.length) % slides.length;
//   showSlide(slideIndex);
// }

// // Event listeners
// nextBtn.addEventListener("click", nextSlide);
// prevBtn.addEventListener("click", prevSlide);

// // Auto-slide every 3 seconds
// setInterval(nextSlide, 3000);

// // Initialize
// showSlide(slideIndex);

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let index = 0;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.dots span');

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function goToSlide(i) {
  index = i;
  updateSlider();
}

function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
}

// Arrow controls
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Auto-slide
let auto = setInterval(nextSlide, 4000);

// Pause on hover
slider.onmouseover = () => clearInterval(auto);
slider.onmouseout = () => auto = setInterval(nextSlide, 4000);

// Swipe (mobile)
let startX = 0;
slider.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
slider.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextSlide();
  if (endX - startX > 50) prevSlide();
});

updateSlider();
