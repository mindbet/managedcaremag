(function ($) {
    //add drupal 7 code
    Drupal.behaviors.myfunction = {
        attach: function(context, settings) {
//end drupal calls
$('tr').each( function () {
   $(this).children('td:gt(0)').filter(function() {
         return this.innerHTML.match(/^[0-9\s\.,\$\-%±\–\(\)]+$/);
   }).css('text-align','right')
});
  }}})
(jQuery);
