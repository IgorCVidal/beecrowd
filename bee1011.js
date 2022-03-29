var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

pi = 3.14159;
A = 4/3;
B =parseFloat(lines[0]);
BBB = Math.pow(B,3);
R = A*pi*BBB
console.log("VOLUME = "+ R.toFixed(3));