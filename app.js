document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.querySelector(".header__hover");
  const icon = document.getElementById("header__img");

  darkModeToggle.addEventListener("click", function (event) {
    event.preventDefault();
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      icon.src = "./images/Settings Icon (1).png";
    } else {
      icon.src = "./images/Settings Icon.png";
    }
  });
});
