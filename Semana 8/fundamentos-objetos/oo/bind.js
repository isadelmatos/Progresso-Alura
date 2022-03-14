const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `A personagem é ${this.nome}`
    }
   }

   const personagemGenerico = personagem.apresentar
//    console.log(personagemGenerico()) //undefined pois não tem o mesmo contexto de objetos de this

   const personagemDefinido = personagemGenerico.bind(personagem) //bind traz o contexto de this para a nova variavel/função
   console.log(personagemDefinido())
