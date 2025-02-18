document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling effect for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Typing effect for the header title
    const titleElement = document.querySelector("header h1");
    const text = "Your Name";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            titleElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150);
        }
    }

    titleElement.textContent = ""; // Clear existing text
    typeEffect();

    // Scroll animation for sections
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    }

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    });

    window.addEventListener("scroll", revealSections);
    revealSections(); // Run on load
});
