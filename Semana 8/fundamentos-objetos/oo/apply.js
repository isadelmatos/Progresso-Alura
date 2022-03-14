function imprimeNomeEmail(tipoCliente, agencia){
    console.log(`
      ${tipoCliente} da agência ${agencia}:
      - nome: ${this.nome}, email: ${this.email}
      `)
   }
   
   const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
   }

    const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
    const clienteEstudante = ["cliente estudante", "Fortaleza"]

imprimeNomeEmail.apply(cliente1, clienteEspecial)

imprimeNomeEmail.apply(cliente2, clienteEstudante) //quando temos mais de um parametros na função
