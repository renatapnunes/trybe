// ------------------------------------ BLOCO 8 - DAY 1 - Introdução a Higher Order Functions -------------------------------

/* Exercício 1
Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.
Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id.
A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente
um email no formato nome_da_pessoa@trybe.com. */

const register = (name) => {
    let nameEmail =  name.toLowerCase().replace(' ', '_');
    return employee = {
        nomeCompleto: name,
        email: `${nameEmail}@trybe.com`
    }
};

const newEmployees = (register) => {
    const employees = {
      id1: register('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: register('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: register('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(newEmployees(register));

/* Exercício 2
Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo
como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.
O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

const verificaResultado = (numApostado, numSorteado) => numApostado === numSorteado;

const sorteio = (numApostado, verificaResultado) => {
    let numSorteado = Math.ceil(Math.random() * 5);
    return verificaResultado(numApostado, numSorteado) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(sorteio(4, verificaResultado));

/* Exercício 3
Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito),
o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante)
e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final
recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas. 
    - Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos,
    e quando não houver resposta ("N.A") não altera-se a contagem. */

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswers = (template, answers) => {
    let count = 0;
    for (let i = 0; i < template.length; i += 1) {
        if (template[i] === answers[i]) {
            count += 1;
        } else if (answers[i] === 'N.A') {
            count = count;
        } else {
            count -= 0.5;
        }
    }
    return count;
}

const score = (template, answers, verifyAnswers) => {
    return verifyAnswers(template, answers);
};

console.log(`Pontuação final: ${score(rightAnswers, studentAnswers, verifyAnswers)}`);
