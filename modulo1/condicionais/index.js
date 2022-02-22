/*

Exercícios de interpretação de código

1)
a.
Este é um código que condiciona a resposta do usuário a uma determinada mensagem.
O usuário digita um número e se ele for divizível por 2, ele passou no teste, caso contrário, não passou.

b.Números divizíveis por 2, que possuem o resto igual a zero, números pares.

c. Número que quando divididos por 2 não possuem resto igual a zero. Número ímpares.

2)
a. Para que o usuário digite um nome de fruta e receba uma frase com o respectivo preço.

b. Undefined

c. preco de 5 porque vai acabar no default.

3)
a. Pedindo para um usuário digitar um primeiro número.

b. Com o número 10 será "Esse número passou no teste" e com o número -10 não terá mensagem.

c.A variável mensagem está dentro da condicional if


*/


// Exercícios de escrita de código:

// 1)
// a. b.

const idadeUsuário = Number(prompt('Qual é a sua idade?'))

// c.

if (idadeUsuário >= 18) {

    console.log(`Você pode dirigir`)
}else{ console.log (`Você não pode dirigir`)}

// 2)


const turnoAluno = prompt(`Qual turno você Estuda? (Digite M(matutino), V(Vespertino) ou N(Noturno))`)

if (turnoAluno === "M"){ 

    console.log (`Bom dia!`)

}else if( turnoAluno === "V"){ 

    console.log (`Boa tarde!`)
}else if( turnoAluno === "N"){

    console.log (`Boa noite!`)

}else{ 

    console.log (`Responder apenas M,V ou N!`)

}  

 // 3)
 
 switch(turnoAluno){

    case 'M':
    console.log('Bom dia!')
    break;
    case 'V':
        console.log('Boa tarde!')
        break;
        case 'N':
            console.log('Boa noite!')
            break;
            default:
                console.log ('Responder apenas M,V ou N!')
                break

 }

 //4)

 const filme = prompt('Qual o gênero de filme que vocês escolheram para assistir?')
 const precoFilme = Number(prompt('Qual o valor do ingresso?'))

 

 if(filme === 'fantasia' && precoFilme <= 15){ 

    console.log ('Bom Filme!')
}else{console.log('Escola outro filme')
}


