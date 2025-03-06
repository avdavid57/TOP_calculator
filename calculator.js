function operate() {

    let firstNumber;
    let operator;
    let secondNumber;
    let calculatedValue = 0;

    switch (operator) {
        case "+":
            calculatedValue = add(firstNumber, secondNumber);
            break;
        case "-":
            calculatedValue = subtract(firstNumber, secondNumber);
            break;
        case "*":
            calculatedValue = multiply(firstNumber, secondNumber);
            break;
        case "/":
            calculatedValue = divide(firstNumber, secondNumber);
            break;
    }

    console.log(calculatedValue);
};

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
};

