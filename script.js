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

    // Animate design cards on scroll
    const designCards = document.querySelectorAll('.design-card');
    if (designCards.length) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    designCards.forEach((card, idx) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, idx * 120);
                    });
                    observer.disconnect();
                }
            });
        }, { threshold: 0.2 });
        observer.observe(designCards[0]);
    }

    // Animate project images and buttons on scroll
    const projectSections = document.querySelectorAll('.project-website');
    projectSections.forEach(section => {
        const img = section.querySelector('.work-images');
        const buttons = section.querySelectorAll('.work-button');
        if (img || buttons.length) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (img) img.classList.add('visible');
                        buttons.forEach((btn, idx) => {
                            setTimeout(() => {
                                btn.classList.add('visible');
                            }, idx * 100);
                        });
                        observer.disconnect();
                    }
                });
            }, { threshold: 0.2 });
            observer.observe(section);
        }
    });
});


