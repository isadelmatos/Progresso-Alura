//template strings
const nome = 'Isabela';
const idade = 2022 - 2002;
const cidadeNascimento = 'Ribeirão Pires';

// Ao invés disso:
// const apresentacao = "Meu nome é " + nome + " tenho " + idade + " anos e nasci na cidade de " + cidadeNascimento + ".";
// É muito mais fácil e melhor fazer isso:
const apresentacao = `Meu nome é ${nome}, tenho ${idade} anos e nasci na cidade de ${cidadeNascimento}.`;

console.log(apresentacao);