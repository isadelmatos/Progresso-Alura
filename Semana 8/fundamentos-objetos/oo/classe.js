class Cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    exibirSaldo() {
        console.log(this.saldo);
    } //na classe não é preciso escrever a palavra reservada function para declarar uma função
}

const andre = new Cliente('Andre', '12345678912', 'andre@gmail.com', 100);

console.log(andre)
andre.exibirSaldo();