// script.js

document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('navigation');
    const welcome = document.getElementById('welcome');
    const links = document.querySelectorAll('#navigation-items li a');

    // Handle scroll event
    window.addEventListener('scroll', function () {
        if (window.scrollY > welcome.offsetHeight) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Handle hover effect for scrolled state
    links.forEach(link => {
        link.addEventListener('mouseover', function () {
            if (nav.classList.contains('scrolled')) {
                this.classList.add('scrolled-hover');
            }
        });

        link.addEventListener('mouseout', function () {
            if (nav.classList.contains('scrolled')) {
                this.classList.remove('scrolled-hover');
            }
        });
    });
});
