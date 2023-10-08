const scrolling = (upSelector) => {
  const upElem = document.querySelector(upSelector);

  window.addEventListener("scroll", (upSelector) => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add("animated", "fadeIn");
      upElem.classList.remove("fadeOut");
    } else {
      upElem.classList.add("fadeOut");
      upElem.classList.remove("fadeIn");
    }
  });
};

export default scrolling;
