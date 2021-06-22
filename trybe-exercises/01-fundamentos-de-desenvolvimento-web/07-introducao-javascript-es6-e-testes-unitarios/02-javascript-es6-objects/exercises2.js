// ------------------------------------------- BLOCO 7 - DAY 2: JavaScript EC6 - Objects ---------------------------------------

// --------------------------------------------------------- Part II -----------------------------------------------------------

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

/* Exercicio 1
Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles:
o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */

const adicionaTurno = (objeto, novaChave, valor) => lesson2[novaChave] = valor;
adicionaTurno(lesson2, 'turno', 'manhã');
console.log(lesson2);
console.log(`-------------------------------------`);

/* Exercicio 2
Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */

const listaKeys = (objeto) => console.log(`As chaves do objeto são: ${Object.keys(objeto)}`);
listaKeys(lesson1);
console.log(`-------------------------------------`);

/* Exercicio 3
Crie uma função para mostrar o tamanho de um objeto. */

const tamanhoObjeto = (objeto) => console.log(`O tamanho do objeto é: ${Object.keys(objeto).length}`);
tamanhoObjeto(lesson1);
console.log(`-------------------------------------`);

/* Exercicio 4
Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */

const listaValues = (objeto) => console.log(`Os valores do objeto são: ${Object.values(objeto)}`);
listaValues(lesson1);
console.log(`-------------------------------------`);

/* Exercicio 5
Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign.
Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.
Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const allLessons = {};
allLessons['lesson1'] = Object.assign({}, lesson1);
allLessons['lesson2'] = Object.assign({}, lesson2);
allLessons['lesson3'] = Object.assign({}, lesson3);
console.log(allLessons);
console.log(`-------------------------------------`);

/* Exercicio 6
Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */

const totalEstudantes = (objeto) =>  {
    let total = 0;
    for (let key in objeto) {
        total += objeto[key].numeroEstudantes;
    }
    return `Numero total de estudantes em todas as aulas: ${total}`;
}
console.log(totalEstudantes(allLessons));
console.log(`-------------------------------------`);

/* Exercicio 7
Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: 

console.log(getValueByNumber(lesson1, 0));
Output: 'Matématica'
*/

const getValueByNumber = (objeto, posicao) => {
    let arrayChaves = Object.keys(objeto);
    return objeto[arrayChaves[posicao]];
};
console.log(getValueByNumber(lesson1, 0));
console.log(`-------------------------------------`);

/* Exercicio 8
Crie uma função que verifique se o par (chave / valor) existe na função.
Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
*/

const verifyPair = (objeto, chave, valor) => {
    let verifyKeys = Object.keys(objeto);
    let verifyValues = Object.values(objeto);
    for (let i = 0; i < verifyKeys.length; i += 1) {
        if (verifyKeys[i] === chave && verifyValues[i] === valor) {
            return true;
        }
    }
    return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

