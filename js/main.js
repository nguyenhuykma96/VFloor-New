$(document).ready(function() {
  $(".menu-action i").on("click", function() {
    const menu = $(".menu-fullScreen");
    menu.toggleClass("show-menu");
    menu.hasClass("show-menu") ? menu.slideDown(300) : menu.slideUp(300);
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
});
