// Setting all the inputs and functions for the calculator that will be called

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

// Defining the specific functions of the calculator

/* Defult to an empty string(1.currentOperand 2. previousOperand 3.operation) */

clear() {
    this.currentOperand = ''
    this.perviousOperand =''
    this.operation = undefined

}

delete( ) {

}

appendNumber(number) {
    this.currentOperand = number
}

/* chooseOperation decides what happens when a user clicks on the calculator buttons */
chooseOperation(operation) {

}

compute() {

}

updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
}

}

/* Using data attributes to select the operations instead of using HTML classes to avoid confusion 
 * Easier to see what elements are being used by JS and HTML
*/

// Assign const variables to the calculator elements

const numberButtons = document.querySelectorAll('[data-number')
const operationButtons = document.querySelectorAll('[data-operation]')
// 'equals' is a single button, only need to use "querySelector"
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-allClear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


/* Define a new class name for calculator, pass the pervious and current operands in*/
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

/* eventListeners for buttons 
 * append number onto display with whatever is inside that button
 * Call calculator to update display
*/
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })