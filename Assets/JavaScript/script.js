//global variable declarations
var now = moment().format("dddd, MMMM Do YYYY, h:mm a");
var currentHour = moment().hours();
var todaysDate = $("#currentDay").text(now);
var meetingInfo = $("#meeting-info").value;
var savedTime = {};
var savedMeeting = {};
var meetingDetails = [];

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
        savedMeeting = meetingInfo.val();
        savedTime = $(this).closest(".hour").index();
        meetingDetails = {
            savedMeeting,
            savedTime
        }
        // console.log(savedTime);
        // console.log(savedMeeting);
        localStorage.setItem(meetingDetails.savedTime, JSON.stringify(meetingDetails.savedMeeting));
        console.log(localStorage);
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
      
      var loadMeetings = function() {
        // meetingDetails = JSON.parse(localStorage.getItem("0"));
        // console.log(meetingDetails);
        // savedMeeting = localStorage.getItem("savedMeeting");
        // JSON.parse(localStorage.getItem("savedMeeting"));
        $(".time-block #9hr").text(JSON.parse(localStorage.getItem("0")));
        $(".time-block #10hr").text(JSON.parse(localStorage.getItem("1")));
        $(".time-block #11hr").text(JSON.parse(localStorage.getItem("2")));
        $(".time-block #12hr").text(JSON.parse(localStorage.getItem("3")));
        $(".time-block #13hr").text(JSON.parse(localStorage.getItem("4")));
        $(".time-block #14hr").text(JSON.parse(localStorage.getItem("5")));
        $(".time-block #15hr").text(JSON.parse(localStorage.getItem("6")));
        $(".time-block #16hr").text(JSON.parse(localStorage.getItem("7")));

      }

    //retrieve data from local storage
        // meetings = JSON.parse(localStorage.getItem("savedTime"));
        // console.log(meetings);
        //     // savedMeeting = JSON.parse(localStorage.getItem("tasks"));
        // $("#9hr .description").val(JSON.parse(localStorage.getItem("savedTime")));
        // // if nothing in localStorage, create a new object to track all task status arrays
        // if (!tasks) {
        //   tasks = {
        //     toDo: [],
        //     inProgress: [],
        //     inReview: [],
        //     done: []
        //   };
        // }
      
        // loop over object properties
        // $.each(meetings, console.log("meeting found"));
    
        // });
    //   };
      
    //add any local storage data into time blocks    

// format time block backgrounds upon page load
formatBackground();
loadMeetings();