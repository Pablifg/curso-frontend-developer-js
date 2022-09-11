//elemento al cual daremos clic
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', function(){toggleDesktopMenu(desktopMenu)});
menuHamIcon.addEventListener('click', function(){toggleDesktopMenu(mobileMenu)});

function toggleDesktopMenu(elemento) {
    elemento.classList.toggle('inactive');
}