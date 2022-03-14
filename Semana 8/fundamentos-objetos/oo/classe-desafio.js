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
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, cpf, email, saldo, saldoPoupanca) {
        super(nome, cpf, email, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }
    depositarPoupanca(valor) {
        this.saldoPoupanca += valor;            
    }
    exibirSaldoPoupanca() {
        console.log(this.saldoPoupanca);
    }
}

const andre = new ClientePoupanca ('Andre', '12345678912', 'andre@email.com', 100, 200);

andre.exibirSaldo();
andre.exibirSaldoPoupanca();