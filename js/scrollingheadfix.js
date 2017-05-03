(function ($) {
  Drupal.behaviors.mcmaurora = {
    attach: function (context, settings) {
window.addEventListener("hashchange", function() { scrollBy(0, -84) });
    }
  }
})(jQuery);



(function ($) {
  Drupal.behaviors.mcmaurora2 = {
    attach: function (context, settings) {
window.addEventListener("hashchange", function() { scrollBy(0, -84) });
    }
  }
})(jQuery);


(function ($) {
  Drupal.behaviors.mcmaurora3 = {
    attach: function (context, settings) {
 $(document).ready(function () {
    if (window.location.hash) {
        scrollBy(0, -84)   
    }
  })
  }
  }
})(jQuery);