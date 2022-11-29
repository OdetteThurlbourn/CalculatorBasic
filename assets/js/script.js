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
        this.perviousOperand = ''
        this.operation = undefined

    }

    /* Set the currentOperand to the currentOperand and convert to a string
     * Using the .Slice function we want to get hte very last value of the string and chop it off
     * Going from the start of the index (0) to the second to last number (-1) in sequence
    */
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    /* Convert to a string because we want the numbers appended on the display, not added.*/
    //Add if statement so '.' can only be selected once
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    /* chooseOperation decides what happens when a user clicks on the calculator buttons 
     * Effectivley setting the function to clear out the previous operand and allowing a current operand to be set
     */
    //if statement - if curentOperand is '.' then return and do not execute further into the code
    // if statement  - if string is not empty and operation is selected compute that string (update variables as needed)
    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
          this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
      }
    
    /* Create variable that will be result of compute function
     * Add parseFloat to convert string to a number
    */
   //if statement - if no user input, no code must run using OR operator
   // Using Switch statement to allow for multiple if statments on a funtion
   // else statement with 'defult' incase non of our operators were selected
   compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

/* HELPER FUNCTION - Return a number but convert it to a display number */
  getDisplayNumber(number) {
    return number
  }
    /* Display the previousOperand and after a operation has been selected, display the currentOperand
     * In conjusction with setting the chooseOperation function
     */
    // if statement - if the previousOperand is not (!=) equal to null then display the previousOperand
    // create a 'concatenation ${}'(method merges the contents of two or more strings) 
    updateDisplay() {
        this.currentOperandTextElement.innerText =
          this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
          this.previousOperandTextElement.innerText =
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
          this.previousOperandTextElement.innerText = ''
        }
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


/* eventListener for operations */
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

/* eventListener for equals button */

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

/* eventListener for allClear button */
allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })

  /* eventListener for delete button */
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })