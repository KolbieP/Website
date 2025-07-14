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

    // Toggle mobile menu
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Animate skills list on scroll into view
    const skillsList = document.querySelector('.skills-list');
    const skillItems = document.querySelectorAll('.skills-list li');

    if (skillsList && skillItems.length) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillItems.forEach((li, idx) => {
                        setTimeout(() => {
                            li.classList.add('visible');
                        }, idx * 70); 
                    });
                    observer.disconnect();
                }
            });
        }, { threshold: 0.2 });

        observer.observe(skillsList);
    }
});


