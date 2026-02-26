const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const groupedByRemainder = numbers.reduce((result, num) => {
    const remainder = num % 3;
    
    if (!result[remainder]) {
        result[remainder] = [];
    }
    
    result[remainder].push(num);
    
    return result;
}, {});

console.log('Группировка по остатку от деления на 3:');
console.log(groupedByRemainder);