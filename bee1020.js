var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');


h = parseInt(lines[0]/365);
va = parseInt(lines[0]%365);
m = parseInt(va/30);
s = va%30;

console.log(h,'ano(s)');
console.log(m,'mes(es)');
console.log(s,'dia(s)');
