const { encode, decode, techList, hydrate } = require('./exercisesPart2');
const { describe, test, it, expect } = require('@jest/globals');

describe('testa as funçoes encode e decode do projeto playground functions', () => {
    test('testa se encode e decode sao funcoes', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });
    it('testa funcao encode()', () => {
        expect(encode('aeiou')).toBe('12345');
    });
    it('testa funcao decode()', () => {
        expect(decode('12345')).toBe('aeiou');
    });
    it('testa se as demais letras/numeros nao sao convertidos', () => {
        expect(encode('bcdfg')).toBe('bcdfg');
        expect(decode('06789')).toBe('06789');
    });
    it('testa se o length da string passada como parametro eh igual ao da string retornada pelas funcoes', () => {
        const stringInput = 'hello';
        expect(stringInput.length).toBe(encode(stringInput).length);
        expect(stringInput.length).toBe(decode(stringInput).length);
    });
});

describe('testa a função techList do projeto playground functions', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});


describe('testa a função hydrate do projeto playground functions', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});