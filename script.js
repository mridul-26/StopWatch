// Variables are declared to store values of second, minute and hour
let sec = 0;
let min = 0;
let hr = 0;

//Startwatch() method will start when the user Clicks on the button Start and Stops when that button is of Stop Type
// To handle the Scenario a method named trigger has been implemented.
function trigger(param) {
    console.log(param);
    if (param === 'Start') {
       interval = window.setInterval(Startwatch,1000);
       document.getElementById('StartStop').innerHTML = 'Stop'; 
    }
    else if (param === 'Stop') {
        window.clearInterval(interval);
        document.getElementById('StartStop').innerHTML = 'Start';
    }
}
// Trigger basically starts an interval which calls method StartWatch after every 1s i.e 1000ms.
// and when the Stop buttton is clicked.. this interval is stopped.
// and as the interval is only stoppped... watch doesn't change the current time values
function Startwatch() {
    sec++;
    if (sec/60 === 1) {
        sec = 0;
        min++;
    }
    if (min/60 === 1) {
        min = 0;
        hr++;
    }

    if (sec < 10) {
        let t = parseInt(sec);
        sec = '0' + t;
    }
    if (min < 10) {
        let t = parseInt(min);
        min = '0' + t;
    }
    if (hr < 10) {
        let t = parseInt(hr);
        hr = '0' + t;
    }
    document.getElementById('time').innerHTML = hr + ' : ' + min + ' : ' + sec;
}


// Reset method just assigns all the initial time values back to 0 and calls trigger 
// method for Stop and hence replacing innerHTML to Start again.
function reset() {
    sec = 0;
    min = 0;
    hr = 0;
    trigger('Stop');
    document.getElementById('time').innerHTML = '00 : 00 : 00';
}
