/* script.js - JavaScript for animation and interaction on web */
/* Inspired by "Zadání projektu 1" from ITW course at FIT VUT */

document.addEventListener("DOMContentLoaded", () => {
    
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const SCROLL_DURATION = 1000;

    /*Created with help of generative AI */
    const smoothScrollTo = (targetY, duration = SCROLL_DURATION) => {
        const startY = window.scrollY;
        const distance = targetY - startY;
        const startTime = performance.now();

        const easeInOutCubic = (t) => (
            t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2
        );

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeInOutCubic(progress);

            window.scrollTo(0, startY + distance * eased);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    const scrollToSection = (hash) => {
        const target = document.querySelector(hash);
        if (!target) return;

        smoothScrollTo(target.getBoundingClientRect().top + window.scrollY);
    };

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", (e) => {
            const hash = link.getAttribute("href");
            const target = document.querySelector(hash);
            if (!target) return;

            e.preventDefault();
            scrollToSection(hash);
            navLinks.classList.remove("active");
        });
    });

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");
                
                navItems.forEach(item => {
                    item.classList.remove("active");
                    if (item.getAttribute("href") === `#${currentId}`) {
                        item.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    const form = document.getElementById("contactForm");
    if(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for your message!.");
            form.reset();
        });
    }
});