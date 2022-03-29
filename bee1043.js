var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

a = parseFloat(lines[0])
b = parseFloat(lines[1])
c = parseFloat(lines[2])


if (    a + b < c || a + c < b || b + c <= a
){
    area = (a+b)*c/2
    console.log('Area =',area.toFixed(1))}
else{
    peri = a+b+c
    console.log('Perimetro =',peri.toFixed(1))
}
