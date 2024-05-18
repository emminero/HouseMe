let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const slideWidth = slides.offsetWidth;
  slides.style.transform = `translateX(-${slideWidth * index}px)`;
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
    showSlide(slideIndex);
  }
}

function nextSlide() {
  const slides = document.querySelector('.slides');
  const slideCount = slides.children.length;
  if (slideIndex < slideCount - 1) {
    slideIndex++;
    showSlide(slideIndex);
  }
}

showSlide(slideIndex);