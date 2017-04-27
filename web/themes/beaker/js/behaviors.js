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
        console.log('clicked');

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




})(jQuery);
