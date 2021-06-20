// ------------------------------------------ BLOCO 9 - DAY 1 - JavaScript Assíncrono e Callbacks -----------------------------------------

//--------------------------------------------------- Exercícios da Parte de Conteúdo -----------------------------------------------------

// --------------- Callbacks

/* No código abaixo você tem a função getUser , que retorna uma pessoa qualquer. Complete a função getUser de forma que ela receba uma
outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada. */

const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn);
};

assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser


/* No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa
qualquer depois de um certo tempo. Complete a função getUser de forma que ela receba um callback para que possa realizar as
operações abaixo sobre a pessoa. */

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    return console.log(callback(user));
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo



// --------------- Lidando com erros em operações assincronas

/* A função getCountry abaixo tem aproximadamente 50% de chance de obter com sucesso um país,
tendo um callback para poder ser feita qualquer operação sobre o país retornado.
Adicione um outro callback para getCountry , de forma que trate a mensagem de erro retornada. */

const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess, noSuccess) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    console.log(didOperationSucceed);
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    }
    else {
      const errorMessage = "Country could not be found";
      noSuccess(errorMessage);
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryCurrency, printErrorMessage);

//----------------------------------------------------------- Exercícios  ---------------------------------------------------------------

/* Exercício 3
A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet,
de forma que Marte seja impresso assincronamente, depois de 4 segundos. */

const getPlanet = () => {
  setTimeout(() => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    console.log("Returned planet: ", mars);
  }, 4000)
};

getPlanet(); // imprime Marte depois de 4 segundos

/* Exercício 4
Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra.
O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos
para que termine o envio. Crie a função sendMarsTemperature , que imprime a temperatura em Marte. */

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => setTimeout(() =>
  console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`), messageDelay);

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo


/* Exercício 5
Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar
para o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte.
Logo, adicione na função sendMarsTemperature um callback que contenha as ações a serem tomadas em cima da temperatura. */

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperature = (callback) => setTimeout(() => {
  let marsTemperature = getMarsTemperature();
  callback(marsTemperature);
}, messageDelay);


sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo


/* Exercício 6
Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô
já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature um outro callback
que contenha as ações a serem tomadas em caso de falha. */

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (onSuccess, noSuccess) => setTimeout(() => {
  const didOperationSucceed = Math.random() >= 0.6;
  console.log(didOperationSucceed);
  if (didOperationSucceed) {
    let marsTemperature = getMarsTemperature();
    onSuccess(marsTemperature);
  } else {
    noSuccess('Robot is busy');
  }  
}, messageDelay);

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);
