var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');


R = parseFloat(lines);
Rr = R * R;
n = 3.14159;
A = n * Rr;

console.log("A="+A.toFixed(4));