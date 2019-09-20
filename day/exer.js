/*let nota1=8
let nota2=8

let media=(nota1+nota2)/2

let aprovado = media>=6

if (media>=6){
    console.log("aluno aprovado")    
}

else {
    console.log ("aluno reprovado")
} */

                    //Escreva a expressão em que atribui o
                    // valor `1` a `x` se `x` maior do que `y`.

// let x =1
// let y = Math.random()*10


// if(x>y){
//     x=1
// } else if (x<y) {
//     x=0
// }




                            // Você foi contratada para desenvolver um jogo,
                            // a cada vez que o usuário acerta, ele ganha 5 pontos.
                            // Quando se atinge a pontuação 100 ele entra na faixa
                            // bônus e sua pontuação é duplicada até ele atingir 
                            // 250 pontos,quando retorna a pontuação normal. Crie
                            // o código para implementar a lógica que calcula esse 
                            // score
 
// let usuario=0
// let pontos=0
// // let bonus= usuario>=100 *2     

// function totalPontos(5){
//     usuario=usuario+5

//     if (usuario >=100) usuario*2
// } else{ 

// }





// let score=0
// let acertou=true

// if (acertou) {
//     score=score +5
//     console.log("oscore corrigido é (+5)", score)
// }
// if (acertou){
//     if (score <=100){
//         score=score+5
//     }else if ( score > 100 && <=250){
//         score=score+10
//         console.log("oscore corrigido é (+10)", score)
//     }
// }


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    // Reescreva a seguinte condicional
                    // sem usar o operador `!`:
                    // item = ! ( i < 10 || v >= 50 )   ||ou
                    // item 

let item =Math.floor(Math.random() * 10)
let v= Math.floor(Math.random() * 10)

if (item > 10 || v<=50){
  alert('negação')    
}else {
    alert ('afirmação')
}



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    // Escreva um código que receba um valor 
                    // digitado pelo usuário e mostre `par`
                    // se o número for par e `impar`
                    // se for impar.                                   
                    
let valorUsuario= prompt('digite um numero')

if (valorUsuario % 2 ==0){
    alert ('o numero é par')
}
else{ ('numero é impar')
}



let n = prompt("Digite um numero");

if(n/2 == 0){
    alert("Par");
}
else{
    alert("Impar");
}


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    // Escreva a expressão que retorna `positivo` 
                    // se dois números forem positivos
                    // e `negativo` se dois números 
                    // forem negativos.
                            //maior que 0 ll Math.sign(x)
                    

let numPosNeg=  Math.sign(prompt('digite um numero para saber se ele é negativo ou positivo'))  
let numPosNeg1=  Math.sign(prompt('digite um numero para saber se ele é negativo ou positivo'))

if (numPosNeg ==1, numPosNeg ==0, numPosNeg1 ==1, numPosNeg1 ==0) { 
    alert('positivo') // se retornar 1 ou 0 sera positivo
} else { 
    alert ('negativo') // se retornar -1 ou -0 sera negativo
    
}



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    // Escreva a expressão em que retorna `true` se
                    // dois números tiverem os mesmos
                    // sinais (+ / -) e `false` 
                    // se tiverem sinais
                    // diferentes.

let num1= Math.sign(prompt('digite um numero'))
let num2= Math.sign(prompt('digite um numero'))

    if (num1 num2 ==1 && ==0){
        alert('true')
    }else{
        alert('false')
    }

num1,num2 ==1 ==0 ? true:false


// condition ? expr1 : expr2 


                    // / Reescreva a próxima expressão usando
                                            // um if / else.
                                            // switch (day) {
                                            // 	case 0: 
                                            // 		console.log("Segunda")
                                            // 		break
                                            // 	case 1:
                                            // 		console.log("Terça")
                                            // 		break
                                            // 	case 2:
                                            // 		console.log("Quarta")
                                            // 		break
                                            // 	case 3:
                                            // 		console.log("Quinta")
                                            // 		break
                                            // 	case 4:
                                            // 		console.log("Sexta")
                                            // 		break
                                            // 	case 5:
                                            // 		console.log("Sábado")
                                            // 		break
                                            // 	case 6:
                                            // 		console.log("Domingo")
                                            // 		break
                                            // 	default:
                                            // 		throw "Dia inválido!"
                                            // }

