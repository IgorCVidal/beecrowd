var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

value = lines[0];
myList = [100,50,20,10,5,2,1];
console.log(value)
myList.forEach(x => {
    v = parseInt(value/x)
    value = value % x
    console.log(v, 'nota(s) de R$',x+',00')
    
});



