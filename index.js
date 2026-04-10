const $checkbox = document.getElementById("open-menu"),
  $labelCheckbox = document.querySelector(".header__open-nav-button"),
  $btnTheme = document.getElementById("theme-switch"),
  $sunIcon = document.getElementById("sun-icon"),
  $moonIcon = document.getElementById("moon-icon"),
  $body = document.querySelector("body");

$checkbox.addEventListener("click", function () {
  if (
    $labelCheckbox.querySelector("img").getAttribute("src") ===
    "./resources/hamburger-button.svg"
  ) {
    $labelCheckbox
      .querySelector("img")
      .setAttribute("src", "./resources/close-button.svg");
    $labelCheckbox.querySelector("img").setAttribute("alt", "close button");
  } else {
    $labelCheckbox
      .querySelector("img")
      .setAttribute("src", "./resources/hamburger-button.svg");
    $labelCheckbox.querySelector("img").setAttribute("alt", "hamburger button");
  }
});

$btnTheme.addEventListener("click", function () {
  $btnTheme.insertAdjacentElement("afterbegin", $sunIcon);
  $body.classList.toggle("dark-theme");

  if (!$body.classList.contains("dark-theme"))
    $btnTheme.insertAdjacentElement("afterbegin", $moonIcon);
});
