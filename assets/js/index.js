;(function () {

  function parseDateTime(dateString, timeString) {
    var year, month, day, hours, minutes;
    [year, month, day] = dateString.split("-");
    [hours, minutes] = timeString.split(":")

    return new Date(year, (month -1), day, hours, minutes)
  }

  'use strict';

  var meetupPastEvents = "https://api.meetup.com/civictechwr/events?photo-host=public&page=3&desc=true&status=past"
  var maxDescriptionLength = 100;

  $.ajax({
    url: meetupPastEvents,
    dataType: 'JSONP',
    type: 'GET',
    success: function(res) {
      $.each(res.data, function(index, event={}) {
          var regex = new RegExp('^(.*?)<\/p>', 'gm')
          var truncatedDescription = regex.exec(event.description)[0]
          var date = new Date(event.local_date)
          var dateString = date.toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
          var elId = "#past-event-" + (index + 1 );

          $(elId).find("a").attr("href", event.link);
          $(elId).find("h3").text(event.name);
          $(elId).find(".date").text(dateString)
          $(elId).find(".description").html(truncatedDescription + "<p><a href='"+ event.link +"'>Keep reading</a></p>")
      })
    }
  });

  var meetupNextEvent = "https://api.meetup.com/civictechwr/events?photo-host=public&page=1&status=upcoming"

  $.ajax({
    url: meetupNextEvent,
    dataType: 'JSONP',
    type: 'GET',
    success: function(res) {
      console.log(res);
      if (res.data.length > 0) {
        var nextEvent = res.data[0];
        var date = parseDateTime(nextEvent.local_date, nextEvent.local_time)
        var dateString = date.toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour12: true, hour: 'numeric', minute: "numeric" })
        var elId = "#next-event";
        var venue = nextEvent.venue ? nextEvent.venue.name : "Venue TBD"

        $(elId).find("h3").text(nextEvent.name);
        $(elId).find(".meeting-date").text(dateString)
        $(elId).find(".venue").text(venue)
        $(elId).find(".link").html("<a class='btn btn-default' href='"+ nextEvent.link +"'>More details + RSVP</a>")
      }
    }
  });

}());
