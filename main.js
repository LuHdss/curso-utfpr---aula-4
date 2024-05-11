// Math.random( ) - retorna um número pseudo-aleatório entre 0 e 1.
let numeroAleatorio;
numeroAleatorio = Math.floor(Math.random() * 10); // usando a função Math.floor para arredondamento
console.log(`numeroAleatorio: ${numeroAleatorio}`)

// Math.floor( ) - retorna o maior inteiro que é menor ou igual a um número.
let numeroPiso;
numeroPiso = Math.floor(3.15);
console.log(`numeroPiso: ${numeroPiso}`)

// Objeto Date - consiste em funções prontas que podem ser utilizadas para manipular o tempo
const  dataInicial = new Date();
console.log(dataInicial);
console.log(dataInicial.getHours());
console.log(dataInicial.getMonth());

// Utilizando o Objeto Date para criar um relogio (sem atualização automatica)
const dataAtual = new Date ();
const horas = dataAtual.getHours();
const minutos = dataAtual.getMinutes();
const segundos = dataAtual.getSeconds();
console.log(`${horas}:${minutos}:${segundos}`);

// Utilizando o Objeto Date para criar um relogio (com atualização automatica)
function atualizaRelogio () {
    const dataAtual = new Date ();
    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();

    console.log(`${horas}:${minutos}:${segundos}`);
}

atualizaRelogio();

const relogio = setInterval( function () {
    atualizaRelogio ();
}, 1000);

// Utilizando o seTimeout para o relogio funcionar por um tempo pré-determinado em milisegundos
setTimeout (function () {
    clearInterval(relogio);
}, 10000);

// adiciona zero no segundos abaixo de 10 segundos
function adicionaZero (numero) {
    if (numero < 10) {
        numero = "0" + numero;
    }

    return numero;

}