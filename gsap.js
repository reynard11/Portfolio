gsap.to(".fa-arrow-down", {
  y: 15,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
gsap.to("#maintenance", {
  y: 25,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
gsap.fromTo(
  ".creative",
  { opacity: 0, y: 40 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".creative",
      start: "top 80%",
      end: "top 40%",
      scrub: true,
      toggleActions: "play reverse play reverse"
    }
  }
);

gsap.fromTo(
  ".craf_taughts",
  { x: -150, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".craf_taughts",
      start: "top 80%",
      end: "top 30%",
      scrub: true
    }
  }
);

gsap.to(".btnWork", {
  scrollTrigger: ".btnWork",
  y: 50
});

gsap.to(".img", {
  y: -5,
  scrollTrigger: {
    trigger: ".img",
    scrub: 3 // adds smooth inertia
  }
});