switch(numero digitado){
    case 1:
        console.log('cancelar linha')
        break

    case 2:
        console.log('falar com atendente')
        break
    
    case 3:
        console.log('receber uma pormoção')
        break
        
   case 4:
       console.log('elogiar')
       break
     default;
     throw 'invalido'       
}                                            


                                            // Reescreva a próxima expressão usando
                                            // o operador ternário
                                            // let rand
                                            // if (Math.random() > 0.5) {
                                            // 	rand = true
                                            // } else {
                                            // 	rand = false
                                            // }

let rand =(match.random() >0.5) ? true: false 

//crie um programa que conte de 1 ate 10 de 1 em 1 usundo a estrutura = for (inicio;condição para fim;passo instruçoes) for=enquanto


for (let cont=0; cont<=10; cont++){

console.log("numero", cont) 
}


//crie um programa que conte de 10 ate 0 de 2 em 2 usundo a estrutura = for

for ( let cont=10; cont=cont-2; cont--){
    console.log("numero", cont) 

}

for ( let cont=10; cont>=0; cont=cont-2;){
    console.log("numero", cont) 
}



///@@@@@******* 20/09 


            // Escreva uma estrutura de repetição que vai 
            // calcular a soma de todos
            // os números entre 0 e 100.     criar uma variavel para guardar a soma, para somar o proximo. 


let numeros=0
for (let calc=0; calc <= 100; calc++){
    numeros= numeros + calc

    console.log(' de 0 a 100', calc)
    console.log ( 'soma de 0 a 100', numeros)
}





            // Escreva um loop para calcular a seguinte soma:
            // 1 * 1 + 2 * 2 + 3 * 3 + ... + 50 * 50

            
let numeros=0
for (let calc =0; calc <=50; calc ++){
    numeros = numeros + (calc*calc) 

    console.log ( 'de 0 a 50 ', calc)
    console.log ( 'multiplicaçao de 0 a 50', numeros)
}


            // Escreva um loop para
            // calcular a seguinte soma:
            // 1 * 2 + 2 * 3 + 3 * 4 + ... + 249 * 250


let numeros= 0
for ( let calc=1 ; calc <250; calc++){
    numeros= numeros + (calc*(calc+1))

    console.log( 'numeros >', numeros)
    console.log('calc >',calc)
    }

            // Escreva um loop que
            // vai calcular 10! (10 fatorial), o
            // que significa 10 * 9 * 8 * 7 ... * 1.

            
let numeros = 1 
for ( let calc = 10; calc >=1; calc--) {
    numeros =numeros * calc

    console.log ('numeros', numeros)
    console.log('calc', calc)
}         




                // Escreva um loop que "lance uma moeda" a cada 
                // nova iteração. Considere 1 = cara,
                // 0 = coroa. Rode esse loop 1000 vezes e
                // mostre o numero de vezes caras e o numero
                // de coroas no console.






































































































// Escreva uma estrutura de repetição que vai 
// calcular a soma de todos
// os números entre 0 e 100.
let soma = 0
for (let i = 0; i <= 100; i++) {
	soma += i // soma = soma + i
}

// para maximo = 3
// 1 iteracao -> soma = 0; i = 0 -> soma = 0 + 0 = 0
// 2 iteracao -> soma = 0; i = 1 -> soma = 0 + 1 = 1
// 3 iteracao -> soma = 1; i = 2 -> soma = 1 + 2 = 3
// 4 iteracao -> soma = 3; i = 3 -> soma = 3 + 3 = 6
// 5 iteracao -> soma = 6; i = 4 // PARA
// FINAL -> soma = 6

// Escreva um loop para calcular a seguinte soma:
// 1 * 1 + 2 * 2 + 3 * 3 + ... + 50 * 50
let soma = 0
for (let i = 1; i <= 50; i++) {
	// soma += i * i
	// soma += Math.pow(i, 2)
	soma += i ** 2
}

