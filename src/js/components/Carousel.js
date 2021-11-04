const $carousel = document.querySelector(".js-carousel");

new Glider($carousel, {
  slidesToShow: "auto",
  slidesToScroll: "auto",
  draggable: true,
  dots: ".js-carousel--dots",
});
