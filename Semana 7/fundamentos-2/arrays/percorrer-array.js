//criar uma função que procura o aluno na lista e retorna seu nome e nota média final
const nomesDosAlunos = ['João', 'Juliana', 'Caio', 'Ana'];
const notasMedias = [10, 7, 9, 6];

let listaNomesENotas = [nomesDosAlunos, notasMedias];

const procurarAluno = (nomeAluno) => {
    if (listaNomesENotas[0].includes(nomeAluno)){
        let indice = listaNomesENotas[0].indexOf(nomeAluno);
        return `${listaNomesENotas[0][indice]}, sua nota é ${listaNomesENotas[1][indice]}.`;
    } else {
        return `${nomeAluno} não está cadastrado`;
    }
}

console.log(procurarAluno('Juliana'));

