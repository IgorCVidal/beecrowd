var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

R = lines[0]/lines[1]

console.log(R.toFixed(3),'km/l')