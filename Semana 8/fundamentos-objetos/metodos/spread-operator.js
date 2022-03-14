//lista com dois objetos- clientes

const clientes = [
    {
        nome: 'Andre',
        cpf: '1564459125',
        email: 'andre@gmail.com',
        dependentes: [{
            nome: 'Sara',
            parentesco: 'filha',
            dataNascimento: '20/03/2011'
        },
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNascimento: '04/01/2014'
        }],
    },
    {
        nome: 'Juliana',
        cpf: '5678567895',
        email: 'juliana@gmail.com',
        dependentes: [{
            nome: 'Sophia',
            parentesco: 'filha',
            dataNascimento: '30/08/2020'
        }]
    }
]

// com spread operator --------------------------------
// const listDeDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];
// // spread operator (...) retira de uma array e espalha as propriedades dentro de uma nova variável array, todos objetos se juntam na mesma lista dividios pelos indices
// console.log(listDeDependentes);
// console.table(listDeDependentes);


// com loop for clássico --------------------------------
// const listDeDependentes = [];
// for (i = 0; i < clientes.length; i++) {
//     listDeDependentes.push([...clientes[i].dependentes]);
//     console.log(listDeDependentes)
// } 
//nessa forma de fazer os objetos ficam em uma lista e são organizados pelos indices, ao usar o console.table os elementos da lista ficam como [object]


// com for in --------------------------------
// for (let index in clientes) {
//     const listDeDependentes = [...clientes[index].dependentes];
//     console.table(listDeDependentes);
// }
//nessa forma de fazer os objetos são organizados em mais de um lista para cada indice de objeto (no caso cada cliente) e no console.table as propriedades de cada objeto aparecem "normalmente"


// com forEach --------------------------------
// const listaDependentes = [];
// clientes.forEach((cliente) => listaDependentes.push(...cliente.dependentes));


// com flatMap --------------------------------
// const listaDependentes = clientes.flatMap((cliente) => cliente.dependentes);

// console.table(listaDependentes);

