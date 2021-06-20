// Project: Playground Functions - Aluna: Renata Pereira Nunes
// -------------------------------------------------------------

// Desafio 10
function techList(tecnologias, name) {
  if (tecnologias.length === 0) {
    return 'Vazio!';
  } else {
    tecnologias.sort();
    let newArray = [];
    for (let i = 0; i < tecnologias.length; i += 1) {
      let object = {
        tech: '',
        name: ''
      };
      object.tech = tecnologias[i];
      object.name = name;
      newArray[i] = object;
    }
    return newArray;
  }
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  let checked = true;
  function countRepete(number, numberInput) {
    let count = 0;
    for (let i = 0; i < numberInput.length; i += 1) {
      if (number === numberInput[i]) {
        count += 1;
      }
    }
    return count;
  }
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let i of phoneNumber) {
      if (phoneNumber[i] < 0 || phoneNumber[i] > 9 || countRepete(phoneNumber[i], phoneNumber) >= 3) {
        checked = false;
      }    
    }
    if (checked) {
      let stringNumberInput = phoneNumber.toString();
      let stringNumber = stringNumberInput.replace(/,/g, '');
      // parametros do metodo slice() definidos com base em:
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice
      let ddd = stringNumber.slice(0, 2);
      let firstNumbers = stringNumber.slice(2, -4);
      let lastNumbers = stringNumber.slice(-4);
      let numberOutput = '(' + ddd + ') ' + firstNumbers + '-' + lastNumbers;
      return numberOutput;
    } else {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) {
    if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
      return true;
    }
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(stringInput) {
  // parametros do metodo match definidos com base em:
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
  let stringNumbers = stringInput.match(/\d/g);
  let sum = 0;
  for (let key in stringNumbers) {
    sum += Number(stringNumbers[key]);
  }
  if (sum === 1) {
    return sum + ' copo de água';
  } else {
    return sum + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
