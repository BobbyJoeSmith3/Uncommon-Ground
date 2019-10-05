var intervalId;
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            // timer = duration;

            timesUp();
            clearInterval(intervalId);
        }
    }, 1000);
}

function timesUp () {
	$( "#dialog-confirm" ).dialog({
        resizable: false,
        height: 800,
        width: 1000,
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

jQuery(function ($) {
    var tenMinutes = 60 * 10,
        display = $('#time');
    startTimer(tenMinutes, display);
});

// Bind an event to window.orientationchange that, when the device is turned,
// gets the orientation and displays it to on screen.
$( window ).on( "orientationchange", function( event ) {
  $( "#orientation" ).text( "This device is in " + event.orientation + " mode!" );
  // console.log( "This device is in " + event.orientation + " mode!" );
});

// You can also manually force this event to fire.
// $( window ).orientationchange();
