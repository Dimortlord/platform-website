$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $(".body").toggleClass("lock");
  });
});

new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  spaceBetween: 10,

  breakpoints: {
    320: {
      centeredSlides: true,
    },
    768: {
      slidesPerView: false,
    },
    1200: {
      slidesPerView: true,
    },
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

var $reviewsSlider = $(".reviews-slider");
if ($reviewsSlider.length) {
  $reviewsSlider.slick({
    accessibility: false,
    centerMode: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
}

jQuery(document).ready(function () {
  "use strict";

  //==================
  // POP-UP WINDOWS
  //==================

  var $popupOpenBtn = $(".popup__open-btn"),
    $popupCloseBtn = $(".popup__close-btn"),
    $popupWindow = $(".popup__window"),
    $body = $("body"),
    $popupName,
    $tagName,
    $popupScrollFix = $("body"),
    $scrollWidth =
      +(
        parseInt(window.innerWidth) -
        parseInt(document.documentElement.clientWidth)
      ) + "px",
    $delay,
    $lastTop;

  $(window).on("load resize", function () {
    $scrollWidth =
      +(
        parseInt(window.innerWidth) -
        parseInt(document.documentElement.clientWidth)
      ) + "px";
  });

  // OPEN POPUP
  $popupOpenBtn.on("click", function (e) {
    $tagName = $(this)[0].tagName;
    if ($tagName == "A") {
      $popupName = $(this).attr("href").replace("#", "");
    } else if ($tagName == "BUTTON") {
      $popupName = $(this).attr("value");
    }
    scrollFix($scrollWidth);
    popupOpen($("#" + $popupName));
    e.preventDefault();
  });

  function popupOpen(popupName) {
    popupClose();
    popupName.addClass("popup__open");
  }

  // CLOSE POPUP
  $popupCloseBtn.on("mouseup", function (e) {
    scrollFix(0);
    popupClose();
    e.preventDefault();
  });

  function popupClose() {
    $(".popup__open").removeClass("popup__open");
  }

  // CLICK ON MILK
  $(document).on("mousedown", function (e) {
    if ($(".popup__open").length > 0) {
      if (
        !$popupWindow.is(e.target) &&
        $popupWindow.has(e.target).length === 0
      ) {
        scrollFix(0);
        popupClose();
      }
    }
  });

  // SCROLL FIXED
  function scrollFix(sw) {
    $lastTop = $(window).scrollTop();
    if (sw == 0) {
      $delay = 200;
      setTimeout(function () {
        $body.removeClass("popup__opened");
        $popupScrollFix.css({
          paddingRight: sw,
        });
        $("html").css({
          overflowY: "visible",
        });
        $(".header").css({
          top: 0,
        });
      }, $delay);
    } else {
      $("header").css({
        top: $lastTop,
      });
      $delay = 0;
      $body.addClass("popup__opened");
      $popupScrollFix.css({
        paddingRight: sw,
      });
      $("html").css({
        overflowY: "hidden",
      });
    }
  }
});

// IF MOBILE
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  $("body").addClass("mobile");
}
