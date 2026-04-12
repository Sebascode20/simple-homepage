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
  $headerNav = document.querySelector(".header__nav"),
  $headerNavItem = document.querySelectorAll(
    ".header__nav-item:not(:first-child) a",
  );

let darkThemeTextColor =
  getComputedStyle($html).getPropertyValue("--btn-text-color");

let mainBgColor = getComputedStyle($html).getPropertyValue("--main-bg-color");

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
  //$btnTheme.insertAdjacentElement("afterbegin", $sunIcon);
  $body.classList.toggle("dark-theme");
  $heading.style.color = darkThemeTextColor;
  $headerNav.classList.add("dark-theme");
  $link.style.color = darkThemeTextColor;
  $btnMenu.style.filter = "brightness(0) invert(1)";

  $moonIcon.style.filter = "brightness(1) invert(0)";
  $moonIcon.style.backgroundColor = mainBgColor;
  $moonIcon.style.borderRadius = "10px";
  $moonIcon.style.marginLeft = "2px";

  $sunIcon.style.backgroundColor = "transparent";
  $sunIcon.style.filter = "brightness(0) invert(1)";

  $headerNavItem.forEach((link) => {
    link.style.color = darkThemeTextColor;
  });

  $text.forEach((p) => {
    p.style.color = darkThemeTextColor;
  });

  $headerLogo.setAttribute("src", "./resources/logo-dark.svg");

  if (!$body.classList.contains("dark-theme")) {
    $btnTheme.insertAdjacentElement("afterbegin", $moonIcon);
    $headerLogo.setAttribute("src", "./resources/logo-light.svg");
    $heading.removeAttribute("style");
    $link.removeAttribute("style");
    $headerNav.classList.remove("dark-theme");
    $btnMenu.removeAttribute("style");
    $moonIcon.removeAttribute("style");
    $sunIcon.removeAttribute("style");

    $text.forEach((p) => {
      p.removeAttribute("style");
    });

    $headerNavItem.forEach((link) => {
      link.removeAttribute("style");
    });
  }
});
