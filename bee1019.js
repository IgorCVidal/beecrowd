var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');


h = parseInt(lines[0]/3600);
va = parseInt(lines[0]%3600);
m = parseInt(va/60);
s = va%60;

console.log(h+':'+m+':'+s);