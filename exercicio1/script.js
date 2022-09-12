const coxinha = 2.50
let conta = 0
let mais 

while(mais !== "N"){
    mais = prompt("Deseja comer mais coxinhas ? (S para sim, N para não)").toUpperCase()
    if(mais === "N"){
        console.log("Sua conta deu " + conta + " reais")
    } else { 
        conta = conta + coxinha
        console.log("Aqui vai mais uma coxinha")
    }
} 




// alternativa 
// const coxinha = 2.50
// let conta = 0
// let mais = prompt("Deseja comer mais coxinhas ? (S para sim, N para não)").toUpperCase()

// while(mais === "S"){
//     conta = conta + coxinha
//     alert('uma coxinha foi adicionada à sua conta')
//     mais = prompt("Deseja comer mais coxinhas ? (S para sim, N para não)").toUpperCase()
// } console.log('Sua conta ficou no valor de '+ conta + ' reais.')
