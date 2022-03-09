//juntar duas listas dentro de uma sem a concatenação
const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const notasMedias = [10, 7, 9, 6];

//a lista na primeira posição tem indice 0 e a segunda indice 1, os elementos dentro delas contiuam com o mesmo indice
// let listaAlunosEMedias = [['João', 'Juliana', 'Caio', 'Ana'], [10, 7, 9, 6]];
let listaAlunosEMedias = [alunos, notasMedias];

//para acessar os elementos das listas os indices vem em pares
console.log(`A nota média de ${listaAlunosEMedias[0][0]} é ${listaAlunosEMedias[1][0]}`);