var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');


var A = parseFloat(lines[0])*2;
var B = parseFloat(lines[1])*3;
var C = parseFloat(lines[2])*5;

MEDIA = (A+B+C)/(10);

console.log("MEDIA = "+MEDIA.toFixed(1));