var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');


function bee1048(salary) {
    if (salary < 400.01){
        console.log('Novo salario:',(salary*1.15).toFixed(2))
        console.log('Reajuste ganho:',(salary*0.15).toFixed(2))
        console.log('Em percentual: 15 %')
    }else if(400.00<salary && salary<800.01) {
        console.log('Novo salario:',(salary*1.12).toFixed(2))
        console.log('Reajuste ganho:',(salary*0.12).toFixed(2))
        console.log('Em percentual: 12 %')
    }else if (800.00<salary && salary<1200.01){
        console.log('Novo salario:',(salary*1.10).toFixed(2))
        console.log('Reajuste ganho:',(salary*0.10).toFixed(2))
        console.log('Em percentual: 10 %')
    }else if(1200.00<salary && salary<2000.01){
        console.log('Novo salario:',(salary*1.07).toFixed(2))
        console.log('Reajuste ganho:',(salary*0.07).toFixed(2))
        console.log('Em percentual: 7 %')
    }else{
        console.log('Novo salario:',(salary*1.04).toFixed(2))
        console.log('Reajuste ganho:',(salary*0.04).toFixed(2))
        console.log('Em percentual: 4 %')
    }
    
}


bee1048(parseFloat(lines[0]))

// for (let index = 0; index < lines.length; index++) {
//     bee1048(parseFloat(lines[index]))
//     console.log('-----------------')
    
// }

