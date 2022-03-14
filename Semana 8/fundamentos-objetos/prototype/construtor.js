function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        saldo += valor;
    }
}

const andre = new Cliente('Andre', '12345678912', 'andre@gmail.com', 100); //operador new (é uma palavra reservada) cria uma instancia (no caso seria andre) de um tipo de objeto definido pela função construtora

//ao acessar a propriedade andre.__proto__ veremos o construtor, a função cliente que definiu esse objeto

// o mesmo serve para por exemplo arrays e objetos, se declararmos uma variavel que armazena um dos tipos de dados e acessarmos o prototype teremos sua função construtora

// no caso de andre.__proto__.__proto__ retorna a função construtora de cliente, ou seja o constutor de objeto pois antes ed criar o prototipo Cliente este utilizou o prototipo de objetos para definir seu proprio... essa é a definição de cadeia de prototipo

