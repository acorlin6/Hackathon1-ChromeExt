const alarmSound = new Audio(); 
alarmSound.src = 'alarm-noise.mp3'

function setAlarm() {
    const alarmSet = Date.now(); 
    const fortyFiveMinInMili = 2700000;

setTimeout(initAlarm, fortyFiveMinInMili);

function initAlarm() {
alarmSound.play(); 
document.getElementById('alarmOptions').style.display = '';
}
function stopAlarm() {
alarmSound.pause();
alarmSound.currentTime = 0; 
};

};