var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

count10 = 0;
count0ut = 0;

for (let index = 1; index < parseInt(lines[0])+1; index++) {
    if (9<parseInt(lines[index]) && parseInt(lines[index])<21) {
        count10++;
    } else {
        count0ut++;

    }
    
}

console.log(count10,'in')
console.log(count0ut,'out')