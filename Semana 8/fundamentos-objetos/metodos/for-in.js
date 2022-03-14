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

let relatorio = "";

for (let info in cliente) {
    if(typeof cliente[info] === 'object' || typeof cliente[info] === 'function') {
        continue;
    } else {
        relatorio += `
        ${info}: ${cliente[info]}`}
}

console.log(typeof cliente.fones); //retorna string com o tipo, interpreta arrays (ex fones) como objetos
console.log(relatorio);
