let intervalTimer = setInterval(timerHandle, 1000);


let seconds = 0;
let minutes = 0;
let hours = 0;
let displaySeconds;
let displayMinutes;
let displayHours;


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
console.log(hours + " . " + minutes + "." +seconds)
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


