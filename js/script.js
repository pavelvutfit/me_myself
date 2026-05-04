/* script.js - JavaScript for animation and interaction on web */
/* Inspired by "Zadání projektu 1" from ITW course at FIT VUT */

document.addEventListener("DOMContentLoaded", () => {
    
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const SCROLL_DURATION = 1000;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let activeScrollAnimation = null;

    const easeInOutCubic = (t) => (
        t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2
    );

    const animateScrollTo = (targetY) => {
        if (activeScrollAnimation !== null) {
            cancelAnimationFrame(activeScrollAnimation);
            activeScrollAnimation = null;
        }

        const startY = window.scrollY;
        const maxY = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
        const destinationY = Math.max(0, Math.min(targetY, maxY));
        const distance = destinationY - startY;

        if (Math.abs(distance) < 1) return;

        const startTime = performance.now();

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / SCROLL_DURATION, 1);
            const easedProgress = easeInOutCubic(progress);

            window.scrollTo(0, startY + distance * easedProgress);

            if (progress < 1) {
                activeScrollAnimation = requestAnimationFrame(step);
            } else {
                activeScrollAnimation = null;
            }
        };

        activeScrollAnimation = requestAnimationFrame(step);
    };

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", (e) => {
            const hash = link.getAttribute("href");
            if (!hash || hash === "#") return;

            const target = document.querySelector(hash);
            if (!target) return;

            e.preventDefault();

            const navOffset = document.querySelector(".global-nav")?.offsetHeight ?? 0;
            const targetY = target.getBoundingClientRect().top + window.scrollY - navOffset;

            if (prefersReducedMotion) {
                window.scrollTo(0, targetY);
            } else {
                animateScrollTo(targetY);
            }

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