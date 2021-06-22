// ---------------------------------------------- BLOCO 8 - DAY 3 : filter() e map() -----------------------------------------

// Exercicio de fixação

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProducts = (products, prices) => products.map((product, index) => {
        return `${product}: ${prices[index]}`;
    });

console.log(listProducts(products, prices));


// -------------------------------------------------------- Exercicios --------------------------------------------------------

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

/* Exercicio 1
Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
    Dica: Use a função map */

const expectedResult = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
  ];
  
const formatedBookNames = () => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}` );

console.log('----------------------- Exercise 1 -----------------------------');
console.log(formatedBookNames());

assert.deepStrictEqual(formatedBookNames(), expectedResult);

/* Exercicio 2
Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author,
com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado.
O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando
o livro foi lançado.
    Dica: use as funções map , sort */

const expectedResult2 = [
    {
        age: 31,
        author: 'Isaac Asimov',
    },
    {
        age: 38,
        author: 'H. P. Lovecraft',
    },
    {
        age: 39,
        author: 'Stephen King',
    },
    {
        age: 43,
        author: 'George R. R. Martin',
    },
    {
        age: 45,
        author: 'Frank Herbert',
    },
    {
        age: 62,
        author: 'J. R. R. Tolkien',
    },
    ];

const nameAndAge = () => (books.map((book) => {
    let ageAuthor = book.releaseYear - book.author.birthYear;
    return {
        age: ageAuthor,
        author: book.author.name
    };
})).sort((a, b) => a.age - b.age);

console.log('----------------------- Exercise 2 -----------------------------');
console.log(nameAndAge());

assert.deepStrictEqual(nameAndAge(), expectedResult2);

/* Exercicio 3
Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
    Dica: use as função filter */

const expectedResult3 = [
    { 
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: { name: 'George R. R. Martin', birthYear: 1948 },
        releaseYear: 1991
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: { name: 'Frank Herbert', birthYear: 1920 },
        releaseYear: 1965
    }
    ];
      
const fantasyOrScienceFiction = () => books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');

console.log('----------------------- Exercise 3 -----------------------------');
console.log(fantasyOrScienceFiction());

assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult3);

/* Exercicio 4
Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
    Dica: use as funções filter e sort */

const expectedResult4 = [
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: { name: 'H. P. Lovecraft', birthYear: 1890 },
        releaseYear: 1928,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954,
    },
];
    
const oldBooksOrdered = () => (books.filter((book) => (2021 - book.releaseYear) > 60)).sort((a, b) => a.releaseYear - b.releaseYear);

console.log('----------------------- Exercise 4 -----------------------------');
console.log(oldBooksOrdered());

assert.deepStrictEqual(oldBooksOrdered(), expectedResult4);

/* Exercicio 5
Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia. */

const expectedResult5 = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
];

const fantasyOrScienceFictionAuthors = () => {
    let filteredBooks = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
    return (filteredBooks.map((filteredBook) => filteredBook.author.name)).sort();
};

console.log('----------------------- Exercise 5 -----------------------------');
console.log(fantasyOrScienceFictionAuthors());

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult5);


/* Exercicio 6
Crie um array com o nome de todos os livros com mais de 60 anos de publicação. */

const expectedResult6 = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];
  
const oldBooks = () => {
    return (books.filter((book) => (2021 - book.releaseYear) > 60)).map((filtered) => filtered.name);
}

console.log('----------------------- Exercise 6 -----------------------------');
console.log(oldBooks());
  
assert.deepStrictEqual(oldBooks(), expectedResult6);


/* Exercicio 7
Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
    - Dica: cada inicial termina com um ponto. */

const expectedResult7 = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => (books.find((book) => book.author.name.startsWith('J. R. R.'))).name;
    
console.log('----------------------- Exercise 7 -----------------------------');
console.log(authorWith3DotsOnName());

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult7);