gsap.to(".box", {
    x: 500, // move 200px to the right
    opacity: 0.5, // fade to 50% opacity
    duration: 1.5, // 1.5 seconds
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".section" /* target */,
        start: "0% 20%" /* target, screen*/,
        scrub: 1,
        markers: 1
    }
});
