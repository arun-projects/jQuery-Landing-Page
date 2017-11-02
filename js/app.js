$(document).ready(function() {

  // On scroll past 50 pixels, add the class of "affix"
  $(window).on("scroll", function(event) {
    var scrollDistance = $(window).scrollTop();

    if (scrollDistance > 50) {
      $("#mainNav").addClass("affix")
    } else {
      $("#mainNav").removeClass("affix");
    }
  });

  // When nav links are clicked, scroll to the appropriate section
  $(".page-scroll").on("click", function(event) {
    event.preventDefault();

    var sectionSelector = $(this).attr("href");
    var sectionPosition = $(sectionSelector).offset().top;

    $("html, body").animate({
      scrollTop: sectionPosition
    }, 1000);
  });

  // Activate Bootstrap scrollspy on the main navigation
  $("body").scrollspy({
    target: "#mainNav"
  });

  // Initialize WOW JS
  new WOW().init();

});
