var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var countpar = 0;
var countimp = 0;
var countpos = 0;
var countn = 0;

for (var i = 0; i < 5; i++){
    ii = parseInt(lines[i])
    if (ii%2==0) {
        countpar++;
    } else {
        countimp++;
    }
    if (ii>0) {
        countpos++;
        
    } else if(ii<0) {
        countn++;
    }
}
console.log(countpar+' valor(es) par(es)')
console.log(countimp+' valor(es) impar(es)')
console.log(countpos+' valor(es) positivo(s)')
console.log(countn+' valor(es) negativo(s)')

