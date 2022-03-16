
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:
/*
function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de desigualdade ${a}==${b} é ${a == b}`
    //  Sua lógica aqui
}
console.log (checarIgualdade(2, 2));

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior (a, b){
return `No comparador verifique qual número é maior ${a}>${b} é ${a>b}`

}

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

function cadastro (nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade) = {
    let idadeDoUsuario = (2022 - anoDeNascimento)
    let tamanhoSenha = senhaDoUsuario.length

    const usuario = [nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade]

    if ((idadeDoUsuario >= 18) && (tamanhoSenha >= 6) && (nacionalidade === "brasileira")){

        return "Pode se cadastrar"
    } else {
        return "Não pode se cadastrar"
    }

    //  Sua lógica aqui

}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

function login(){
    let loginUsuario = prompt("Digite sua senha")
    const login - "labenu"

    if (loginUsuario == login){
        return "Acesso liberado"
    }else{ 
        return "Senha inválida"
    }
}
    //  Sua lógica aqui



}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

function primeiraDose() {
    const nomeDoUsuario = Prompt("Qual é o seu nome?")
    const nomeDaVacina = Prompt("Qual a vacina que você está utilizando?")
    let tempo = 0
    let  data = new Date
  
     

    switch(nomeDaVacina){
        case "coronavac":
        tempo = 28
        break
        case "astrazenica":
        tempo = 90
        break
        case "pfizer":
        tempo = 90
        break
        default:
            return "Vacina Inválida"

    }
    data.setDate(data.getDate() +tempo)
    const dataFormatada = data.toLocaleDateString()

return(`Olá ${nomeDoUsuario}! A próxima dose da ${nomeDaVacina} é daqui a ${tempo} dias. Compareça no posto na data ${dataFormatada}.`)






    }





    console.log(primeiraDose)

    


*/
// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------



    const segundaDose = (nomeDoUsuario) => {
        const usuarios = [
            { nome: "Artur", imunizacao: "incompleta" },
            { nome: "Barbara", imunizacao: "incompleta" },
            { nome: "Carlos", imunizacao: "incompleta" }
        ]
        for (let i = 0; i < usuarios.length; i++){
            if (usuarios[i].nome == "Barbara"){
                usuarios[i].imunizacao = "completa"
            }
        }
        return usuarios
    }
    console.log(segundaDose("Barbara"));


// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    for(let i=0; i < usuarios.length; i++){

        if(usuarios[i].imunizacao = "incompleta"){

            return `Olá ${nome[i]}. Sua imunização está incompleta, por favor volte ao postinho para tomar a segunda dose`

        }
    }

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidade: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]
// 3)
const cadastroDesafio = (usuarios) => {

    let nome = prompt("Qual é o seu nome?");
    let ano = prompt ("Qual ano?");
    let nacionalidade = prompt("Qual é a sua nacionalidade");
    let senha = ("Qual é a sua senha?")

    let novaPessoa = {
        nome: nome,
        ano: ano,
        nacionalidade: nacionalidade,
        senha: senha

    }

    usuarios.push(novaPessoa)
    return usuarios
    
}
console.log(cadastroDesafio(usuarios));

//4)

const loginDesafio = () => {

const senhaUsuario = prompt ("Digite a sua senha")
let mensagem
for (let i=0; i< usuarios.length; i++){
    if(usuarios[i].senha === senhaUsuario){
        mensagem = "acesso liberado"
        return mensagem}

    if (mensagem === undefined) {

        console.log("Senha inválida")
    }
}
}
console.log(loginDesafio(usuarios))
   

console.log(loginDesafio())


//5)


const primeiraDoseDesafio = (usuarios) => {
//  Sua lógica aqui
let vacina = prompt("Insira a vacina tomada")
let imunizacao = "Incompleta"

usuarios[3] = {...usuarios[3], vacina: vacina, imunizacao: imunizacao}

for(let usuario of usuarios) {

if(usuario,imunizacao === "incompleta"){
    let tempo = 0
    let data = new Date
    switch(usuario.vacina){

        case"coronavac":
            tempo:28
            break
        case "astrazenica":
            tempo:90
            break
        case"pfizer":
            tempo:90
            break
        default:
            return"Vacina Inválida"


    }


    
  
    data.setDate(data.getDate() +tempo)
    const dataFormatada = data.toLocaleDateString()

    console.log(`Olá ${usuario.nome} A próxima dose da ${usuario.vacina} é daqui a ${tempo} dias.  Compareça no posto na ${dataFormatada}. `)
}else{
    console.log(`Olá ${usuario.nome}! A sua vacinação está completa, parabéns!`)
}




}
return usuarios


}

}
console.log(primeiraDoseDesafio())



const segundaDoseDesafio = (nomeDoUsuario) => {
    for(let = i; i<usuarios.length; i++)
    if(nomeDoUsuario ===usuarios[i].nome){
        usuarios[i].imunizacao ="completa"
    }


    return usuarios

}

console.log(segundaDoseDesafio("Carlos"));







const avisoAosAtrasadosDesafio = () => {

    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    const vacinaIcompleta = usuarios.filter((pessoa) => {
        return pessoa.imunizacao === "incompleta"
    })
    
const mensagemIncompleta = vacinaIncompleta.map((pessoa) => {
return `Olá ${pessoa.nome}!. Sua imunização está incompleta, por favor volte ao postimnho para a segunda dose`

})

    return mensagemIncompleta
}
console.log(avisoAosAtrasadosDesafio());