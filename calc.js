const display = document.getElementById('display');
var result = false;


function appendToDisplay(input) {
    if (result) {
        display.value = "";
    }
    display.value += input;
    result = false;
}


function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "ERROR";
    }
    result = true;
}


function clearDisplay() {
    display.value = "";
}