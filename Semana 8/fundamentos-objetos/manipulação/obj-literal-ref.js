// Objeto literal e referencia - obj literal é criado com a notação literal, ou seja, lista de chaves com o nome/chave e seu valor tudo atribuido a uma variável. Um objeto literal sempre aponta para um mesmo local na memória, mesmo se for criado cópias dele 
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }

// const objPersonagem2 = objPersonagem; //aqui a referência dos dois é a mesma

// objPersonagem2.nome = 'Gandalf, o Cinzento'; //mesmo mudando a propriedade de um dos objetos os dois vão mudar pois a referência é a mesma

// console.log(objPersonagem);
// console.log(objPersonagem2);

// -----------------------------------------
// o metódo Object.create()contorna esse comportamento

const objPersonagem2 = Object.create(objPersonagem);

objPersonagem2.nome = 'Gandalf, o Cinzento';

console.log(objPersonagem.nome);
console.log(objPersonagem2.nome);