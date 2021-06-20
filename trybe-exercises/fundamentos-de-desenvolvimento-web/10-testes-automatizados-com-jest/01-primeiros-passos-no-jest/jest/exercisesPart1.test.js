const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, obj1, obj2, obj3 } = require('./exercisesPart1');
const { describe, test, it, expect } = require('@jest/globals');

describe('testa as funçoes do conteudo de testes unitarios', () => {
    test('testa a funçao sum()', () => {
        expect(typeof sum).toBe('function');
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
        expect(() => { sum(4, '5') }).toThrow();
        expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
    });

    test('testa a funçao myRemove()', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
    it('testa se o arrayOriginal não é alterado apos ser passado como parametro', () => {
        const arrayOriginal = [1, 2, 3, 4];
        myRemove(arrayOriginal, 2);
        expect(arrayOriginal).toEqual([1, 2, 3, 4]);
    });

    test('testa a funçao myRemoveWithoutCopy()', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
    it('testa se o arrayOriginal2 não é alterado apos ser passado como parametro', () => {
        const arrayOriginal2 = [1, 2, 3, 4];
        myRemoveWithoutCopy(arrayOriginal2, 2);
        expect(arrayOriginal2).not.toEqual([1, 2, 3, 4]);
    });

    test('testa a funçao myFizzBuzz()', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(9)).toBe('fizz');
        expect(myFizzBuzz(20)).toBe('buzz');
        expect(myFizzBuzz(8)).toBe(8);
        expect(myFizzBuzz(true)).toBe(false);
    });

    test('testa igualdade de objetos', () => {
        expect(obj1).toEqual(obj2);
        expect(obj1).not.toEqual(obj3);
    });
});