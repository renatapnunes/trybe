// ------------------------------------------- BLOCO 7 - DAY 2: JavaScript EC6 - Objects ---------------------------------------

// Part I - Adicionando novas chaves (keys)

/* Crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor.
O retorno dessa função deve ser o objeto já com a nova chave adicionada nele. */

const client1 = {
    name: 'Pedro',
    age: 26,
    frequent: true
}

const client2 = {
    name: 'Bob',
    lastname: 'Burnquist',
    frequent: true
}

const completeObj = (obj, key, value) => {
    obj[key] = value;
    return obj;
}
console.log(completeObj(client1, 'lastname', 'Barros'));
console.log(completeObj(client2, 'age', 44));

// Part II - Object.keys

/* Crie uma função que exiba as habilidades do objeto student.
Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". */

// Minha solução
const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom',
  };

const skills = (student) => {
    let arrayKeys = Object.keys(student);
    for (let i = 0; i < arrayKeys.length; i += 1) {
        console.log(`${arrayKeys[i]}, Nível: ${student[arrayKeys[i]]}`);
    }
}

skills(student1);
skills(student2);

// Solução da Trybe
const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for(index in arrayOfSkills){
        console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
};
  
  listSkills(student1);
  listSkills(student2);



