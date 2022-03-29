var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');
var lines1 = lines[0].split(' ');


lines1.sort(function(a, b){return b - a});


console.log(lines1[0],'eh o maior');