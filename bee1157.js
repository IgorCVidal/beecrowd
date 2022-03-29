var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

n= parseInt(lines[0])

for (let i = 0; i < n+1; i++) {
    
    if (n%i==0) {
        console.log(i)
    }
}
