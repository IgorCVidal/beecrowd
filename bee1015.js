var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var linesX = lines[0].split(' ');
var linesY = lines[1].split(' ');

x1 = linesX[0];
y1 = linesX[1];
x2 = linesY[0];
y2 = linesY[1];
x3 = x2-x1;
y3 = y2-y1;

px = Math.pow(x3,2);
py = Math.pow(y3,2);
xy = px + py;
result = Math.sqrt(xy);

console.log(result.toFixed(4));






