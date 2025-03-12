// Add interactivity to highlight the active tab
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav ul li a, footer ul li a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation && !menuItem[i].classList.contains('logo-link')) {
            menuItem[i].className = "active";
        }
    }
});