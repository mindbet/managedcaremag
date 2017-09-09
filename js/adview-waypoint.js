(function ($) {
  $(document).ready(function(){
  if ( $( "#block-block-14" ).length ) {
  var waypoint = new Waypoint({
  element: document.getElementById('block-block-14'),
  handler: function() {
      googletag.cmd.push(googletag.pubads().refresh([googletag.slots["mc_300x250_2"]]));
      waypoint.disable();
  }
})
  }
});
}(jQuery));


(function ($) {
  $(document).ready(function(){
  if ( $( "#block-mostpopular-1" ).length ) {
  var waypoint = new Waypoint({
  element: document.getElementById('block-mostpopular-1'),
  handler: function() {

//  googletag.pubads().display("/1039244/MC_300x250_3", [300, 250], "dfp-ad-mc_300x250_3");
//      googletag.slots["mc_300x250_3"] = googletag.defineSlot("/1039244/MC_300x250_3", [300, 250], "dfp-ad-mc_300x250_3").addService(googletag.pubads());
      googletag.cmd.push(googletag.pubads().refresh([googletag.slots["mc_300x250_3"]]));
      waypoint.disable();
  },
  offset: 'bottom-in-view'
})
  }
});
}(jQuery));

(function ($) {
  $(document).ready(function(){
  if ( $( "#block-views-event-calendar-block-1" ).length ) {
  var waypoint = new Waypoint({
  element: document.getElementById('block-views-event-calendar-block-1'),
  handler: function() {
      googletag.cmd.push(googletag.pubads().refresh([googletag.slots["mc_300x250_5"]]));
      waypoint.disable();
  }
})
  }
});
}(jQuery));

