

/*
Instruções para entrega
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 

 
Bons estudos 😉
*/

class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
      
  }
  atacar() {

         for (let contador = 1; contador <= 4; contador++) {
            if (contador == 1 && this.tipo == "mago") {
                this.ataque = "magia"
                    console.log(`O ${this.tipo} atacou usando ${this.ataque} `)
           } else if (contador == 2 && this.tipo == "guerreiro") {
                this.ataque = "espada"
                    console.log(`O ${this.tipo} atacou usando ${this.ataque} `)
           } if (contador == 3 && this.tipo == "monge") {
                   this.ataque = "artes marciais"
                    console.log(`O ${this.tipo} atacou usando ${this.ataque} `)
           } if (contador == 4 && this.tipo == "ninja") {
                   this.ataque = "shuriken"
                    console.log(`O ${this.tipo} atacou usando ${this.ataque} `)
           }
       }
       
         }
  
    
    }

let heroiGuerreiro = new heroi("Iarlei", "45 anos", "guerreiro","espada")
console.log(heroiGuerreiro)
heroiGuerreiro.atacar()
console.log("-----------------------------------------------------")
console.log("")

let heroiMago = new heroi("Iarlei", "45 anos", "mago","magia")
console.log(heroiMago)
heroiMago.atacar()
console.log("-----------------------------------------------------")
console.log("")

let heroiMonge = new heroi("Iarlei", "45 anos", "monge","artes marciais")
console.log(heroiMonge)
heroiMonge.atacar()
console.log("-----------------------------------------------------")
console.log("")

let heroiNinja = new heroi("Iarlei", "45 anos", "ninja","usou shuriken")
console.log(heroiNinja)
heroiNinja.atacar()






