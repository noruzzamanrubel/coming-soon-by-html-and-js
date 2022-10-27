(function ($) {
  "use strict";
  $(document).ready(function () {
    var now = new Date('2022-11-31');
    var day = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();
  

    var nextyear = month + "/" + day + "/" + year + " 00:00:00";
    

    $("#count").countdown({
      date: nextyear, // TODO Date format: 07/27/2017 17:00:00
      offset: +2, // TODO Your Timezone Offset
      day: "Day",
      days: "Day(s)",
      hour: "Hour",
      hours: "Hour(s)",
      minute: "Minute",
      minutes: "Minute(s)",
      second: "Second",
      seconds: "Second(s)",
      hideOnComplete: true,
    });
  });
})(jQuery);
