//precisamos incluir o 7 as notas
const notas = [0, 6, 8];

notas.push(7);// se esquecesse de passar o parametro ficaria undefined e quando fosse somar o resultado daria NaN
console.log(notas);

const media = (notas[0] + notas [1] + notas[2] + notas [3]) / 4;
console.log(`A média de notas é ${media}`);