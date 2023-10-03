const sliders = (slides, dir, prev, next) => {
  let slideIndex = 1;
  const items = document.querySelectorAll(slides),
    prevBtn = document.querySelector(prev),
    nextBtn = document.querySelector(next);

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach((item) => {
      item.classList.add("animated");
      item.style.display = "none";
    });

    items[slideIndex - 1].style.display = "block";
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
};

export default sliders;
