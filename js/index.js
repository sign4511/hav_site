gsap.registerPlugin(ScrollTrigger);
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  const divs = section.querySelectorAll(".container .row div");
  console.log(divs);
  gsap.fromTo(
    divs,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "center center",
        scrub: true,
      },
    }
  );
});
