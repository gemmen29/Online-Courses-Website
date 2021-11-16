// add mobile menu
let showMobileMenu = document.getElementById("mobile-menu-show-btn");
let mobileMenu = document.getElementById("mobile-menu");
let closeMobileMenu = document.getElementById("close-mobile-menu-btn");
showMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("d-none");
});
closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("d-none");
});
