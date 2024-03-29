var intervalId;
var coverRemoved = false;
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timesUp();
            clearInterval(intervalId);
        }
    }, 1000);
}

function timesUp () {
    var height = $(window).height();
    console.log(height);
    var newHeight = height * 0.90;
    console.log(newHeight);
	$( "#dialog-confirm" ).dialog({
        resizable: false,
        height: newHeight, //800
        width: "90vw", //1000
        modal: true,
        buttons: {
            "Reclaim Time": function() {
                $( this ).dialog( "close" );
                $("#time").fadeOut(800);
            }
        },
        classes: {
            "ui-dialog" : "dialogue"
        },
        show: {
            effect: "bounce"
        }
    });

}

// jQuery(function ($) {
//     var tenMinutes = 60 * 10,
//         display = $('#time');
//     startTimer(tenMinutes, display);
// });

// Bind an event to window.orientationchange that, when the device is turned,
// gets the orientation and displays it to on screen.
$( window ).on( "orientationchange", function( event ) {
    // For presentation mode
    // if (event.orientation == "portrait" && coverRemoved == false) {
    //   $( ".cover" ).fadeOut(400);
    //   coverRemoved = true;
    //   var tenMinutes = 60 * 10,
    //       display = $('#time');
    //   startTimer(tenMinutes, display);
    // }
    if (coverRemoved == false) {
      $( ".cover" ).fadeOut(400);
      coverRemoved = true;
      var tenMinutes = 60 * 10,
          display = $('#time');
      startTimer(tenMinutes, display);
    }
});

// You can also manually force this event to fire.
function fire() {
    $( window ).orientationchange();
}


// Hide the loading message
$.mobile.autoInitializePage = false;
