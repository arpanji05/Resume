let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuicon.onclick = () => {
  menuicon.classList.toggle("fa fa-close");
  navbar.classList.toggle("active");
};

let sections = document.querySelector("section");
let navlinks = document.querySelector("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetheight;
    let id = sec.getattribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classlist.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classlist.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toogle("sticky", window.scrollY > 100);

  menuicon.classList.remove("fa fa-close");
  navbar.classList.remove("active");
};

ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });


const typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});