const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: 1564459125,
    email: 'andre@gmail.com',
    fones: ['987654321', '912345678'],
    dependentes: [
        {
            nome: 'Sara',
            parentesco: 'filha',
            dataNascimento: '20/03/2011'},
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNascimento: '04/01/2014'
        }
    ],
    saldo: 100,
    depositar: function(valor) 
    {
        this.saldo += valor;
    }
}
//this é uma palavra reservada que se refere a uma propriedade o objeto cliente (no exemplo)

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);
//depositar é uma função que faz parte do contexto do objeto (propriedades) mas age como um metódo