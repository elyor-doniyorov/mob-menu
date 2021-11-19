const menuBars = document.querySelector('.menu-bars');
const mobMenu = document.querySelector('#mob-menu');
const mobCloseMenu = document.querySelector('#mob-close-menu');

const mobileNav = document.querySelector('#mob-menu>ul>li>a');

menuBars.addEventListener('click', () => {
  mobMenu.style.display = 'flex';
});

mobCloseMenu.addEventListener('click', () => {
  mobMenu.style.display = 'none';
});

mobileNav.addEventListener('click', () => {
  mobMenu.style.display = 'none';
});