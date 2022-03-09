//variáveis

//var
//declarar = criar a variável; inicializar = dar valor a variável.
// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);
// var area;


//let
// let altura = 5;
// let comprimento = 7;

// altura = 4; //permitido a redeclaração desta forma

// let area; //permitido, daria erro "Reference Error" se viesse depois, pois precisa da declaração antes da inicialização
// area = altura * comprimento;
// console.log(area);


// const
const FORMA = 'triângulo';
const ALTURA = 5;
const COMPRIMENTO = 7;
let area; //como o valor da area varia, a boa prática é manter como let e declara-la deessa forma

if (FORMA === 'quadrado') {
    area = ALTURA * COMPRIMENTO;
} else {
    area = (ALTURA * COMPRIMENTO) / 2;
}

console.log(area);

// console.log(FORMAGEOMETRICA); //Reference Error - Quando a constante é acessada antes da declaração
// const FORMAGEOMETRICA = "Triângulo";

// const FORMAGEOMETRICA;
// FORMAGEOMETRICA = "Triângulo";
// console.log(FORMAGEOMETRICA); //Syntax Error - Quando a constante é declarada e inicializada separadamente ou inicializada antes de declarar 