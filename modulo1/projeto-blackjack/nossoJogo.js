/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// 1)

console.log(`Boas vinda ao jogo BlackJack!`)

// 2)

console.log((confirm(`Quer iniciar uma nova rodada?`)))



// 3) 

if (confirm == true){ 
  console.log( `Iniciando uma nova rodada`) 

 }else{ console.log( `O jogo acabou`);}