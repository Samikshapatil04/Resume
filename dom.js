let currentCount = 1;
let bricksArray = ['<div class="brick"></div>'];
function add() {
    // process
    if (currentCount <= 12) {
        currentCount++;
        bricksArray.push('<div class="brick"></div>')
        document.getElementById("right-container").innerHTML = bricksArray;
    }
    // output
    document.getElementById("count").innerHTML = currentCount;
    document.getElementById("count").style.color = "yellow";
}

function remove() {
    // process
    if (currentCount >= 1) {
        currentCount--;
        bricksArray.pop();
        document.getElementById("right-container").innerHTML = bricksArray;
    }
    document.getElementById("count").innerHTML = currentCount;
    document.getElementById("count").style.color = "orange";
}
// document object model (dom.js)