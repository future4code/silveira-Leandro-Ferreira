/* Exercícios de interpretação de código

1) 
a. undefined
b. null
c. 11
d. 3
e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
f. 9
2) SUBI NUM ÔNIBUS EM MIRROCOS 27


*/

// Exercícios de escrita de código
// 1)
let nomeUsuario1 = prompt("Qual é o seu nome?")
let emailUsuario1 = prompt("Qual é o seu email?")
console.log(`O ${emailUsuario1} foi cadastrado com sucesso. Seja bem-vindo(o), ${nomeUsuario1}`)

// 2)
let comidasPreferidas = ["poke", "pizza", "izakaya", "crepe", "peixes"]
console.log(comidasPreferidas)
console.log( "Essas são as minhas comidas preferidas")
console.log( comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log( comidasPreferidas[2])
console.log( comidasPreferidas[3])
console.log(comidasPreferidas[4])

let comidaUsuario1 = prompt("Qual é a sua comida preferida?")
let i = 0
comidasPreferidas[i+1] = comidaUsuario1
console.log(comidasPreferidas)

// 3)
let listaDeTarefas = []
let tarefaUsuario = prompt("Cite uma tarefa que você precisa realizar hoje")
let tarefa2Usuario = prompt("Cite outra tarefa que você precisa realizar hoje")
let tarefa3Usuario = prompt( "Cite outra tarefa que você precisa realizar hoje")
listaDeTarefas.push(tarefaUsuario, tarefa2Usuario, tarefa3Usuario)
console.log(listaDeTarefas)
let tarefaRealizada = +prompt( "Qual das tarefas você já realizou hoje? Sendo na ordem 0 para a primeira, 1 para a segunda e 2 para a terceira")
listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)


