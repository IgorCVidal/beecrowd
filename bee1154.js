var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

count = 0;
sum = 0;
n = 0;
while (lines[n]) {

    if(lines[n] >=0){
        count++;
        sum +=parseInt(lines[n]);
    }else{
        console.log((sum/n).toFixed(2))
        break;
    }
    n++
}