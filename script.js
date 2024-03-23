// Constants
const a = document.querySelector("audio");
const p = document.querySelector("#target");

// Variables
let clicks = 0;

// Functions
function score() {
    a.currentTime = 0;
    a.play();

    clicks = clicks +1;
    p.innerHTML = clicks;
}