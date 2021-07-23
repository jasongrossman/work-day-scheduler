var now = moment().format("dddd, MMMM Do YYYY, h:mm a");
var currentHour = moment().hours();
var todaysDate = $("#currentDay").text(now);
var meetingInfo = $("#meeting-info").value;


    //load meeting information from local storage and populate into time blocks

    //add event listener to open form text input for adding meeting info
    $(".description").on("click", function() {
        var text = $(this)
        .text()
        .trim();

        meetingInfo = $("<textarea>")
        .val(text)
        .addClass("time-block")
        console.log("you tried to put in meeting info");

        //put meetingInfo value into the textarea element
        $(this).replaceWith(meetingInfo);
        meetingInfo.trigger("focus");
    });

    //add event listener, which starts function to save meeting, adding meeting info to local storage
    $(".saveBtn").on("click", function() {
        var savedMeeting = meetingInfo.val();
        var savedTime = $(this).closest(".hour").index();
        console.log("you tried to save your meeting");
        console.log(savedTime);
        console.log(savedMeeting);
        localStorage.setItem(savedMeeting, savedTime);
    });

    //conditionally format time blocks based on whether they are in the past present or future
      var formatBackground = function() {

          //selects each time block text area and converts it's id to an integer for comparison against current time
          $(".description").each(function() {
            var checkTime = parseInt($(this).attr("id"));

            //converts current time into integer to compare against time block
            currentHour = parseInt(currentHour);

            //if statement compares current time against time block and formats based on past future or present
            if (currentHour > checkTime) {
                $(this).addClass("past");
            } else if (currentHour < checkTime) {
                $(this).addClass("future");
            } else if (currentHour = checkTime) {
                $(this).addClass("present");
            }
          });
      }
    

    //retrieve data from local storage

    //add any local storage data into time blocks    

// format time block backgrounds upon page load
formatBackground();
