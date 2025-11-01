document.querySelectorAll('.slider').forEach(slider => {
  
  let images = slider.querySelectorAll('.slides img');
  let index = 0;

  images[0].classList.add("active");

  const showSlide = (i) => {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
  };

  slider.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % images.length;
    showSlide(index);
  });

  slider.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showSlide(index);
  });

  setInterval(() => {
    index = (index + 1) % images.length;
    showSlide(index);
  }, 4000);

});
