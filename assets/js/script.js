// Taking all the inputs and functions for the calculator

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
// Defining the specific functions of the calculator

clear() {

}

delete( ) {

}

appendNumber(){

}

/* chooseOperation decides what happens when a user clicks on the calculator buttons */
chooseOperation

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


