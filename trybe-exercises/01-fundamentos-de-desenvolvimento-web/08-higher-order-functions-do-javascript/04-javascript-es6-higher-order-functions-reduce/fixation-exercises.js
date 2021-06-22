// ----------------------------- BLOCO 8 - DAY 4 - HOF: reduce() --------------------------------------------


/* Exercicios de fixação
Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array:
    - Tente criar uma usando reduce e filter , e outra apenas usando reduce. */

// usando reduce() e filter()
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getSum = (result, evenNumber) => result + evenNumber;

const evensNumbers = numbers.filter((number) => (number % 2 === 0));
const sumEvens = evensNumbers.reduce(getSum);

//outra forma de escrever o codigo:
// const sumEvens = numbers
//     .filter((number) => (number % 2 === 0))
//     .reduce((result, evenNumber) => result + evenNumber);

console.log(sumEvens);

// usando somente reduce()
const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getSumEvens = (acc, crr) => {
    if (crr % 2 === 0) {
       return acc + crr;
    }
    return acc;
};

const sumEvens2 = numbers2.reduce(getSumEvens);

console.log(sumEvens2);


/* Exercicios de fixação
Crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior,
para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor.
    - use o map() e dentro dele, o reduce() */

const estudantes = [
    {
        nome: 'Jorge',
        sobrenome: 'Silva',
        idade: 14,
        turno: 'Manhã',
        materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
        ],
    },
    {
        nome: 'Mario',
        sobrenome: 'Ferreira',
        idade: 15,
        turno: 'Tarde',
        materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
        ],
    },
    {
        nome: 'Jorge',
        sobrenome: 'Santos',
        idade: 15,
        turno: 'Manhã',
        materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
        ],
    },
    {
        nome: 'Maria',
        sobrenome: 'Silveira',
        idade: 14,
        turno: 'Manhã',
        materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
        ],
    },
    {
        nome: 'Natalia',
        sobrenome: 'Castro',
        idade: 14,
        turno: 'Manhã',
        materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
        ],
    },
    {
        nome: 'Wilson',
        sobrenome: 'Martins',
        idade: 14,
        turno: 'Manhã',
        materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
        ],
    },
];

const estudanteInfo = estudantes.map((estudante, index) => {
    //estudante.materias[i].nota > estudante.materias[i+1].nota
    const ordenado = estudante.materias.sort((a, b) => b.nota - a.nota);
    return {
        name: estudante.nome,
        materia: ordenado[0]['name']
    }
});

console.log(estudanteInfo);

// solução da Trybe:
const getBestClass = (acc, materia) => {
    if (acc.nota > materia.nota) return acc;
    return materia;
};
  
const reportBetter = (students) => students.map((student) => ({
    name: student.nome,
    materia: student.materias.reduce(getBestClass).name
}));

console.log(reportBetter(estudantes));