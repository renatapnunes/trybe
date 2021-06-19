//                     BLOCO 4 - DIA 2 - JavaScript: Array e For - Exercicios
//-------------------------------------------------------------------------------------------------

// 1 - Percorra o array imprimindo todos os valores nele contidos com a função console.log():

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (arrayNumbers of numbers) {
    console.log(arrayNumbers);
}

//-------------------------------------------------------------------------------------------------
//2 - Some todos os valores contidos no array e imprimir o resultado:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}

console.log(sum);

//-------------------------------------------------------------------------------------------------
// 3 - Calcule e imprima a média aritmética dos valores contidos no array:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}

let average = sum / numbers.length

console.log(average);

//-------------------------------------------------------------------------------------------------
/* 4 - Com o mesmo código do exercício anterior, caso valor final seja maior que 20,
imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem:
"valor menor ou igual a 20":
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}

let average = sum / numbers.length

if (average > 20) {
    console.log("Valor maior que 20.");
}
else {
    console.log("Valor menor ou igual a 20.");
}

//-------------------------------------------------------------------------------------------------
// 4 - Utilizando for, descubra qual o maior valor contido no array e imprima-o:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higher = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > higher) {
        higher = numbers[i];
    }
}

console.log("Maior numero do array: " +higher);

//-------------------------------------------------------------------------------------------------
/* 6 - Descubra quantos valores ímpares existem no array e imprima o resultado.
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado": */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let amountOdd = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i]%2 !== 0) {
        amountOdd += 1;
    }
}

if (amountOdd > 0) {
    console.log("Quantidade de numeros impares: " +amountOdd);
}
else {
    console.log("Nenhum valor impar encontrado.");
}

//-------------------------------------------------------------------------------------------------
// 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smaller = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < numbers [i+1]) {
        smaller = numbers[i];
    }
}

console.log("Menor numero do array: " +smaller);

//-------------------------------------------------------------------------------------------------
// 8 - Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado:

let numbers = [];

for (let i = 1; i < 26; i += 1) {
    numbers.push(i);
}

console.log(numbers);

//-------------------------------------------------------------------------------------------------
/* 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão
de cada um dos elementos por 2: */

let numbers = [];

for (let i = 1; i < 26; i += 1) {
    numbers.push(i);
}

for (let div of numbers) {
    div /= 2;
    console.log(div);
}
