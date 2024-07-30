/*-------------------------------- Constants --------------------------------*/
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.button.number');
const operatorButtons = document.querySelectorAll('.button.operator');
const equalsButton = document.querySelector('.button.equals');

/*-------------------------------- Variables --------------------------------*/

let currentOperation = '';
let currentNumber = '';

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
numberButtons.forEach((button) => {
    button.addEventListener('click', function() {
      currentNumber += this.textContent;
      display.textContent = currentNumber;
      console.log('Button clicked:', this.textContent);
      console.log('Current Number:', currentNumber);
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', function() {
      if (this.textContent !== 'C') {
        currentOperation = this.textContent;
        currentNumber += ' ' + currentOperation + ' ';
        console.log('Operator clicked:', this.textContent);
      } else {
        currentNumber = '';
        currentOperation = '';
        console.log('Clear button clicked');
      }
      display.textContent = currentNumber;
      console.log('Current Operation:', currentOperation);
      console.log('Current Number:', currentNumber);
    });
});

equalsButton.addEventListener('click', function() {
    try {
      display.textContent = eval(currentNumber);
      currentNumber = '';
      currentOperation = '';
      console.log('Equals button clicked');
    } catch (error) {
      display.textContent = 'Error';
      currentNumber = '';
      currentOperation = '';
      console.log('Error:', error);
    }
});
/*-------------------------------- Functions --------------------------------*/
