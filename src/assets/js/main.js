(function ($) {
  "use strict";

  $(document).ready(function () {
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").click(function () {
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();

      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
              display: "none",
              position: "relative",
            });
            next_fs.css({ opacity: opacity });
          },
          duration: 600,
        }
      );
    });

    $(".previous").click(function () {
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();

      //Remove class active
      $("#progressbar li")
        .eq($("fieldset").index(current_fs))
        .removeClass("active");

      //show the previous fieldset
      previous_fs.show();

      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
              display: "none",
              position: "relative",
            });
            previous_fs.css({ opacity: opacity });
          },
          duration: 600,
        }
      );
    });

    $(".radio-group .radio").click(function () {
      $(this).parent().find(".radio").removeClass("selected");
      $(this).addClass("selected");
    });

    $(".submit").click(function () {
      return false;
    });
  });

  $(document).ready(function ($) {
    // testimonial sliders
    $(".testimonial-sliders").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 1,
          nav: false,
        },
        1000: {
          items: 1,
          nav: false,
          loop: true,
        },
      },
    });

    // homepage slider
    $(".homepage-slider").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      nav: true,
      dots: false,
      navText: [
        '<i class="fas fa-angle-left"></i>',
        '<i class="fas fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
          loop: true,
        },
        600: {
          items: 1,
          nav: true,
          loop: true,
        },
        1000: {
          items: 1,
          nav: true,
          loop: true,
        },
      },
    });

    // logo carousel
    $(".logo-carousel-inner").owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      margin: 30,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 3,
          nav: false,
        },
        1000: {
          items: 4,
          nav: false,
          loop: true,
        },
      },
    });

    // count down
    if ($(".time-countdown").length) {
      $(".time-countdown").each(function () {
        var $this = $(this),
          finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function (event) {
          var $this = $(this).html(
            event.strftime(
              "" +
                '<div class="counter-column"><div class="inner"><span class="count">%D</span>Days</div></div> ' +
                '<div class="counter-column"><div class="inner"><span class="count">%H</span>Hours</div></div>  ' +
                '<div class="counter-column"><div class="inner"><span class="count">%M</span>Mins</div></div>  ' +
                '<div class="counter-column"><div class="inner"><span class="count">%S</span>Secs</div></div>'
            )
          );
        });
      });
    }

    // projects filters isotop
    $(".product-filters li").on("click", function () {
      $(".product-filters li").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr("data-filter");

      $(".product-lists").isotope({
        filter: selector,
      });
    });

    // isotop inner
    $(".product-lists").isotope();

    // magnific popup
    $(".popup-youtube").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    // light box
    $(".image-popup-vertical-fit").magnificPopup({
      type: "image",
      closeOnContentClick: true,
      mainClass: "mfp-img-mobile",
      image: {
        verticalFit: true,
      },
    });

    // homepage slides animations
    $(".homepage-slider").on("translate.owl.carousel", function () {
      $(".hero-text-tablecell .subtitle")
        .removeClass("animated fadeInUp")
        .css({ opacity: "0" });
      $(".hero-text-tablecell h1")
        .removeClass("animated fadeInUp")
        .css({ opacity: "0", "animation-delay": "0.3s" });
      $(".hero-btns")
        .removeClass("animated fadeInUp")
        .css({ opacity: "0", "animation-delay": "0.5s" });
    });

    $(".homepage-slider").on("translated.owl.carousel", function () {
      $(".hero-text-tablecell .subtitle")
        .addClass("animated fadeInUp")
        .css({ opacity: "0" });
      $(".hero-text-tablecell h1")
        .addClass("animated fadeInUp")
        .css({ opacity: "0", "animation-delay": "0.3s" });
      $(".hero-btns")
        .addClass("animated fadeInUp")
        .css({ opacity: "0", "animation-delay": "0.5s" });
    });

    // stikcy js
    $("#sticker").sticky({
      topSpacing: 0,
    });

    //mean menu
    $(".main-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "992",
    });

    // search form
    $(".search-bar-icon").on("click", function () {
      $(".search-area").addClass("search-active");
    });

    $(".close-btn").on("click", function () {
      $(".search-area").removeClass("search-active");
    });
  });

  $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
    if (!$(this).next().hasClass("show")) {
      $(this)
        .parents(".dropdown-menu")
        .first()
        .find(".show")
        .removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass("show");

    $(this)
      .parents("li.nav-item.dropdown.show")
      .on("hidden.bs.dropdown", function (e) {
        $(".dropdown-submenu .show").removeClass("show");
      });

    return false;
  });

  jQuery(window).on("load", function () {
    jQuery(".loader").fadeOut(1000);
  });
})(jQuery);
