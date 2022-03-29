var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function print(x){
    console.log(x)
}
lines.sort(function(a, b){return b - a});

if(lines[0]%lines[1] == 0){
    print('Sao Multiplos')
}else{
    print('Nao sao Multiplos')
}