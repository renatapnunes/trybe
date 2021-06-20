//------------------------------------------- BLOCO 8 - DAY 2 ----------------------------------------------

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

// Adicione o código do exercício aqui:

/* Exercício 1
Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
    Dica: use a função find. */

const authorBornIn1947 = () => books.find((book) => book.author.birthYear === 1947).author.name;

console.log(authorBornIn1947());

assert.strictEqual(authorBornIn1947(), 'Stephen King');

/* Exercício 2
Retorne o nome do livro de menor nome.
    Dica: use a função forEach. */

const smallerName = () => {
    let nameBook;
    let listBooks = books;
    nameBook = listBooks.sort((a, b) => a.name.length - b.name.length)[0].name;
    return nameBook;
}

console.log(smallerName());
    
assert.strictEqual(smallerName(), 'Duna');

/* Exercício 3
Encontre o primeiro livro cujo nome possui 26 caracteres. */

const expectedResult = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
};
  
const getNamedBook = () => books.find((book) => book.name.length === 26);

console.log(getNamedBook());

assert.deepStrictEqual(getNamedBook(), expectedResult);


/* Exercício 4
Ordene os livros por data de lançamento em ordem decrescente. */

const expectedResult2 = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: { name: 'Stephen King', birthYear: 1947 },
      releaseYear: 1986,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
  ];
  
const booksOrderedByReleaseYearDesc = () => books.sort((a, b) => b.releaseYear - a.releaseYear);

console.log(booksOrderedByReleaseYearDesc());

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult2);

/* Exercício 5
Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário. */

const expectedResult3 = false;

const everyoneWasBornOnSecXX = () => books.every((book) => (book.author.birthYear >= 1901 && book.author.birthYear <= 2000));

console.log(everyoneWasBornOnSecXX());

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult3);

/* Exercício 6
Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário. */

const expectedResult4 = true;

const someBookWasReleaseOnThe80s = () => books.some((book) => (book.releaseYear >= 1980 && book.releaseYear <= 1989));

console.log(someBookWasReleaseOnThe80s());

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult4);

/* Exercício 7
Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário. */

const expectedResult5 = false;

const authorUnique = () => {
  for (let i = 0; i < books.length - 1; i += 1) {
      for (let j = 1; j < books.length - 1; j += 1) {
        if (i !== j) {
            if (books[i].author.birthYear === books[j].author.birthYear) {
                return false;
            }
        }
      }
    }
  return true;
}

console.log(authorUnique());

assert.strictEqual(authorUnique(), expectedResult5);