const cliente = {
    nome: 'andre',
    idade: 36,
    cpf: 1564459125,
    email: 'andre@gmail.com',
    fones: ['987654321', '912345678']
}
//para listas em objetos é possivel utilizar os metódos de arrays para sua manipulação

cliente.fones.forEach(fone => console.log(fone));
console.log(cliente.fones[0]);
