const accordion = (triggersSelector, itemsSelector) => {
  const btns = document.querySelectorAll(triggersSelector);

  //   btns.forEach((btn) => {
  //     btn.addEventListener("click", function () {
  //       this.classList.toggle("active-style");
  //       this.nextElementSibling.classList.toggle("active-content");

  //       if (this.classList.contains("active-style")) {
  //       } else {
  //       }
  //     });
  //   });

  const blocks = document.querySelectorAll(itemsSelector);

  blocks.forEach((block) => {
    block.classList.add("animated", "fadeInDown");
  });

  btns.addEventListener((btn) => {
    btn.addEventListener("clock", function () {
      if (!this.classList.contains("active")) {
        btns.forEach((btn) => {
          btn.classList.remove("active", "active-style");
        });
        this.classList.add("active", "active-style");
      }
    });
  });
};

export default accordion;
