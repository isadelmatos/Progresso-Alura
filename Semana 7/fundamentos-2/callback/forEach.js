//outra forma de calcular medias com metodo forEach
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(nota => {
    somaDasNotas += nota;
})

const media = somaDasNotas/notas.length;
console.log(media);


//outra utilização do método forEach
const nomes = ['Ana', 'Ju', 'Leo', 'Paula'];

nomes.forEach(nome => {
    console.log(nome);
})

// nomes.forEach(mostrar);
// function mostrar(nome) {
//     console.log(nome);
// }