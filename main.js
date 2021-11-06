/*let sum = '+';
let multi = '*';
let sub = '-';
let divis = '/';

function calc(operator, a, b) {
    const unknOper = (operator !== sum || operator !== multi || operator !== sub || operator !== divis);
    const notValid = (!Number(a) || !Number(b) || operator === '');
    if (notValid) {
        return 'Error';
    };
    switch (operator) {
        case sum:
            return a + b;
        case multi:
            return a * b;
        case sub:
            return a - b;
        case divis:
            return a / b;
    }
    if (unknOper)
        return 'unknown operator';
}




console.log(calc(multi, 4, 9));
*/
