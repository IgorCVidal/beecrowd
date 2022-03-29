var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');


var A = parseInt(lines[0]);
var B = parseInt(lines[1]);
var C = parseFloat(lines[2]);

var salary = B*C;

console.log("NUMBER = "+A);
console.log("SALARY = U$ "+salary.toFixed(2));