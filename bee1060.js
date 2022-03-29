var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var count = 0;
for (var i = 0; i < lines.length; i++){
    if (lines[i]>0) {
        count++;
    }
}

console.log(count,'valores positivos')