let sum = '+';
let multi = '*';
let sub = '-';
let divis = '/';

function calc(operator, a, b) {
    const unknOper = (operator !== sum || operator !== multi || operator !== sub || operator !== divis);
    const notValid = (!Number(a) || !Number(b) || operator === '');
    if (notValid) {
        return 'Error';
    } else if (operator === sum) {
        return a + b;
    } else if (operator === multi) {
        return a * b;
    } else if (operator === sub) {
        return a - b;
    } else if (operator === divis) {
        return a / b;
    } else  (unknOper) 
        return 'unknown operator';
    }

console.log(calc(multi, 4, 9));