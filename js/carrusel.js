document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    slides[currentIndex].classList.add('active');
    if (dots[currentIndex]) dots[currentIndex].classList.add('active');
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
  }

  window.currentSlide = function(index) {
    showSlide(index);
  };
});