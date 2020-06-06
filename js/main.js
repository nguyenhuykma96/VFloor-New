$(document).ready(function() {
  $(".menu-action i").on("click", function() {
    const menu = $(".menu-fullScreen");
    menu.toggleClass("show-menu");
    if (menu.hasClass("show-menu")) {
      menu.slideDown(300);
      $(".icon-menu").css({ display: "none" });
      $(".icon-close-home").css({ display: "block" });
    } else {
      menu.slideUp(300);
      $(".icon-menu").css({ display: "block" });
      $(".icon-close-home").css({ display: "none" });
    }
  });

  $(".hasSubMenu .icon").on("click", function() {
    $(this).toggleClass("rotate-180");
    $(this).hasClass("rotate-180")
      ? $(".sub-menu").slideDown(250)
      : $(".sub-menu").slideUp(250);
  });

  $(".products__sort .icon").on("click", function() {
    $(this).toggleClass("rotate-180");
    $(this).hasClass("rotate-180")
      ? $(".products__sort-content").slideDown(250)
      : $(".products__sort-content").slideUp(250);
  });

  $(".filter-fullScreen .icon").on("click", function() {
    $(".fullScreen-form").addClass("show");
  });

  $(".icon-close").on("click", function() {
    $(".fullScreen-form").removeClass("show");
  });

  $(".banner").owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    items: 1,
    navText: ["<img src='./img/prev.png'>", "<img src='./img/next.png'>"]
  });

  $(".construction__content").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    items: 2,
    navText: ["<img src='./img/prev2.png'>", "<img src='./img/next2.png'>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      767: {
        items: 2,
        nav: false
      }
    }
  });

  $(".product-slider__container").slick({
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });

  $(".prev-img").click(function() {
    $(".product-slider__container").slick("slickPrev");
  });

  $(".next-img").click(function() {
    $(".product-slider__container").slick("slickNext");
  });

  $("a.summary__link").click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      750
    );
  });

  $(".summary-fullScreen__link").click(function() {
    $(".icon-close").trigger("click");
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      750
    );
  });
});
