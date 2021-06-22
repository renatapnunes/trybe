//                               BLOCO 4 - DIA 4 - JavaScript: Objetos e Funções - Exercícios
// ****************************************************************************************************************************

// -------------------------------------------------- Part II: Funções ------------------------------------------------------

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for:

function verificaPalindromo(palavra){

    let palavraInvertida = "";

    for(let i = palavra.length - 1; i >= 0; i -= 1){
        palavraInvertida += palavra[i];
    }
    if(palavraInvertida == palavra){
        palindromo = true;
    }
    else{
        palindromo = false;
    };

    return palindromo;
};

console.log("É palindromo:");
console.log(verificaPalindromo("arara"));

// ---------------------------------------------------------------------------------------------------------------------

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor:


function indiceMaiorValor(number) {

    let indiceDoMaior = 0;

    for(let i = 0; i < number.length - 1; i += 1){
        if(number[i] > number[i+1]){
            indiceDoMaior = i;
        }
        else{
            indiceDoMaior = i+1;
        };
    };

    return indiceDoMaior;
};

console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));

// ---------------------------------------------------------------------------------------------------------------------

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor:

function indiceMenorValor(number) {

    let indiceDoMenor = 0;

    for(let i = 0; i < number.length - 1; i += 1){
        if(number[i] < number[i+1]){
            indiceDoMenor = i;
        }
        else{
            indiceDoMenor = i+1;
        };
    };

    return indiceDoMenor;
};

console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));

// ---------------------------------------------------------------------------------------------------------------------

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres:

function maiorNome(nomes) {
    let maiorQuantidade = "";

    for(let i = 0; i < nomes.length - 1; i += 1) {
        if(nomes[i].length > nomes[i+1].length){
            maiorQuantidade = nomes[i];
        }
        else{
            maiorQuantidade = nomes[i+1];
        };
    };

    return maiorQuantidade;
};

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// ---------------------------------------------------------------------------------------------------------------------

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete:

function inteiroQueMaisRepete(inteiros){
    let maiorRepeticao = 0;
    let numQueMaisRepete = 0;

    for(let i = 0; i < inteiros.length; i += 1){
        let vezesQueRepete = 1;
    
        for(let j = 0; j < inteiros.length -1; j += 1){
            if(inteiros[i] === inteiros[j+1]) {
                vezesQueRepete += 1;
            };
        };
    
        if(vezesQueRepete > maiorRepeticao){
            maiorRepeticao = vezesQueRepete;
            numQueMaisRepete = inteiros[i];
        };
    };
    
    return numQueMaisRepete;
};

console.log("O inteiro que mais se repete é o: " +inteiroQueMaisRepete([2, 3, 2, 5, 8, 2, 3]));

// ---------------------------------------------------------------------------------------------------------------------

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N:

function somatorio(n){
    let soma = 0;

    for(let i = 1; i <= n; i +=1){
        soma += i;
    };

    return soma;
};

console.log(somatorio(5));

// ---------------------------------------------------------------------------------------------------------------------

/* 7 - Crie uma função que receba uma string word e outra string ending .
Verifique se a string ending é o final da string word .
Considere que a string ending sempre será menor que a string word . */

function verificaFimPalavra(word, ending){
    let finalDaStringWord;
    let aux = 0;
    for(let i = (word.length - ending.length); i < word.length; i += 1){
        if(word[i] === ending[aux]){
            finalDaStringWord = true;
        }
        else {
            finalDaStringWord = false;
            i = word.length;
        };
        aux += 1;
    };
    return finalDaStringWord;
};

console.log(verificaFimPalavra("trybe", "be"));


