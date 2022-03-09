// tipos primitivos
//tipo number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero * segundoNumero;
console.log(operacaoMatematica);


// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

console.log(segundoNumero/pontoFlutuanteSemZero);


// NaN ou Not a Number (não é um número)
// ps: a operação de um numero + texto não dá NaN pois o js concatena (junta) os dois

const meuTexto = "Alura";
console.log (primeiroNumero - meuTexto);