gsap.registerPlugin(ScrollTrigger);

// Intro Timeline
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

tl.to(".title", { y: 0, opacity: 1, duration: 1 })
  .to(".subtitle", { y: 0, opacity: 1, duration: 1 }, "-=0.5")
  .to(".cta", { opacity: 1, scale: 1, duration: 0.5 }, "-=0.5");

// Button Click
document.querySelector(".cta").addEventListener("click", () => {
  gsap.to(".cta", {
    rotation: 360,
    scale: 1.2,
    duration: 0.5,
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut"
  });
});

// ScrollReveal
gsap.utils.toArray(".reveal").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});

// Floating Shapes
document.querySelectorAll(".shape").forEach((shape) => {
  gsap.set(shape, {
    x: gsap.utils.random(0, window.innerWidth),
    y: gsap.utils.random(0, window.innerHeight),
    scale: gsap.utils.random(0.5, 1.5),
    opacity: 0.4
  });

  floatShape(shape);
});

function floatShape(shape) {
  gsap.to(shape, {
    x: "+=" + gsap.utils.random(-100, 100),
    y: "+=" + gsap.utils.random(-100, 100),
    duration: gsap.utils.random(4, 8),
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}
