const $checkbox = document.getElementById("open-menu"),
  $labelCheckbox = document.querySelector(".header__open-nav-button"),
  $btnTheme = document.getElementById("theme-switch"),
  $sunIcon = document.getElementById("sun-icon"),
  $moonIcon = document.getElementById("moon-icon"),
  $body = document.body,
  $html = document.documentElement,
  $text = document.querySelectorAll("p"),
  $heading = document.querySelector("h1"),
  $headerLogo = document.querySelector(".header__logo"),
  $link = document.getElementById("link-demo"),
  $btnMenu = document.getElementById("hambuger-menu"),
  $btnClose = document.getElementById("close-button"),
  $headerNav = document.querySelector(".header__nav"),
  $headerNavItem = document.querySelectorAll(".header__nav-item");

let darkTextColor =
  getComputedStyle($html).getPropertyValue("--btn-text-color");

$checkbox.addEventListener("click", function () {
  if (
    $labelCheckbox.querySelector("img").getAttribute("src") ===
    "./resources/hamburger-button.svg"
  ) {
    $labelCheckbox
      .querySelector("img")
      .setAttribute("src", "./resources/close-button.svg");

    $labelCheckbox.querySelector("img").setAttribute("id", "close-button");

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
  $heading.style.color = darkTextColor;
  $headerNav.classList.add("dark-theme");
  $link.style.color = darkTextColor;
  $btnMenu.style.filter = "brightness(0) invert(1)";

  $text.forEach((p) => {
    p.style.color = darkTextColor;
  });

  $headerLogo.setAttribute("src", "./resources/logo-dark.svg");

  if (!$body.classList.contains("dark-theme")) {
    $btnTheme.insertAdjacentElement("afterbegin", $moonIcon);
    $headerLogo.setAttribute("src", "./resources/logo-light.svg");
    $heading.removeAttribute("style");
    $link.removeAttribute("style");
    $headerNav.classList.remove("dark-theme");
    $btnMenu.removeAttribute("style");

    $text.forEach((p) => {
      p.removeAttribute("style");
    });
  }
});
