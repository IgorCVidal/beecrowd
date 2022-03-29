var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');



function bee1051(salary) {
    if (salary <= 2000.00){
        console.log('Isento')
        
    }else if(2000.00<salary && salary<=3000.00) {
        console.log('R$',((salary-2000.00)*0.08).toFixed(2))

    }else if (3000.00<salary && salary<=4500.00){
        console.log('R$',((salary-3000.00)*0.18+80).toFixed(2))

    }else{
        console.log('R$',((salary-4500.00)*0.28+80+270).toFixed(2))

    }
    
}
bee1051(parseFloat(lines[0]))
