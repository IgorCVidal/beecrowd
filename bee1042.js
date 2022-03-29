var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');
lines1 =[]
lines.forEach(element => {
    lines1.push(parseInt(element))
});


lines1.sort(function(a, b){return a - b});
lines1.forEach(x => {
    console.log(parseInt(x))
})
console.log('')
lines.forEach(element => {
    console.log(parseInt(element))
});
