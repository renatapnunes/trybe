// --------------------------------------------- BLOCO 7 - DIA 1 - JavaScript ES6 ------------------------------------------
// ------------------------------------------------------- Part II ----------------------------------------------------------

/* Exercicio 1
Crie uma função que receba um número e retorne seu fatorial.
    - Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
    - Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator . */

const fatorial = num => {
    if (num > 1) {
        for (let i = num; i > 2; i -= 1) {
            num = num * (i - 1);
        }
        return num;
    } else {
        return 1;
    }
}
console.log(fatorial(4));

// Recursiva
const fatorial = num => {
    if (num > 1) {
        return num * fatorial(num - 1);
    } else {
        return 1;
    }
}
console.log(fatorial(4));

// Bonus
const fatorial = num => num > 1 ? num * fatorial(num - 1) : 1;
console.log(fatorial(4));


/* Exercicio 2
Crie uma função que receba uma frase e retorne qual a maior palavra. */

const longestWord = phrase => {
    let array = phrase.split(' ');
    array = array.sort((a, b) => b.length - a.length);
    return `Maior palavra: ${array[0]}`;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu'


// Exercicio 3 - Resolvido no arquivo exercise3.html


/* Exercicio 4
Crie um código JavaScript com a seguinte especificação:
    - Não se esqueça de usar template literals

    - Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
        Exemplo:
            String determinada: "Tryber x aqui!"
            Parâmetro: "Bebeto"
            Retorno: "Tryber Bebeto aqui!"

    - Crie um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills.

    - Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
        Exemplo:
            "Tryber x aqui! Minhas cinco principais habilidades são:
            JavaScript;
            HTML; ... #goTrybe". */

// Função 1
const substituiString = parametro => 'Tryber x aqui!'.replace('x', parametro);
console.log(substituiString('Bebeto'));

// Array
let arraySkills = ['HTML', 'CSS', 'JavaScript', 'Git/GitHub', 'Unix/Bash'];

// Função 2
const stringFinal = stringFuncao1 => {
    arrayOrdenado = arraySkills.sort();
    return `${stringFuncao1} Minhas cinco principais habilidades são:
    ${arrayOrdenado[0]};
    ${arrayOrdenado[1]};
    ${arrayOrdenado[2]};
    ${arrayOrdenado[3]};
    ${arrayOrdenado[4]};
    #goTrybe`;
}
console.log(stringFinal(substituiString('Bebeto')));

