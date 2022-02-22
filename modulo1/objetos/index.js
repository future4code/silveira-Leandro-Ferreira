/* 
Exercícios de interpretação de código:

1)
a.
Mathews Nachtergaele
Virginia Cavendish
canal: "Globo", horário:"14"

2)

a. nome:"Juca", idade:3, raca:"SRD";
        "Juba", idade:3, raca:"SRD";
        "Jubo", idade:3, raca:"SRD".

b. copia o array ou objeto.

3)
a.
false
undegined
b.
undefined porque não há a propriedade altura e nem foi requisitado a crianção.


*/

// Exercícios de escrita de código

// 1)
// a.
const pessoa = { 
nome: "Juliano",
apelidos: ["Juca", "Juju", "Jucas"]


};

const frase = (pessoa) => {
        console.log ( ` Eu sou ${pessoa.nome}, mas pode me chamar de:${pessoa.apelidos}`)
}

//b.

const novaPessoa = {... pessoa, apelidos : [`J`, `JJ`, `JJJ`]}
console.log(novaPessoa)

//2)
//a.

const objeto1 = {
nome: 'A',
idade : 25,
profissão: 'engenheiro'

};

const objeto2 = {

nome: 'B',
idade : 26,
profissão: 'veterinário'


};

//b.

const informações = (objeto1, objeto2) => {
const dadosObj1 = [`${objeto1.nome}, ${objeto1.nome.length},${objeto1.idade}, ${objeto1.profissão}, ${objeto1.profissão.length}` ];
const dadosObj2 = [`${objeto2.nome}, ${objeto2.nome.length},${objeto2.idade}, ${objeto2.profissão}, ${objeto2.profissão.length}`];
return console.log(dadosObj1)
return console.log(dadosObj2)


}

// 3)
//a.
const carrinho = []
//b.

const fruta1 = {

nome: 'acerola',
disponibilidade: true

}
const fruta2 = {

        nome:'laranja',
        disponibilidade: true
}

const fruta3 = {

        nome: 'pera',
        disponibilidade: true
}
//c.







