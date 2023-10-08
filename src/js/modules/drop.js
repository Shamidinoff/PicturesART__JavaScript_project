const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');

  ["dragenter", "dragleave", "dragover", "drag"].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(item) {
    item.closest(".file_upload").style.border = "5px solid yellow";
    item.closest(".file_upload").style.backgroundColor = "rgba(0,0,0, .7)";
  }

  function unhighlight(item) {
    item.closest(".file_upload").style.border = "none";
    item.closest(".file_upload").style.backgroundColor = "#ededed";
  }
};

export default drop;
