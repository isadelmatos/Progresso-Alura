const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];


//passa por cada elemento da lista de nomes retornando o indice respectivo da nota e comparando se é menor que cinco, se for verdadeiro guarda a informação na const
//o parametro do valor dos elementos, caso não seja utilizado deve ser representado por _ underline
const reprovados = nomes.filter( (_, indice) => notas[indice] < 5); //retorna true ou false - true guardado - false descartado

console.log(`Reprovados: ${reprovados}`);