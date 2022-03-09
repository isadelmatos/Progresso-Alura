//conversão de tipos

//conversão implícita
// const numero = 456;
// const numeroEmString = "456";

// console.log(numero + numeroEmString); //o js converte o numero em texto e concatena/junta os dois

// console.log(numero == numeroEmString); //true pois o js entende que o valor dos dois é o mesmo, há a conversão implicita
// console.log(numero === numeroEmString); //false pois apesar do valor igual o tipo não é o mesmo, não há a conversão

//conversão explícita
console.log(numero + Number(numeroEmString));

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings