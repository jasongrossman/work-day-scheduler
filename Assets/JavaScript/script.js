
//Display current date/time in Jumbotron
var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var todaysDate = $("#currentDay").text(now);
var timeBlocksCounter = 8;
var beginDay = moment().set("hour", 9).set("minute", 0);

//load calendar skeleton on page load
var loadCalendar = function() {

}

    //retrieve data from local storage

    //add any local storage data into time blocks    

// timeBlockOptions();
loadCalendar();