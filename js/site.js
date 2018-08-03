'use strict';
!function($) {
  /**
   * @return {undefined}
   */
  function initiateLayout() {
    $pContent.css("height", $(window).height());
  }
  $(window).on("load", function() {
    $(".loader-inner").fadeOut();
    $(".loader").delay(200).fadeOut("slow");
  });
  $("a.scroll").smoothScroll({
    speed : 800,
    offset : -60
  });
  var $e = $(".header");
  var itemCSS = $e.offset();
  var formsearch = $(".block-top");
  $(window).scroll(function() {
    if ($(this).scrollTop() > itemCSS.top + 500 && $e.hasClass("default")) {
      $e.fadeOut("fast", function() {
        $(this).removeClass("default").addClass("switched-header").fadeIn(200);
        formsearch.addClass("active");
      });
    } else {
      if ($(this).scrollTop() <= itemCSS.top + 500 && $e.hasClass("switched-header")) {
        $e.fadeOut("fast", function() {
          $(this).removeClass("switched-header").addClass("default").fadeIn(100);
          formsearch.removeClass("active");
        });
      }
    }
  });
  var $pContent = $(" .hero .main-slider .slides li");
  $(function() {
    initiateLayout();
  });
  $(window).resize(function() {
    initiateLayout();
  });
  $(".main-slider").flexslider({
    animation : "fade",
    slideshow : true,
    directionNav : false,
    controlNav : true,
    pauseOnAction : false,
    animationSpeed : 1e3
  });
  $(".review-slider").flexslider({
    animation : "slide",
    slideshow : true,
    directionNav : true,
    controlNav : false,
    pauseOnAction : false,
    animationSpeed : 500
  });
  var rotateBtn = $(".mobile-but");
  var section = $(".main-nav ul");
  section.height();
  $(rotateBtn).on("click", function() {
    return $(".toggle-mobile-but").toggleClass("active"), section.slideToggle(), $(".main-nav li a").addClass("mobile"), false;
  });
  $(window).resize(function() {
    if ($(window).width() > 320 && section.is(":hidden")) {
      section.removeAttr("style");
      $(".main-nav li a").removeClass("mobile");
    }
  });
  $(".main-nav li a").on("click", function() {
    if ($(this).hasClass("mobile")) {
      section.slideToggle();
      $(".toggle-mobile-but").toggleClass("active");
    }
  });
  $(".background-img").each(function() {
    var srcAngle = $(this).children("img").attr("src");
    $(this).css("background-image", 'url("' + srcAngle + '")').css("background-position", "initial");
  });
  var dataObject = {
    id : "1173073806",
    domId : "tweets",
    maxTweets : 3,
    showRetweet : false,
    showImages : false,
    showUser : true,
    showTime : true,
    customCallback : function(response) {
      var msize = response.length;
      /** @type {number} */
      var i = 0;
      var gallery = $(".tweets");
      var slides = $("<ul>").addClass("slides");
      for (; i < msize;) {
        var object = $("<li>");
        object.html(response[i]);
        slides.append(object);
        i++;
      }
      return gallery.html(slides), $(".tweets").flexslider({
        animation : "slide",
        controlNav : true,
        directionNav : false
      }), slides;
    }
  };
  $(".block-tabs li").on("click", function() {
    if (!$(this).hasClass("active")) {
      var i = $(this).index() + 1;
      $(".block-tabs li.active").removeClass("active");
      $(this).addClass("active");
      $(".block-tab li.active").removeClass("active");
      $(".block-tab li:nth-child(" + i + ")").addClass("active");
    }
  });
  var d = $(".album");
  $(".popup-image").magnificPopup({
    type : "image",
    fixedContentPos : false,
    fixedBgPos : false,
    mainClass : "mfp-no-margins mfp-with-zoom",
    image : {
      verticalFit : true
    },
    zoom : {
      enabled : true,
      duration : 300
    }
  });
  $(".popup-youtube, .popup-vimeo").magnificPopup({
    disableOn : 700,
    type : "iframe",
    mainClass : "mfp-fade",
    removalDelay : 160,
    preloader : false,
    fixedContentPos : false
  });
  var $this = $(".main-nav li span.search-ico");
  var self = {
    container : $(".block-search-form"),
    config : {
      effect : "slideToggle",
      speed : "300"
    },
    init : function(i) {
      $.extend(this.config, i);
      $this.on("click", this.show);
    },
    show : function() {
      var a = self;
      var pane = a.container;
      var result = a.config;
      if (pane.is(":hidden")) {
        self.close.call(pane);
        self.container[result.effect](result.speed);
      }
    },
    close : function() {
      var element = $(this);
      if (!element.find("span.search-close").length) {
        /**
         * @param {?} event
         * @return {undefined}
         */
        document.onkeydown = function(event) {
          if (27 == (event = event || window.event).keyCode) {
            element[self.config.effect](self.config.effect.speed);
          }
        };
        $("<span class=close-search></span>").prependTo(element).on("click", function() {
          element[self.config.effect](self.config.effect.speed);
        });
      }
    }
  };
  self.init({
    effect : "fadeToggle",
    speed : "300"
  });
}(jQuery);
