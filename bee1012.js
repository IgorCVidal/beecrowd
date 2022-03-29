var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');
var lines1 = lines[0].split(' ');

A = parseFloat(lines1[0]);
B = parseFloat(lines1[1]);
C =parseFloat(lines1[2]);

TRIANGULO = A*C/2;
CIRCULO = (C*C)*3.14159;
TRAPEZIO = ((A+B)*C)/2;
QUADRADO = B*B;
RETANGULO = A*B;

console.log("TRIANGULO: "+TRIANGULO.toFixed(3));
console.log("CIRCULO: "+CIRCULO.toFixed(3));
console.log("TRAPEZIO: "+TRAPEZIO.toFixed(3));
console.log("QUADRADO: "+QUADRADO.toFixed(3));
console.log("RETANGULO: "+RETANGULO.toFixed(3));
