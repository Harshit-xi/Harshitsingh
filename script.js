
// GSAP animation for project cards
gsap.from(".project-card", {
  scrollTrigger: ".projects",
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power4.out"
});
