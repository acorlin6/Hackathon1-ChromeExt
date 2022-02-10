
let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

let minutes = 45;
let seconds = 0;

let clock;

let start = document.getElementById("start-button");
start.addEventListener('click', ()=> {
    document.getElementById('minute').innerText = 12;
    startTimer();
});
let pause = document.getElementById("pause-button");
pause.addEventListener('click', ()=> {
    pauseTimer();
});
let reset = document.getElementById("reset-button");
reset.addEventListener('click', ()=> {
    resetTimer();
});

function startTimer(){
   pauseTimer();
    clock = setInterval(timer(), 1000);
}
// function pauseTimer(){
//     clearInterval(clock);
// }
function resetTimer(){
    minutes = 45;
    seconds = 0;
}
function timer(){
    if(seconds === 0){
        seconds = 59;
        minutes--;
    }
    seconds--;
    if(seconds < 10){
       document.getElementById('second').innerText =`0${seconds}`
    }
    document.getElementById('minute').innerText = `${minutes}`;
    document.getElementyById('second').innerText = `${seconds}`;
}
// const modal = document.getElementById("myModal");

// const modalContainer = document.createElement('div');
// modalContainer.style.position = "fixed";
// modalContainer.style.height = "100px";
// modalContainer.style.width = "200px";
// modalContainer.style.top = "0px";
// modalContainer.style.right = "0px";
// modalContainer.style.border = "2px solid black";
// modalContainer.style.backgroundColor = "white";
// document.body.appendChild(modalContainer);

// // button functionality / eventlistener 
// const button = document.getElementById("start-button");
// button.addEventListener('onclick',()=> {
//     // 
//     // create alarmInfo object
//     const alarmInfo = {delayInMinutes: 45, periodInMinutes: 15}; 
//     // create alarm 
//     browser.alarms.create("45minAlarm", alarmInfo)

// });