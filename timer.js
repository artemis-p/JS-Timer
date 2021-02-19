let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds;
let displayMinutes;
let displayHours;

let timer = 0;

// function start() {
//     $(".start-button").click(function () {
//         timer = setInterval(timerHandle, 1000);
//         $(".start-button").off("click");
//     });
// }

$(".start-button").click(function () {
    timer = setInterval(timerHandle, 1000);
    $(".start-button").off("click");
});

$(".pause-button").click(function () {
    timer = clearInterval(timer);
    // timer = setInterval(timerHandle, 1000);
    // $(".pause-button").off("click");

    // add an if/else = > if the pause button is clicked then add the class paused and clearInterval, and when clicked again it should start the setInterval
});

$(".stop-button").click(function () {
    timer = clearInterval(timer);
    // timer = setInterval(timerHandle, 1000);
    $(".stop-button").off("click");
});





function timerHandle() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    timerDisplay();
    // console.log(hours + "." + minutes + "." +seconds)
}

function timerDisplay(){
    let timer = $("#timer");
    
    displaySeconds = seconds;
    
    if (seconds < 10) {
        displaySeconds = "0" + seconds;
    }
    
    displayMinutes = minutes;
    if (minutes < 10) {
        displayMinutes = "0" + minutes;
    }

    displayHours = hours;
    if (hours < 10) {
        displayHours = "0" + hours;
    }
    
    timer.text(displayHours + ":" + displayMinutes + ":" + displaySeconds);
}


