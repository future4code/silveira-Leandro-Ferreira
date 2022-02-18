/*
Exercícios de interpretação de código:

1)
a.
10
50

b. A função somente não impressa no console. 

2) 
a. A função irá transformar em letra minúscula para padronizar o texto e procurar se existe a palavra "cenoura" e 
retornar true or false.
Poderia ter utilidade procurar se existe o tens dentro de uma array ou mesmo determinada palavra dentro de um texto.

b.
true
true
true

*/

// Exercícios de escrita de código.

// 1)
//a.

console.log("Eu sou Leandro, tenho 38 anos, moro em Florianópolis, e sou médico veterinário")

//b.

function apresentar(nome,idade, cidade, profissao){ 
    
    

    let apresentacao = (` Eu sou ${nome}, tenho ${+idade} anos, moro em ${cidade}, e sou ${profissao}.`)
    return apresentacao



}



console.log(apresentar("Leandro", 38, "Florianópolis", "médico veterinário"))

//2)

//a.

function somar(a, b){

    const soma = a + b
    return soma
}

console.log(somar(2, 3))

//b.

function comparar(a, b){

    const compara = (a >= b)
    return compara

}

console.log(comparar(2, 2))

//c.

function par(a){

const par1 = a % 2 == 0 
return par1

}

console.log(par(3))

//d.

function mensagem(nome){

const nome1 = nome.length;
const nome2 = nome.toUpperCase();
const resultado = `${nome1}${nome2}`

return resultado
}

console.log (mensagem("Goiabada vende na feira."))


//3.

function somar(a,b){

    const soma1 = a + b

    return soma1
}
function subtrair(a,b){

    const subtracao1 = a - b 

    return subtracao1
}
function multiplicar(a,b){

    const multiplicacao1 = a * b

    return multiplicacao1
}

function dividir(a, b){ 

    const divisao1 = a / b

    return divisao1
}

let numero1 = +prompt("Insira um número")
let numero2 = +prompt( "Insira outro número")

console.log (somar(numero1, numero2))
console.log (subtrair(numero1, numero2))
console.log (multiplicar(numero1, numero2))
console.log (dividir (numero1, numero2))



