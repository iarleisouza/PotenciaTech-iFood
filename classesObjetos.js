
class formaDeBolo {
    constructor(saborDaMassa, saborRecheio) {
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio

    }
    // criar método
    // não precisa criar a palavra function dentro de uma classe
   // escrever() {
    //    console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
   // }
   // assar() {
   //     console.log("bolo assando de " + this.saborDaMassa)
  //  }
}

let boloFesta = new formaDeBolo("massa de chocolate", "nutella")
//let boloPremium = new formaDeBolo("baunilha", "coco")

console.log(boloFesta)
//console.log(boloFesta.saborDaMassa)

//boloFesta.escrever()
//boloPremium.escrever()
//boloPremium.assar()

