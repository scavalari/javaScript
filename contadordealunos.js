const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('Quantidade de alunos presentes: ', (quantidade) => {

    console.log(`Presentes em sala: ${quantidade}`);
    rl.close();
});

const alunos = [1,2,3,4,5,6,7,8,9,10]

for (let valor = 0; valor < alunos.length; valor ++){
    const atual = alunos[valor];

    if(atual.length/2 == 0){
        console.log(atual + "Par")
    } 
    else{
        console.log (atual + 'Impar')
    }}