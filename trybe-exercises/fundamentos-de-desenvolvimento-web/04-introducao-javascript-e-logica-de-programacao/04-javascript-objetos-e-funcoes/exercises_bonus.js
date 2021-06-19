//                               BLOCO 4 - DIA 4 - JavaScript: Objetos e Funções - Exercícios Bonus
// ****************************************************************************************************************************

/* 1 - Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa:

        - Uma string é um array de caracteres, então cada elemento do array é uma letra.
        - O valor de cada numeral romano é:

            | I   | 1    |
            | --- | ---- |
            | IV  | 4    |
            | V   | 5    |
            | IX  | 9    |
            | X   | 10   |
            | XL  | 40   |
            | L   | 50   |
            | XC  | 90   |
            | C   | 100  |
            | CD  | 400  |
            | D   | 500  |
            | CM  | 900  |
            | M   | 1000 |

        - Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

        - Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados.
            Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele,
            ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9. */

let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

let entrada = "LXXIII";

function converteRomanosEmDecimais(algarismo, romanos) {
    let arrayDecimal = [];
    let resultado = 0;
    let decimal = 0;

     //Converte os algarismos romanos em um arrey de decimais
    for(let algKey in algarismo){
        for(let romKey in romanos){
            if(algarismo[algKey] == romKey){
                arrayDecimal.push(romanos[romKey]);
            };
        };
    };
    
    //Compara posições do array decimal para saber se deve somar ou subtrair
    for(let i = 0; i < arrayDecimal.length -1; i += 1){
        if(arrayDecimal[i] >= arrayDecimal[i+1]){
            resultado = arrayDecimal[i] + arrayDecimal[i+1];
            arrayDecimal[i+1] = resultado;
        }
        else{
            resultado = arrayDecimal[i+1] - arrayDecimal[i];
            arrayDecimal[i+1] = resultado;
        };
    };

    //Pega o valor da ultima posição do array de decimais, pois nela está o valor final
    decimal = arrayDecimal[arrayDecimal.length - 1]

    return decimal;

};

console.log(entrada + " em romano é: " + converteRomanosEmDecimais(entrada, romanos) + " em decimal." );

// ------------------------------------------------------------------------------------------------------------------
// 2 - Desafio do CodeWars

function add(num1, num2) {
    return num1 + num2;
};

let numLiteral = "";
let numLiteral2 = "";

let num1 = 10;

numLiteral1 += num1;
numLiteral2 += num2;

tamanho1 = numLiteral1.length;
tamanho2 = numLiteral2.length;


console.log(numLiteral);