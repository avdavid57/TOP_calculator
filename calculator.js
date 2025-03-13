// Set variables for each number and the selected operator
let firstNumber = "";
let operator = "";
let secondNumber = "";
let isOperatorClicked = false;

// Select the buttons
const buttons = document.querySelectorAll(".calculator-button");
const screen = document.getElementById("textbox-container");

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        // check value is a number
        if (!isNaN(value) || value === ".") {
            if (isOperatorClicked) {
                secondNumber += value;
            } else {
                firstNumber += value;
            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            // check if operator is clicked and firstNumber <> ""
            if (firstNumber != "") {
                operator = value;
                isOperatorClicked = true;
            }
        } else if (value == "=") {
            // if equals is clicked
            if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
                const result = operate(parseFloat(firstNumber), operator,parseFloat(secondNumber));
                screen.textContent = result;
                firstNumber = screen.textContent;
                operator = "";
                secondNumber = "";
                isOperatorClicked = false;
                return;
            }
        } else if (value == "Clear") {
            firstNumber = "";
            secondNumber = "";
            operator = "";
            isOperatorClicked = false;
            screen.textContent = "";
            return;
        }

        screen.textContent = firstNumber + (operator ? " " + operator + " " : "") + secondNumber;
    });
});

function operate(firstNumber, operator, secondNumber) {
    let calculatedValue;
    
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
        default: calculatedValue = 0;
    }

    return calculatedValue;
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

