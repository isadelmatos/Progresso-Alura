function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        saldo += valor;
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {

    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
} //call é um método de função que utiliza uma função como base de outra, desta forma esse novo prototipo vai herdar as propriedades e métodos do outro

const juliana = new ClientePoupanca('Juliana', '98765432198', 'juliana@email.com', 100, 200);

console.log(juliana);

ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor;
} //a propriedade prototype além de exibir a função construtuora, acessa e também pode criar propriedades e metódos

juliana.depositarPoup(30);

console.log(juliana.saldoPoup)