var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');



for(i=0; i<lines.length; i++) {
    if(lines[i]==2002){
        
        console.log('Acesso Permitido')
        break
    }else{
        console.log('Senha Invalida')
    }
}
    