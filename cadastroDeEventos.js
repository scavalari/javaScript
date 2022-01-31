var nome = 'Luiza'
var idade = 21
var dataDoEvento = '23/09/2021'
var dataAtual = '16/09/2021'
var quantidade = 5
const participantes = ['Laura', ' Antonio', ' Carlos', ' Thais']

console.log('Cadastro de Eventos')
console.log('')
console.log('Data atual: ' + dataAtual)
console.log('')
console.log('A data do evento é: ' + dataDoEvento)

if( dataDoEvento == dataAtual){
    console.log('Não é possivel realizar o cadastro')
    console.log('Consulte a data do evento e tente novamente')
}else{
    console.log('Cadastro em andamento')
}

console.log('Nome do Participante: ' + nome + ', e sua idade é: ' + idade + ' anos' )
if(idade >= 18){
    console.log('Idade permitida')
    console.log('Cadastro em andamento!')
}else{
    console.log('Idade não permitida, cadastro não realizado')
}
console.log('')
console.log('Lista de Participantes')
console.log('')
console.log('' + participantes)
console.log('Quantidade de Participantes ' + quantidade)
console.log('')

if(quantidade > 100){
    console.log('Cadastro não realizado')
    console.log('Quantidade máxima de participantes é 100')
}else{
    console.log('Cadastro realizado com sucesso!')
}
