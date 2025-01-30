function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let displayValue = document.getElementById("display").value;
    let result;
    if (displayValue.includes("+")) {
        let numbers = displayValue.split("+");
        result = add(parseFloat(numbers[0]), parseFloat(numbers[1]));
    } else if (displayValue.includes("-")) {
        let numbers = displayValue.split("-");
        result = subtract(parseFloat(numbers[0]), parseFloat(numbers[1]));
    } else if (displayValue.includes("*")) {
        let numbers = displayValue.split("*");
        result = multiply(parseFloat(numbers[0]), parseFloat(numbers[1]));
    } else if (displayValue.includes("/")) {
        let numbers = displayValue.split("/");
        result = divide(parseFloat(numbers[0]), parseFloat(numbers[1]));
    }
    document.getElementById("display").value = result;
}
