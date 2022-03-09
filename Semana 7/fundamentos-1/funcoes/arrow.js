//Arrow Function
// const apresentaArrow = nome => `meu nome é ${nome}`
// console.log(apresentaArrow('arrow'));

// const soma = (num1, num2) => num1 + num2;
// console.log(soma(1, 2));

const somaNumerosPequenos = (num1, num2) => {
    if ((num1 > 0 && num1 < 10) && (num2 > 0 && num2 < 10)) {
        return num1 + num2; 
    } else {
        return 'somente soma de numeros pequenos';        
    }
}
console.log(somaNumerosPequenos(2, 2));