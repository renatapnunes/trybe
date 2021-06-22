// --------------------------------------- BLOCO 7 - DIA 3: Testes Unitários em JavaScript ---------------------------------
// --------------------------------------------------------- Part I --------------------------------------------------------

/* Exercício 3
A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
    - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
    - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    - Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
    - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado */

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
    for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
        arr.splice(index, 1);
        index -= 1;
        len -= 1;
    }
    }
    return arr;
}

// implemente seus testes aqui

//console.log(typeof(myRemoveWithoutCopy([1, 2, 3, 4], 3)));

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'Resultado diferente de [1, 2, 4]');

assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'A função retornou o array [1, 2, 3, 4]');

let parameter = [1, 2, 3, 4];
assert.deepStrictEqual(myRemoveWithoutCopy(parameter, 3), parameter, 'O parametro da função sofreu alterações');

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Resultado inesperado');


