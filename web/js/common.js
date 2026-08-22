gsap.registerPlugin(ScrollTrigger);

gsap.from("nav a", {
    opacity: 0,
    y: -10,
    duration: 0.8,
    ease: "power2.in"
});


