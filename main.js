document.querySelectorAll(".input").forEach((input) => {
  input.addEventListener("focus", (e) => {
    const item = e.target;
    const inputBox = item.closest(".input-box");
    const icon = item.previousElementSibling;
    item.style.color = "#fff";
    inputBox.style.borderBottom = "2px solid #fff";
    icon.style.color = "rgb(221,221,221)";
  });

  input.addEventListener("focusout", (e) => {
    const item = e.target;
    const inputBox = item.closest(".input-box");
    const icon = item.previousElementSibling;
    inputBox.style.borderBottom = "2px solid transparent";
    icon.style.color = "";
  });
});

// document
//   .querySelector(".btn-login")
//   .addEventListener("click", (e) => e.preventDefault());
