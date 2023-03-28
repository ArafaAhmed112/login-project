const btnLogin = document.querySelector(".btn-login");
const btnCreateAccount = document.querySelector(".create-account");

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

btnCreateAccount.addEventListener("click", (e) => {
  document.querySelector(".createAccount-box").classList.toggle("hidden");
  if (
    document.querySelector(".createAccount-box").classList.contains("hidden")
  ) {
    btnLogin.textContent = "Login";
    btnCreateAccount.textContent = "Create Account";
  } else {
    btnLogin.textContent = "Create Account";
    btnCreateAccount.textContent = "Login";
  }
});