// para maximo = 3
// 1 iteracao -> soma = 0; i = 1 -> soma = 0 + 1 * 1 = 1
// 2 iteracao -> soma = 1; i = 2 -> soma = 1 + 2 * 2 = 5
// 3 iteracao -> soma = 5; i = 3 -> soma = 5 + 3 * 3 = 14
// 4 iteracao -> soma = 14; i = 4 // PARA
// FINAL -> soma = 14

//Outra forma
let soma = 0
let x, y
for (x = 1, y = 1; x <= 400, y <= 400; x++, y++) {
	let z = x * y
	soma += z
}

// Escreva um loop para
// calcular a seguinte soma:
// 1 * 2 + 2 * 3 + 3 * 4 + ... + 249 * 250
let soma = 0
for (let i = 2; i <= 250; i++) {
	soma += i * (i - 1)
}

// para maximo = 3
// 1 iteracao -> soma = 0; i = 2 -> soma = 0 + 2 * (2 - 1) = 2
// 2 iteracao -> soma = 2; i = 3 -> soma = 2 + 3 * (3 - 1) = 8
// 3 iteracao -> soma = 8; i = 4 -> soma = 8 + 4 * (4 - 1) = 20
// 4 iteracao -> soma = 20; i = 5 -> soma = 20 + 5 * (5 - 1) = 40
// 5 iteracao -> soma = 40; i = 6 // PARA
// FINAL -> soma = 40

//Várias resoluções
for (let i = 1; i < 250; i++) {
	soma += i * (i + 1)
}

let soma = 1
let multi = 1
for (let i = 1; i <= 249; i++) {
	multi = i * (i + 1)
	soma = soma + multi
}

for (x = 1, y = 2; x <= 249, y <= 250; x++, y++) {
	let z = x * y
	soma += z
}

// Escreva um loop que
// vai calcular 10! (10 fatorial), o
// que significa 10 * 9 * 8 * 7 ... * 1.
let fatorial = 10
for (let i = fatorial - 1; i > 0; i--) {
	fatorial *= i // fatorial = fatorial * i
}

let fatorial = 10
let aux = 1
for (let i = 1; i <= fatorial; i++) {
	aux *= i
}

// Escreva um loop que "lance uma moeda" a cada 
// nova iteração. Considere 1 = cara,
// 0 = coroa. Rode esse loop 1000 vezes e
// mostre o numero de vezes caras e o numero
// de coroas no console.
let cara = 0
let coroa = 0
for (let i = 0; i < 1000; i++) {
	let moeda = Math.floor(Math.random() * 2)
	if (moeda === 1) {
		cara++
	} else {
		coroa++
	}
}
// ou...
while (cara + coroa < 1000) {
	let moeda = Math.floor(Math.random() * 2)
	if (moeda === 1) {
		cara++
	} else {
		coroa++
	}
}

// Escreva um loop que gera uma lista com 100
// número randomicos.
let arr = []
for (let i = 0; i < 100; i++) {
	arr.push(Math.floor(Math.random() * 100))
}
// ou...
while (arr.length < 100) {
	arr.push(Math.floor(Math.random() * 100))
}
// ou...
do {
	arr.push(Math.floor(Math.random() * 100))
 } while (arr.length < 99)


// Escreva um loop em Javascript
// que gera uma matriz de zeros 5x5.
// [ [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0] ]
let matriz = []
for (let j = 0; j < 5; j++) {
    let linha = []
    for (let i = 0; i < 5; i++) {
        linha.push(0)
    }
    matriz.push(linha)
}
// ou...
let linha = []
for (let i = 0; i < 5; i++) {
    linha.push(0)
}
let matriz = []
for (let i = 0; i < 5; i++) {
    matriz.push(linha)
}
// ou..
// nao pratico, porque? referencias.
// ref: https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
let matriz = []
let linha = []
for (let i = 0; i < 5; i++) {
    linha.push(0)
    matriz.push(linha)
}

// Escreva um loop que gera uma matriz no seguinte
// formato:
// [ [0, 1, 2, 3, 4],
//   [1, 0, 1, 2, 3],
//   [2, 1, 0, 1, 2],
//   [3, 2, 1, 0, 1],
//   [4, 3, 2, 1, 0] ]
let matriz = []
for (let j = 0; j < 5; j++) { // A
    let linha = []
    for (let i = 0; i < 5; i++) { // B
        linha.push(Math.abs(i - j))
    }
    matriz.push(linha)
}

