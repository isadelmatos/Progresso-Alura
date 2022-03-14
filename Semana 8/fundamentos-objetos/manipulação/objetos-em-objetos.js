const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: 1564459125,
    email: 'andre@gmail.com',
    fones: ['987654321', '912345678']
}
//quatro tipos de valores: string, numeros, arrays e objetos, para cada tipo existem formas diferentes de acessa-la e altera-la

cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'filha',
    dataNascimento: '20/03/2011'
}

console.log(cliente);

cliente.dependentes.nome = 'Sara Silva';

console.log(cliente);