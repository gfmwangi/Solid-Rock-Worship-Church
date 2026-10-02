// Mobile menu: show/hide the navigation links
const menuButton = document.getElementById('menuButton');
const navbar = document.querySelector('.navbar');

menuButton.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});