function requestValue(query) {
    let result;
    do {
        result = Number(prompt(query));
    } while (isNaN(result) || result < 0);
    return result;
}

let aInput = requestValue('Enter a >= 0'),
    bInput = requestValue('Enter b >= 0');


let result;
let operationName;
switch (prompt('Введите операцию (+ - / *);')) {
    case '+':
        result = aInput + bInput;
        operationName = 'Сумма';
        break;
    case '-':
        result = aInput - bInput;
        operationName = 'Разность';
        break;
    case '*':
        result = aInput * bInput;
        operationName = 'Произведение';
        break;
    case '/':
        result = aInput / bInput;
        operationName = 'Частное';
        break;
    default:
        result = null;
        break;
}
if (result !== null) {
    console.log(`${operationName} чисел ${aInput} и ${bInput} = ${result}`);
} else {
    console.log('Введена неправильная операция');

}

