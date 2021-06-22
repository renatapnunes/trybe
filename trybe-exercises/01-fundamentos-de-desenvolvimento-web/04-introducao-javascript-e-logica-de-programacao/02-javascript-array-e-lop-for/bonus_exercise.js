//                  BLOCO 4 - DIA 2 - JavaScript: Array e For - Exercicio Bônus
//-------------------------------------------------------------------------------------------------

// **************************** Ordenação de arrays sem usar sort() *******************************

// 1 - Ordene o array numbers em ordem crescente e imprima seus valores:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

console.log(numbers);

//-------------------------------------------------------------------------------------------------
// 2 - Ordene o array numbers em ordem decrescente e imprima seus valores:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

console.log(numbers);

/* 3 - Agora você irá criar um novo array a partir do array numbers , sem perdê-lo.
Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado
pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45,
pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte).
Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor)
 e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor,
 a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.
 O resultado deve ser o array: [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54] */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (i === numbers.length -1) {
        newNumbers.push(numbers[i] * 2);
    }
    else {
        newNumbers.push(numbers[i] * numbers[i+1]);
    }
}

console.log(newNumbers);
