(function ($) {
  /**
  * Get CSS Breakpoints
  * Usage: window.breakpoint gives you the actual breakpoint
  * E.g.: if(window.breakpoint == 'mobile') { Your Code }
  */
  Drupal.behaviors.getBreakpointsFromCSS = {
    attach: function(context, settings) {
      var breakpoint;
      var breakpoint_refreshValue;
      breakpoint_refreshValue = function () {
        window.breakpoint = window.getComputedStyle(document.querySelector('html'), ':before').getPropertyValue('content').replace(/\"/g, '');
      };

      $(window).resize(function () {
        breakpoint_refreshValue();
      }).resize();
    }
  };

  // This is just a template
  // Drupal.behaviors.somecustomModule = {
  //   attach: function(context, settings) {

  //   }
  // };


  Drupal.behaviors.expandHamburger = {
    attach: function(context, settings) {

      $('.sf-accordion-toggle a').click(function() {

        $(this).toggleClass('sf-expanded');
        $('.h-wrapper').toggleClass('opemMenu');

      });

    }
  };

  /*
  * Window Scroll event
  * - On scroll, decrease size of the logo
  */
  Drupal.behaviors.stickyHeader = {
    attach: function (context, settings) {

      $(window).on('scroll touchmove', function () {
        $('.header').toggleClass('slim-header', $(document).scrollTop() > $('header').outerHeight());
      });

    }
  };

  /*
  * - On Scroll, remove the opened menu
  */
  Drupal.behaviors.scrollCloseElements = {
    attach: function (context, settings) {

      checkOrientationMenu = function () {
        $('.region-header-right .h-wrapper').removeClass('opemMenu');
        $('.sf-accordion-toggle a').removeClass('sf-expanded');
      }

      $(window).scroll(function () {
        checkOrientationMenu();
      });
    }
  };


  /*
  * - On Scroll, slowly Fadein paragrapgh content
  */
  Drupal.behaviors.scrollInContent = {
    attach: function (context, settings) {


    }
  };


  /*
  * - Video Overlays (site wide)
  */
  Drupal.behaviors.videoOverlays = {
    attach: function (context, settings) {

      $('.paragraph--type--video', context).each(function (index, item) {

        var $this = $(this),
            $button = $this.find('a'),
            $overlay = $this.find('.js-video-overlay'),
            $iframesrc = $this.find('.field--name-field-video iframe').attr('src');
            $iframesrc = $iframesrc.replace("autoplay=0", "autoplay=1");

        // popup code for youtube videos
        $button.magnificPopup({
          items: {
            src: ''
          },
          type: 'iframe',
          iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<div class="mfp-title">Some caption</div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '</div>'
          },
          callbacks: {
            markupParse: function (template, values, item) {
              values.title = $overlay.find('h2').text();
            },
            open: function () {
              $(this.content).find('iframe').attr('src', $iframesrc);
              dataLayer.push(
                {'event': 'youtubeStarted'}
              );
            }
          }
        });


      });
    }
  };


  /*
  * - Main Gallery Images (News & Events)
  */
  Drupal.behaviors.mainGalleryCarousels = {
    attach: function (context, settings) {

      $('.node--type-events .field-gallery',context).owlCarousel({
          loop: true,
          nav: true,
          items: 1,
          animateOut: 'fadeOut',
          addClassActive: true
      });

      $('.node--type-article .field-gallery',context).owlCarousel({
          loop: true,
          nav: true,
          items: 1,
          animateOut: 'fadeOut',
          addClassActive: true
      });
    }
  };


})(jQuery);
