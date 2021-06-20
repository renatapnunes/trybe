/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const checkNumber = (numbers) => {
  let result = true;
  for (let i = 0; i < numbers.length; i += 1) {
    if (typeof (numbers[i]) !== 'number') {
      result = false;
    }
  }
  return result;
};

const computeAverage = (numbers) => {
  let summation = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    summation += numbers[i];
  }
  // Referencia do metodo Math.round():
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  return Math.round(summation / numbers.length);
};

const average = (numbers) => {
  let sum;
  if (numbers.length === 0 || checkNumber(numbers) === false) {
    sum = undefined;
  } else {
    sum = computeAverage(numbers);
  }
  return sum;
};

module.exports = average;
