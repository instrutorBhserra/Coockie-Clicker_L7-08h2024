// Constants
const p = document.getElementById("target");

// Variables
let clicks = 0;

// Functions
function score() {
    clicks = clicks +1;
    p.innerHTML = clicks;
}