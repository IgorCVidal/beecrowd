var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');


line1 = lines[0].split(' ');
line2 = lines[1].split(' ');

Atotal = line1[1]*line1[2];

Btotal = line2[1]*line2[2];
total = Btotal+Atotal;
console.log('VALOR A PAGAR: R$', total.toFixed(2));