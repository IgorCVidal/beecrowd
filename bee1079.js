var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 1; i < parseInt(lines[0])+1; i++) {
    line = lines[i].split(' ')
    a= parseFloat(line[0]);
    b= parseFloat(line[1]);
    c= parseFloat(line[2]);
    console.log((((a*2) + (b*3) + (c*5)) / 10).toFixed(1));
    

}