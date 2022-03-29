var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');


var A = (lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);

var salary = B+C*0.15;

console.log("TOTAL = R$ "+salary.toFixed(2));