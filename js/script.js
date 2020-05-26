setTimeout(function () {
  document.querySelector(".page-content").classList.add("page-content-in");
  document.querySelector(".main-content").classList.add("main-content-in");
  document.querySelector(".preloader").classList.add("preloader-out");
}, 2700);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

var banner = document.getElementById("banner");
var nameBox = document.getElementById("name");
var profession = document.getElementById("profession");

TweenMax.set(banner, { visibility: "visible" });
TweenMax.set(nameBox, { visibility: "visible" });
TweenMax.set(profession, { visibility: "visible" });

TweenMax.from(banner, 5, { ease: Power4.easeOut, opacity: 0, delay: 3.4 });
TweenMax.from(nameBox, 3, { ease: Power4.easeOut, opacity: 0, delay: 4.0 });
TweenMax.from(profession, 3, { ease: Power4.easeOut, opacity: 0, delay: 4.3 });

var widthWindow = window.innerWidth;
var positionAboutElement = -(widthWindow + 500);

jQuery.noConflict();
jQuery(document).ready(() => {
  var controller = new ScrollMagic.Controller();
  var blockTween = new TweenMax.from(".photo-about", 3, {
    ease: Power4.easeOut,
    left: positionAboutElement,
  });
  var containerScene = new ScrollMagic.Scene({
    triggerElement: ".person",

    offset: -200,
    duration: 250,
  })
    .setTween(blockTween)
    .addTo(controller);
});

var positionOffSet = -350;
var positionDuration = 200;

const checkWidth = () => {
  if (widthWindow < 768) {
    positionOffSet = 0;
    positionDuration = 400;
  }
};
checkWidth();

jQuery.noConflict();
jQuery(document).ready(() => {
  var controller = new ScrollMagic.Controller();
  var blockTween = new TweenMax.from(".text", 3, {
    ease: Power4.easeOut,
    right: positionAboutElement,
  });
  var containerScene = new ScrollMagic.Scene({
    triggerElement: ".person",

    offset: positionOffSet,
    duration: positionDuration,
  })
    .setTween(blockTween)
    .addTo(controller);
});

jQuery.noConflict();
jQuery(document).ready(() => {
  var controller = new ScrollMagic.Controller();
  var blockTween = new TweenMax.from(".examples", 5, {
    ease: Power4.easeOut,
    backgroundColor: "#4c4c4c",
    color: "#ffffff",
  });
  var containerScene = new ScrollMagic.Scene({
    triggerElement: "#projects",

    offset: -200,
    duration: 400,
  })
    .setTween(blockTween)
    .addTo(controller);
});

jQuery.noConflict();
jQuery(document).ready(() => {
  var controller = new ScrollMagic.Controller();
  var blockTween = new TweenMax.from(".contact", 5, {
    ease: Power4.easeOut,
    backgroundColor: "#ffffff",
  });
  var containerScene = new ScrollMagic.Scene({
    triggerElement: ".contact",

    offset: -100,
    duration: 400,
  })
    .setTween(blockTween)
    .addTo(controller);
});
jQuery.noConflict();
jQuery(document).ready(() => {
  var controller = new ScrollMagic.Controller();
  var blockTween = new TweenMax.from(".form", 5, {
    ease: Power4.easeOut,
    opacity: 0,
  });
  var containerScene = new ScrollMagic.Scene({
    triggerElement: ".contact",

    offset: -100,
    duration: 400,
  })
    .setTween(blockTween)
    .addTo(controller);
});
