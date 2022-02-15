/* Resposta das questões de interpretação de códigos:
1)a. false
b. false
c. true
d. boolean
2 e 3) O que o comando prompt vai exibir é string, aí será impresso os dois numeros adicionados em sequência, a menos que seja escrito Numberprompt ou +prompt.

*/
// Exercício de escrita de Código 1)
let idadeUsuario = +prompt("Qual é a sua idade?")
let idadeAmigo = +prompt("Qual é a idade do seu melhor amigo?")
let idadeMaior = idadeUsuario > idadeAmigo
console.log ("Sua idade é maior do que a do seu melhor amigo?", idadeMaior )
let diferencaIdade = idadeUsuario - idadeAmigo
console.log ("A diferença da idade de vocês é", diferencaIdade)

// 2)
let numeroPar = +prompt("Insira um número par")
let numeroDividir = 2
console.log ("O resto é",  numeroPar%numeroDividir) 
// Qualquer número par gera um Resto = 0, enquanto que ao inserir números ímpares temos resultados diferentes de zero

// 3)
let idadeUsuario2 = +prompt ("Qual é a sua idade novamente?")
const meses = 12
const dias = 365
const horas = 24
let idadeDias = idadeUsuario2 * dias * horas

console.log ("A sua idade em meses é", idadeUsuario2 * meses)
console.log ("A sua idade em dias é", idadeUsuario2 * dias)
console.log ("A sua idade em horas é",idadeDias )

// 4)

let numeroUsuario = +prompt("Insira um número")
let numeroUsuario2 = +prompt("Insira outro número")


console.log ("O primeiro número é maior que o segundo?", numeroUsuario > numeroUsuario2)
console.log (" O primeiro número é igual ao segundo?", numeroUsuario == numeroUsuario2)
console.log (" O primeiro número é divisível pelo segundo?", numeroUsuario%numeroUsuario2==0 )
console.log ("O segundo número é divisível pelo primeiro?", numeroUsuario2%numeroUsuario==0 )
