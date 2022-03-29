var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

price =[4.00,4.50,5.00,2.00,1.50]
a = price[parseFloat(lines[0])-1]*parseFloat(lines[1])
console.log('Total: R$',a.toFixed(2))