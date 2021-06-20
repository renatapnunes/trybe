// Project: Playground Functions - Aluna: Renata Pereira Nunes
// -------------------------------------------------------------

// Desafio 1
function compareTrue(parameter1, parameter2) {
  if (parameter1 && parameter2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(originalString) {
  return originalString.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return (arrayString[arrayString.length - 1] + ', ' + arrayString[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let higherNumber = 0;
  let count = 0;
  // Verifica maior numero
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > higherNumber) {
      higherNumber = arrayNumbers[i];
    }
  }
  // Conta as vezes que o maior número se repete
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (higherNumber === arrayNumbers[i]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let arrayAnswer = [];
  for (let i = 0; i < numbers.length; i += 1) {
    let answer = '';
    if ((numbers[i] % 3 === 0) || (numbers[i] % 5 === 0)) {
      if (numbers[i] % 3 === 0) {
        answer = 'fizz';
        if (numbers[i] % 5 === 0) {
          answer = 'fizzBuzz';
        }
      } else {
        answer = 'buzz';
      }
    } else {
      answer = 'bug!';
    }
    arrayAnswer.push(answer);
  }
  return arrayAnswer;
}

// Desafio 9
function encode(encodeInput) {
  let encodeOutput = '';
  let changed = false;
  let code = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5'
  };
  for (let i = 0; i < encodeInput.length; i += 1) {
    for (let key in code) {
      if (encodeInput[i] === key) {
        encodeOutput += code[key];
        changed = true;
      }
    }
    if (!changed) {
      encodeOutput += encodeInput[i];
    }
    changed = false;
  }
  return encodeOutput;
}

function decode(decodeInput) {
  let decodeOutput = '';
  let changed = false;
  let code = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5'
  };
  for (let i = 0; i < decodeInput.length; i += 1) {
    for (let key in code) {
      if (decodeInput[i] === code[key]) {
        decodeOutput += key;
        changed = true;
      }
    }
    if (!changed) {
      decodeOutput += decodeInput[i];
    }
    changed = false;
  }
  return decodeOutput;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
