//SISTEMA DE CADASTRO DE PEÇAS
// AULA JS // STEPHANIE FERREIRA

const pecas = ['Farol', 'Lanterna', 'Cambio', 'Volante', 'Pedal', 'Lampada', 'Freio', 'Som']

console.log('Quantidade de peças por caixa')

if(pecas.length <= 10){
    console.log('Quantidade de peças permitida')
} 
else{'Quantidade de peças ultrapassa o limite'};


console.log('Quantidade de caracteres')

for (let caracteres = 0; caracteres < pecas.length; caracteres ++){
    const atual = pecas[caracteres];
    if (atual.length <3) {
        console.log(atual + 'O nome da peça é inferior a 3 caracteres e não pode ser cadastrada')
    }
    else{
        console.log(atual + 'A peça será cadastrada')
    }
}

console.log('Peso por peça')

    const peso = 150;

    if (peso >= 100){
        console.log('O peso é adequado para o cadastro')
    }
    else {
        console.log('O peso é inferior ao permitido')
    }
    

