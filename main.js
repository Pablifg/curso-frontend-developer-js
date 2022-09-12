const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCartAside);

/*Garantizo que estén ocultos y muestro el de mi interés*/
function toggleDesktopMenu() {
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');

    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');

    aside.classList.toggle('inactive');
}