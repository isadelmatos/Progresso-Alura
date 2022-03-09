//arrays
//calcular media de 10 6.5 8 7.5

//sem array
// let media = (10 + 6.5 + 8 + 7.5)/4;

//com array
// let nota1 = 10;
// let nota2 = 6.5;
// let nota3 = 8;
// let nota4 = 7.5;
// const notas = [nota1, nota2, nota3, nota4];

const notas = [10, 6.5, 8, 7.5];
// const media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

const media = notas.reduce((total, num) => num + total)/notas.length;

console.log(`A média de notas é ${media}`);

