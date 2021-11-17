// add mobile menu
const showMobileMenu = document.getElementById('mobile-menu-show-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenu = document.getElementById('close-mobile-menu-btn');
showMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('d-none');
});
closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('d-none');
});
