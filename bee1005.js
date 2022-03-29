var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');


var A = parseFloat(lines[0])*3.5;
var B = parseFloat(lines[1])*7.5;

MEDIA = (A+B)/(11);

console.log("MEDIA = "+ MEDIA.toFixed(5));