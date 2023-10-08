(function ($, Drupal) {
  "use strict";
  Drupal.behaviors.sam_theme = {
    attach: function () {
      $(".search-toggle").click(function () {
        console.log("clicked");
        $(".search-form-block-wrapper").toggle();
        return;
      });
      $(".search-close").click(function () {
        $(".search-form-block-wrapper").fadeOut();
        return false;
      });
      $(".views-graphs").on("click", function () {
        $(
          ".dexp-builder-tabs.dexp-builder-tabs-sterling-st2 .tab-content .tab-pane .attachment .view-mutual-funds"
        ).css("display", "block");
        $(
          ".dexp-builder-tabs.dexp-builder-tabs-sterling-st2 .tab-content .tab-pane .view-mutual-funds .view-content:first"
        ).css("display", "none");
        $(
          ".dexp-builder-tabs.dexp-builder-tabs-sterling-st2 .tab-content .tab-pane .view-mutual-funds .view-filters"
        ).css("display", "none");
        $(
          ".dexp-builder-tabs.dexp-builder-tabs-sterling-st2 .nav-tabs:first"
        ).css("display", "none");
        $(".views-graphs").css("display", "none");

        $(document).trigger("resize");
      });

      $(".views-return-tables").on("click", function () {
        $(
          ".dexp-builder-tabs.dexp-builder-tabs-sterling-st2 .tab-content .tab-pane .attachment .view-mutual-funds"
        ).css("display", "none");
        $(".views-graphs").css("display", "block");
        $(
          ".dexp-builder-tabs.dexp-builder-tabs-sterling-st2 .tab-content .tab-pane .view-mutual-funds .view-content:first"
        ).css("display", "block");
        $(
          ".dexp-builder-tabs.dexp-builder-tabs-sterling-st2 .tab-content .tab-pane .view-mutual-funds .view-filters"
        ).css("display", "block");
        $(
          ".dexp-builder-tabs.dexp-builder-tabs-sterling-st2 .nav-tabs:first"
        ).css("display", "flex");
        $(document).trigger("resize");
      });
      $(
        " .dexp-builder-tabs.dexp-builder-tabs-sterling-st1 .tab-content .tab-pane"
      )
        .once("scroll")
        .each(function () {
          $(this).ClassyScroll();
        });
      $(
        " .dexp-builder-tabs.dexp-builder-tabs-sterling-st2 .tab-content .tab-pane .view-mutual-funds .view-content"
      )
        .once("scroll")
        .each(function () {
          $(this).ClassyScroll();
        });
      var section = $(".wrapper-accodion-about .wrapper-accodion-about-inner");
      section.removeClass("col-12");

      function toggleAccordion() {
        section.removeClass("active");
        $(this).addClass("active");
        if ($(window).width() > 991) {
          $(".wrapper-accodion-about .active .block-html-accodion")
            .once("scroll")
            .each(function () {
              $(this).ClassyScroll();
            });
        }
      }
      section.on("click", toggleAccordion);
      if ($(window).width() > 575) {
        $(".team-popup-right")
          .once("scroll")
          .each(function (e) {
            $(this).ClassyScroll();
          });
      }
      jQuery(document).on("dialogopen", function (event) {
        $("body").addClass("dialog-opened");
        $(window).trigger("resize");
        $(".ui-widget-overlay")
          .once("click")
          .each(function () {
            $(this).on("click", function () {
              $("#drupal-modal").dialog("close");
            });
          });
      });
      jQuery(document).on("dialogclose", function (event) {
        $("body").removeClass("dialog-opened");
      });
      $(".popup-field-group-open-popup").one("click", function () {
        $(this).parent(".node").addClass("hs");
      });
      $("input, textarea").on("cut copy paste", function (e) {
        e.preventDefault();
      });
      // $("input").keydown(function (e) {
      //   // console.log(e);
      //   // if (e.ctrlKey == true && (e.which == "118" || e.which == "86")) {
      //   //   alert("thou. shalt. not. PASTE!");
      //   //   e.preventDefault();
      //   // }
      // });
    },
  };

  $(document).ready(function () {
    //Disable copy paste on form
    //Disable right click on page
    // $(document).on("contextmenu", function (e) {
    //   e.preventDefault();
    // });
    var hash = window.location.hash;
    if (hash === "#global-fund") {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $("#global-fund").offset().top - 250,
        },
        500
      );
    }
    if (hash === "#our-story") {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $("#section-content-top").offset().top - 150,
        },
        500
      );
    }
  });
})(jQuery, Drupal);
