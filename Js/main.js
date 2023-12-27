//  * @author  Bishal Kayal
//  * @version 2.01, 28/12/2023

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  mousewheel: true,
  speed: 2000,
});

const swiper2 = new Swiper(".mySwiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".nextBtn",
    prevEl: ".preBtn",
  },
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
  },
});

var typed = new Typed("#typing", {
  strings: ["Web Developer", "Professional Coder", "UI/UX Designer"],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true,
});

document.getElementById("menuOpen").addEventListener("click", () => {
  document.querySelector(".deactive-menu").classList.add("active-menu");
  document.querySelector(".deactive-menu").classList.remove("deactive-menu");
});
document.getElementById("menuOpen-2").addEventListener("click", () => {
  document.querySelector(".deactive-menu").classList.add("active-menu");
  document.querySelector(".deactive-menu").classList.remove("deactive-menu");
});
document.getElementById("menuClose").addEventListener("click", () => {
  document.querySelector(".active-menu").classList.add("deactive-menu");
  document.querySelector(".active-menu").classList.remove("active-menu");
});
