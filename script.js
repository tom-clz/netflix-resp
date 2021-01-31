$(document).ready(function() {
  $("#dailymotion .owl-carousel").owlCarousel({
    stagePadding: 50,
    loop: false,
    margin: 7,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],

    responsive: {
      0: {
        items: 1
      },
      641: {
        items: 2
      },
      800: {
        items: 2
      },
      1000: {
        items: 3
      },
      1300: {
        items: 5
      }
    }
  });
});