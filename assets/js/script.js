// Setting all the inputs and functions for the calculator that will be called
class Calculator {
    constructor(previousNum1, currentNum2) {
        this.previousNum1 = previousNum1;
        this.currentNum2 = currentNum2;
        this.clear();
    }

    // Defining the specific functions of the calculator
    /* Defult to an empty string(1.presentOperand 2. previousOperand 3.operation) */
    /* Code credit to: Web Dev Simplified */
    clear() {
        this.presentOperand = '';
        this.priorOperand = '';
        this.operation = undefined;
    }

    /* Set the presentOperand to the presentOperand and convert to a string
     * Using the .Slice function we want to get hte very last value of the string and chop it off
     * Going from the start of the index (0) to the second to last number (-1) in sequence
     */
    delete() {
        this.presentOperand = this.presentOperand.toString().slice(0, -1);
    }

    /* Convert to a string because we want the numbers appended on the display, not added.*/
    //Add if statement so '.' can only be selected once
    appendNumber(number) {
        if (number === '.' && this.presentOperand.includes('.')) return;
        this.presentOperand = this.presentOperand.toString() + number.toString();
    }

    /* chooseOperation decides what happens when a user clicks on the calculator buttons 
     * Effectivley setting the function to clear out the previous operand and allowing a current operand to be set
     */
    //if statement - if curentOperand is '.' then return and do not execute further into the code
    // if statement  - if string is not empty and operation is selected compute that string (update variables as needed)
    chooseOperation(operation) {
        if (this.presentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.presentOperand;
        this.presentOperand = '';
    }

    /* Create variable that will be result of compute function
     * Add parseFloat to convert string to a number
     */
    //if statement - if no user input, no code must run using OR operator
    // Using Switch statement to allow for multiple if statments on a funtion
    // else statement with 'default' incase non of our operators were selected
    /* Code credit to: Web Dev Simplified */
    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.presentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation = prev * current;
                break;
            case '??':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.presentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    /* HELPER FUNCTION - Return a number but convert it to a display number 
     *Set number to a float value (parseFloat) - value is a string and must be converted to a number first
     */
    // if statement - if float number is NaN, return empty string ''
    // if the return is a number tolocalString then return a number in a language i.e English (en).
    // Commas will be added to the number the longer it gets, becasue we have changed the number into a Float value
    /* Split number and decimal so that decimal cannot be called on its own*/
    /* Code credit to: Web Dev Simplified */
    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }
    /* Display the previousOperand and after an operation has been selected, display the presentOperand
     * In conjusction with setting the chooseOperation function
     */
    // if statement - if the previousOperand is not (!=) equal to null then display the previousOperand
    // create a 'concatenation ${}'(method merges the contents of two or more strings) 
    // Call getDisplayNumber fucntion
    /* Code credit to: Web Dev Simplified */
    updateDisplay() {
        this.currentNum2.innerText =
            this.getDisplayNumber(this.presentOperand);
        if (this.operation != null) {
            this.previousNum1.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousNum1.innerText = '';
        }
    }
}

/* Using data attributes to select the operations instead of using HTML classes to avoid confusion 
 * Easier to see what elements are being used by JS and HTML
 */

// Assign const variables to the calculator elements

const numberButtons = document.querySelectorAll('.dataNumber');
const operationButtons = document.querySelectorAll('.dataOperation');
// 'equals' is a single button, only need to use "querySelector"
const equalsButton = document.querySelector('.data-equals');
const deleteButton = document.querySelector('.data-delete');
const allClearButton = document.querySelector('.dataAllClear');
const previousNum1 = document.querySelector('.data-previous-operand');
const currentNum2 = document.querySelector('.data-current-operand');


/* Define a new class name for calculator, pass the pervious and current operands in*/
const calculator = new Calculator(previousNum1, currentNum2);

/* eventListeners for buttons 
 * append number onto display with whatever is inside that button
 * Call calculator to update display*/
/* Code credit to: Web Dev Simplified */
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});


/* eventListener for operations */
/* Code credit to: Web Dev Simplified */
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

/* eventListener for equals button */
/* Code credit to: Web Dev Simplified */
equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

/* eventListener for allClear button */
/* Code credit to: Web Dev Simplified */
allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

/* eventListener for delete button */
/* Code credit to: Web Dev Simplified */
deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});