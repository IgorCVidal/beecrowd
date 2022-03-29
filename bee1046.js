var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

var hInicial = parseInt(lines[0]);
var hFinal = parseInt(lines[1]);
if (hInicial > hFinal) { 
    console.log('O JOGO DUROU ' + (24 - (hInicial - hFinal)) + ' HORA(S)');
} else if (hFinal > hInicial) {
    console.log('O JOGO DUROU ' + (hFinal - hInicial) + ' HORA(S)');
} else {
   console.log('O JOGO DUROU 24 HORA(S)');
}