let [seconds, minutes, hours] = [0, 0, 0];
let timeDisplay = document.querySelector("#timeDisplay");
let timer = null;

 function stopWatch() {
    seconds++;
    if(seconds == 60) {
        seconds = 0;
        minutes++;

        if(minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    timeDisplay.textContent = `${h} : ${m} : ${s}`;
 }

 function start() {
    if(timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 200);
 }

 function pause() {
    clearInterval(timer);
 }
 function reset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    timeDisplay.innerHTML = "00 : 00 : 00";
 }