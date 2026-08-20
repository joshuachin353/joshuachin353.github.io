gsap.registerPlugin(ScrollTrigger);

gsap.from("nav a", {
    opacity: 0,
    y: -10,
    duration: 0.8,
    ease: "power2.in"
});
function toggleMobileMenu() {
    const mobileDrawer = document.querySelector('.mb-sub-menu-bar');
    const menuToggle = document.querySelector('.menu-toggle');

    if (mobileDrawer) {
        mobileDrawer.classList.toggle('active');
    }

    if (menuToggle) {
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        }
    }
}

function toggleAccordion(buttonElement) {
    const parentAccordion = buttonElement.parentElement;
    if (parentAccordion) {
        parentAccordion.classList.toggle('open');
    }
}

