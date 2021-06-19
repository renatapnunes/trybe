//                           BLOCO 4 - DIA 4 - JavaScript: Objetos e Funções - Exercícios de Fixação
// ************************************************************************************************************************

// ------------------------------------------------------- Objetos --------------------------------------------------------

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log("A jogadora " + player.name + " " +player.lastName + " tem " + player.age + " anos de idade.");

console.log("A jogadora " + player.name + " " +player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.");

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");


// --------------------------------------------------------- For/In -----------------------------------------------------------

// 1 - Usando o objeto abaixo, utilize For/in e imprima um console log 'Olá xxxxx' para cada nome no objeto:

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
  };

for(let key in names){
    console.log("Olá " + names[key] + "!");
};

// 2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e seu valor:

let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let key in carro){
    console.log(key + ": " + carro[key]);
  };