// 1 iteracao A -> j = 0; matriz = []
    // 1 iteracao B -> i = 0; linha = []; linha.push(0 - 0) -> linha = [0]
    // 2 iteracao B -> i = 1; linha = [0]; linha.push(1 - 0) -> linha = [0, 1]
    // 3 iteracao B -> i = 2; linha = [0, 1]; linha.push(2 - 0) -> linha = [0, 1, 2]
    // 4 iteracao B -> i = 3; linha = [0, 1, 2]; linha.push(3 - 0) -> linha = [0, 1, 2, 3]
    // 5 iteracao B -> i = 4; linha = [0, 1, 2, 3]; linha.push(4 - 0) -> linha = [0, 1, 2, 3, 4]
// matriz.push([0, 1, 2, 3, 4]) -> matriz = [[0, 1, 2, 3, 4]]
// 2 iteracao A -> j = 1; matriz = [[0, 1, 2, 3, 4]]
    // 1 iteracao B -> i = 0; linha = []; linha.push(0 - 1) -> linha = [-1]
    // 2 iteracao B -> i = 1; linha = [-1]; linha.push(1 - 1) -> linha = [-1, 0]
    // 3 iteracao B -> i = 2; linha = [-1, 0]; linha.push(2 - 1) -> linha = [-1, 0, 1]
    // 4 iteracao B -> i = 3; linha = [-1, 0, 1]; linha.push(3 - 1) -> linha = [-1, 0, 1, 2]
    // 5 iteracao B -> i = 4; linha = [-1, 0, 1, 2]; linha.push(4 - 1) -> linha = [-1, 0, 1, 2, 3]
// matriz.push([-1, 0, 1, 2, 3]) -> matriz = [[0, 1, 2, 3, 4], [-1, 0, 1, 2, 3]]
// ...

// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// *******
// ******
// *****
// ****
// ***
// **
// *
for (let j = 0; j < 7; j++) { 
    let asteriscos = ""
    for (let i = 0; i < (7 - j); i++) { 
        asteriscos += "*"
    }
    console.log(asteriscos)
}
// ou...
for (let j = 0; j < 7; j++) { 
    let asteriscos = ""
    for (let i = j; i < 7; i++) { 
        asteriscos += "*"
    }
    console.log(asteriscos)
}
// ou...
let asteriscos = "********"
while (asteriscos.length > 1) {
    asteriscos = asteriscos.substr(1, (asteriscos.length - 1))
    console.log(asteriscos)
}
// ou...
let asteriscos = ["*", "*", "*", "*", "*", "*", "*", "*"]
for (let i = 7; i < 7; i++) {
    asteriscos = asteriscos.slice(1)
    console.log(asteriscos.join(""))
}
// ou...
let asteriscos = ["*", "*", "*", "*", "*", "*", "*", "*"]
for (let i = 0; i < 7; i++) {
    asteriscos.pop() 
    console.log(asteriscos.join(""))
}

// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567
for (let j = 1; j <= 7; j++) {
    let linha = ""
    for (let k = 1; k <= j; k++) {
        linha += k
    }
    for (let i = j; i < 7; i++) { 
        linha += "*"
    }
    console.log(linha)
}
// ou...
let digitos = ""
for (let i = 1; i <= 7; i++) {
    digitos += i
    let numero_com_asteriscos = digitos
    for (let j = 7; j > i; j--) {
        numero_com_asteriscos += "*"
    }
    console.log(numero_com_asteriscos)
}

// Escreva um loop que calcula quantos termos a soma
// 1 + 2 + 3 + ... precisa para
// que o resultado dela exceda um milhão.
let soma = 0
let i = 0
while (soma <= 1000000) {
	i++ // i = i + 1
	soma += i
}


//Dada a lista de convidados abaixo escreva um
//loop que percorra a lista e mostre se o nome da
//pessoa convidada foi encontrado. Caso tenha sido encontrado,
// mostre a mensagem 'Seja bemvindo, <convidado>!'
//listaConvidados = ['Alice','João','Maria Rita', 'Sueli','Carlos']  