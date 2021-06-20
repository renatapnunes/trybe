const functions = require('./exercises.js');
const { test } = require('@jest/globals');
const fetch = require('node-fetch');
jest.mock('node-fetch');

describe('testa condiçoes propostas nos exercicios de 1 a 6', () => {
    describe('testa exercicio 1', () => {
        test('testa se randomNumber() foi chamada e quantas vezes', () => {
            expect.assertions(3);
        
            functions.randomNumber = jest.fn()
              .mockReturnValue(10);
        
            expect(functions.randomNumber()).toBe(10);
            expect(functions.randomNumber).toHaveBeenCalled();
            expect(functions.randomNumber).toHaveBeenCalledTimes(1);
        });
    });

    describe('testa exercicio 2', () => {
        test('testa nova implementaçao de divisao feita no mock', () => {
            expect.assertions(3);
        
            functions.randomNumber = jest.fn()
              .mockImplementationOnce((a, b) => a / b);
        
            expect(functions.randomNumber(50, 2)).toBe(25);
            expect(functions.randomNumber).toHaveBeenCalled();
            expect(functions.randomNumber).toHaveBeenCalledTimes(1);
        });
    });

    describe('testa exercicio 3', () => {
        test('testa nova implementaçao de multiplicaçao feita no mock', () => {
            expect.assertions(4);
        
            functions.randomNumber = jest.fn()
              .mockImplementation((a, b, c) => a * b * c);
        
            expect(functions.randomNumber(3, 5, 6)).toBe(90);
            expect(functions.randomNumber).toHaveBeenCalled();
            expect(functions.randomNumber).toHaveBeenCalledTimes(1);
            expect(functions.randomNumber).toHaveBeenCalledWith(3, 5, 6);
        });
        
        test('testa nova implementaçao de dobrar feita no mock', () => {
            expect.assertions(4);
        
            functions.randomNumber.mockReset();
        
            functions.randomNumber = jest.fn()
              .mockImplementation((a) => a * 2);
        
            expect(functions.randomNumber(12)).toBe(24);
            expect(functions.randomNumber).toHaveBeenCalled();
            expect(functions.randomNumber).toHaveBeenCalledTimes(1);
            expect(functions.randomNumber).toHaveBeenCalledWith(12);
        });
    });

    describe('testa exercicio 4', () => {
        test('testa passar letras para minusculo', () => {
            expect.assertions(4);
        
            functions.transformCapitalLetter = jest.fn()
              .mockImplementation((word) => word.toLowerCase());
        
            expect(functions.transformCapitalLetter('TRYBE')).toBe('trybe');
            expect(functions.transformCapitalLetter).toHaveBeenCalled();
            expect(functions.transformCapitalLetter).toHaveBeenCalledTimes(1);
            expect(functions.transformCapitalLetter).toHaveBeenCalledWith('TRYBE');
        });

        test('testa pegar ultima letra da palavra', () => {
            expect.assertions(4);
        
            functions.transformCapitalLetter = jest.fn()
              .mockImplementation((word) => word[word.length - 1]);
        
            expect(functions.transformCapitalLetter('TRYBE')).toBe('E');
            expect(functions.transformCapitalLetter).toHaveBeenCalled();
            expect(functions.transformCapitalLetter).toHaveBeenCalledTimes(1);
            expect(functions.transformCapitalLetter).toHaveBeenCalledWith('TRYBE');
        });

        test('testa concatenar tres palavras', () => {
            expect.assertions(4);
        
            functions.transformCapitalLetter = jest.fn()
              .mockImplementation((word1, word2, word3) => word1 + word2 + word3);
        
            expect(functions.transformCapitalLetter('trybe', 'MELHOR', 'escola')).toBe('trybeMELHORescola');
            expect(functions.transformCapitalLetter).toHaveBeenCalled();
            expect(functions.transformCapitalLetter).toHaveBeenCalledTimes(1);
            expect(functions.transformCapitalLetter).toHaveBeenCalledWith('trybe', 'MELHOR', 'escola');
        });
    });

    describe('testa exercicio 6', () => {
        test('testa se deu certo a requisicao', async () => {
            //expect.assertions(3);
        
            fetch.mockImplementation(async () => {
                return {
                    json: async () => {
                        return
                    }
                };
            });
        
        });
    });
});







