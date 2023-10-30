/* 
Potência Tech iFood - Programação do Zero
                Desafio  Calculadora de partidas Rankeadas
*/


function calculadora(vitoria, derrota) {

   
    vitoria = Math.floor(Math.random() * 111)
    derrota = Math.floor(Math.random() * 20)

    let nivel = undefined
    
    let saldoVitorias = vitoria - derrota

    if (vitoria < 10) {
        nivel = "Ferro"
    } else if (vitoria > 11 && vitoria <= 20){
        nivel = "Bronze"
    } else if (vitoria > 21 && vitoria <= 50){
        nivel = "Prata"
    } else if (vitoria > 51 && vitoria <= 80){
        nivel = "Ouro"
    } else if (vitoria > 81 && vitoria <= 90){
        nivel = "Diamante"
    } else if (vitoria > 91 && vitoria <= 100){
        nivel= "Lendário"
    } else if (vitoria >= 101){
        nivel = "Imortal"
    }

    
    console.log(`O Herói tem saldo ${saldoVitorias} está no nível ${nivel}`)
    

}
calculadora("vitoria", "derrota")