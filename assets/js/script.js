$(document).ready(function () {
  // services carousel
  $(".services-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    dots: true,
    nav: false,
    navText: [
      "<img src='../../img/priv.png'>",
      "<img src='../../img/next.png'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      500: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1080: {
        items: 4,

        loop: true,
      },
    },
  });
  // works-carousel
  $(".works-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: [
      "<img src='../../img/priv.png'>",
      "<img src='../../img/next.png'>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1080: {
        items: 4,

        loop: true,
      },
    },
  });
  // works-carousel
  $(".news-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: [
      "<img src='../../img/priv.png'>",
      "<img src='../../img/next.png'>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,

        loop: true,
      },
    },
  });
  // partner-carousel
  $(".logo-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: [
      "<img src='../../img/priv.png'>",
      "<img src='../../img/next.png'>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      500: {
        items: 3,
      },
      800: {
        items: 4,
      },
      1000: {
        items: 6,

        loop: true,
      },
    },
  });
});

// sticky header
// window.onscroll = function () {
//   myFunction();
// };
// var aboutUs = document.querySelector(".about-us");
// var header = document.querySelector(".navbar");

// var sticky = aboutUs.offsetTop;
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//     logo.classList.toggle("hidden");
//     logoLight.classList.toggle("hidden");
//   } else {
//     header.classList.remove("sticky");
//     logo.classList.toggle("hidden");
//     logoLight.classList.toggle("hidden");
//   }
// }

const nav = document.querySelector(".navbar");
const header = document.querySelector(".header");
var logo = document.querySelector(".logo");
var logoLight = document.querySelector(".logo-light");

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
    logo.classList.remove("hidden");
    logoLight.classList.add("hidden");
  } else {
    nav.classList.remove("sticky");
    logo.classList.add("hidden");
    logoLight.classList.remove("hidden");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
