const cliente = {
    nome: ['Andre', 'Silva'],
    idade: 36,
    cpf: "1564459125",
    email: 'andre@gmail.com'
}

//Para cessar as propriedades de objetos podemos a notação de ponto .
// console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`);
// console.log(cliente.cpf.substring(0,3));

// ---------------------------------------------------------

//E também a notação de colchetes, declarando (ou não) uma lista como os nomes das propridades e posteriormente acessando pelo indice (se tiver mais de um elemento);
const listaChaves = ['nome', 'idade', 'cpf', 'email'];
console.log(cliente[listaChaves[0]]);
console.log(cliente[listaChaves[0]][0]);

//sem precisar declarar uma variavel
console.log(cliente['nome']);
console.log(pessoa['nome'][0]);

//para acessar e imprimir todo valores
// listaChaves.forEach(info => console.log(cliente[info]));