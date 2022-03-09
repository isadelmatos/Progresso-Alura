//boolean truthy ou falsy

// // 0 = false, "" = false
// console.log(0 == false);
// console.log ('' == false); //retorna true pois é verdadeiro que falso é igual a falso

// // 1 = true
// console.log(1 == true); //retorna true pois é verdadeiro que verdade é igual a verdade

// == e === fazem toda a diferença pois o primeiro compara os valores e o segundo os valores E os tipos.. então todas as comparações feitas retornariam false se fossem três simbolos de igualdade

//undefined e null
let vazio = null;
let indefinido;
console.log(typeof vazio, indefinido); //null é considerado como tipo objeto, é um bug do js