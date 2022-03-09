//precisamos exluir a nota 10
const notas = [10, 7, 8, 5, 10];

notas.pop();
console.log(notas);

const media = (notas[0] + notas [1] + notas[2] + notas [3]) / 4;
console.log(`A média de notas é ${media}`);