
let shouldResetDisplay = false;

function add(num1, num2) {
    let result = num1 + num2
    return result
}

function subtract(num1, num2) {
    let result = num1 - num2
    return result
}

function multiply(num1, num2) {
  let result = num1 * num2;
  return Number.isInteger(result) ? result : result.toFixed(6);
}

function divide(num1, num2) {
  if (num2 === 0) return 'Nice try 👀';
  let result = num1 / num2;
  return Number.isInteger(result) ? result : Number(result.toFixed(6));
}


// Operator logic
function operate(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (op) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case 'x': return multiply(a,b);
    case '÷': return b === 0 ? 'Nice try 👀' : divide(a, b);
    default: return '';
  }
}

const display = document.querySelector('.display');
const numButtons = document.querySelectorAll('.num');
const delBtn = document.querySelector('.del')
const clearBtn = document.querySelector('.clear')
const operators = document.querySelectorAll('.operator')

let firstNum = '';
let operator = '';

numButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (shouldResetDisplay) {
        display.textContent = '';
        shouldResetDisplay = false;
    }
    display.textContent += button.textContent;
  });
});


delBtn.addEventListener('click', () =>{
    display.textContent = display.textContent.slice(0, -1)
})

clearBtn.addEventListener('click', () => {
    display.textContent = ""
    firstNum = ''
    operator = ''
})




operators.forEach(button => {
  button.addEventListener('click', () => {
    const op = button.textContent;
    if (op === '=') {
        const secondNum = display.textContent
        const result = operate(firstNum, secondNum, operator)
        display.textContent = result
        firstNum = result
        operator = ''
        shouldResetDisplay = true;

    } else {
        if (firstNum !== '' && operator !== '') {
            const secondNum = display.textContent
            const result = operate(firstNum, secondNum, operator)
            display.textContent = result
            firstNum = result 
            operator = op
            shouldResetDisplay = true;
            

        } else {
            firstNum = display.textContent
            operator = op
            display.textContent = ''

        }

    }

  });
});