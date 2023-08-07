let [seconds, minutes, hours] = [0, 0, 0]
let displayTime = document.querySelector('#time');
let timer = null;
const hiitMood = document.querySelector(".hiit");
const tabataMood = document.querySelector(".tabata");
const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('#reset-mood');

function changeMood(mood) {

    for (let i = 0; i < boxes.length; i++) {

        let imageSource = '';
        if (mood === 'hiit') {
            let hiitImage = "hiit" + (i + 1) + '.png'; // Generate the yoga image filename (e.g., yoga1.jpeg, yoga2.jpeg, ...)
            imageSource = "images/" + hiitImage;

        } else {
            let tabataImage = "tabata" + (i + 1) + '.png'; // Generate the yoga image filename (e.g., yoga1.jpeg, yoga2.jpeg, ...)
            imageSource = "images/" + tabataImage;

        }
        boxes[i].style.backgroundImage = `url(${imageSource})`;
        boxes[i].style.backgroundSize = 'cover';
        boxes[i].style.backgroundPosition = 'center';
        boxes[i].style.backgroundRepeat = 'no-repeat';
        boxes[i].style.minheight = 'auto';
    }

}

function resetMood() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundImage = 'none';
    }

}

hiitMood.addEventListener('click', () => {
    changeMood('hiit');
});
tabataMood.addEventListener('click', () => {
    changeMood('tabata');
})
resetBtn.addEventListener('click', () => {
    resetMood()
})

// Stop Watch 
function stopWatch(params) {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++
        if (minutes == 60) {
            minutes = 0
            hours++;
        }
    }
    let hr = hours < 10 ? "0" + hours : hours;
    let ms = minutes < 10 ? "0" + minutes : minutes;
    let sc = seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML = `${hr}:${ms}:${sc}`;

}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    stopWatch();
    timer = setInterval(stopWatch, 1000);
}

function watchStop() {
    clearInterval(timer);

}

function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";

}