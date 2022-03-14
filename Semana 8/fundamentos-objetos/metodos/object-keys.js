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

function oferecerSeguro(objeto) {
    const proposta = Object.keys(objeto);
    if(proposta.includes('dependentes')) {
        console.log(`Oferta de seguro de vida para ${objeto.nome}`)
    }
}

//includes, metódo de array, só funcionará com as mesmas
//object.keys, object.values (valores das chaves) e object.entries (arrays com  chave e valor)

oferecerSeguro(cliente);