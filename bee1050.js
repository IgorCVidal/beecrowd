var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

destination = ['Brasilia','Salvador','Sao Paulo','Rio de Janeiro','Juiz de Fora','Campinas','Vitoria','Belo Horizonte']

switch (parseInt(lines[0])) {
    case 61:
        console.log(destination[0])
        
        break;
    case 71:
        console.log(destination[1])

        
        break;
    case 11:
        console.log(destination[2])

        
        break;
    case 21:
        console.log(destination[3])

        
        break;
    case 32:
        console.log(destination[4])

        
        break;
    case 19:
        console.log(destination[5])

        
        break;
    case 27:
        console.log(destination[6])

        
        break;
    case 31:
        console.log(destination[7])

        
        break;        
        
    
    default:
        console.log('DDD nao cadastrado')
        break;
}