const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

const status = ['status'];
 
delete objPersonagem.aliado;
delete objPersonagem['status'];

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

//para deletar uma propriedade basta utilizar o delete, dá pra remover tanto chamando nome da propriedade ou pelo elemento da lista.
//delete é um booleano que retornará true ou false, é importante notar que ele não retorna false ao remover, por exemplo, uma propriedade que não existe no objeto