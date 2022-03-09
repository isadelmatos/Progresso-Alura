//somar ponto extra, atualizar e guardar a array
// const notas = [10, 9, 8, 7];

// const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota); //1 + nota = nota se não o js mostra a nota antes de incrementar

// console.log(notasAtualizadas);


//
//atualizar cada elemento para maiscula e mostrar a nova array
const nomes = ['ana julia', 'Caio vinicius', 'BIA silva'];

const nomesEmMaiscula = nomes.map(nome => nome.toUpperCase());

console.log(`Antes (${nomes}) e depois (${nomesEmMaiscula})`);