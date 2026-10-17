document.addEventListener("DOMContentLoaded", function () {
    // 1. Safe Typewriter effect
    const typerElement = document.getElementById("main");
    const cursor = document.getElementById("cursor");

    if (typerElement) {
        const words = (typerElement.getAttribute("data-words") || "").split(",");
        const delay = parseInt(typerElement.getAttribute("data-delay")) || 90;
        const deleteDelay = parseInt(typerElement.getAttribute("data-deleteDelay")) || 1400;
        const colors = (typerElement.getAttribute("data-colors") || "#38bdf8").split(",");

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function type() {
            if (!words.length || !words[0]) return;
            const currentWord = words[wordIndex];
            const currentColor = colors[wordIndex % colors.length];
            typerElement.style.color = currentColor;

            if (!deleting) {
                typerElement.textContent = currentWord.slice(0, charIndex++);
                if (charIndex > currentWord.length) {
                    deleting = true;
                    setTimeout(type, deleteDelay);
                    return;
                }
            } else {
                typerElement.textContent = currentWord.slice(0, charIndex--);
                if (charIndex < 0) {
                    deleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                }
            }

            setTimeout(type, delay);
        }

        type();
    }

    // 2. Safe Contact Form feedback
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            const notification = document.getElementById('notification');
            if (notification) {
                notification.classList.add('show');
            }
        });
    }
});

// Mobile Navigation Toggle
function toggleMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.menu');
    if (navToggle && menu) {
        navToggle.classList.toggle('active');
        menu.classList.toggle('active');
    }
}
