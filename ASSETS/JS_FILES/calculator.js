let total = 0;
let action = 0;
let displayString = "";

function numberType(passnumber) {
  displayString += passnumber.toString();
  document.getElementById("display").innerHTML = displayString;
}

function clearFunction() {
  total = 0;
  displayString = "";
  document.getElementById("display").innerHTML = "";
}

function add() {
  total = Number(displayString);
  displayString = "";
  action = 1;
  document.getElementById("display").innerHTML = displayString;
}

function divi() {
  total = Number(displayString);
  action = 2;
  displayString = "";
  document.getElementById("display").innerHTML = displayString;
}

function mul() {
  total = Number(displayString);
  action = 3;
  displayString = "";
  document.getElementById("display").innerHTML = displayString;
}

function minus() {
  total = Number(displayString);
  action = 4;
  displayString = "";
  document.getElementById("display").innerHTML = displayString;
}

function backspace() {
  displayString = displayString.substring(0, displayString.length - 1);
  document.getElementById("display").innerHTML = displayString;
}

function showresult() {
  if (action == 1) {
    total += Number(displayString);
  } else if (action == 2) {
    total /= Number(displayString);
  } else if (action == 3) {
    total *= Number(displayString);
  } else if (action == 4) {
    total -= Number(displayString);
  }

  displayString = total;
  document.getElementById("display").innerHTML = displayString;
}
