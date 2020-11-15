var greeting = document.getElementById('greet');
var date = document.getElementById('date');
var clock = document.getElementById('clock');
const name = document.getElementById('Name');

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

function updateTime() {
    var time = new Date();
    var hours = time.getHours();
    var min = time.getMinutes();
    var seconds = time.getSeconds();
    var AmPm = hours > 12 ? 'PM' : 'AM';
    var hour = hours % 12 || 12;
    var today = time.toDateString();
    clock.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(seconds)}${AmPm}`;
    date.innerHTML = `${today}`;
    if (hours >= 20) {
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        clock.style.color = "white";
        greeting.style.color = "white";
        greeting.innerHTML = 'GOOD NIGHT';
    } else if (hours >= 16 && hours < 20) {
        document.body.style.backgroundImage = "url('../img/evening.jpg')";
        clock.style.color = "black";
        greeting.innerHTML = 'GOOD EVENING';
    } else if (hours >= 12 && hours < 16) {
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        clock.style.color = "black";
        greeting.style.color = "white";
        greeting.innerHTML = 'GOOD AFTERNOON';
    } else {
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        clock.style.color = "black";
        greeting.style.color = "black";
        greeting.innerHTML = 'GOOD MORNING';
    }
    setTimeout(updateTime, 1000);
}
updateTime();
getName();

function addZero(n) {
    return parseInt(n) < 10 ? '0' + n : n;
};

function setName(e) {
    if (e.type === 'keypress') {
        if (e.keyCode === 13) {
            localStorage.setItem("name", e.target.innerHTML);
            name.blur();
        }
    } else {
        localStorage.setItem("name", e.target.innerHTML);
    }
};

function getName() {
    if (localStorage.getItem('name') === null) {
        name.innerHTML = 'prince rathore';
    } else {
        name.innerHTML = localStorage.getItem('name');
    }
}