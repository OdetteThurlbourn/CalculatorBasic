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


