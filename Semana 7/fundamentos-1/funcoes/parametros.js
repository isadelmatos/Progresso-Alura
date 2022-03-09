// parâmetros de função

            //parâmetros
function soma(numero1, numero2) {
    return numero1 + numero2
}
                //argumentos
console.log(soma(1, 2));


//ordem dos parametros
function mostraNomeIdade (nome, idade) {
   return `Meu nome é ${nome} e tenho ${idade} anos.`;
}
console.log(mostraNomeIdade(19, 'Isabela'));


//parametro padrao
function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}
console.log(multiplica(soma(4, 5)));
