var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var value = lines[0];
myList = [100,50,20,10,5,2];
console.log('NOTAS:')
myList.forEach(x => {
    v = parseInt(value/x)
    value = (value % x).toFixed(2)
    console.log(v, 'nota(s) de R$',x.toFixed(2))

});
console.log('MOEDAS:')
MList = [1,0.50,0.25,0.10,0.05,0.01]
MList.forEach(x => {
    v = parseInt(value/x)
    value = (value % x).toFixed(2)
    console.log(v, 'moeda(s) de R$',x.toFixed(2))

});