function calculate(inputValue) {
    // alert(inputValue);
    const expression = /\+|\-|\*|\//;
    const numbers = inputValue.split(expression);
    // debugger;
    const numberA = parseInt(numbers[0]);
    const numberB = parseInt(numbers[1]);
    const operation = inputValue.match(expression);
    // debugger;

    // Error Handling the non Match from the Expression
    if (Number.isNaN(numberA) || Number.isNaN(numberB) || operation === null){
        updateResult('Expression not reconigzed');
        return;
    }

    const calculator = new Calculator();
    calculator.add(numberA);

    let result;
    switch(operation[0]) {
        case '+':
            result = calculator.add(numberB);
            break;
        case '-':
            result = calculator.subtract(numberB);
            break;
        case '*':
            result = calculator.multiply(numberB);
            break;
        case '/':
            result = calculator.divide(numberB);
            break;
    
    }
    updateResult(result);
    // debugger;
}

function updateResult(result) {
    const element = document.getElementById('result');

    if (element) {
        element.innerText = result;
    }
}