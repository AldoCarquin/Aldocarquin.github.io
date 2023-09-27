const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');

menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
        menu.style.right = '0';
        menuIcon.classList.add('cross');
    } else {
        menu.style.right = '-200px';
        menuIcon.classList.remove('cross');
    }
});