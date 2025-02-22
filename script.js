// Simplified JavaScript for Shipyard Website
function loco(){
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
      el: document.querySelector("C:\Users\Balaj\Downloads\zane shipyard\3D-animated-website-master\admin panel\index.html"),
      smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("3D-animated-website-master/admin panel/index.html", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
loco();

// Facility Card Interactions
document.querySelectorAll('.facility-card').forEach(card => {
  card.addEventListener('click', () => {
      const facility = card.getAttribute('data-details');
      // Add navigation logic here
      alert(`Showing details for ${facility.replace('-', ' ')}`);
  });
});

// Animated Stats
gsap.from(".stat-item", {
  scrollTrigger: {
      trigger: ".stat-item",
      start: "top center",
      scroller: "#main"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3
});