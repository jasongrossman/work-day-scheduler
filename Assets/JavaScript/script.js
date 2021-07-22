
//Display current date/time in Jumbotron
var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var todaysDate = $("#currentDay").text(now);
var meetingInfo = $("#meeting-info").value

    //add event listener to open form text input for adding meeting info
    $(".meeting-info").on("click", function() {
        var text = $(this)
        .text()
        .trim();

        var meetingInfo = $("<textarea>")
        .addClass("textarea description")
        .val(text);

        console.log("you tried to put in meeting info");
        $(this).replaceWith(meetingInfo);
        meetingInfo.trigger("focus");
    });

    //retrieve data from local storage

    //add any local storage data into time blocks    

// timeBlockOptions();
