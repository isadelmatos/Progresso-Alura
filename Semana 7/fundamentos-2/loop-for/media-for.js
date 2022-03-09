//calculando media com loop for

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0; //importante criar fora do loop pois sempre que o loop executasse o bloco a soma voltaria a ser zero

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

let media = somaDasNotas/notas.length;

console.log('A média das notas é ' + media);