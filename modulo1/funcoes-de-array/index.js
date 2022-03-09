/*

Exercícios de interpretação de código

1)
a.A array será impressa. Todos os nomes e apelidos. 


2) 
a.
Serão impressos os nomes ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

3)
a.

[ {nome: Amanda Rangel, apelido:"Mandi"}, {nome:"Laís Petra, apelido:"Laura"}]


*/


// Exercícios de escrita de código:


// 1)

//a.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
console.log(pets)

//a.

const nomeDosPets = pets.map((pet, indice, array) => {return pet.nome}
) 
console.log(nomeDosPets)

//b

const nomeSalsichas = pets.filter((pet, index, array) => { 
 
     if(pet.raca == "Salsicha"){ 

        return ( pet.nome)
     }
 


})
console.log (nomeSalsichas)

//c.

const mensagemPoodle = pets.filter((pet, index, array) => {
if(pet.raca == "Poodle"){

    console.log (`Você receberá um desconto de 10% para tosa o ${pet.nome} `)
}

})

//2)

//a.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 const nomeItens = produtos.map((item, index, array) =>{

 return item.nome
 }
 )
 console.log(nomeItens)

 //b

 const descontoItens = produtos.filter((item, index, array) => {

    return {`${item.nome}${item.preco(*0,95)}`}
 } )

console.log (descontoItens)

