$(".image-slider1").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    nav: true,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      568: {
        items: 2,
        merge: true,
      },
      992: {
        items: 4,
      },
    },
  });

  $('#exampleModal, #exampleModalToggle, #exampleModalToggle2').on('show.bs.modal', function (e) {
    $('body').addClass("example-open");
}).on('hide.bs.modal', function (e) {
    $('body').removeClass("example-open");
});
