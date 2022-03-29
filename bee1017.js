var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');



a = lines[0]*lines[1]/12
console.log(a.toFixed(3))