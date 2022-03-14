const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: 1564459125,
    email: 'andre@gmail.com',
    fones: ['987654321', '912345678'],
    dependentes: [{
        nome: 'Sara',
        parentesco: 'filha',
        dataNascimento: '20/03/2011'},]
}

//para o tipo lista utilizamos um metodo de array para manipular a propriedade do objeto, no caso, push e filter
cliente.dependentes.push({nome: 'Samia Maria', parentesco: 'filha', dataNascimento: '04/01/2014'});

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento === '04/01/2014');

//como a const gerada é uma lista indicamos o indice que vamos acessar e o nome/chave
console.log(filhaMaisNova[0].nome);

