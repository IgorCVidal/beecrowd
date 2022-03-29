var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');


a = parseInt(lines[0])
b = parseInt(lines[1])
c = parseInt(lines[2])
d = parseInt(lines[3])

if(
b>c &&
d>a &&
c+d > a+b &&
c && d >0
){
    console.log('Valores aceitos')
}
else{
    console.log('Valores nao aceitos')
}