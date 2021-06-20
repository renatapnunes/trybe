const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    //assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.

    
    /* Referencia do metodo Array.isArray():
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    A dica desse link foi compartilhada pelo colega de turma Diogo Sant'Anna, nessa thread do Slack:
    https://trybecourse.slack.com/archives/C01T2C18DSM/p1621890240176500 */
    assert.ok(Array.isArray(productDetails('Alcool gel', 'Máscara')));
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof(productDetails('Alcool gel', 'Máscara')[0], productDetails('Alcool gel', 'Máscara')[1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.ok(productDetails('Alcool gel', 'Máscara')[0] !== productDetails('Alcool gel', 'Máscara')[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.


    // Referencia do metodo substring():
    // https://www.devmedia.com.br/javascript-substring-selecionando-parte-de-uma-string/39232
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara')[0].details.productId.substring(productDetails('Alcool gel', 'Máscara')[0].name.length), '123');
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara')[1].details.productId.substring(productDetails('Alcool gel', 'Máscara')[1].name.length), '123');
    // Teste que os dois productIds terminam com 123.
  });
});