const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPhyton = [7, 3.5, 8, 9.5];

// let somaNotas = 0;

// salaJS.forEach(soma);
// var mediaJs = somaNotas/salaJS.length;
// console.log(mediaJs);

// somaNotas = 0;

// salaJava.forEach(soma);
// var mediaJava = somaNotas/salaJava.length;
// console.log(mediaJava);

function calcularMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((total, num) => num + total);
    // const somaDasNotas = notasDaSala.reduce((total, num) => num + total,0); //dessa forma o zero indica o valor que o total começa calcula da esquerda para direita, mas tem metodo especifico da direita para esquerda
    return somaDasNotas/notasDaSala.length;
}

// const calcularMedia = notasDaSala => {
//     const somaDasNotas = notasDaSala.reduce((total, num) => total += num);
//     return somaDasNotas/notasDaSala.length
// }

console.log(`A média da sala JavaScript é: ${calcularMedia(salaJS)}`);
console.log(`A média da sala Java é: ${calcularMedia(salaJava)}`);
console.log(`A média da sala Phyton é: ${calcularMedia(salaPhyton)}`);
