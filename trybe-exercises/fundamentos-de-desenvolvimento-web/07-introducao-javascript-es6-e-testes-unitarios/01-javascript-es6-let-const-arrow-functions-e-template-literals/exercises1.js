// --------------------------------------------- BLOCO 7 - DIA 1 - JavaScript ES6 ------------------------------------------
// ------------------------------------------------------- Part I ----------------------------------------------------------

/* Exercicio 1
Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
    - Modifique a estrutura da função para que ela seja uma arrow function .
    - Modifique as concatenações para template literals. */

const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope}. Ótimo! Fui utilizada no escopo!`;
      console.log(ifScope);
    } else {
      const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
  }

  testingScope(true);

/* Exercicio 2
Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
    - Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
    - Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números. */

    const oddsAndEvens = numbers => {
        for (let j = 0; j < numbers.length; j += 1) {
            for (let i = 0; i < numbers.length -1; i += 1) {
                if (numbers[i] > numbers[i+1]) {
                    let aux = numbers[i];
                    numbers[i] = numbers[i+1];
                    numbers[i+1] = aux;
                }
            }
        }
        return `Os números ${numbers} se encontram ordenados de forma crescente!`
    }
    
    console.log(oddsAndEvens([13, 3, 4, 10, 7, 2]));

    // Usando sort()

    // Blog que explica como usar o metodo sort() :
    // http://blog.dunderlabs.com/entendendo-ordenacao-de-arrays-em-javascript-sort-of.html

    const oddsAndEvens = numbers => `Os números ${numbers.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`
    console.log(oddsAndEvens([13, 3, 4, 10, 7, 2]));
