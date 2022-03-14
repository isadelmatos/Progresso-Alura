// JSON é um acrônimo de JavaScript Object Notation, é uma estrutura de dados utilizada para fazer a transferência de dados entre cliente e servidor


//os dois metódos nativos para converter objetos js para json são stringify e parse
const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
});

const objLivro = JSON.parse(jsonLivro);

console.log(jsonLivro);
console.log(objLivro);

//O processo de converter estruturas de dados em sequências de bytes ou caracteres. como no caso do JSON, é chamado de serialização